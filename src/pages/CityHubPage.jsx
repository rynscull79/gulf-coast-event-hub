import { useEffect } from "react";
import { Link } from "react-router-dom";
import { seoPages } from "../data/seoPages";

function upsertMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function upsertCanonical(href) {
  let link = document.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
}

const popularPriorityMap = {
  pensacola: [
    "frozen-drink-machine-rentals",
    "bartenders",
    "wedding-bartenders",
    "catering",
    "corporate-event-djs",
    "dj-services",
    "tent-rentals",
    "party-rentals",
    "table-and-chair-rentals",
    "bounce-house-rentals",
    "soft-serve-machine-rentals",
    "ice-cream-cart-rentals",
  ],
  daphne: [
    "frozen-drink-machine-rentals",
    "soft-serve-machine-rentals",
    "ice-cream-cart-rentals",
    "bartenders",
    "wedding-bartenders",
    "table-and-chair-rentals",
    "party-rentals",
    "tent-rentals",
    "bounce-house-rentals",
    "dj-services",
    "catering",
    "wedding-catering",
  ],
  fairhope: [
    "frozen-drink-machine-rentals",
    "soft-serve-machine-rentals",
    "ice-cream-cart-rentals",
    "bartenders",
    "wedding-bartenders",
    "wedding-catering",
    "catering",
    "dj-services",
    "tent-rentals",
    "party-rentals",
    "table-and-chair-rentals",
    "bounce-house-rentals",
  ],
  "orange-beach": [
    "party-rentals",
    "tent-rentals",
    "table-and-chair-rentals",
    "bartenders",
    "wedding-bartenders",
    "wedding-catering",
    "catering",
    "dj-services",
    "bounce-house-rentals",
    "frozen-drink-machine-rentals",
    "soft-serve-machine-rentals",
    "ice-cream-cart-rentals",
  ],
  "gulf-shores": [
    "bartenders",
    "wedding-bartenders",
    "dj-services",
    "wedding-catering",
    "catering",
    "party-rentals",
    "tent-rentals",
    "table-and-chair-rentals",
    "bounce-house-rentals",
    "frozen-drink-machine-rentals",
    "soft-serve-machine-rentals",
    "ice-cream-cart-rentals",
  ],
  "spanish-fort": [
    "frozen-drink-machine-rentals",
    "bartenders",
    "dj-services",
    "catering",
    "tent-rentals",
    "table-and-chair-rentals",
    "soft-serve-machine-rentals",
    "ice-cream-cart-rentals",
  ],
  "gulf-breeze": [
    "frozen-drink-machine-rentals",
    "bartenders",
    "dj-services",
    "catering",
    "tent-rentals",
    "table-and-chair-rentals",
    "soft-serve-machine-rentals",
    "ice-cream-cart-rentals",
  ],
  "pensacola-beach": [
    "bartenders",
    "frozen-drink-machine-rentals",
    "dj-services",
    "catering",
    "tent-rentals",
    "table-and-chair-rentals",
    "soft-serve-machine-rentals",
    "ice-cream-cart-rentals",
  ],
  pace: [
    "bounce-house-rentals",
    "frozen-drink-machine-rentals",
    "soft-serve-machine-rentals",
    "ice-cream-cart-rentals",
    "bartenders",
    "dj-services",
    "catering",
    "tent-rentals",
    "table-and-chair-rentals",
  ],
  milton: [
    "bounce-house-rentals",
    "frozen-drink-machine-rentals",
    "soft-serve-machine-rentals",
    "ice-cream-cart-rentals",
    "bartenders",
    "dj-services",
    "catering",
    "tent-rentals",
    "table-and-chair-rentals",
  ],
};

