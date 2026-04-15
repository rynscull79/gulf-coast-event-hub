import { Link } from "react-router-dom";

export default function PartyRentalsOrangeBeach() {
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
            Party Rentals in Orange Beach for Weddings, Birthdays & Events
          </h1>

          <p className="sectionText">
            Looking for party rentals in Orange Beach? Gulf Coast Event Hub helps
            connect customers with rental options for weddings, birthday parties,
            private events, family gatherings, and other Gulf Coast celebrations.
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
            Rental Options for Events in Orange Beach
          </h2>

          <p className="sectionText">
            Whether you need tents, tables, chairs, inflatables, or other event
            essentials, we help make the rental search process simpler. Submit one
            request and we help move the booking process forward instead of you
            having to track down multiple vendors on your own.
          </p>
        </div>

        <div className="cardGrid">
          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Tent Rentals</h3>
              <p className="cardText">
                Tent rental options for weddings, outdoor receptions, private
                parties, and other special events in Orange Beach.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Tables & Chairs</h3>
              <p className="cardText">
                Seating and table setup options for backyard events, beach-area
                gatherings, and formal celebrations.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Inflatables & Water Slides</h3>
              <p className="cardText">
                Fun rental options for birthdays, school events, family parties,
                and warm-weather celebrations.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Event Setup Essentials</h3>
              <p className="cardText">
                Rental items that help pull an event together, from practical
                needs to crowd-friendly party additions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">How Party Rental Booking Works</h2>
        </div>

        <div className="stepsGrid">
          <div className="stepCard">
            <div className="stepNumber">01</div>
            <h3 className="cardTitle">Tell us what you need</h3>
            <p className="cardText">
              Submit your event date, location, guest count, and the rental items
              you are looking for.
            </p>
          </div>

          <div className="stepCard">
            <div className="stepNumber">02</div>
            <h3 className="cardTitle">We help match the request</h3>
            <p className="cardText">
              We review your request and help connect you with rental options that
              fit your event and availability.
            </p>
          </div>

          <div className="stepCard">
            <div className="stepNumber">03</div>
            <h3 className="cardTitle">Your booking moves forward</h3>
            <p className="cardText">
              Once booked, the vendor handles the rental details directly with you,
              including delivery, setup, or pickup depending on the service.
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
            <h3 className="cardTitle">Do you provide the rentals directly?</h3>
            <p className="cardText">
              No. Gulf Coast Event Hub helps connect customers with vendors and
              helps move the booking process forward.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Can I request multiple rental items?</h3>
            <p className="cardText">
              Yes. You can submit one request for multiple items like tents,
              tables, chairs, inflatables, and more.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Do you only serve Orange Beach?</h3>
            <p className="cardText">
              No. We also help with nearby Gulf Coast areas depending on vendor
              availability and event type.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">Book Party Rentals in Orange Beach</h2>
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