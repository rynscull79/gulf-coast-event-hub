import { Link } from "react-router-dom";

export default function CorporateEventDJsPensacola() {
  return (
    <div className="page">
      <header className="header">
        <div className="brandRow">
          <img
            src="/images/gulf-coast-logo-complete.svg"
            alt="Gulf Coast Event Hub"
            className="brandLogo"
          />
        </div>

        <nav className="nav">
          <a href="/#how-it-works" className="navLink">How It Works</a>
          <a href="/#services" className="navLink">Services</a>
          <a href="/#request" className="navButton">Get Quote</a>
        </nav>
      </header>

      <section className="section">
        <div className="sectionHeadingWrap">
          <p className="sectionEyebrow">Gulf Coast Event Hub</p>
          <h1 className="sectionTitle">
            Corporate Event DJs in Pensacola for Company Parties & Business Events
          </h1>

          <p className="sectionText">
            Looking for corporate event DJs in Pensacola? Gulf Coast Event Hub
            helps connect businesses, organizations, and event hosts with DJ
            services for company parties, networking events, holiday events,
            brand activations, and other professional gatherings along the Gulf
            Coast.
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
          <h2 className="sectionTitle">
            DJ Services for Corporate Events in Pensacola
          </h2>

          <p className="sectionText">
            Whether you need background music for a networking event, a DJ for a
            company celebration, or entertainment for a large corporate party, we
            help make the search process simpler. Submit one request and we help
            move the booking process forward.
          </p>
        </div>

        <div className="cardGrid">
          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Company Parties</h3>
              <p className="cardText">
                DJ options for employee events, appreciation parties, and
                company-wide celebrations in Pensacola.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Networking Events</h3>
              <p className="cardText">
                Music and entertainment options for mixers, business socials, and
                professional networking events.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Holiday Parties</h3>
              <p className="cardText">
                DJ services for corporate holiday parties, seasonal gatherings,
                and end-of-year business events.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Brand & Promotional Events</h3>
              <p className="cardText">
                Entertainment support for launches, promotional events, public
                activations, and branded experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">How Corporate DJ Booking Works</h2>
        </div>

        <div className="stepsGrid">
          <div className="stepCard">
            <div className="stepNumber">01</div>
            <h3 className="cardTitle">Tell us about your event</h3>
            <p className="cardText">
              Submit your event date, Pensacola-area location, guest count, and
              the type of DJ service you need.
            </p>
          </div>

          <div className="stepCard">
            <div className="stepNumber">02</div>
            <h3 className="cardTitle">We help match the request</h3>
            <p className="cardText">
              We review your request and help connect you with DJ options that
              fit your corporate event and availability.
            </p>
          </div>

          <div className="stepCard">
            <div className="stepNumber">03</div>
            <h3 className="cardTitle">Your booking moves forward</h3>
            <p className="cardText">
              Once booked, the vendor handles the event service details directly
              with you.
            </p>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">Frequently Asked Questions</h2>
        </div>

        <div className="stepsGrid">
          <div className="stepCard">
            <h3 className="cardTitle">Do you provide the DJs directly?</h3>
            <p className="cardText">
              No. Gulf Coast Event Hub helps connect customers with vendors and
              helps move the booking process forward.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Can I request a DJ for a business networking event?</h3>
            <p className="cardText">
              Yes. We help with corporate DJ requests for networking events,
              holiday parties, company celebrations, and other business events.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Do you only serve Pensacola?</h3>
            <p className="cardText">
              No. We also help with nearby Gulf Coast areas depending on vendor
              availability and event type.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">Book a Corporate Event DJ in Pensacola</h2>
          <p className="sectionText">
            Submit your request and we’ll help connect you with available DJ
            options for your company event or business gathering.
          </p>
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
              A simpler way to connect event customers with local Gulf Coast
              vendors.
            </p>
          </div>

          <div className="footerLinks">
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