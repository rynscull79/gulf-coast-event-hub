import { Link } from "react-router-dom";

export default function TentRentalsFairhope() {
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
            Tent Rentals in Fairhope for Weddings, Parties & Events
          </h1>

          <p className="sectionText">
            Looking for tent rentals in Fairhope? Gulf Coast Event Hub helps
            connect customers with tent rental options for weddings, private
            parties, corporate gatherings, outdoor receptions, and other special
            events along the Gulf Coast.
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
            Tent Rental Options for Fairhope Events
          </h2>

          <p className="sectionText">
            Whether you need a small tent for a backyard event or a larger setup
            for a wedding or reception, we help make the booking process easier.
            Submit one request and we help match you with options that fit your
            event size, layout, and location.
          </p>
        </div>

        <div className="cardGrid">
          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Wedding Tent Rentals</h3>
              <p className="cardText">
                Tent options for weddings, outdoor ceremonies, receptions, and
                rehearsal dinners in Fairhope.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Private Party Tents</h3>
              <p className="cardText">
                Tent rentals for birthdays, family gatherings, and backyard
                celebrations.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Corporate Event Tents</h3>
              <p className="cardText">
                Tent setups for company parties, business gatherings, and
                community events.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Large Event Tent Setup</h3>
              <p className="cardText">
                Rental options for larger guest counts, structured layouts, and
                more complete event coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">How Tent Rental Booking Works</h2>
        </div>

        <div className="stepsGrid">
          <div className="stepCard">
            <div className="stepNumber">01</div>
            <h3 className="cardTitle">Tell us about your event</h3>
            <p className="cardText">
              Submit your event date, location, guest count, and tent rental
              needs.
            </p>
          </div>

          <div className="stepCard">
            <div className="stepNumber">02</div>
            <h3 className="cardTitle">We help match the request</h3>
            <p className="cardText">
              We help connect you with tent rental options that fit your event
              and availability.
            </p>
          </div>

          <div className="stepCard">
            <div className="stepNumber">03</div>
            <h3 className="cardTitle">Your booking moves forward</h3>
            <p className="cardText">
              The vendor handles delivery, setup, and breakdown details based on
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
            <h3 className="cardTitle">Do you provide tents directly?</h3>
            <p className="cardText">
              No. Gulf Coast Event Hub helps connect customers with vendors and
              helps move the booking process forward.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Can I request tents with tables and chairs?</h3>
            <p className="cardText">
              Yes. You can request multiple rental items in one quote request.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Do you only serve Fairhope?</h3>
            <p className="cardText">
              No. We also help with nearby Gulf Coast areas depending on vendor
              availability.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">Book Tent Rentals in Fairhope</h2>
          <p className="sectionText">
            Submit your request and we’ll help connect you with available tent
            rental options for your event.
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