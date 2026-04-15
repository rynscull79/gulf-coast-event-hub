export const cities = {
  pensacola: {
    key: "pensacola",
    name: "Pensacola",
    nearbyText: "nearby Gulf Coast areas depending on vendor availability.",
  },
  "orange-beach": {
    key: "orange-beach",
    name: "Orange Beach",
    nearbyText: "nearby Gulf Coast areas.",
  },
  fairhope: {
    key: "fairhope",
    name: "Fairhope",
    nearbyText: "nearby Gulf Coast areas depending on vendor availability.",
  },
  daphne: {
    key: "daphne",
    name: "Daphne",
    nearbyText: "nearby Gulf Coast areas.",
  },
  "gulf-shores": {
    key: "gulf-shores",
    name: "Gulf Shores",
    nearbyText: "nearby Gulf Coast areas depending on vendor availability.",
  },
};

export const serviceTypes = {
  bartenders: {
    eyebrow: "Gulf Coast Event Hub",
    heroTitle: (city) => `Bartenders in ${city} for Weddings, Parties & Events`,
    heroText: (city) =>
      `Looking for bartenders in ${city}? Gulf Coast Event Hub helps connect customers with bartending services for weddings, private parties, corporate events, beach gatherings, and other celebrations along the Gulf Coast.`,
    sectionTitle: (city) => `Bartending Services for ${city} Events`,
    sectionText: () =>
      `Whether you're planning a wedding, hosting a private party, or organizing a corporate event, we help simplify the booking process by matching your request with bartending options that fit your event size and style.`,
    cards: [
      {
        title: "Wedding Bartenders",
        text: "Bartending services for ceremonies, receptions, and wedding weekend celebrations.",
      },
      {
        title: "Private Parties",
        text: "Great for birthdays, beach parties, and backyard gatherings.",
      },
      {
        title: "Corporate Events",
        text: "Professional bartenders for company events and team gatherings.",
      },
      {
        title: "Beach & Outdoor Events",
        text: "Bartending services for outdoor venues and coastal events.",
      },
    ],
    howTitle: "How Booking Works",
    howSteps: [
      {
        title: "Tell us about your event",
        text: "Submit your event date, location, guest count, and bartending needs.",
      },
      {
        title: "We match your request",
        text: "We help connect you with bartending options that fit your event.",
      },
      {
        title: "Your booking moves forward",
        text: "The service provider handles setup and service details.",
      },
    ],
    faqs: (city, cityMeta) => [
      {
        title: "Do you provide bartenders directly?",
        text: "No. Gulf Coast Event Hub helps connect customers with bartending services and helps move the booking process forward.",
      },
      {
        title: "Can I request drink machines too?",
        text: "Yes. You can request bartenders along with frozen drink machines, rentals, and other services in one quote request.",
      },
      {
        title: `Do you only serve ${city}?`,
        text: `No. We also help with ${cityMeta.nearbyText}`,
      },
    ],
    closingTitle: (city) => `Book Bartenders in ${city}`,
    closingText:
      "Submit your request and we’ll help connect you with available bartending services for your event.",
  },

  "wedding-bartenders": {
    eyebrow: "Gulf Coast Event Hub",
    heroTitle: (city) => `Wedding Bartenders in ${city} for Receptions & Events`,
    heroText: (city) =>
      `Looking for wedding bartenders in ${city}? Gulf Coast Event Hub helps connect couples and event hosts with bartending services for wedding receptions, rehearsal dinners, cocktail hours, and other wedding-related events along the Gulf Coast.`,
    sectionTitle: (city) => `Bartending Services for Weddings in ${city}`,
    sectionText: () =>
      `Whether you need bartenders for a wedding reception, cocktail hour, rehearsal dinner, or private venue celebration, we help make the booking process simpler. Submit one request and we help match you with options that fit your event and availability.`,
    introText: (city) =>
  `Bartending services can be a big part of creating the right atmosphere for weddings, private parties, corporate events, and beach gatherings in ${city}. Whether you need a bartender for a full reception, cocktail hour, or a more casual celebration, Gulf Coast Event Hub helps make it easier to explore options, compare services, and request pricing in ${city}.`,
   introText: (city) =>
  `Wedding bartenders can help keep receptions, cocktail hours, rehearsal dinners, and wedding weekend events running smoothly in ${city}. Whether you are planning a formal reception or a more relaxed coastal celebration, this page helps you explore bartending options and request pricing for wedding-related events in ${city}.`,
    cards: [
      {
        title: "Wedding Receptions",
        text: "Bartending services for receptions, guest drink service, and full wedding celebrations.",
      },
      {
        title: "Cocktail Hours",
        text: "Bartenders for cocktail hour service before the reception begins.",
      },
      {
        title: "Rehearsal Dinners",
        text: "Drink service options for rehearsal dinners and wedding weekend gatherings.",
      },
      {
        title: "Private Venue Weddings",
        text: "Bartending support for private venues, outdoor receptions, and wedding-related events.",
      },
    ],
    howTitle: "How Booking Works",
    howSteps: [
      {
        title: "Tell us about your wedding",
        text: "Submit your date, venue area, guest count, and the type of bar service you need.",
      },
      {
        title: "We match your request",
        text: "We help connect you with wedding bartending options that fit your event.",
      },
      {
        title: "Your booking moves forward",
        text: "The service provider handles setup and event service details.",
      },
    ],
    faqs: (city, cityMeta) => [
      {
        title: "Do you provide wedding bartenders directly?",
        text: "No. Gulf Coast Event Hub helps connect customers with bartending services and helps move the booking process forward.",
      },
      {
        title: "Can I request cocktail hour service only?",
        text: "Yes. You can request bartending for cocktail hour, the reception, rehearsal dinner, or other wedding-related events.",
      },
      {
        title: `Do you only serve ${city}?`,
        text: `No. We also help with ${cityMeta.nearbyText}`,
      },
    ],
    closingTitle: (city) => `Book Wedding Bartenders in ${city}`,
    closingText:
      "Submit your request and we’ll help connect you with available bartending services for your wedding or event.",
  },

  "dj-services": {
    eyebrow: "Gulf Coast Event Hub",
    heroTitle: (city) => `DJ Services in ${city} for Weddings, Parties & Events`,
    heroText: (city) =>
      `Looking for DJ services in ${city}? Gulf Coast Event Hub helps connect customers with DJ options for weddings, private parties, corporate events, beach gatherings, and other special events along the Gulf Coast.`,
    sectionTitle: (city) => `DJ Options for ${city} Events`,
    sectionText: () =>
      `Whether you need a wedding DJ, party DJ, or entertainment for a private event, we help simplify the search by matching your request with available options that fit your event type and guest count.`,
    introText: (city) =>
  `Music and entertainment can shape the feel of an event from the moment guests arrive. Whether you need a DJ for a wedding, private party, beach gathering, or other celebration in ${city}, Gulf Coast Event Hub helps you explore available options, compare event needs, and request pricing for DJ services in ${city}.`,
    cards: [
      {
        title: "Wedding DJs",
        text: "DJs for ceremonies, cocktail hours, receptions, and rehearsal dinners.",
      },
      {
        title: "Private Parties",
        text: "Music and entertainment for birthdays, reunions, graduations, and private events.",
      },
      {
        title: "Corporate Events",
        text: "DJ services for company parties, networking events, and business gatherings.",
      },
      {
        title: "Beach & Outdoor Events",
        text: "Entertainment options for beach events, outdoor setups, and coastal celebrations.",
      },
    ],
    howTitle: "How Booking Works",
    howSteps: [
      {
        title: "Tell us about your event",
        text: "Submit your event date, location, guest count, and the type of DJ service you need.",
      },
      {
        title: "We match your request",
        text: "We help connect you with DJs that fit your event and availability.",
      },
      {
        title: "Your booking moves forward",
        text: "Once booked, the provider handles the event service details directly with you.",
      },
    ],
    faqs: (city, cityMeta) => [
      {
        title: "Do you provide the DJs directly?",
        text: "No. Gulf Coast Event Hub helps connect customers with vendors and helps move the booking process forward.",
      },
      {
        title: "Can I book a DJ for a beach event?",
        text: "Yes. We help with DJ requests for beach events and other outdoor gatherings.",
      },
      {
        title: `Do you only serve ${city}?`,
        text: `No. We also help with ${cityMeta.nearbyText}`,
      },
    ],
    closingTitle: (city) => `Book a DJ in ${city}`,
    closingText:
      "Submit your request and we’ll help connect you with available DJs for your event.",
  },

  "corporate-event-djs": {
    eyebrow: "Gulf Coast Event Hub",
    heroTitle: (city) =>
      `Corporate Event DJs in ${city} for Company Parties & Business Events`,
    heroText: (city) =>
      `Looking for corporate event DJs in ${city}? Gulf Coast Event Hub helps connect businesses, organizations, and event hosts with DJ services for company parties, networking events, holiday events, brand activations, and other professional gatherings along the Gulf Coast.`,
    sectionTitle: (city) => `DJ Services for Corporate Events in ${city}`,
    sectionText: () =>
      `Whether you need background music for a networking event, a DJ for a company celebration, or entertainment for a large corporate party, we help make the search process simpler.`,
    introText: (city) =>
  `Corporate event DJs can help set the tone for company parties, networking events, brand activations, and business gatherings in ${city}. Whether the goal is background music, a more upbeat atmosphere, or entertainment for a larger company event, this page helps you explore corporate DJ options and request pricing in ${city}.`,
    cards: [
      {
        title: "Company Parties",
        text: "DJ options for employee events, appreciation parties, and company-wide celebrations.",
      },
      {
        title: "Networking Events",
        text: "Music and entertainment options for mixers, business socials, and professional networking events.",
      },
      {
        title: "Holiday Parties",
        text: "DJ services for corporate holiday parties, seasonal gatherings, and end-of-year events.",
      },
      {
        title: "Brand & Promotional Events",
        text: "Entertainment support for launches, promotional events, public activations, and branded experiences.",
      },
    ],
    howTitle: "How Corporate DJ Booking Works",
    howSteps: [
      {
        title: "Tell us about your event",
        text: "Submit your event date, location, guest count, and the type of DJ service you need.",
      },
      {
        title: "We match your request",
        text: "We help connect you with DJ options that fit your corporate event and availability.",
      },
      {
        title: "Your booking moves forward",
        text: "Once booked, the provider handles the event service details directly with you.",
      },
    ],
    faqs: (city, cityMeta) => [
      {
        title: "Do you provide the DJs directly?",
        text: "No. Gulf Coast Event Hub helps connect customers with vendors and helps move the booking process forward.",
      },
      {
        title: "Can I request a DJ for a networking event?",
        text: "Yes. We help with DJ requests for networking events, holiday parties, company celebrations, and other business events.",
      },
      {
        title: `Do you only serve ${city}?`,
        text: `No. We also help with ${cityMeta.nearbyText}`,
      },
    ],
    closingTitle: (city) => `Book a Corporate Event DJ in ${city}`,
    closingText:
      "Submit your request and we’ll help connect you with available DJ options for your business event.",
  },

  catering: {
    eyebrow: "Gulf Coast Event Hub",
    heroTitle: (city) => `Catering in ${city} for Weddings, Parties & Events`,
    heroText: (city) =>
      `Looking for catering in ${city}? Gulf Coast Event Hub helps connect customers with catering options for weddings, graduation parties, private events, corporate gatherings, and other celebrations along the Gulf Coast.`,
    sectionTitle: (city) => `Catering Options for Events in ${city}`,
    sectionText: () =>
      `Whether you need casual event food, buffet-style service, family celebration catering, or food options for a more formal event, we help simplify the search process.`,
    introText: (city) =>
  `Food and catering can be one of the most important parts of a successful event in ${city}. Whether you are planning a wedding, birthday party, family celebration, corporate event, or another gathering, Gulf Coast Event Hub helps make it easier to explore catering options, compare service styles, and request pricing in ${city}.`,
    cards: [
      {
        title: "Wedding Catering",
        text: "Catering options for receptions, rehearsal dinners, cocktail hours, and wedding-related events.",
      },
      {
        title: "Graduation & Family Parties",
        text: "Food service options for graduation parties, birthdays, reunions, and family-centered events.",
      },
      {
        title: "Corporate Event Catering",
        text: "Catering options for office parties, networking events, team gatherings, and business functions.",
      },
      {
        title: "Buffets & Casual Service",
        text: "Flexible food service options for events that need a polished setup without overcomplicating the process.",
      },
    ],
    howTitle: "How Catering Booking Works",
    howSteps: [
      {
        title: "Tell us about your event",
        text: "Submit your event date, location, guest count, and the type of food service you need.",
      },
      {
        title: "We match your request",
        text: "We help connect you with catering options that fit your event and availability.",
      },
      {
        title: "Your booking moves forward",
        text: "Once booked, the provider handles the event food and service details directly with you.",
      },
    ],
    faqs: (city, cityMeta) => [
      {
        title: "Do you provide the catering directly?",
        text: "No. Gulf Coast Event Hub helps connect customers with vendors and helps move the booking process forward.",
      },
      {
        title: "Can I request catering for a casual event?",
        text: "Yes. We help with both casual and more formal event catering requests depending on the event type and vendor availability.",
      },
      {
        title: `Do you only serve ${city}?`,
        text: `No. We also help with ${cityMeta.nearbyText}`,
      },
    ],
    closingTitle: (city) => `Book Catering in ${city}`,
    closingText:
      "Submit your request and we’ll help connect you with available catering options for your event.",
  },

  "wedding-catering": {
    eyebrow: "Gulf Coast Event Hub",
    heroTitle: (city) => `Wedding Catering in ${city} for Receptions & Events`,
    heroText: (city) =>
      `Looking for wedding catering in ${city}? Gulf Coast Event Hub helps connect couples with catering options for wedding receptions, rehearsal dinners, cocktail hours, and full wedding weekend events along the Gulf Coast.`,
    sectionTitle: (city) => `Catering Options for ${city} Weddings`,
    sectionText: () =>
      `Whether you need full-service catering, buffet-style options, or simple reception food, we help make the booking process easier.`,
   introText: (city) =>
  `Wedding catering can help bring together receptions, rehearsal dinners, cocktail hours, and other wedding-related events in ${city}. Whether you are looking for a more formal dining experience or something relaxed and guest-friendly, this page helps you explore wedding catering options and request pricing in ${city}.`,
    cards: [
      {
        title: "Wedding Reception Catering",
        text: "Catering for wedding receptions, private rentals, and coastal event spaces.",
      },
      {
        title: "Cocktail Hour Food",
        text: "Light bites, appetizers, and food service options for cocktail hour and guest welcome periods.",
      },
      {
        title: "Rehearsal Dinner Catering",
        text: "Catering options for rehearsal dinners and pre-wedding celebrations.",
      },
      {
        title: "Buffet & Casual Options",
        text: "Flexible food service setups for weddings that want a polished but relaxed feel.",
      },
    ],
    howTitle: "How Wedding Catering Booking Works",
    howSteps: [
      {
        title: "Tell us about your wedding",
        text: "Submit your wedding date, location, guest count, and food service preferences.",
      },
      {
        title: "We match your request",
        text: "We help connect you with catering options that fit your event and availability.",
      },
      {
        title: "Your booking moves forward",
        text: "Once booked, the provider handles the catering details directly with you.",
      },
    ],
    faqs: (city, cityMeta) => [
      {
        title: "Do you provide catering directly?",
        text: "No. We help connect customers with vendors and streamline the booking process.",
      },
      {
        title: "Can I request multiple food styles?",
        text: "Yes. You can request buffet, plated, casual, or mixed service options.",
      },
      {
        title: `Do you only serve ${city}?`,
        text: `No. We also help with ${cityMeta.nearbyText}`,
      },
    ],
    closingTitle: (city) => `Book Wedding Catering in ${city}`,
    closingText:
      "Submit your request and we’ll help connect you with available catering options for your wedding.",
  },

  "party-rentals": {
    eyebrow: "Gulf Coast Event Hub",
    heroTitle: (city) => `Party Rentals in ${city} for Weddings, Birthdays & Events`,
    heroText: (city) =>
      `Looking for party rentals in ${city}? Gulf Coast Event Hub helps connect customers with rental options for weddings, birthday parties, private events, family gatherings, and other Gulf Coast celebrations.`,
    sectionTitle: (city) => `Rental Options for Events in ${city}`,
    sectionText: () =>
      `Whether you need tents, tables, chairs, inflatables, or other event essentials, we help make the rental search process simpler.`,
    introText: (city) =>
  `Party rentals can make it easier to pull together weddings, private events, birthdays, school functions, and family celebrations in ${city}. Whether you need tents, tables, chairs, inflatables, or a combination of items, Gulf Coast Event Hub helps you explore rental options and request pricing for event needs in ${city}.`,
    cards: [
      {
        title: "Tent Rentals",
        text: "Tent rental options for weddings, outdoor receptions, private parties, and special events.",
      },
      {
        title: "Tables & Chairs",
        text: "Seating and table setup options for backyard events, beach-area gatherings, and formal celebrations.",
      },
      {
        title: "Inflatables & Water Slides",
        text: "Fun rental options for birthdays, school events, family parties, and warm-weather celebrations.",
      },
      {
        title: "Event Setup Essentials",
        text: "Rental items that help pull an event together, from practical needs to crowd-friendly party additions.",
      },
    ],
    howTitle: "How Party Rental Booking Works",
    howSteps: [
      {
        title: "Tell us what you need",
        text: "Submit your event date, location, guest count, and the rental items you need.",
      },
      {
        title: "We match your request",
        text: "We help connect you with rental options that fit your event and availability.",
      },
      {
        title: "Your booking moves forward",
        text: "The provider handles delivery, setup, or pickup depending on the service.",
      },
    ],
    faqs: (city, cityMeta) => [
      {
        title: "Do you provide the rentals directly?",
        text: "No. Gulf Coast Event Hub helps connect customers with vendors and helps move the booking process forward.",
      },
      {
        title: "Can I request multiple rental items?",
        text: "Yes. You can submit one request for multiple items like tents, tables, chairs, inflatables, and more.",
      },
      {
        title: `Do you only serve ${city}?`,
        text: `No. We also help with ${cityMeta.nearbyText}`,
      },
    ],
    closingTitle: (city) => `Book Party Rentals in ${city}`,
    closingText:
      "Submit your request and we’ll help connect you with available rental options for your event.",
  },

  "tent-rentals": {
    eyebrow: "Gulf Coast Event Hub",
    heroTitle: (city) => `Tent Rentals in ${city} for Weddings, Parties & Events`,
    heroText: (city) =>
      `Looking for tent rentals in ${city}? Gulf Coast Event Hub helps connect customers with tent rental options for weddings, private parties, corporate gatherings, outdoor receptions, and other celebrations along the Gulf Coast.`,
    sectionTitle: (city) => `Tent Rental Options for ${city} Events`,
    sectionText: () =>
      `Whether you need a small tent for a backyard event or a larger setup for a wedding or reception, we help simplify the booking process.`,
    introText: (city) =>
  `Tent rentals can help create coverage, structure, and flexibility for weddings, outdoor receptions, backyard gatherings, and other events in ${city}. Whether you need a smaller setup or a larger event tent, this page helps you explore options and request pricing for tent rentals in ${city}.`,
    cards: [
      {
        title: "Wedding Tents",
        text: "Tent options for weddings, outdoor ceremonies, receptions, and rehearsal dinners.",
      },
      {
        title: "Private Party Tents",
        text: "Tent rentals for birthdays, family gatherings, and backyard celebrations.",
      },
      {
        title: "Corporate Event Tents",
        text: "Tent setups for company events, business gatherings, and community functions.",
      },
      {
        title: "Large Event Tent Setup",
        text: "Rental options for larger guest counts, structured layouts, and more complete event coverage.",
      },
    ],
    howTitle: "How Tent Rental Booking Works",
    howSteps: [
      {
        title: "Tell us about your event",
        text: "Submit your event date, location, guest count, and tent rental needs.",
      },
      {
        title: "We match your request",
        text: "We help connect you with tent rental options that fit your event and availability.",
      },
      {
        title: "Your booking moves forward",
        text: "The provider handles delivery, setup, and breakdown details based on your event needs.",
      },
    ],
    faqs: (city, cityMeta) => [
      {
        title: "Do you provide tents directly?",
        text: "No. We help connect you with vendors and help streamline the process.",
      },
      {
        title: "Can I rent multiple items?",
        text: "Yes. You can request tents along with tables, chairs, and other rental items.",
      },
      {
        title: `Do you only serve ${city}?`,
        text: `No. We also help with ${cityMeta.nearbyText}`,
      },
    ],
    closingTitle: (city) => `Book Tent Rentals in ${city}`,
    closingText:
      "Submit your request and we’ll help connect you with available tent rental options.",
  },

  "table-and-chair-rentals": {
    eyebrow: "Gulf Coast Event Hub",
    heroTitle: (city) =>
      `Table and Chair Rentals in ${city} for Weddings, Parties & Events`,
    heroText: (city) =>
      `Looking for table and chair rentals in ${city}? Gulf Coast Event Hub helps connect customers with rental options for weddings, birthday parties, corporate events, backyard gatherings, and other local celebrations.`,
    sectionTitle: (city) => `Table and Chair Rental Options for ${city} Events`,
    sectionText: () =>
      `Whether you need seating for a wedding reception, tables for a party, or a full event setup, we help simplify the rental process.`,
    introText: (city) =>
  `Tables and chairs are a basic but important part of many weddings, parties, business gatherings, and family events in ${city}. Whether you need seating for a smaller celebration or a larger setup for more guests, Gulf Coast Event Hub helps you explore table and chair rental options and request pricing in ${city}.`,
    cards: [
      {
        title: "Wedding Seating",
        text: "Table and chair rentals for ceremonies, receptions, and wedding events.",
      },
      {
        title: "Party Tables & Chairs",
        text: "Rental options for birthdays, family gatherings, and backyard events.",
      },
      {
        title: "Corporate Event Seating",
        text: "Tables and chairs for company events, meetings, and business gatherings.",
      },
      {
        title: "Large Event Setup",
        text: "Seating and table setups for larger guest counts and structured event layouts.",
      },
    ],
    howTitle: "How Table and Chair Booking Works",
    howSteps: [
      {
        title: "Tell us what you need",
        text: "Submit your event date, location, guest count, and rental needs.",
      },
      {
        title: "We match your request",
        text: "We help connect you with table and chair rental options that fit your event.",
      },
      {
        title: "Your booking moves forward",
        text: "The provider handles delivery, setup, and pickup details.",
      },
    ],
    faqs: (city, cityMeta) => [
      {
        title: "Do you provide rentals directly?",
        text: "No. Gulf Coast Event Hub helps connect customers with vendors and helps move the booking process forward.",
      },
      {
        title: "Can I combine rentals?",
        text: "Yes. You can request tables, chairs, tents, and other items in one quote request.",
      },
      {
        title: `Do you only serve ${city}?`,
        text: `No. We also help with ${cityMeta.nearbyText}`,
      },
    ],
    closingTitle: (city) => `Book Table and Chair Rentals in ${city}`,
    closingText:
      "Submit your request and we’ll help connect you with available rental options for your event.",
  },

  "bounce-house-rentals": {
    eyebrow: "Gulf Coast Event Hub",
    heroTitle: (city) => `Bounce House Rentals in ${city} for Parties & Events`,
    heroText: (city) =>
      `Looking for bounce house rentals in ${city}? Gulf Coast Event Hub helps connect customers with inflatable rental options for birthday parties, school events, church gatherings, family celebrations, and other local events.`,
    sectionTitle: (city) => `Bounce House and Inflatable Rentals in ${city}`,
    sectionText: () =>
      `Whether you need a bounce house for a birthday party, inflatables for a school or church event, or something fun for a larger gathering, we help simplify the rental search process.`,
   introText: (city) =>
  `Bounce houses and inflatables can add fun, energy, and activity to birthday parties, school events, church gatherings, and family celebrations in ${city}. Whether you are planning a smaller party or a larger event, this page helps you explore inflatable rental options and request pricing in ${city}.`,
    cards: [
      {
        title: "Birthday Party Bounce Houses",
        text: "Inflatable rentals for kids’ birthday parties and backyard celebrations.",
      },
      {
        title: "School & Church Events",
        text: "Bounce house options for school functions, church events, and community gatherings.",
      },
      {
        title: "Family Parties",
        text: "Fun inflatable rentals for reunions, neighborhood events, and family celebrations.",
      },
      {
        title: "Inflatables for Large Events",
        text: "Options for larger guest counts and more active event setups.",
      },
    ],
    howTitle: "How Bounce House Booking Works",
    howSteps: [
      {
        title: "Tell us about your event",
        text: "Submit your event date, location, guest count, and inflatable rental needs.",
      },
      {
        title: "We match your request",
        text: "We help connect you with bounce house rental options that fit your event.",
      },
      {
        title: "Your booking moves forward",
        text: "The provider handles delivery, setup, and pickup details.",
      },
    ],
    faqs: (city, cityMeta) => [
      {
        title: "Do you provide inflatables directly?",
        text: "No. We connect customers with vendors and help streamline the booking process.",
      },
      {
        title: "Can I request other rental items too?",
        text: "Yes. You can request bounce houses along with tents, tables, chairs, and other items.",
      },
      {
        title: `Do you only serve ${city}?`,
        text: `No. We also help with ${cityMeta.nearbyText}`,
      },
    ],
    closingTitle: (city) => `Book Bounce House Rentals in ${city}`,
    closingText:
      "Submit your request and we’ll help connect you with available inflatable rental options.",
  },

  "frozen-drink-machine-rentals": {
    eyebrow: "Gulf Coast Event Hub",
    heroTitle: (city) =>
      `Frozen Drink Machine Rentals in ${city} for Parties & Events`,
    heroText: (city) =>
      `Looking for frozen drink machine rentals in ${city}? Gulf Coast Event Hub helps connect customers with frozen drink machine rental options for weddings, birthday parties, corporate events, outdoor gatherings, and other celebrations along the Gulf Coast.`,
    sectionTitle: (city) => `Frozen Drink Machine Options for ${city} Events`,
    sectionText: () =>
      `Frozen drink machines are a crowd-favorite addition to many types of events. Whether you're hosting a small gathering or a larger event, we help simplify the process by matching your request with available options that fit your event size and setup.`,
    introText: (city) =>
  `Frozen drink machines are a popular addition to weddings, birthday parties, beach gatherings, private celebrations, and corporate events in ${city}. Whether you are planning a laid-back outdoor event or a larger party, Gulf Coast Event Hub helps you explore frozen drink machine rental options and request pricing in ${city}.`,
    cards: [
      {
        title: "Weddings",
        text: "Frozen drinks for cocktail hours, receptions, and outdoor wedding celebrations.",
      },
      {
        title: "Private Parties",
        text: "Perfect for birthdays, backyard parties, and family gatherings.",
      },
      {
        title: "Corporate Events",
        text: "A fun and unique addition to company events and team gatherings.",
      },
      {
        title: "Outdoor Events",
        text: "Great for outdoor setups, community events, and local celebrations.",
      },
    ],
    howTitle: "How Booking Works",
    howSteps: [
      {
        title: "Tell us about your event",
        text: "Submit your event date, location, guest count, and rental needs.",
      },
      {
        title: "We match your request",
        text: "We help connect you with frozen drink machine rental options that fit your event and availability.",
      },
      {
        title: "Your booking moves forward",
        text: "The vendor handles delivery, setup, and pickup details based on your event needs.",
      },
    ],
    faqs: (city, cityMeta) => [
      {
        title: "Do you provide the machines directly?",
        text: "No. Gulf Coast Event Hub helps connect customers with vendors and helps move the booking process forward.",
      },
      {
        title: "Can I request other rental items too?",
        text: "Yes. You can request frozen drink machines along with other rental items and services in one quote request.",
      },
      {
        title: `Do you only serve ${city}?`,
        text: `No. We also help with ${cityMeta.nearbyText}`,
      },
    ],
    closingTitle: (city) => `Book a Frozen Drink Machine in ${city}`,
    closingText:
      "Submit your request and we’ll help connect you with available rental options for your event.",
  },

  "soft-serve-machine-rentals": {
    eyebrow: "Gulf Coast Event Hub",
    heroTitle: (city) =>
      `Soft Serve Machine Rentals in ${city} for Parties & Events`,
    heroText: (city) =>
      `Looking for soft serve machine rentals in ${city}? Gulf Coast Event Hub helps connect customers with soft serve machine rental options for weddings, birthday parties, corporate events, school functions, and other local celebrations.`,
    sectionTitle: (city) => `Soft Serve Machine Options for ${city} Events`,
    sectionText: () =>
      `Soft serve machines are a fun and memorable addition to many types of events. Whether you're planning a small gathering or a larger event, we help simplify the process by matching your request with available options that fit your event size and setup.`,
   introText: (city) =>
  `Soft serve machines can add a fun dessert option to weddings, birthdays, school functions, company events, and private celebrations in ${city}. Whether you are planning a family-focused event or a larger gathering, this page helps you explore soft serve machine rental options and request pricing in ${city}.`,
    cards: [
      {
        title: "Weddings",
        text: "Soft serve machine rentals for receptions, cocktail hours, and wedding weekend celebrations.",
      },
      {
        title: "Private Parties",
        text: "Great for birthdays, backyard parties, graduations, and family gatherings.",
      },
      {
        title: "Corporate Events",
        text: "A unique dessert option for company events, appreciation days, and team gatherings.",
      },
      {
        title: "School & Community Events",
        text: "A fun rental option for school events, church gatherings, and community celebrations.",
      },
    ],
    howTitle: "How Booking Works",
    howSteps: [
      {
        title: "Tell us about your event",
        text: "Submit your event date, location, guest count, and rental needs.",
      },
      {
        title: "We match your request",
        text: "We help connect you with soft serve machine rental options that fit your event and availability.",
      },
      {
        title: "Your booking moves forward",
        text: "The vendor handles delivery, setup, and pickup details based on your event needs.",
      },
    ],
    faqs: (city, cityMeta) => [
      {
        title: "Do you provide the machines directly?",
        text: "No. Gulf Coast Event Hub helps connect customers with vendors and helps move the booking process forward.",
      },
      {
        title: "Can I request other services too?",
        text: "Yes. You can request soft serve machines along with other rentals and event services in one quote request.",
      },
      {
        title: `Do you only serve ${city}?`,
        text: `No. We also help with ${cityMeta.nearbyText}`,
      },
    ],
    closingTitle: (city) => `Book a Soft Serve Machine in ${city}`,
    closingText:
      "Submit your request and we’ll help connect you with available rental options for your event.",
  },

  "ice-cream-cart-rentals": {
    eyebrow: "Gulf Coast Event Hub",
    heroTitle: (city) => `Ice Cream Cart Rentals in ${city} for Parties & Events`,
    heroText: (city) =>
      `Looking for ice cream cart rentals in ${city}? Gulf Coast Event Hub helps connect customers with ice cream cart rental options for weddings, birthday parties, school events, corporate gatherings, and other local celebrations.`,
    sectionTitle: (city) => `Ice Cream Cart Options for ${city} Events`,
    sectionText: () =>
      `Ice cream carts are a fun and memorable addition to many kinds of events. Whether you're planning a family gathering or a larger celebration, we help simplify the booking process by matching your request with available options that fit your event size and setup.`,
   introText: (city) =>
  `Ice cream carts can be a fun and memorable addition to weddings, birthday parties, school events, company gatherings, and private celebrations in ${city}. Whether you are planning a casual family event or something larger, Gulf Coast Event Hub helps you explore ice cream cart rental options and request pricing in ${city}.`, 
    cards: [
      {
        title: "Weddings",
        text: "Ice cream cart rentals for receptions, cocktail hours, and wedding weekend celebrations.",
      },
      {
        title: "Private Parties",
        text: "Great for birthdays, backyard parties, graduations, and family gatherings.",
      },
      {
        title: "Corporate Events",
        text: "A fun dessert station option for company events, appreciation days, and team gatherings.",
      },
      {
        title: "School & Community Events",
        text: "A crowd-pleasing rental option for school events, church gatherings, and community celebrations.",
      },
    ],
    howTitle: "How Booking Works",
    howSteps: [
      {
        title: "Tell us about your event",
        text: "Submit your event date, location, guest count, and rental needs.",
      },
      {
        title: "We match your request",
        text: "We help connect you with ice cream cart rental options that fit your event and availability.",
      },
      {
        title: "Your booking moves forward",
        text: "The vendor handles delivery, setup, and pickup details based on your event needs.",
      },
    ],
    faqs: (city, cityMeta) => [
      {
        title: "Do you provide the carts directly?",
        text: "No. Gulf Coast Event Hub helps connect customers with vendors and helps move the booking process forward.",
      },
      {
        title: "Can I request other services too?",
        text: "Yes. You can request ice cream carts along with other event rentals and services in one quote request.",
      },
      {
        title: `Do you only serve ${city}?`,
        text: `No. We also help with ${cityMeta.nearbyText}`,
      },
    ],
    closingTitle: (city) => `Book an Ice Cream Cart in ${city}`,
    closingText:
      "Submit your request and we’ll help connect you with available rental options for your event.",
  },
};

