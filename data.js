/* Golden State Getaway — default itinerary data
   Edits made in the app are saved to localStorage on top of this. */
const TRIP_DATA = {
  version: 4,
  cities: {
    sf: { name: "San Francisco", center: [37.7810, -122.4400], zoom: 13 },
    la: { name: "Los Angeles", center: [34.0400, -118.3500], zoom: 11 },
  },

  days: [
    /* ———————————————— SAN FRANCISCO ———————————————— */
    {
      id: "aug6", city: "sf", dow: "Thu 8/6", title: "Fly in → Castro + Mission warm-up",
      stops: [
        { id: "sf-arrive", name: "Land at SFO → drop bags, grab Clipper", time: "AM", category: "travel", area: "SFO", notes: "Muni is $2.85/ride with Clipper on your phone — no car needed all week.", lat: 37.6213, lng: -122.3790 },
        { id: "sf-tartine", name: "Tartine Bakery", time: "PM", category: "cafe", area: "Mission", notes: "Morning bun + banana cream tart. Open til 6pm, line moves fast.", lat: 37.7614, lng: -122.4240 },
        { id: "sf-dolores", name: "Dolores Park", time: "PM", category: "park", area: "Mission", notes: "Skyline view from the 20th & Church corner. Picnic supplies at Bi-Rite Market.", lat: 37.7580, lng: -122.4275 },
        { id: "sf-birite", name: "Bi-Rite Creamery", time: "PM", category: "cafe", area: "Mission", notes: "Salted caramel. Noon–9pm daily.", lat: 37.7616, lng: -122.4257 },
        { id: "sf-castro-stroll", name: "Castro stroll: rainbow crosswalks + GLBT Museum", time: "PM", category: "sight", area: "Castro", notes: "Harvey Milk Plaza, GLBT Historical Society Museum (~$10), renovated Castro Theatre — check its calendar for a show.", lat: 37.7621, lng: -122.4349 },
        { id: "sf-lataqueria", name: "La Taqueria — dinner", time: "7 PM", category: "food", area: "Mission", notes: "THE rice-less burrito, get it dorado. Closed Mon/Tue, so tonight's the slot. El Farolito (open til ~2:45am) if you land late.", lat: 37.7509, lng: -122.4180 },
        { id: "sf-twinpeaks", name: "Twin Peaks Tavern", time: "9 PM", category: "nightlife", area: "Castro", notes: "Landmark 1972 'windows on the world' gay bar — easy first night. Thursday extras: Jolene's opens + Powerhouse underwear night.", lat: 37.7623, lng: -122.4351 },
      ],
    },
    {
      id: "aug7", city: "sf", dow: "Fri 8/7", title: "🔒 Berkeley with Amanda (morning → afternoon) → free evening",
      stops: [
        { id: "sf-berkeley-bart", name: "Meet Amanda — Downtown Berkeley BART", time: "10:30 AM", category: "friends", area: "Berkeley", notes: "Easy from the East Bay where you're staying (or ~30 min BART from SF). Meet at Downtown Berkeley station, then walk ~15–20 min to her North Berkeley neighborhood.", lat: 37.8699, lng: -122.2679, locked: true },
        { id: "sf-cheeseboard", name: "Cheese Board Collective — lunch w/ Amanda", time: "12 PM", category: "food", area: "Berkeley", notes: "Amanda's pick: the legendary worker-owned co-op — ONE vegetarian sourdough pizza flavor per day, live jazz, peak Berkeley. A few minutes from her place. Prefer to eat by BART first? Her downtown alternatives are pinned: Butcher's Son (vegan), Imm Thai, Cholita Linda.", lat: 37.8797, lng: -122.2694 },
        { id: "sf-amanda-apt", name: "Amanda's place + North Berkeley wander", time: "1:30 PM", category: "friends", area: "Berkeley", notes: "She wants to show you her apartment + the 'Gourmet Ghetto.' If there's time before heading back: Telegraph Ave thrifting/record shops or a stroll through the UC Berkeley campus.", lat: 37.8797, lng: -122.2690 },
        { id: "sf-fri-evening", name: "Free evening — Castro Friday (optional)", time: "Evening", category: "nightlife", area: "Castro / East Bay", notes: "Your call after Berkeley. Energy for SF? Beaux (Manimal Fridays) + the 18th St crawl — Moby Dick, The Mix, 440. Prefer chill? Stay near where you're staying in the East Bay. (Chinatown + a Powell–Hyde cable-car ride are pinned separately — they fold easily into Wednesday if you want them.)", lat: 37.7634, lng: -122.4331 },
      ],
    },
    {
      id: "aug8", city: "sf", dow: "Sat 8/8", title: "Mom brunch 🔒 → Haight thrift crawl → Zuni",
      stops: [
        { id: "sf-mombrunch", name: "Brunch with host's mom", time: "AM", category: "friends", area: "TBD", notes: "Locked in — location TBD.", lat: null, lng: null, locked: true },
        { id: "sf-paintedladies", name: "Painted Ladies — Alamo Square", time: "12:30 PM", category: "landmark", area: "Alamo Square", notes: "THE row of Victorians (710–720 Steiner St, 'Postcard Row') with the downtown skyline behind — the Full House shot. Alamo Square Park is a perfect picnic + photo stop right on your way from the Castro to the Haight (~10 min).", lat: 37.7761, lng: -122.4328 },
        { id: "sf-wasteland", name: "Wasteland", time: "1 PM", category: "thrift", area: "Haight", notes: "The big one — designer + vintage resale. The whole crawl is ~4 blocks.", lat: 37.7694, lng: -122.4506 },
        { id: "sf-decades", name: "Decades of Fashion", time: "2 PM", category: "thrift", area: "Haight", notes: "Museum-grade 1900s–80s. Closed Mon/Tue — Saturday is its day.", lat: 37.7695, lng: -122.4503 },
        { id: "sf-relic", name: "Relic Vintage", time: "2:30 PM", category: "thrift", area: "Haight", notes: "Curated 1920s–60s.", lat: 37.7694, lng: -122.4494 },
        { id: "sf-buffalo", name: "Buffalo Exchange + Held Over", time: "3 PM", category: "thrift", area: "Haight", notes: "Held Over = affordable 60s/70s, good denim/tees.", lat: 37.7695, lng: -122.4485 },
        { id: "sf-amoeba", name: "Amoeba Music", time: "4 PM", category: "thrift", area: "Haight", notes: "Colossal record store — give it 45 min.", lat: 37.7690, lng: -122.4527 },
        { id: "sf-zamzam", name: "Aub Zam Zam — post-thrift martini", time: "5 PM", category: "nightlife", area: "Haight", notes: "1941 Persian-muraled cocktail den. Opens ~3pm.", lat: 37.7694, lng: -122.4499 },
        { id: "sf-zuni", name: "Zuni Café — dinner", time: "8 PM", category: "food", area: "Market St", notes: "RESERVE (Resy/phone). The famous hour-long roast chicken for two + Caesar.", lat: 37.7734, lng: -122.4216 },
        { id: "sf-jolenes", name: "Jolene's", time: "10:30 PM", category: "nightlife", area: "Mission", notes: "Queer/lesbian dance bar — open Thu–Sat only, tonight's the last chance. Alt: The Stud (oldest queer bar in SF).", lat: 37.7654, lng: -122.4155 },
      ],
    },
    {
      id: "aug9", city: "sf", dow: "Sun 8/9", title: "OUTSIDE LANDS 🔒",
      stops: [
        { id: "sf-arsicault", name: "Arsicault Bakery — breakfast", time: "9 AM", category: "cafe", area: "Inner Richmond", notes: "'Best croissant in America.' 8am–3pm, 10 min from the park's north entrances.", lat: 37.7834, lng: -122.4593 },
        { id: "sf-osl", name: "Outside Lands — Sunday", time: "11 AM", category: "sight", area: "Golden Gate Park", notes: "RÜFÜS DU SOL closes ~9:40pm; Baby Keem, Empire of the Sun, Death Cab. Doors 11am, Fulton St (N) + Lincoln Way (S) entrances. GA sold out — waitlist/official resale. N-Judah or shuttle, DON'T drive. Cashless, clear-bag, bring a real jacket + beanie.", lat: 37.7687, lng: -122.4893, locked: true },
      ],
    },
    {
      id: "aug10", city: "sf", dow: "Mon 8/10", title: "Muir Woods + Sausalito → House of Prime Rib",
      stops: [
        { id: "sf-muirwoods", name: "Muir Woods National Monument", time: "9 AM", category: "park", area: "Marin", notes: "RESERVATION REQUIRED (gomuirwoods.com): parking $10 or shuttle $4, + $15/person. ⚠️ Weekday Sausalito shuttle may end early Aug — call 800-410-2419; fallback = tour (~$75–95) or 1-day rental. Main loop 1.5–2 hrs. No cell service. Swappable with Tuesday.", lat: 37.8970, lng: -122.5811 },
        { id: "sf-sausalito", name: "Sausalito — waterfront afternoon", time: "2 PM", category: "sight", area: "Marin", notes: "Lunch on the water, wander Bridgeway.", lat: 37.8590, lng: -122.4853 },
        { id: "sf-gg-ferry", name: "Golden Gate Ferry back at golden hour", time: "5 PM", category: "travel", area: "Marin", notes: "Sausalito → Ferry Building, ~30 min, Clipper works. The classic move.", lat: 37.8657, lng: -122.5030 },
        { id: "sf-hopr", name: "House of Prime Rib — dinner", time: "8 PM", category: "food", area: "Van Ness", notes: "RESERVE 3–4+ WEEKS OUT (book now). Martinis + tableside carving carts.", lat: 37.7935, lng: -122.4227 },
      ],
    },
    {
      id: "aug11", city: "sf", dow: "Tue 8/11", title: "Bridge, Presidio + Lands End + friend lunch #2",
      stops: [
        { id: "sf-ggbridge", name: "Golden Gate Bridge — walk to mid-span", time: "9:30 AM", category: "sight", area: "Presidio", notes: "Start at the Welcome Center. August = morning fog; it usually lifts midday.", lat: 37.8078, lng: -122.4750 },
        { id: "sf-fortpoint", name: "Fort Point", time: "11 AM", category: "sight", area: "Presidio", notes: "The bridge from underneath — Hitchcock's Vertigo spot.", lat: 37.8107, lng: -122.4770 },
        { id: "sf-bakerbeach", name: "Baker Beach", time: "11:45 AM", category: "beach", area: "Presidio", notes: "The classic bridge photo. North end is the historically queer/nude end.", lat: 37.7936, lng: -122.4839 },
        { id: "sf-souvla", name: "Souvla Marina — LUNCH w/ Jordan, Nalu + Nicole", time: "12:45 PM", category: "friends", area: "Marina", notes: "The SF-side friends catch-up (Amanda's covered in Berkeley on Fri). Greek sandwiches + frozen yogurt, casual, easy for a group of 4. Prefer a sit-down for the group? Yank Sing dim sum or Hog Island at the Ferry Building. Veg alt: Greens at Fort Mason (reserve).", lat: 37.8006, lng: -122.4400 },
        { id: "sf-palace", name: "Palace of Fine Arts", time: "2 PM", category: "sight", area: "Marina", notes: "", lat: 37.8029, lng: -122.4484 },
        { id: "sf-crissy", name: "Crissy Field promenade", time: "2:45 PM", category: "park", area: "Presidio", notes: "Warming Hut snack shack en route.", lat: 37.8039, lng: -122.4640 },
        { id: "sf-landsend", name: "Lands End Lookout + Sutro Baths ruins", time: "4 PM", category: "sight", area: "Lands End", notes: "Cafe at the lookout. Legion of Honor nearby if you want art.", lat: 37.7799, lng: -122.5115 },
        { id: "sf-tonys", name: "Tony's Pizza Napoletana — dinner", time: "7:30 PM", category: "food", area: "North Beach", notes: "World-champion Margherita (limited daily). Put your name in, negroni in Washington Square while you wait. Cheap alt: Golden Boy squares.", lat: 37.8003, lng: -122.4090 },
      ],
    },
    {
      id: "aug12", city: "sf", dow: "Wed 8/12", title: "North Beach + Wharf → ALCATRAZ NIGHT 🔒 → Oakland bags → OAK flight",
      stops: [
        { id: "sf-liguria", name: "Liguria Bakery — focaccia", time: "10 AM", category: "cafe", area: "North Beach", notes: "Cash only, focaccia ONLY, sells out by ~noon. Caffe Trieste espresso around the corner; City Lights + Vesuvio nearby.", lat: 37.8014, lng: -122.4090 },
        { id: "sf-coit", name: "Filbert Steps → Coit Tower", time: "11 AM", category: "sight", area: "North Beach", notes: "Climb up, come down to the Embarcadero.", lat: 37.8024, lng: -122.4058 },
        { id: "sf-transamerica", name: "Transamerica Pyramid", time: "12 PM", category: "landmark", area: "Financial District", notes: "SF's iconic 1972 spire at the edge of North Beach — the redwood grove + redesigned plaza at its base are open to the public. Steps from City Lights & Molinari.", lat: 37.7952, lng: -122.4028 },
        { id: "sf-pier39", name: "Pier 39 sea lions + Musée Mécanique", time: "1 PM", category: "sight", area: "Wharf", notes: "Musée Mécanique (Pier 45) is free — antique arcade.", lat: 37.8087, lng: -122.4098 },
        { id: "sf-buenavista", name: "Buena Vista Cafe — Irish coffee", time: "3 PM", category: "food", area: "Wharf", notes: "The original US Irish coffee (1952). Boudin chowder bread bowl nearby if hungry; Ghirardelli sundae next door.", lat: 37.8064, lng: -122.4207 },
        { id: "sf-alcatraz", name: "ALCATRAZ NIGHT TOUR — Pier 33 (w/ Sydney)", time: "5:55 PM", category: "sight", area: "Embarcadero", notes: "Be at Pier 33 by 5:25pm. Book the EARLIEST 5:55 boat (back ~8:45pm) — you need time afterward to cross to Oakland for bags before the OAK flight. ~$60, official site only (alcatrazcitycruises.com) — sells out weeks out. COLD + windy: real jacket.", lat: 37.8067, lng: -122.4054, locked: true },
        { id: "sf-oak-bags", name: "Back to Oakland for bags", time: "~9:15 PM", category: "travel", area: "Oakland", notes: "Pier 33 → Oakland ≈ 25–35 min. BART (Embarcadero station is a 12-min walk from the pier) or rideshare. Grab luggage from where you're staying, then straight to OAK.", lat: 37.8044, lng: -122.2712, locked: true },
        { id: "sf-fly-la", name: "Fly OAK → LAX (night flight)", time: "LATE", category: "travel", area: "Oakland", notes: "Oakland Int'l (OAK), NOT SFO. From the East Bay ≈ 20–30 min. Rental car at LAX on arrival.", lat: 37.7126, lng: -122.2197, locked: true },
      ],
    },

    /* ———————————————— LOS ANGELES ———————————————— */
    {
      id: "aug13", city: "la", dow: "Thu 8/13", title: "DTLA → The Grove → Guelaguetza group dinner",
      stops: [
        { id: "la-eggslut", name: "Eggslut — Grand Central Market", time: "9 AM", category: "food", area: "DTLA", notes: "Closes 2PM — it's breakfast, not lunch. Order the Slut + the Fairfax. Then wander GCM; GGET (ex-G&B) for the iced almond-mac latte.", lat: 34.0508, lng: -118.2489 },
        { id: "la-bradbury", name: "Bradbury Building", time: "10:15 AM", category: "landmark", area: "DTLA", notes: "1893 landmark with a breathtaking sunlit wrought-iron atrium (Blade Runner, 500 Days of Summer) — directly across Broadway from Grand Central Market. Lobby is free to visit up to the first landing.", lat: 34.0505, lng: -118.2476 },
        { id: "la-disneyhall", name: "Walt Disney Concert Hall", time: "11 AM", category: "landmark", area: "DTLA", notes: "Frank Gehry's rippling stainless-steel masterpiece (2003). Free self-guided exterior + the hidden rooftop garden. The Broad museum is right next door.", lat: 34.0553, lng: -118.2498 },
        { id: "la-grove", name: "The Grove", time: "12:30 PM", category: "sight", area: "Fairfax", notes: "Parking: 2 hrs free w/ validation. Canter's Deli 2 blocks up Fairfax for a pastrami snack.", lat: 34.0722, lng: -118.3576 },
        { id: "la-farmersmkt", name: "Original Farmers Market (1934)", time: "2 PM", category: "food", area: "Fairfax", notes: "100+ stalls next to the Grove: Du-par's pancakes, Bob's Coffee & Doughnuts, Loteria tacos, Pampas churrasco.", lat: 34.0721, lng: -118.3603 },
        { id: "la-guelaguetza", name: "Guelaguetza — GROUP DINNER (all 6)", time: "7:30 PM", category: "friends", area: "Koreatown", notes: "Hailey, Steven, Ana, Riley + Sydney. James Beard–winning Oaxacan: mole flights, 150+ mezcals, live mariachi. ~$25–40/pp. RESERVE on OpenTable now. Backup: Hae Jang Chon AYCE KBBQ.", lat: 34.0530, lng: -118.2946 },
      ],
    },
    {
      id: "aug14", city: "la", dow: "Fri 8/14", title: "Westside all day: surf → Sugarfish → Venice → Great White (group of 6)",
      stops: [
        { id: "la-surf", name: "SURF LESSON — Learn to Surf LA, Tower 18", time: "8 AM", category: "beach", area: "Santa Monica", notes: "Behind Shutters (1750 Appian Way). Private-group format fits 6 — book 1–2 wks out (~$65–100/pp), wetsuits included. Morning = cleanest waves.", lat: 34.0064, lng: -118.4903 },
        { id: "la-smbeach", name: "Santa Monica beach + pier hang", time: "10 AM", category: "beach", area: "Santa Monica", notes: "", lat: 34.0100, lng: -118.4960 },
        { id: "la-sugarfish", name: "Sugarfish Santa Monica — lunch", time: "11:30 AM", category: "food", area: "Santa Monica", notes: "NO reservations ever — arrive at 11:30 opening. Trust Me $32 / Nozawa $40 (lunch beats dinner pricing). Groups split into 2–4 tops. 2 blocks from the beach.", lat: 34.0148, lng: -118.4960 },
        { id: "la-venice", name: "Venice Boardwalk + Muscle Beach", time: "1:30 PM", category: "sight", area: "Venice", notes: "Skatepark, people-watching.", lat: 33.9850, lng: -118.4695 },
        { id: "la-abbotkinney", name: "Abbot Kinney shopping + vintage", time: "3 PM", category: "thrift", area: "Venice", notes: "Vintage/consignment shops dot the strip. Snack: Gjusta (baklava croissant) or Gjelina Take Away.", lat: 33.9910, lng: -118.4650 },
        { id: "la-greatwhite", name: "Great White — GROUP DINNER (all 6)", time: "7:30 PM", category: "friends", area: "Venice", notes: "Hailey, Steven, Ana, Riley + Sydney. Australian-Cali, buzzy + photogenic, right by the Venice sign — easy roll from Abbot Kinney, zero cross-town drive on the worst-traffic night. ~$45–65/pp. RESERVE on Resy ~2–3 wks out (6 is the online max). Runner-up if you want bigger bar energy: Scopa Italian Roots.", lat: 33.9877, lng: -118.4717 },
      ],
    },
    {
      id: "aug15", city: "la", dow: "Sat 8/15", title: "Catalina Island day trip (you + Riley + Sydney) → Gjelina trio dinner",
      stops: [
        { id: "la-lb-ferry", name: "Drive to Long Beach → 6 AM Catalina Express", time: "5 AM", category: "travel", area: "Long Beach", notes: "BOOK NOW: 3 adult round-trips (~$99 each = ~$297), catalinaexpress.com. Long Beach beats San Pedro (1-hr crossing + earliest 6am boat). Leave the Westside ~4:45am; parking ~$27/day at the Downtown Landing. Aug Saturdays sell out — lock the 6am out + a ~5pm return.", lat: 33.7605, lng: -118.2020 },
        { id: "la-avalon", name: "Arrive Avalon → golf cart tour + snorkel", time: "7:15 AM", category: "sight", area: "Catalina", notes: "Golf cart rental (~$65–90/hr, 4–6 seats) for the self-guided Skyline Dr tour — go early, lines build; cash deposit + license. Then snorkel Lover's Cove (protected preserve, clearest fish; gear ~$15–25 from Wet Spot by the terminal). No car needed on-island.", lat: 33.3450, lng: -118.3230 },
        { id: "la-avalon-lunch", name: "Lunch on the harbor — Bluewater Grill", time: "12:30 PM", category: "food", area: "Catalina", notes: "Best on-the-water deck (306 Crescent Ave); reserve for a deck table. Casual alt: The Lobster Trap (walk-in, local favorite).", lat: 33.3428, lng: -118.3266 },
        { id: "la-avalon-pm", name: "Afternoon: glass-bottom boat or zip line", time: "2 PM", category: "sight", area: "Catalina", notes: "Glass-bottom boat over Lover's Cove (~$32–49, easy same-day) OR the Zip Line Eco Tour (~$92/pp, 5 lines over Descanso — RESERVE now at visitcatalinaisland.com, summer fills). Free option: Hermit Gulch hike permit.", lat: 33.3440, lng: -118.3270 },
        { id: "la-return-boat", name: "~5 PM ferry back → drive to Venice", time: "5 PM", category: "travel", area: "Long Beach", notes: "Take the ~5pm Avalon boat → Long Beach ~6pm → Venice ~7pm. Book Gjelina for 8pm to be safe. (If you'd rather not rush, skip tonight's Gjelina and do the low-stress Sunday brunch alternative instead.)", lat: 33.7605, lng: -118.2020 },
        { id: "la-gjelina", name: "Gjelina — dinner (you + Riley + Sydney)", time: "8 PM", category: "food", area: "Venice", notes: "The day-trip trio caps the day here. Just 3 of you now — much easier reservation than a 6-top: gjelina.com (SevenRooms) or Resy, book ~2 wks out for 8–8:30pm. Wood-fired pizzas + veg plates, ~$60–90/pp. Fallback if Catalina runs late: Gjelina weekend BRUNCH Sunday 9am–2:30pm before you fly.", lat: 33.9906, lng: -118.4643 },
      ],
    },
    {
      id: "aug16", city: "la", dow: "Sun 8/16", title: "Slow Venice morning → fly home",
      stops: [
        { id: "la-gjusta", name: "Gjusta — breakfast", time: "9 AM", category: "cafe", area: "Venice", notes: "Gjelina Group's bakery-deli, 7am–4pm. Alt: Eggslut Venice (8am–2pm), 5 min away. OR — if you skipped Gjelina Saturday night, this is the slot for Gjelina weekend brunch (9am–2:30pm) with Riley + Sydney.", lat: 33.9946, lng: -118.4740 },
        { id: "la-lastbeach", name: "Last beach walk", time: "10:30 AM", category: "beach", area: "Venice", notes: "", lat: 33.9850, lng: -118.4695 },
        { id: "la-flyhome", name: "LAX — fly home", time: "PM", category: "travel", area: "LAX", notes: "Return the rental with buffer time.", lat: 33.9416, lng: -118.4085, locked: true },
      ],
    },
  ],

  /* Unscheduled pins: cafes, snacks & wildcards near the route */
  extras: [
    /* SF — Castro/Mission */
    { id: "x-hotcookie", city: "sf", name: "Hot Cookie", category: "cafe", area: "Castro", notes: "Campy Castro institution, late hours.", lat: 37.7622, lng: -122.4351 },
    { id: "x-reveille", city: "sf", name: "Réveille Coffee", category: "cafe", area: "Castro", notes: "", lat: 37.7610, lng: -122.4344 },
    { id: "x-dandelion", city: "sf", name: "Dandelion Chocolate", category: "cafe", area: "Mission", notes: "Bean-to-bar factory cafe — hot chocolate + s'mores.", lat: 37.7609, lng: -122.4213 },
    { id: "x-elfarolito", city: "sf", name: "El Farolito", category: "food", area: "Mission", notes: "Super burrito til ~2:45am — the post-bar move.", lat: 37.7527, lng: -122.4180 },
    { id: "x-biritemkt", city: "sf", name: "Bi-Rite Market", category: "cafe", area: "Mission", notes: "Dolores Park picnic supplies.", lat: 37.7614, lng: -122.4249 },
    /* SF — Haight / GG Park */
    { id: "x-cttp", city: "sf", name: "Coffee to the People", category: "cafe", area: "Haight", notes: "Old-school radical-Haight vibe.", lat: 37.7710, lng: -122.4453 },
    { id: "x-flywheel", city: "sf", name: "Flywheel Coffee", category: "cafe", area: "Haight", notes: "Right at the park entrance on Stanyan.", lat: 37.7686, lng: -122.4534 },
    { id: "x-teagarden", city: "sf", name: "Japanese Tea Garden", category: "park", area: "Golden Gate Park", notes: "Tea house = built-in snack stop. Combo ticket w/ Conservatory + Botanical Garden.", lat: 37.7702, lng: -122.4703 },
    { id: "x-deyoung", city: "sf", name: "de Young Museum", category: "sight", area: "Golden Gate Park", notes: "Free Hamon observation tower.", lat: 37.7715, lng: -122.4687 },
    { id: "x-conservatory", city: "sf", name: "Conservatory of Flowers", category: "park", area: "Golden Gate Park", notes: "", lat: 37.7726, lng: -122.4602 },
    /* SF — Downtown / Embarcadero */
    { id: "x-yanksing", city: "sf", name: "Yank Sing", category: "food", area: "Downtown", notes: "Cart dim sum, Bib Gourmand — best big-group friend lunch. Closed Mon. OpenTable.", lat: 37.7925, lng: -122.3930 },
    { id: "x-gotts", city: "sf", name: "Gott's Roadside", category: "food", area: "Embarcadero", notes: "Burgers/shakes in the Ferry Building.", lat: 37.7955, lng: -122.3937 },
    { id: "x-tadich", city: "sf", name: "Tadich Grill", category: "food", area: "Downtown", notes: "California's oldest restaurant (1849). Counter seats, cioppino. No res, closed Sun.", lat: 37.7936, lng: -122.3985 },
    { id: "x-delarosa", city: "sf", name: "Delarosa", category: "food", area: "Downtown", notes: "Roman pizza + spritzes, easy group patio.", lat: 37.7859, lng: -122.4043 },
    { id: "x-swan", city: "sf", name: "Swan Oyster Depot", category: "food", area: "Polk/Nob Hill", notes: "Cash-only, 18 stools, Mon–Sat 8am–2:30pm, 1–2 hr line — arrive by 10:30. Worth sacrificing a Tue/Wed morning.", lat: 37.7913, lng: -122.4209 },
    /* SF — North Beach / Wharf */
    { id: "x-trieste", city: "sf", name: "Caffe Trieste", category: "cafe", area: "North Beach", notes: "First espresso on the West Coast (1956); Coppola wrote The Godfather here.", lat: 37.7985, lng: -122.4070 },
    { id: "x-molinari", city: "sf", name: "Molinari Delicatessen", category: "food", area: "North Beach", notes: "Since 1896 — take a number. Closes 5:30pm.", lat: 37.7982, lng: -122.4073 },
    { id: "x-goldenboy", city: "sf", name: "Golden Boy Pizza", category: "food", area: "North Beach", notes: "Cash, counter, focaccia squares through a window.", lat: 37.7997, lng: -122.4077 },
    { id: "x-stella", city: "sf", name: "Stella Pastry", category: "cafe", area: "North Beach", notes: "Sacripantina cake.", lat: 37.7996, lng: -122.4084 },
    { id: "x-citylights", city: "sf", name: "City Lights Books + Vesuvio", category: "sight", area: "North Beach", notes: "Beat-era bookstore; Vesuvio bar next door.", lat: 37.7976, lng: -122.4064 },
    { id: "x-ghirardelli", city: "sf", name: "Ghirardelli Square", category: "cafe", area: "Wharf", notes: "Hot fudge sundae.", lat: 37.8058, lng: -122.4224 },
    { id: "x-boudin", city: "sf", name: "Boudin Bakery flagship", category: "food", area: "Wharf", notes: "Chowder bread bowl + bread-shaping window.", lat: 37.8087, lng: -122.4157 },
    /* SF — nightlife bench */
    { id: "x-hitops", city: "sf", name: "Hi Tops", category: "nightlife", area: "Castro", notes: "Gay sports bar, good early-evening food.", lat: 37.7645, lng: -122.4306 },
    { id: "x-mobydick", city: "sf", name: "Moby Dick + The Mix + 440 + The Edge", category: "nightlife", area: "Castro", notes: "The 18th St crawl block.", lat: 37.7610, lng: -122.4341 },
    { id: "x-stud", city: "sf", name: "The Stud", category: "nightlife", area: "SoMa", notes: "Oldest queer bar in SF (1966), worker-owned. Drag/karaoke — check studsf.com.", lat: 37.7758, lng: -122.4051 },
    { id: "x-powerhouse", city: "sf", name: "Powerhouse", category: "nightlife", area: "SoMa", notes: "Leather/cruise bar; Thursday underwear night.", lat: 37.7719, lng: -122.4103 },
    { id: "x-elrio", city: "sf", name: "El Rio", category: "nightlife", area: "Mission", notes: "Huge patio, diverse queer crowd. Sunday patio parties (lost to OSL this trip).", lat: 37.7470, lng: -122.4192 },
    { id: "x-oasis", city: "sf", name: "Oasis Arts", category: "nightlife", area: "SoMa", notes: "Reopened July 2026 as a queer arts nonprofit — ticketed shows, check sfoasis.com.", lat: 37.7714, lng: -122.4143 },
    { id: "x-warminghut", city: "sf", name: "Warming Hut", category: "cafe", area: "Presidio", notes: "Snack shack on Crissy Field.", lat: 37.8067, lng: -122.4730 },
    { id: "x-cityhall", city: "sf", name: "SF City Hall", category: "landmark", area: "Civic Center", notes: "1915 Beaux-Arts dome — taller than the US Capitol's. Grand rotunda staircase inside; free to walk through on weekdays. On the way to/from Outside Lands transit.", lat: 37.7793, lng: -122.4193 },
    { id: "x-gracecathedral", city: "sf", name: "Grace Cathedral", category: "landmark", area: "Nob Hill", notes: "Neo-Gothic cathedral atop Nob Hill — gilded Ghiberti 'Gates of Paradise' doors + a stone labyrinth. Right on the Powell–Hyde cable car line.", lat: 37.7915, lng: -122.4129 },
    { id: "x-haaslilienthal", city: "sf", name: "Haas-Lilienthal House", category: "landmark", area: "Pacific Heights", notes: "Grand 1886 Queen Anne Victorian you can actually tour inside — the full painted-lady experience with period interiors. Near the Marina/Presidio day.", lat: 37.7936, lng: -122.4258 },
    { id: "x-butchersson", city: "sf", name: "The Butcher's Son (Berkeley)", category: "food", area: "Berkeley", notes: "All-vegan deli + sandwiches, downtown Berkeley near BART. One of Amanda's alt picks.", lat: 37.8719, lng: -122.2711 },
    { id: "x-immthai", city: "sf", name: "Imm Thai Street Food (Berkeley)", category: "food", area: "Berkeley", notes: "Popular Thai near the UC campus / downtown BART. Amanda alt pick.", lat: 37.8718, lng: -122.2691 },
    { id: "x-cholitalinda", city: "sf", name: "Cholita Linda (Berkeley)", category: "food", area: "Berkeley", notes: "Baja-style tacos + tortas (famous fried-fish taco), downtown Berkeley. Amanda alt pick.", lat: 37.8686, lng: -122.2681 },
    { id: "x-hogisland", city: "sf", name: "Hog Island Oyster Co.", category: "food", area: "Embarcadero", notes: "Ferry Building oysters + grilled cheese — a great friend lunch if you add one. No res, line up ~11:30.", lat: 37.7957, lng: -122.3934 },
    { id: "x-anchor", city: "sf", name: "Anchor Oyster Bar", category: "food", area: "Castro", notes: "Tiny Castro counter, legendary cioppino. Thu–Sun 2–8pm, no res — go early. Great for any Castro evening.", lat: 37.7597, lng: -122.4347 },
    { id: "x-chinatown", city: "sf", name: "Chinatown — Dragon Gate + Fortune Cookie Factory", category: "sight", area: "Chinatown", notes: "Golden Gate Fortune Cookie Factory (Ross Alley). Adjacent to North Beach — easy to fold into Wednesday.", lat: 37.7963, lng: -122.4076 },
    { id: "x-cablecar", city: "sf", name: "Powell–Hyde cable car", category: "sight", area: "Downtown", notes: "Ride end-to-end toward the Wharf (~$9, MuniMobile). Pairs with the Wednesday Wharf morning.", lat: 37.7846, lng: -122.4076 },

    /* LA */
    { id: "x-canters", city: "la", name: "Canter's Deli", category: "food", area: "Fairfax", notes: "Pastrami + black-and-white cookie since 1931. Sat 24 hrs.", lat: 34.0790, lng: -118.3614 },
    { id: "x-dupars", city: "la", name: "Du-par's + Bob's Coffee & Doughnuts", category: "cafe", area: "Fairfax", notes: "Inside the Original Farmers Market — 1938 diner pancakes + the donut counter.", lat: 34.0721, lng: -118.3603 },
    { id: "x-gta", city: "la", name: "Gjelina Take Away", category: "cafe", area: "Venice", notes: "Counter-service Gjelina, next door. 7am–9pm.", lat: 33.9907, lng: -118.4644 },
    { id: "x-eggslut-venice", city: "la", name: "Eggslut Venice", category: "food", area: "Venice", notes: "8am–2pm, 5 min from Gjelina — pre-beach breakfast.", lat: 33.9877, lng: -118.4726 },
    { id: "x-gget", city: "la", name: "GGET (ex-G&B) — Grand Central Mkt", category: "cafe", area: "DTLA", notes: "Iced almond-macadamia latte.", lat: 34.0508, lng: -118.2489 },
    { id: "x-haejangchon", city: "la", name: "Hae Jang Chon KBBQ", category: "food", area: "Koreatown", notes: "AYCE $44 dinner, grill-it-yourself chaos. Closed Tue.", lat: 34.0637, lng: -118.3050 },
    { id: "x-ruenpair", city: "la", name: "Ruen Pair", category: "food", area: "Thai Town", notes: "Legendary cheap Thai (~$15–25/pp); Bhan Kanom Thai sweets next door.", lat: 34.1018, lng: -118.3037 },
    { id: "x-sugarfish-bh", city: "la", name: "Sugarfish Beverly Hills", category: "food", area: "Beverly Hills", notes: "Backup location — 10 min from the Grove.", lat: 34.0698, lng: -118.3990 },
    { id: "x-elmatador", city: "la", name: "El Matador State Beach (Malibu)", category: "beach", area: "Malibu (optional)", notes: "The prettiest LA-county beach — sea stacks + caves, golden-hour stunner. ~45 min up PCH. Tiny $8 lot fills by 9am. A great add-on if you want one more beach; sunset ~7:45pm.", lat: 34.0384, lng: -118.8746 },
    { id: "x-scopa", city: "la", name: "Scopa Italian Roots (Venice)", category: "food", area: "Venice", notes: "Group-of-6 runner-up to Great White — louder bar energy, Italian, serious cocktails. Resy, up to 8 online.", lat: 33.9912, lng: -118.4515 },
    { id: "x-lobstertrap", city: "la", name: "The Lobster Trap (Avalon)", category: "food", area: "Catalina", notes: "Walk-in local favorite on Catalina — boat-to-table seafood, lively casual.", lat: 33.3430, lng: -118.3280 },
    { id: "x-broad", city: "la", name: "The Broad", category: "landmark", area: "DTLA", notes: "Contemporary art museum beside Disney Hall — the 'veil-and-vault' honeycomb facade. Free timed tickets; Kusama Infinity Mirror Room. Pairs with the Thursday DTLA morning.", lat: 34.0546, lng: -118.2503 },
    { id: "x-unionstation", city: "la", name: "Union Station", category: "landmark", area: "DTLA", notes: "1939 Mission Moderne rail cathedral — soaring tiled waiting hall + garden patios. Cocktail at the Imperial Western bar inside.", lat: 34.0561, lng: -118.2365 },
    { id: "x-getty", city: "la", name: "The Getty Center", category: "landmark", area: "Brentwood", notes: "Richard Meier's travertine hilltop campus — tram ride up, sculpture gardens, Van Goghs, skyline views. FREE (parking $25). A great westside half-day if you have one.", lat: 34.0780, lng: -118.4741 },
    { id: "x-griffith", city: "la", name: "Griffith Observatory", category: "landmark", area: "Los Feliz", notes: "1935 Art Deco observatory — the classic LA skyline + Hollywood Sign view (Rebel Without a Cause, La La Land). Free; go at sunset.", lat: 34.1184, lng: -118.3004 },
  ],
};