const cityContentMap = {
  pensacola: {
    heroText:
      "Explore bartenders, DJs, catering, rentals, frozen drink machines, soft serve, ice cream carts, and many more party and event services in Pensacola.",
    planningText:
      "Whether you're planning a wedding, birthday party, corporate event, beach-area gathering, or private celebration in Pensacola, finding the right mix of services can make a big difference. Gulf Coast Event Hub helps simplify the process by connecting you with local event-related services for everything from bartenders and DJs to rentals, catering, and dessert stations.",
  },
  daphne: {
    heroText:
      "Explore bartenders, DJs, catering, rentals, frozen drink machines, soft serve, ice cream carts, and many more party and event services in Daphne.",
    planningText:
      "Whether you're planning a wedding, birthday party, family gathering, corporate event, or private celebration in Daphne, Gulf Coast Event Hub helps make it easier to explore local service options in one place. From bartenders and DJs to rentals, catering, and dessert stations, this page helps you browse event-related services available in Daphne.",
  },
  fairhope: {
    heroText:
      "Explore bartenders, DJs, catering, rentals, frozen drink machines, soft serve, ice cream carts, and many more party and event services in Fairhope.",
    planningText:
      "Whether you're planning a wedding, upscale private event, birthday party, family celebration, or corporate gathering in Fairhope, the right vendors can help bring everything together. Gulf Coast Event Hub helps simplify the search process by connecting you with local options for bartenders, DJs, rentals, catering, dessert stations, and more in Fairhope.",
  },
  "orange-beach": {
    heroText:
      "Explore bartenders, DJs, catering, rentals, frozen drink machines, soft serve, ice cream carts, and many more party and event services in Orange Beach.",
    planningText:
      "Whether you're planning a wedding, beach party, vacation rental event, family celebration, or private gathering in Orange Beach, finding services that fit your setup can take time. Gulf Coast Event Hub helps make that easier by bringing together bartenders, DJs, rentals, catering, dessert options, and more for events in Orange Beach.",
  },
  "gulf-shores": {
    heroText:
      "Explore bartenders, DJs, catering, rentals, frozen drink machines, soft serve, ice cream carts, and many more party and event services in Gulf Shores.",
    planningText:
      "Whether you're planning a wedding, beach event, vacation stay celebration, birthday party, or private gathering in Gulf Shores, Gulf Coast Event Hub helps you explore local service options in one place. Browse bartenders, DJs, rentals, catering, dessert stations, and more for events in Gulf Shores.",
  },
  "spanish-fort": {
    heroText:
      "Explore bartenders, DJs, catering, rentals, frozen drink machines, soft serve, ice cream carts, and many more party and event services in Spanish Fort.",
    planningText:
      "Whether you're planning a wedding, private celebration, birthday party, business event, or family gathering in Spanish Fort, Gulf Coast Event Hub helps make the search process easier. This page brings together event-related services like bartenders, DJs, catering, rentals, and dessert options for events in Spanish Fort.",
  },
  "gulf-breeze": {
    heroText:
      "Explore bartenders, DJs, catering, rentals, frozen drink machines, soft serve, ice cream carts, and many more party and event services in Gulf Breeze.",
    planningText:
      "Whether you're planning a private celebration, birthday party, beach-area event, wedding, or family gathering in Gulf Breeze, Gulf Coast Event Hub helps you explore local service options more easily. Browse bartenders, DJs, rentals, catering, dessert stations, and more for events in Gulf Breeze.",
  },
  "pensacola-beach": {
    heroText:
      "Explore bartenders, DJs, catering, rentals, frozen drink machines, soft serve, ice cream carts, and many more party and event services in Pensacola Beach.",
    planningText:
      "Whether you're planning a beach wedding, private party, vacation gathering, birthday celebration, or special event in Pensacola Beach, finding the right vendors can shape the whole experience. Gulf Coast Event Hub helps simplify the process by connecting you with bartenders, DJs, rentals, catering, dessert stations, and more in Pensacola Beach.",
  },
  pace: {
    heroText:
      "Explore bartenders, DJs, catering, rentals, frozen drink machines, soft serve, ice cream carts, and many more party and event services in Pace.",
    planningText:
      "Whether you're planning a birthday party, school event, church gathering, family celebration, wedding, or private event in Pace, Gulf Coast Event Hub helps make it easier to explore local service options. Browse bartenders, rentals, dessert stations, DJs, catering, and more for events in Pace.",
  },
  milton: {
    heroText:
      "Explore bartenders, DJs, catering, rentals, frozen drink machines, soft serve, ice cream carts, and many more party and event services in Milton.",
    planningText:
      "Whether you're planning a birthday party, family gathering, school function, church event, wedding, or private celebration in Milton, Gulf Coast Event Hub helps simplify the search process. Explore bartenders, DJs, catering, rentals, dessert stations, and more for events in Milton.",
  },
};