const pageDefinitions = [
  { path: "/bartenders-pensacola", serviceKey: "bartenders", cityKey: "pensacola", label: "Bartenders in Pensacola" },
  { path: "/bartenders-orange-beach", serviceKey: "bartenders", cityKey: "orange-beach", label: "Bartenders in Orange Beach" },
  { path: "/bartenders-fairhope", serviceKey: "bartenders", cityKey: "fairhope", label: "Bartenders in Fairhope" },
  { path: "/bartenders-daphne", serviceKey: "bartenders", cityKey: "daphne", label: "Bartenders in Daphne" },
  { path: "/bartenders-gulf-shores", serviceKey: "bartenders", cityKey: "gulf-shores", label: "Bartenders in Gulf Shores" },

  { path: "/wedding-bartenders-pensacola", serviceKey: "wedding-bartenders", cityKey: "pensacola", label: "Wedding Bartenders in Pensacola" },
  { path: "/wedding-bartenders-orange-beach", serviceKey: "wedding-bartenders", cityKey: "orange-beach", label: "Wedding Bartenders in Orange Beach" },
  { path: "/wedding-bartenders-fairhope", serviceKey: "wedding-bartenders", cityKey: "fairhope", label: "Wedding Bartenders in Fairhope" },
  { path: "/wedding-bartenders-daphne", serviceKey: "wedding-bartenders", cityKey: "daphne", label: "Wedding Bartenders in Daphne" },
  { path: "/wedding-bartenders-gulf-shores", serviceKey: "wedding-bartenders", cityKey: "gulf-shores", label: "Wedding Bartenders in Gulf Shores" },

  { path: "/dj-services-gulf-shores", serviceKey: "dj-services", cityKey: "gulf-shores", label: "DJ Services in Gulf Shores" },
  { path: "/corporate-event-djs-pensacola", serviceKey: "corporate-event-djs", cityKey: "pensacola", label: "Corporate Event DJs in Pensacola" },

  { path: "/catering-pensacola", serviceKey: "catering", cityKey: "pensacola", label: "Catering in Pensacola" },
  { path: "/wedding-catering-orange-beach", serviceKey: "wedding-catering", cityKey: "orange-beach", label: "Wedding Catering in Orange Beach" },

  { path: "/party-rentals-orange-beach", serviceKey: "party-rentals", cityKey: "orange-beach", label: "Party Rentals in Orange Beach" },

  { path: "/tent-rentals-orange-beach", serviceKey: "tent-rentals", cityKey: "orange-beach", label: "Tent Rentals in Orange Beach" },
  { path: "/tent-rentals-fairhope", serviceKey: "tent-rentals", cityKey: "fairhope", label: "Tent Rentals in Fairhope" },
  { path: "/tent-rentals-pensacola", serviceKey: "tent-rentals", cityKey: "pensacola", label: "Tent Rentals in Pensacola" },

  { path: "/table-and-chair-rentals-orange-beach", serviceKey: "table-and-chair-rentals", cityKey: "orange-beach", label: "Table and Chair Rentals in Orange Beach" },
  { path: "/table-and-chair-rentals-daphne", serviceKey: "table-and-chair-rentals", cityKey: "daphne", label: "Table and Chair Rentals in Daphne" },

  { path: "/bounce-house-rentals-pensacola", serviceKey: "bounce-house-rentals", cityKey: "pensacola", label: "Bounce House Rentals in Pensacola" },
  { path: "/bounce-house-rentals-daphne", serviceKey: "bounce-house-rentals", cityKey: "daphne", label: "Bounce House Rentals in Daphne" },

  { path: "/frozen-drink-machine-rentals-pensacola", serviceKey: "frozen-drink-machine-rentals", cityKey: "pensacola", label: "Frozen Drink Machine Rentals in Pensacola" },
  { path: "/frozen-drink-machine-rentals-fairhope", serviceKey: "frozen-drink-machine-rentals", cityKey: "fairhope", label: "Frozen Drink Machine Rentals in Fairhope" },
  { path: "/frozen-drink-machine-rentals-daphne", serviceKey: "frozen-drink-machine-rentals", cityKey: "daphne", label: "Frozen Drink Machine Rentals in Daphne" },

  { path: "/soft-serve-machine-rentals-pensacola", serviceKey: "soft-serve-machine-rentals", cityKey: "pensacola", label: "Soft Serve Machine Rentals in Pensacola" },
  { path: "/soft-serve-machine-rentals-fairhope", serviceKey: "soft-serve-machine-rentals", cityKey: "fairhope", label: "Soft Serve Machine Rentals in Fairhope" },
  { path: "/soft-serve-machine-rentals-daphne", serviceKey: "soft-serve-machine-rentals", cityKey: "daphne", label: "Soft Serve Machine Rentals in Daphne" },

  { path: "/ice-cream-cart-rentals-pensacola", serviceKey: "ice-cream-cart-rentals", cityKey: "pensacola", label: "Ice Cream Cart Rentals in Pensacola" },
  { path: "/ice-cream-cart-rentals-fairhope", serviceKey: "ice-cream-cart-rentals", cityKey: "fairhope", label: "Ice Cream Cart Rentals in Fairhope" },
  { path: "/ice-cream-cart-rentals-daphne", serviceKey: "ice-cream-cart-rentals", cityKey: "daphne", label: "Ice Cream Cart Rentals in Daphne" },

{ path: "/dj-services-pensacola", serviceKey: "dj-services", cityKey: "pensacola", label: "DJ Services in Pensacola" },
{ path: "/wedding-catering-pensacola", serviceKey: "wedding-catering", cityKey: "pensacola", label: "Wedding Catering in Pensacola" },
{ path: "/party-rentals-pensacola", serviceKey: "party-rentals", cityKey: "pensacola", label: "Party Rentals in Pensacola" },
{ path: "/table-and-chair-rentals-pensacola", serviceKey: "table-and-chair-rentals", cityKey: "pensacola", label: "Table and Chair Rentals in Pensacola" },

{ path: "/dj-services-daphne", serviceKey: "dj-services", cityKey: "daphne", label: "DJ Services in Daphne" },
{ path: "/catering-daphne", serviceKey: "catering", cityKey: "daphne", label: "Catering in Daphne" },
{ path: "/wedding-catering-daphne", serviceKey: "wedding-catering", cityKey: "daphne", label: "Wedding Catering in Daphne" },
{ path: "/party-rentals-daphne", serviceKey: "party-rentals", cityKey: "daphne", label: "Party Rentals in Daphne" },
{ path: "/tent-rentals-daphne", serviceKey: "tent-rentals", cityKey: "daphne", label: "Tent Rentals in Daphne" },

{ path: "/dj-services-fairhope", serviceKey: "dj-services", cityKey: "fairhope", label: "DJ Services in Fairhope" },
{ path: "/catering-fairhope", serviceKey: "catering", cityKey: "fairhope", label: "Catering in Fairhope" },
{ path: "/wedding-catering-fairhope", serviceKey: "wedding-catering", cityKey: "fairhope", label: "Wedding Catering in Fairhope" },
{ path: "/party-rentals-fairhope", serviceKey: "party-rentals", cityKey: "fairhope", label: "Party Rentals in Fairhope" },
{ path: "/table-and-chair-rentals-fairhope", serviceKey: "table-and-chair-rentals", cityKey: "fairhope", label: "Table and Chair Rentals in Fairhope" },
{ path: "/bounce-house-rentals-fairhope", serviceKey: "bounce-house-rentals", cityKey: "fairhope", label: "Bounce House Rentals in Fairhope" },

{ path: "/dj-services-orange-beach", serviceKey: "dj-services", cityKey: "orange-beach", label: "DJ Services in Orange Beach" },
{ path: "/catering-orange-beach", serviceKey: "catering", cityKey: "orange-beach", label: "Catering in Orange Beach" },
{ path: "/bounce-house-rentals-orange-beach", serviceKey: "bounce-house-rentals", cityKey: "orange-beach", label: "Bounce House Rentals in Orange Beach" },
{ path: "/frozen-drink-machine-rentals-orange-beach", serviceKey: "frozen-drink-machine-rentals", cityKey: "orange-beach", label: "Frozen Drink Machine Rentals in Orange Beach" },
{ path: "/soft-serve-machine-rentals-orange-beach", serviceKey: "soft-serve-machine-rentals", cityKey: "orange-beach", label: "Soft Serve Machine Rentals in Orange Beach" },
{ path: "/ice-cream-cart-rentals-orange-beach", serviceKey: "ice-cream-cart-rentals", cityKey: "orange-beach", label: "Ice Cream Cart Rentals in Orange Beach" },

{ path: "/catering-gulf-shores", serviceKey: "catering", cityKey: "gulf-shores", label: "Catering in Gulf Shores" },
{ path: "/wedding-catering-gulf-shores", serviceKey: "wedding-catering", cityKey: "gulf-shores", label: "Wedding Catering in Gulf Shores" },
{ path: "/party-rentals-gulf-shores", serviceKey: "party-rentals", cityKey: "gulf-shores", label: "Party Rentals in Gulf Shores" },
{ path: "/tent-rentals-gulf-shores", serviceKey: "tent-rentals", cityKey: "gulf-shores", label: "Tent Rentals in Gulf Shores" },
{ path: "/table-and-chair-rentals-gulf-shores", serviceKey: "table-and-chair-rentals", cityKey: "gulf-shores", label: "Table and Chair Rentals in Gulf Shores" },
{ path: "/bounce-house-rentals-gulf-shores", serviceKey: "bounce-house-rentals", cityKey: "gulf-shores", label: "Bounce House Rentals in Gulf Shores" },
{ path: "/frozen-drink-machine-rentals-gulf-shores", serviceKey: "frozen-drink-machine-rentals", cityKey: "gulf-shores", label: "Frozen Drink Machine Rentals in Gulf Shores" },
{ path: "/soft-serve-machine-rentals-gulf-shores", serviceKey: "soft-serve-machine-rentals", cityKey: "gulf-shores", label: "Soft Serve Machine Rentals in Gulf Shores" },
{ path: "/ice-cream-cart-rentals-gulf-shores", serviceKey: "ice-cream-cart-rentals", cityKey: "gulf-shores", label: "Ice Cream Cart Rentals in Gulf Shores" },

{ path: "/bartenders-spanish-fort", serviceKey: "bartenders", cityKey: "spanish-fort", label: "Bartenders in Spanish Fort" },
{ path: "/dj-services-spanish-fort", serviceKey: "dj-services", cityKey: "spanish-fort", label: "DJ Services in Spanish Fort" },
{ path: "/catering-spanish-fort", serviceKey: "catering", cityKey: "spanish-fort", label: "Catering in Spanish Fort" },
{ path: "/tent-rentals-spanish-fort", serviceKey: "tent-rentals", cityKey: "spanish-fort", label: "Tent Rentals in Spanish Fort" },
{ path: "/table-and-chair-rentals-spanish-fort", serviceKey: "table-and-chair-rentals", cityKey: "spanish-fort", label: "Table and Chair Rentals in Spanish Fort" },
{ path: "/frozen-drink-machine-rentals-spanish-fort", serviceKey: "frozen-drink-machine-rentals", cityKey: "spanish-fort", label: "Frozen Drink Machine Rentals in Spanish Fort" },
{ path: "/soft-serve-machine-rentals-spanish-fort", serviceKey: "soft-serve-machine-rentals", cityKey: "spanish-fort", label: "Soft Serve Machine Rentals in Spanish Fort" },
{ path: "/ice-cream-cart-rentals-spanish-fort", serviceKey: "ice-cream-cart-rentals", cityKey: "spanish-fort", label: "Ice Cream Cart Rentals in Spanish Fort" },

{ path: "/bartenders-gulf-breeze", serviceKey: "bartenders", cityKey: "gulf-breeze", label: "Bartenders in Gulf Breeze" },
{ path: "/dj-services-gulf-breeze", serviceKey: "dj-services", cityKey: "gulf-breeze", label: "DJ Services in Gulf Breeze" },
{ path: "/catering-gulf-breeze", serviceKey: "catering", cityKey: "gulf-breeze", label: "Catering in Gulf Breeze" },
{ path: "/tent-rentals-gulf-breeze", serviceKey: "tent-rentals", cityKey: "gulf-breeze", label: "Tent Rentals in Gulf Breeze" },
{ path: "/table-and-chair-rentals-gulf-breeze", serviceKey: "table-and-chair-rentals", cityKey: "gulf-breeze", label: "Table and Chair Rentals in Gulf Breeze" },
{ path: "/frozen-drink-machine-rentals-gulf-breeze", serviceKey: "frozen-drink-machine-rentals", cityKey: "gulf-breeze", label: "Frozen Drink Machine Rentals in Gulf Breeze" },
{ path: "/soft-serve-machine-rentals-gulf-breeze", serviceKey: "soft-serve-machine-rentals", cityKey: "gulf-breeze", label: "Soft Serve Machine Rentals in Gulf Breeze" },
{ path: "/ice-cream-cart-rentals-gulf-breeze", serviceKey: "ice-cream-cart-rentals", cityKey: "gulf-breeze", label: "Ice Cream Cart Rentals in Gulf Breeze" },

{ path: "/bartenders-pensacola-beach", serviceKey: "bartenders", cityKey: "pensacola-beach", label: "Bartenders in Pensacola Beach" },
{ path: "/dj-services-pensacola-beach", serviceKey: "dj-services", cityKey: "pensacola-beach", label: "DJ Services in Pensacola Beach" },
{ path: "/catering-pensacola-beach", serviceKey: "catering", cityKey: "pensacola-beach", label: "Catering in Pensacola Beach" },
{ path: "/tent-rentals-pensacola-beach", serviceKey: "tent-rentals", cityKey: "pensacola-beach", label: "Tent Rentals in Pensacola Beach" },
{ path: "/table-and-chair-rentals-pensacola-beach", serviceKey: "table-and-chair-rentals", cityKey: "pensacola-beach", label: "Table and Chair Rentals in Pensacola Beach" },
{ path: "/frozen-drink-machine-rentals-pensacola-beach", serviceKey: "frozen-drink-machine-rentals", cityKey: "pensacola-beach", label: "Frozen Drink Machine Rentals in Pensacola Beach" },
{ path: "/soft-serve-machine-rentals-pensacola-beach", serviceKey: "soft-serve-machine-rentals", cityKey: "pensacola-beach", label: "Soft Serve Machine Rentals in Pensacola Beach" },
{ path: "/ice-cream-cart-rentals-pensacola-beach", serviceKey: "ice-cream-cart-rentals", cityKey: "pensacola-beach", label: "Ice Cream Cart Rentals in Pensacola Beach" },

{ path: "/bartenders-pace", serviceKey: "bartenders", cityKey: "pace", label: "Bartenders in Pace" },
{ path: "/dj-services-pace", serviceKey: "dj-services", cityKey: "pace", label: "DJ Services in Pace" },
{ path: "/catering-pace", serviceKey: "catering", cityKey: "pace", label: "Catering in Pace" },
{ path: "/tent-rentals-pace", serviceKey: "tent-rentals", cityKey: "pace", label: "Tent Rentals in Pace" },
{ path: "/table-and-chair-rentals-pace", serviceKey: "table-and-chair-rentals", cityKey: "pace", label: "Table and Chair Rentals in Pace" },
{ path: "/frozen-drink-machine-rentals-pace", serviceKey: "frozen-drink-machine-rentals", cityKey: "pace", label: "Frozen Drink Machine Rentals in Pace" },
{ path: "/soft-serve-machine-rentals-pace", serviceKey: "soft-serve-machine-rentals", cityKey: "pace", label: "Soft Serve Machine Rentals in Pace" },
{ path: "/ice-cream-cart-rentals-pace", serviceKey: "ice-cream-cart-rentals", cityKey: "pace", label: "Ice Cream Cart Rentals in Pace" },

{ path: "/bartenders-milton", serviceKey: "bartenders", cityKey: "milton", label: "Bartenders in Milton" },
{ path: "/dj-services-milton", serviceKey: "dj-services", cityKey: "milton", label: "DJ Services in Milton" },
{ path: "/catering-milton", serviceKey: "catering", cityKey: "milton", label: "Catering in Milton" },
{ path: "/tent-rentals-milton", serviceKey: "tent-rentals", cityKey: "milton", label: "Tent Rentals in Milton" },
{ path: "/table-and-chair-rentals-milton", serviceKey: "table-and-chair-rentals", cityKey: "milton", label: "Table and Chair Rentals in Milton" },
{ path: "/frozen-drink-machine-rentals-milton", serviceKey: "frozen-drink-machine-rentals", cityKey: "milton", label: "Frozen Drink Machine Rentals in Milton" },
{ path: "/soft-serve-machine-rentals-milton", serviceKey: "soft-serve-machine-rentals", cityKey: "milton", label: "Soft Serve Machine Rentals in Milton" },
{ path: "/ice-cream-cart-rentals-milton", serviceKey: "ice-cream-cart-rentals", cityKey: "milton", label: "Ice Cream Cart Rentals in Milton" },

];

