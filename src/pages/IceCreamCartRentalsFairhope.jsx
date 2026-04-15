import { Link } from "react-router-dom";

export default function IceCreamCartRentalsFairhope() {
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
            Ice Cream Cart Rentals in Fairhope for Parties & Events
          </h1>

          <p className="sectionText">
            Looking for ice cream cart rentals in Fairhope? Gulf Coast Event Hub
            helps connect customers with ice cream cart rental options for
            weddings, birthday parties, school events, corporate gatherings,
            and other celebrations along the Gulf Coast.
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
            Ice Cream Cart Options for Fairhope Events
          </h2>

          <p className="sectionText">
            Ice cream carts are a fun and memorable addition to many kinds of
            events. Whether you're planning a family gathering or a larger
            celebration, we help simplify the booking process by matching your
            request with available options that fit your event size and setup.
          </p>
        </div>

        <div className="cardGrid">
          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Weddings</h3>
              <p className="cardText">
                Ice cream cart rentals for receptions, cocktail hours, and
                wedding weekend celebrations.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Private Parties</h3>
              <p className="cardText">
                Great for birthdays, backyard parties, graduations, and family
                gatherings.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Corporate Events</h3>
              <p className="cardText">
                A fun dessert station option for company events, appreciation
                days, and team gatherings.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">School & Community Events</h3>
              <p className="cardText">
                A crowd-pleasing rental option for school events, church
                gatherings, and community celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">How Booking Works</h2>
        </div>

        <div className="stepsGrid">
          <div className="stepCard">
            <div className="stepNumber">01</div>
            <h3 className="cardTitle">Tell us about your event</h3>
            <p className="cardText">
              Submit your event date, location, guest count, and rental needs.
            </p>
          </div>

          <div className="stepCard">
            <div className="stepNumber">02</div>
            <h3 className="cardTitle">We match your request</h3>
            <p className="cardText">
              We help connect you with ice cream cart rental options that fit
              your event and availability.
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
            <h3 className="cardTitle">Do you provide the carts directly?</h3>
            <p className="cardText">
              No. Gulf Coast Event Hub helps connect customers with vendors and
              helps move the booking process forward.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Can I request other services too?</h3>
            <p className="cardText">
              Yes. You can request ice cream carts along with other event
              rentals and services in one quote request.
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
          <h2 className="sectionTitle">
            Book an Ice Cream Cart in Fairhope
          </h2>
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