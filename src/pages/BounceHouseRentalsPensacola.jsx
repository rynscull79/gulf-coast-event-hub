import { Link } from "react-router-dom";

export default function BounceHouseRentalsPensacola() {
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
            Bounce House Rentals in Pensacola for Parties & Events
          </h1>

          <p className="sectionText">
            Looking for bounce house rentals in Pensacola? Gulf Coast Event Hub
            helps connect customers with inflatable rental options for birthday
            parties, school events, church gatherings, family celebrations, and
            other fun events along the Gulf Coast.
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
            Bounce House and Inflatable Rental Options in Pensacola
          </h2>

          <p className="sectionText">
            Whether you need a bounce house for a birthday party, an inflatable
            for a school function, or a fun rental option for a larger family
            event, we help make the search process easier. Submit one request and
            we help move the booking process forward.
          </p>
        </div>

        <div className="cardGrid">
          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Birthday Party Bounce Houses</h3>
              <p className="cardText">
                Inflatable rental options for kids’ birthday parties and backyard
                celebrations in Pensacola.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">School & Church Events</h3>
              <p className="cardText">
                Bounce house and inflatable options for school events, church
                functions, and community gatherings.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Family Parties</h3>
              <p className="cardText">
                Fun rental options for reunions, neighborhood parties, and other
                family-centered events.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Inflatables for Large Events</h3>
              <p className="cardText">
                Rental options for larger guest counts, outdoor setups, and
                high-energy event spaces.
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
            <h3 className="cardTitle">We help match the request</h3>
            <p className="cardText">
              We help connect you with bounce house rental options that fit your
              event and availability.
            </p>
          </div>

          <div className="stepCard">
            <div className="stepNumber">03</div>
            <h3 className="cardTitle">Your booking moves forward</h3>
            <p className="cardText">
              The vendor handles delivery, setup, and pickup details based on
              your event needs.
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
            <h3 className="cardTitle">Do you provide bounce houses directly?</h3>
            <p className="cardText">
              No. Gulf Coast Event Hub helps connect customers with vendors and
              helps move the booking process forward.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Can I request other rental items too?</h3>
            <p className="cardText">
              Yes. You can request bounce houses along with tents, tables,
              chairs, and other rental items in one quote request.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Do you only serve Pensacola?</h3>
            <p className="cardText">
              No. We also help with nearby Gulf Coast areas depending on vendor
              availability.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">Book Bounce House Rentals in Pensacola</h2>
          <p className="sectionText">
            Submit your request and we’ll help connect you with available
            inflatable rental options for your event.
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