import { Link } from "react-router-dom";

export default function TableAndChairRentalsDaphne() {
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
            Table and Chair Rentals in Daphne for Weddings, Parties & Events
          </h1>

          <p className="sectionText">
            Looking for table and chair rentals in Daphne? Gulf Coast Event Hub
            helps connect customers with rental options for weddings, birthday
            parties, corporate events, backyard gatherings, and other local
            celebrations.
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
            Table and Chair Rental Options for Daphne Events
          </h2>

          <p className="sectionText">
            Whether you need seating for a wedding reception, tables for a party,
            or a full event setup, we help simplify the rental process. Submit one
            request and we help match you with options that fit your event and
            guest count.
          </p>
        </div>

        <div className="cardGrid">
          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Wedding Seating</h3>
              <p className="cardText">
                Table and chair rentals for ceremonies, receptions, and wedding
                events in Daphne.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Party Tables & Chairs</h3>
              <p className="cardText">
                Rental options for birthdays, family gatherings, and backyard
                events.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Corporate Event Seating</h3>
              <p className="cardText">
                Tables and chairs for company events, meetings, and business
                gatherings.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Large Event Setup</h3>
              <p className="cardText">
                Seating and table setups for larger guest counts and structured
                event layouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">How Table and Chair Booking Works</h2>
        </div>

        <div className="stepsGrid">
          <div className="stepCard">
            <div className="stepNumber">01</div>
            <h3 className="cardTitle">Tell us what you need</h3>
            <p className="cardText">
              Submit your event date, location, guest count, and rental needs.
            </p>
          </div>

          <div className="stepCard">
            <div className="stepNumber">02</div>
            <h3 className="cardTitle">We match your request</h3>
            <p className="cardText">
              We help connect you with table and chair rental options that fit
              your event.
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
            <h3 className="cardTitle">Do you provide rentals directly?</h3>
            <p className="cardText">
              No. We help connect customers with vendors and streamline the
              booking process.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Can I combine rentals?</h3>
            <p className="cardText">
              Yes. You can request tables, chairs, tents, and other items in one
              quote request.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Do you only serve Daphne?</h3>
            <p className="cardText">
              No. We also help with nearby Gulf Coast locations.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">Book Table and Chair Rentals in Daphne</h2>
          <p className="sectionText">
            Submit your request and we’ll help connect you with available rental
            options for your event.
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