export default function CityHubPage({ cityKey, cityName }) {
  const cityServices = seoPages.filter((page) => page.cityKey === cityKey);

  const popularPriority = popularPriorityMap[cityKey] || [];

  const popularServices = cityServices
    .map((service) => {
      const priorityIndex = popularPriority.indexOf(service.serviceKey);
      return {
        ...service,
        priorityScore: priorityIndex === -1 ? 999 : priorityIndex,
      };
    })
    .sort((a, b) => {
      if (a.priorityScore !== b.priorityScore) {
        return a.priorityScore - b.priorityScore;
      }
      return a.label.localeCompare(b.label);
    })
    .slice(0, 5);

  const cityContent = cityContentMap[cityKey] || {
    heroText: `Explore bartenders, DJs, catering, rentals, frozen drink machines, soft serve, ice cream carts, and many more party and event services in ${cityName}.`,
    planningText: `Whether you're planning a wedding, birthday party, corporate event, beach gathering, or private celebration in ${cityName}, Gulf Coast Event Hub helps simplify the process by connecting you with local service providers for everything from bartenders and DJs to rentals, catering, and dessert stations.`,
  };

  const pageTitle = `${cityName} Event Services | Gulf Coast Event Hub`;
  const metaDescription = `Find bartenders, DJs, catering, rentals, and more in ${cityName}. Compare event services and request quotes easily through Gulf Coast Event Hub.`;

  const canonicalUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname}`
      : "";

  const cityServiceLabels = cityServices.map((page) => page.label);

  const cityHubSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${cityName} Event Services`,
    url: canonicalUrl,
    description: metaDescription,
    isPartOf: {
      "@type": "WebSite",
      name: "Gulf Coast Event Hub",
      url: "https://www.gulfcoasteventhub.com",
    },
    about: {
      "@type": "Place",
      name: cityName,
    },
    mentions: cityServiceLabels.map((label) => ({
      "@type": "Service",
      name: label,
      areaServed: {
        "@type": "City",
        name: cityName,
      },
      provider: {
        "@type": "Organization",
        name: "Gulf Coast Event Hub",
        url: "https://www.gulfcoasteventhub.com",
      },
    })),
    provider: {
      "@type": "Organization",
      name: "Gulf Coast Event Hub",
      url: "https://www.gulfcoasteventhub.com",
      logo: "https://www.gulfcoasteventhub.com/images/gulf-coast-logo-complete.svg",
    },
  };

  useEffect(() => {
    document.title = pageTitle;
    upsertMeta("description", metaDescription);
    upsertCanonical(canonicalUrl);
  }, [pageTitle, metaDescription, canonicalUrl]);

  return (
    <div className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityHubSchema) }}
      />

      <header className="header">
        <Link to="/" className="brandRow" style={{ textDecoration: "none" }}>
  <img
    src="/images/gulf-coast-logo-complete.svg"
    alt="Gulf Coast Event Hub"
    className="brandLogo"
  />
</Link>

        <nav className="nav">
  <Link to="/" className="navLink">Home</Link>
  <a href="/#how-it-works" className="navLink">How It Works</a>
  <a href="/#services" className="navLink">Services</a>
  <a href="/#request" className="navButton">Get Quote</a>