const relatedPriorityMap = {
  bartenders: [
    "wedding-bartenders",
    "frozen-drink-machine-rentals",
    "catering",
    "dj-services",
    "party-rentals",
    "tent-rentals",
  ],
  "wedding-bartenders": [
    "bartenders",
    "wedding-catering",
    "dj-services",
    "frozen-drink-machine-rentals",
    "tent-rentals",
  ],
  "dj-services": [
    "corporate-event-djs",
    "bartenders",
    "catering",
    "party-rentals",
    "tent-rentals",
  ],
  "corporate-event-djs": [
    "dj-services",
    "catering",
    "bartenders",
    "party-rentals",
  ],
  catering: [
    "wedding-catering",
    "bartenders",
    "dj-services",
    "party-rentals",
    "tent-rentals",
  ],
  "wedding-catering": [
    "wedding-bartenders",
    "bartenders",
    "dj-services",
    "tent-rentals",
    "table-and-chair-rentals",
  ],
  "party-rentals": [
    "tent-rentals",
    "table-and-chair-rentals",
    "bounce-house-rentals",
    "bartenders",
    "dj-services",
  ],
  "tent-rentals": [
    "table-and-chair-rentals",
    "party-rentals",
    "bounce-house-rentals",
    "bartenders",
    "catering",
  ],
  "table-and-chair-rentals": [
    "tent-rentals",
    "party-rentals",
    "bounce-house-rentals",
    "bartenders",
    "catering",
  ],
  "bounce-house-rentals": [
    "party-rentals",
    "tent-rentals",
    "table-and-chair-rentals",
    "ice-cream-cart-rentals",
    "soft-serve-machine-rentals",
  ],
  "frozen-drink-machine-rentals": [
    "soft-serve-machine-rentals",
    "ice-cream-cart-rentals",
    "bartenders",
    "wedding-bartenders",
    "tent-rentals",
  ],
  "soft-serve-machine-rentals": [
    "ice-cream-cart-rentals",
    "frozen-drink-machine-rentals",
    "bartenders",
    "party-rentals",
    "bounce-house-rentals",
  ],
  "ice-cream-cart-rentals": [
    "soft-serve-machine-rentals",
    "frozen-drink-machine-rentals",
    "bounce-house-rentals",
    "party-rentals",
    "bartenders",
  ],
};

export const seoPages = pageDefinitions.map((page) => {
  const priorities = relatedPriorityMap[page.serviceKey] || [];

  const scoredCandidates = pageDefinitions
    .filter(
      (candidate) =>
        candidate.cityKey === page.cityKey && candidate.path !== page.path
    )
    .map((candidate) => {
      const priorityIndex = priorities.indexOf(candidate.serviceKey);
      const score = priorityIndex === -1 ? 999 : priorityIndex;

      return {
        ...candidate,
        score,
      };
    })
    .sort((a, b) => {
      if (a.score !== b.score) return a.score - b.score;
      return a.label.localeCompare(b.label);
    })
    .slice(0, 5)
    .map((candidate) => ({
      path: candidate.path,
      label: candidate.label,
    }));

  return {
    ...page,
    relatedLinks: scoredCandidates,
  };
});