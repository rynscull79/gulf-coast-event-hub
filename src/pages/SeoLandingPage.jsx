import { useEffect } from "react";
import { Link } from "react-router-dom";
import { cities, serviceTypes, seoPages } from "../data/seoPages";

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

export default function SeoLandingPage({ serviceKey, cityKey }) {
  const cityMeta = cities[cityKey];
  const service = serviceTypes[serviceKey];
  const currentPage = seoPages.find(
    (page) => page.serviceKey === serviceKey && page.cityKey === cityKey
  );

  if (!cityMeta || !service) {
    return null;
  }

  const city = cityMeta.name;
  const faqs = service.faqs(city, cityMeta);
  const relatedLinks = currentPage?.relatedLinks || [];
  const cityHubPath = `/${cityKey}-event-services`;

  const pageTitle = `${service.heroTitle(city)} | Gulf Coast Event Hub`;
  const metaDescription = `${service.heroText(city)} Check availability and get pricing for ${city} events through Gulf Coast Event Hub.`;

  const canonicalUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname}`
      : "";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.heroTitle(city),
    serviceType: service.sectionTitle(city),
    description: metaDescription,
    areaServed: {
      "@type": "City",
      name: city,
    },
    provider: {
      "@type": "Organization",
      name: "Gulf Coast Event Hub",
      url: "https://www.gulfcoasteventhub.com",
      logo: "https://www.gulfcoasteventhub.com/images/gulf-coast-logo-complete.svg",
    },
    url: canonicalUrl,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.gulfcoasteventhub.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${city} Event Services`,
        item: `https://www.gulfcoasteventhub.com/${cityKey}-event-services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.heroTitle(city),
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.text,
      },
    })),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
          <p className="sectionEyebrow">{service.eyebrow}</p>
          <h1 className="sectionTitle">{service.heroTitle(city)}</h1>
          <p className="sectionText">{service.heroText(city)}</p>
        </div>

        <div className="ctaBlock">
          <a href="/#request" className="primaryButton">
            Check Availability & Get Pricing
          </a>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">{service.sectionTitle(city)}</h2>
          <p className="sectionText">
            {service.introText ? service.introText(city) : service.sectionText(city)}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">{service.sectionTitle(city)}</h2>
          <p className="sectionText">{service.sectionText(city)}</p>
        </div>

        <div className="cardGrid">
          {service.cards.map((card) => (
            <div className="serviceCard" key={card.title}>
              <div className="serviceCardContent">
                <h3 className="cardTitle">{card.title}</h3>
                <p className="cardText">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">{service.howTitle}</h2>
        </div>

        <div className="stepsGrid">
          {service.howSteps.map((step, index) => (
            <div className="stepCard" key={step.title}>
              <div className="stepNumber">{String(index + 1).padStart(2, "0")}</div>
              <h3 className="cardTitle">{step.title}</h3>
              <p className="cardText">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">Frequently Asked Questions</h2>
        </div>

        <div className="stepsGrid">
          {faqs.map((faq) => (
            <div className="stepCard" key={faq.title}>
              <h3 className="cardTitle">{faq.title}</h3>
              <p className="cardText">{faq.text}</p>
            </div>
          ))}
        </div>
      </section>

      {relatedLinks.length > 0 && (
        <section className="section">
          <div className="sectionHeadingWrap">
            <h2 className="sectionTitle">Related Services in {city}</h2>
            <p className="sectionText">
              Explore more event services and rentals available in {city}.
            </p>
          </div>

          <div className="stepsGrid">
            {relatedLinks.map((linkItem) => (
              <Link
                key={linkItem.path}
                to={linkItem.path}
                className="stepCard"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h3 className="cardTitle">{linkItem.label}</h3>
                <p className="cardText">View service page</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="section sectionAlt">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">
            Explore More in {city}
          </h2>
          <p className="sectionText">
            View all available event services and rental options in {city}.
          </p>
        </div>

        <div className="ctaBlock">
          <Link to={cityHubPath} className="primaryButton">
            View All {city} Services
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">{service.closingTitle(city)}</h2>
          <p className="sectionText">{service.closingText}</p>
        </div>

        <div className="ctaBlock">
          <a href="/#request" className="primaryButton">
            Check Availability & Get Pricing
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
 
</div>
        </div>
      </footer>
    </div>
  );
}