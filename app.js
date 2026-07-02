/* Golden State Getaway — app logic */
(function () {
  const STORAGE_KEY = "gsg-trip-v1";

  const CATEGORIES = {
    food:      { label: "Food & restaurants", color: "#bf4b12", emoji: "🍽" },
    cafe:      { label: "Cafes & snacks",     color: "#dfa22e", emoji: "☕" },
    sight:     { label: "Sights & tourist",   color: "#4e7d76", emoji: "📷" },
    landmark:  { label: "Architecture & landmarks", color: "#3f5c78", emoji: "🏛" },
    park:      { label: "Parks & outdoors",   color: "#7d8a4e", emoji: "🌲" },
    thrift:    { label: "Thrifting",          color: "#c96b8c", emoji: "🛍" },
    nightlife: { label: "Nightlife & gay SF/LA", color: "#8c5fa8", emoji: "🪩" },
    friends:   { label: "Friends",            color: "#d96c2c", emoji: "💛" },
    beach:     { label: "Beach & surf",       color: "#5b8fb9", emoji: "🌊" },
    travel:    { label: "Travel / logistics", color: "#6b5138", emoji: "✈️" },
  };

  /* ---------- state ---------- */
  let dirty = false; // has the user actually edited the itinerary?
  let data = load();
  let currentCity = "sf";
  let editing = false;
  let showExtras = true;
  let selectedStopEl = null;
  let pickResolve = null; // map-pick promise resolver

  // Load rule: keep the user's copy if they've edited it. If they haven't touched
  // it, adopt a newer base itinerary automatically when TRIP_DATA.version bumps —
  // so pushed updates reach returning visitors without wiping personal edits.
  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved && saved.data) {
        if (saved.dirty || saved.version === TRIP_DATA.version) {
          dirty = !!saved.dirty;
          return saved.data;
        }
      }
    } catch (e) { /* fall through to defaults */ }
    return JSON.parse(JSON.stringify(TRIP_DATA));
  }
  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: TRIP_DATA.version, dirty, data }));
  }
  function markDirty() { dirty = true; }
  function uid() { return "s" + Math.random().toString(36).slice(2, 9); }

  /* ---------- map ---------- */
  const map = L.map("map", { zoomControl: false });
  L.control.zoom({ position: "topright" }).addTo(map);
  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 19,
  }).addTo(map);

  const markerLayer = L.layerGroup().addTo(map);
  const extrasLayer = L.layerGroup().addTo(map);
  const markersById = {};

  function pinIcon(cat, small) {
    const c = CATEGORIES[cat] || CATEGORIES.sight;
    return L.divIcon({
      className: "",
      html: `<div class="pin ${small ? "small" : ""}" style="background:${c.color}">${c.emoji}</div>`,
      iconSize: small ? [22, 22] : [30, 30],
      iconAnchor: small ? [11, 20] : [15, 27],
      popupAnchor: [0, -22],
    });
  }

  function popupHtml(stop, dayLabel) {
    const c = CATEGORIES[stop.category] || CATEGORIES.sight;
    const gmaps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stop.name)}&query_place_id=&center=${stop.lat},${stop.lng}`;
    return `<p class="popup-name">${esc(stop.name)}</p>
      <p class="popup-meta">${c.emoji} ${esc(stop.area || "")}${dayLabel ? " · " + dayLabel : ""}${stop.time ? " · " + esc(stop.time) : ""}</p>
      ${stop.notes ? `<p class="popup-notes">${esc(stop.notes)}</p>` : ""}
      <p class="popup-link"><a href="${gmaps}" target="_blank" rel="noopener">open in Google Maps ↗</a></p>`;
  }

  function esc(s) {
    return String(s || "").replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
  }

  function flyToCity(cityKey) {
    const c = data.cities[cityKey];
    map.setView(c.center, c.zoom);
  }

  function renderMarkers() {
    markerLayer.clearLayers();
    extrasLayer.clearLayers();
    Object.keys(markersById).forEach((k) => delete markersById[k]);

    data.days.filter((d) => d.city === currentCity).forEach((day) => {
      day.stops.forEach((stop) => {
        if (stop.lat == null || stop.lng == null) return;
        const m = L.marker([stop.lat, stop.lng], { icon: pinIcon(stop.category, false) })
          .bindPopup(popupHtml(stop, day.dow));
        m.on("click", () => highlightStop(stop.id, false));
        markerLayer.addLayer(m);
        markersById[stop.id] = m;
      });
    });

    data.extras.filter((x) => x.city === currentCity).forEach((x) => {
      if (x.lat == null || x.lng == null) return;
      const m = L.marker([x.lat, x.lng], { icon: pinIcon(x.category, true) })
        .bindPopup(popupHtml(x, null));
      extrasLayer.addLayer(m);
      markersById[x.id] = m;
    });

    if (showExtras) { if (!map.hasLayer(extrasLayer)) map.addLayer(extrasLayer); }
    else map.removeLayer(extrasLayer);
  }

  /* ---------- sidebar rendering ---------- */
  const dayListEl = document.getElementById("day-list");
  const extrasListEl = document.getElementById("extras-list");

  function render() {
    renderDays();
    renderExtras();
    renderMarkers();
    renderLegend();
    save();
  }

  function renderDays() {
    dayListEl.innerHTML = "";
    data.days.filter((d) => d.city === currentCity).forEach((day) => {
      const card = document.createElement("section");
      card.className = "day-card";
      card.dataset.dayId = day.id;

      const header = document.createElement("button");
      header.className = "day-header";
      header.innerHTML = `<span class="dow">${esc(day.dow)}</span><span class="day-title">${esc(day.title)}</span><span class="chev">▼</span>`;
      header.addEventListener("click", () => card.classList.toggle("collapsed"));
      card.appendChild(header);

      const body = document.createElement("div");
      body.className = "day-body";

      day.stops.forEach((stop, i) => {
        body.appendChild(stopRow(stop, day, i));
      });

      const addBtn = document.createElement("button");
      addBtn.className = "add-btn";
      addBtn.textContent = "+ Add a stop to " + day.dow;
      addBtn.addEventListener("click", () => openDialog({ dayId: day.id }));
      body.appendChild(addBtn);

      card.appendChild(body);
      dayListEl.appendChild(card);
    });
  }

  function stopRow(stop, day, index) {
    const el = document.createElement("div");
    el.className = "stop" + (stop.locked ? " locked" : "");
    el.dataset.stopId = stop.id;

    const c = CATEGORIES[stop.category] || CATEGORIES.sight;
    el.innerHTML = `
      ${stop.time ? `<span class="time-chip">${esc(stop.time)}</span>` : `<span class="dot" style="background:${c.color}"></span>`}
      <div class="stop-main">
        <div class="stop-name">${esc(stop.name)}</div>
        <div class="stop-meta">${c.emoji} ${esc(c.label)}${stop.area ? " · " + esc(stop.area) : ""}</div>
        ${stop.notes ? `<div class="stop-notes">${esc(stop.notes)}</div>` : ""}
      </div>`;

    const controls = document.createElement("div");
    controls.className = "stop-controls";
    controls.innerHTML = `<button title="Move up">▲</button><button title="Move down">▼</button><button title="Edit">✎</button><button title="Delete">✕</button>`;
    const [up, down, edit, del] = controls.querySelectorAll("button");
    up.addEventListener("click", (e) => { e.stopPropagation(); moveStop(day, index, -1); });
    down.addEventListener("click", (e) => { e.stopPropagation(); moveStop(day, index, 1); });
    edit.addEventListener("click", (e) => { e.stopPropagation(); openDialog({ dayId: day.id, stop }); });
    del.addEventListener("click", (e) => {
      e.stopPropagation();
      if (confirm(`Remove "${stop.name}"?`)) { day.stops.splice(index, 1); markDirty(); render(); }
    });
    el.appendChild(controls);

    el.addEventListener("click", () => highlightStop(stop.id, true));
    return el;
  }

  function renderExtras() {
    extrasListEl.innerHTML = "";
    const extras = data.extras.filter((x) => x.city === currentCity);
    const byArea = {};
    extras.forEach((x) => { (byArea[x.area || "Around town"] ||= []).push(x); });

    Object.keys(byArea).sort().forEach((area) => {
      const label = document.createElement("div");
      label.className = "extras-area-label";
      label.textContent = area;
      extrasListEl.appendChild(label);
      byArea[area].forEach((x) => {
        const idx = data.extras.indexOf(x);
        const el = document.createElement("div");
        el.className = "stop";
        const c = CATEGORIES[x.category] || CATEGORIES.cafe;
        el.innerHTML = `<span class="dot" style="background:${c.color}"></span>
          <div class="stop-main">
            <div class="stop-name">${esc(x.name)}</div>
            ${x.notes ? `<div class="stop-notes">${esc(x.notes)}</div>` : ""}
          </div>`;
        const controls = document.createElement("div");
        controls.className = "stop-controls";
        controls.innerHTML = `<button title="Edit">✎</button><button title="Delete">✕</button>`;
        const [edit, del] = controls.querySelectorAll("button");
        edit.addEventListener("click", (e) => { e.stopPropagation(); openDialog({ extra: x }); });
        del.addEventListener("click", (e) => {
          e.stopPropagation();
          if (confirm(`Remove "${x.name}"?`)) { data.extras.splice(idx, 1); markDirty(); render(); }
        });
        el.appendChild(controls);
        el.addEventListener("click", () => highlightStop(x.id, true));
        extrasListEl.appendChild(el);
      });
    });
  }

  function renderLegend() {
    const el = document.getElementById("legend");
    el.innerHTML = Object.values(CATEGORIES)
      .map((c) => `<div class="leg-row"><span class="dot" style="background:${c.color}"></span><span>${c.emoji}&nbsp; ${c.label}</span></div>`)
      .join("");
  }

  function highlightStop(id, fly) {
    if (selectedStopEl) selectedStopEl.classList.remove("selected");
    const el = document.querySelector(`[data-stop-id="${id}"]`);
    if (el) {
      el.classList.add("selected");
      el.scrollIntoView({ block: "nearest", behavior: "smooth" });
      selectedStopEl = el;
    }
    const m = markersById[id];
    if (m) {
      if (fly) map.flyTo(m.getLatLng(), Math.max(map.getZoom(), 14), { duration: 0.6 });
      m.openPopup();
    }
  }

  function moveStop(day, index, delta) {
    const j = index + delta;
    if (j < 0 || j >= day.stops.length) return;
    [day.stops[index], day.stops[j]] = [day.stops[j], day.stops[index]];
    markDirty();
    render();
  }

  /* ---------- dialog ---------- */
  const dialog = document.getElementById("stop-dialog");
  const form = document.getElementById("stop-form");
  const catSelect = form.elements.category;
  Object.entries(CATEGORIES).forEach(([key, c]) => {
    const o = document.createElement("option");
    o.value = key;
    o.textContent = `${c.emoji} ${c.label}`;
    catSelect.appendChild(o);
  });

  let dialogCtx = null; // {dayId, stop} | {extra} | {dayId} | {newExtra:true}

  function openDialog(ctx) {
    dialogCtx = ctx;
    const editingItem = ctx.stop || ctx.extra || null;
    document.getElementById("dialog-title").textContent = editingItem
      ? "Edit " + editingItem.name
      : ctx.newExtra ? "Add a nearby spot" : "Add a stop";
    form.reset();
    if (editingItem) {
      form.elements.name.value = editingItem.name || "";
      form.elements.time.value = editingItem.time || "";
      form.elements.category.value = editingItem.category || "sight";
      form.elements.area.value = editingItem.area || "";
      form.elements.notes.value = editingItem.notes || "";
      form.elements.lat.value = editingItem.lat ?? "";
      form.elements.lng.value = editingItem.lng ?? "";
    }
    dialog.showModal();
  }

  form.addEventListener("submit", () => {
    const vals = {
      name: form.elements.name.value.trim(),
      time: form.elements.time.value.trim(),
      category: form.elements.category.value,
      area: form.elements.area.value.trim(),
      notes: form.elements.notes.value.trim(),
      lat: form.elements.lat.value ? parseFloat(form.elements.lat.value) : null,
      lng: form.elements.lng.value ? parseFloat(form.elements.lng.value) : null,
    };
    if (dialogCtx.stop) Object.assign(dialogCtx.stop, vals);
    else if (dialogCtx.extra) Object.assign(dialogCtx.extra, vals);
    else if (dialogCtx.newExtra) data.extras.push({ id: uid(), city: currentCity, ...vals });
    else {
      const day = data.days.find((d) => d.id === dialogCtx.dayId);
      day.stops.push({ id: uid(), ...vals });
    }
    markDirty();
    render();
  });

  document.getElementById("dialog-cancel").addEventListener("click", () => dialog.close());

  /* pick-on-map */
  document.getElementById("pick-on-map").addEventListener("click", () => {
    dialog.close();
    document.getElementById("pick-banner").hidden = false;
    pickResolve = (latlng) => {
      form.elements.lat.value = latlng.lat.toFixed(5);
      form.elements.lng.value = latlng.lng.toFixed(5);
      document.getElementById("pick-banner").hidden = true;
      dialog.showModal();
    };
  });
  map.on("click", (e) => {
    if (pickResolve) { const r = pickResolve; pickResolve = null; r(e.latlng); }
  });
  document.getElementById("pick-cancel").addEventListener("click", () => {
    pickResolve = null;
    document.getElementById("pick-banner").hidden = true;
    dialog.showModal();
  });

  /* ---------- toolbar ---------- */
  document.querySelectorAll(".city-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".city-tab").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCity = btn.dataset.city;
      flyToCity(currentCity);
      render();
    });
  });

  document.getElementById("edit-toggle").addEventListener("click", () => {
    editing = !editing;
    document.body.classList.toggle("editing", editing);
  });

  document.getElementById("extras-toggle").addEventListener("click", (e) => {
    showExtras = !showExtras;
    e.currentTarget.classList.toggle("active", showExtras);
    renderMarkers();
  });

  document.getElementById("export-btn").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "sf-la-itinerary.json";
    a.click();
    URL.revokeObjectURL(a.href);
  });

  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("Reset everything back to the original itinerary? Your edits will be lost.")) {
      localStorage.removeItem(STORAGE_KEY);
      data = JSON.parse(JSON.stringify(TRIP_DATA));
      dirty = false;
      render();
    }
  });

  document.getElementById("add-extra-btn").addEventListener("click", () => openDialog({ newExtra: true }));

  /* ---------- go ---------- */
  flyToCity(currentCity);
  render();
})();