</nav>
      </header>

      <section className="section">
        <div className="sectionHeadingWrap">
          <p className="sectionEyebrow">Gulf Coast Event Hub</p>
          <h1 className="sectionTitle">{cityName} Event Services</h1>
          <p className="sectionText">
            {cityContent.heroText}
          </p>
        </div>

        <div className="ctaBlock">
          <a href="/#request" className="primaryButton">
            Check Availability & Get Pricing
          </a>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">Planning an Event in {cityName}?</h2>
          <p className="sectionText">
            {cityContent.planningText}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">Why Use Gulf Coast Event Hub?</h2>
          <p className="sectionText">
            Gulf Coast Event Hub makes it easier to explore party and event services
            in {cityName} without having to search all over the place. Whether you
            are planning a wedding, birthday party, corporate gathering, beach event,
            or private celebration, we help simplify the process and point you toward
            services that fit your event.
          </p>
        </div>

        <div className="stepsGrid">
          <div className="stepCard">
            <h3 className="cardTitle">Multiple Services in One Place</h3>
            <p className="cardText">
              Explore bartenders, DJs, catering, rentals, dessert stations, frozen
              drink machines, and more from one central place.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Useful for All Kinds of Events</h3>
            <p className="cardText">
              Find options for weddings, birthday parties, family gatherings,
              corporate events, school functions, and other celebrations in {cityName}.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Simple Quote Requests</h3>
            <p className="cardText">
              Tell us what you need and we help make the search process easier,
              whether you need one service or several for the same event.
            </p>
          </div>
        </div>
      </section>

      {popularServices.length > 0 && (
        <section className="section">
          <div className="sectionHeadingWrap">
            <h2 className="sectionTitle">Popular Event Services in {cityName}</h2>
            <p className="sectionText">
              Start with some of the most requested event services and rentals in {cityName}.
            </p>
          </div>

          <div className="cardGrid">
            {popularServices.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="serviceCard"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="serviceCardContent">
                  <h3 className="cardTitle">{service.label}</h3>
                  <p className="cardText">View popular service</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="section sectionAlt">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">Available Services in {cityName}</h2>
          <p className="sectionText">
            Browse local event-related services, rentals, and many more party
            options currently available in {cityName}.
          </p>
        </div>

        <div className="cardGrid">
          {cityServices.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              className="serviceCard"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="serviceCardContent">
                <h3 className="cardTitle">{service.label}</h3>
                <p className="cardText">View service page</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">Get a Quote for Your Event in {cityName}</h2>
          <p className="sectionText">
            Submit your request and we’ll help connect you with available event
            services and rentals in {cityName}.
          </p>
        </div>

        <div className="ctaBlock">
          <a href="/#request" className="primaryButton">
            Check Availability & Get Pricing
          </a>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">Not Seeing What You Need?</h2>
          <p className="sectionText">
            We help with bartenders, DJs, catering, rentals, dessert stations,
            frozen drink machines, and many more party and event services in {cityName}.
            If you do not see exactly what you are looking for, send us your request
            and we will help point you in the right direction.
          </p>
        </div>

        <div className="ctaBlock">
          <a href="/#request" className="primaryButton">
            Request a Custom Quote
          </a>
        </div>
      </section>

      <footer className="siteFooter">
        <div className="footerInner">
          <div className="footerBrandBlock">
            <img
              src="/images/gulf-coast-logo-complete.svg"
              alt="Gulf Coast Event Hub logo"
              className="footerLogo"
            />
            <p className="footerText">
              A simpler way to connect event customers with local Gulf Coast vendors.
            </p>
          </div>

         <div className="footerLinks">
  <Link to="/">Home</Link>
  <a href="/#how-it-works">How It Works</a>
  <a href="/#services">Services</a>
  <a href="/#request">Request Quote</a>
  <Link to="/admin">Admin</Link>
</div>
        </div>
      </footer>
    </div>
  );
}