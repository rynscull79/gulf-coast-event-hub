import { Link } from "react-router-dom";

export default function BounceHouseRentalsDaphne() {
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
            Bounce House Rentals in Daphne for Parties & Events
          </h1>

          <p className="sectionText">
            Looking for bounce house rentals in Daphne? Gulf Coast Event Hub
            helps connect customers with inflatable rental options for birthday
            parties, school events, church gatherings, family celebrations, and
            other local events.
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
            Bounce House and Inflatable Rentals in Daphne
          </h2>

          <p className="sectionText">
            Whether you need a bounce house for a birthday party, inflatables
            for a school or church event, or something fun for a larger gathering,
            we help simplify the rental search process. Submit one request and we
            help match you with available options.
          </p>
        </div>

        <div className="cardGrid">
          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Birthday Party Bounce Houses</h3>
              <p className="cardText">
                Inflatable rentals for kids’ birthday parties and backyard
                celebrations in Daphne.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">School & Church Events</h3>
              <p className="cardText">
                Bounce house options for school functions, church events, and
                community gatherings.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Family Parties</h3>
              <p className="cardText">
                Fun inflatable rentals for reunions, neighborhood events, and
                family celebrations.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Inflatables for Large Events</h3>
              <p className="cardText">
                Options for larger guest counts and more active event setups.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">How Bounce House Booking Works</h2>
        </div>

        <div className="stepsGrid">
          <div className="stepCard">
            <div className="stepNumber">01</div>
            <h3 className="cardTitle">Tell us about your event</h3>
            <p className="cardText">
              Submit your event date, location, guest count, and inflatable
              rental needs.
            </p>
          </div>

          <div className="stepCard">
            <div className="stepNumber">02</div>
            <h3 className="cardTitle">We match your request</h3>
            <p className="cardText">
              We help connect you with bounce house rental options that fit your
              event.
            </p>
          </div>

          <div className="stepCard">
            <div className="stepNumber">03</div>
            <h3 className="cardTitle">Your booking moves forward</h3>
            <p className="cardText">
              The vendor handles delivery, setup, and pickup details.
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
            <h3 className="cardTitle">Do you provide inflatables directly?</h3>
            <p className="cardText">
              No. We connect customers with vendors and help streamline the
              booking process.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Can I request other rental items too?</h3>
            <p className="cardText">
              Yes. You can request bounce houses along with tents, tables,
              chairs, and other items.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Do you only serve Daphne?</h3>
            <p className="cardText">
              No. We also help with nearby Gulf Coast areas.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">Book Bounce House Rentals in Daphne</h2>
          <p className="sectionText">
            Submit your request and we’ll help connect you with available
            inflatable rental options.
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