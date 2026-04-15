import { Link } from "react-router-dom";

export default function CateringPensacola() {
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
            Catering in Pensacola for Weddings, Parties & Events
          </h1>

          <p className="sectionText">
            Looking for catering in Pensacola? Gulf Coast Event Hub helps connect
            customers with catering options for weddings, graduation parties,
            private events, corporate gatherings, and other celebrations along
            the Gulf Coast.
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
            Catering Options for Events in Pensacola
          </h2>

          <p className="sectionText">
            Whether you need casual event food, buffet-style service, family
            celebration catering, or food options for a more formal event, we
            help make the search process simpler. You submit one request and we
            help move the booking process forward.
          </p>
        </div>

        <div className="cardGrid">
          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Wedding Catering</h3>
              <p className="cardText">
                Catering options for receptions, rehearsal dinners, cocktail
                hours, and wedding-related events in Pensacola.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Graduation & Family Parties</h3>
              <p className="cardText">
                Food service options for graduation parties, birthdays,
                reunions, and other backyard or family-centered events.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Corporate Event Catering</h3>
              <p className="cardText">
                Catering options for office parties, networking events, team
                gatherings, and business functions.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Buffets & Casual Service</h3>
              <p className="cardText">
                Flexible food service options for events that need a polished
                setup without overcomplicating the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">How Catering Booking Works</h2>
        </div>

        <div className="stepsGrid">
          <div className="stepCard">
            <div className="stepNumber">01</div>
            <h3 className="cardTitle">Tell us about your event</h3>
            <p className="cardText">
              Submit your event date, location, guest count, and the type of food
              service you are looking for.
            </p>
          </div>

          <div className="stepCard">
            <div className="stepNumber">02</div>
            <h3 className="cardTitle">We help match the request</h3>
            <p className="cardText">
              We review your request and help connect you with catering options
              that fit your event and availability.
            </p>
          </div>

          <div className="stepCard">
            <div className="stepNumber">03</div>
            <h3 className="cardTitle">Your booking moves forward</h3>
            <p className="cardText">
              Once booked, the vendor handles the event food and service details
              directly with you.
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
            <h3 className="cardTitle">Do you provide the catering directly?</h3>
            <p className="cardText">
              No. Gulf Coast Event Hub helps connect customers with vendors and
              helps move the booking process forward.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Can I request catering for a casual event?</h3>
            <p className="cardText">
              Yes. We help with both casual and more formal event catering
              requests depending on the event type and vendor availability.
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
          <h2 className="sectionTitle">Book Catering in Pensacola</h2>
          <p className="sectionText">
            Submit your request and we’ll help connect you with available
            catering options for your event.
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