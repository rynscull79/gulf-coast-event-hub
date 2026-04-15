import { Link } from "react-router-dom";

export default function DJServicesGulfShores() {
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
            DJ Services in Gulf Shores for Weddings, Parties & Events
          </h1>

          <p className="sectionText">
            Looking for DJ services in Gulf Shores? Gulf Coast Event Hub helps
            connect you with DJs for weddings, private parties, corporate
            events, beach gatherings, and other special events along the Gulf
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
            DJs for Weddings, Parties & Beach Events in Gulf Shores
          </h2>

          <p className="sectionText">
            Whether you need a wedding DJ, party DJ, or music for a private
            event, we help match you with entertainment options that fit your
            event type, guest count, and location. You submit one request and we
            help with the booking process so you do not have to search multiple
            vendors on your own.
          </p>
        </div>

        <div className="cardGrid">
          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Wedding DJs</h3>
              <p className="cardText">
                DJs for ceremonies, cocktail hours, receptions, and rehearsal
                dinners in Gulf Shores and nearby coastal venues.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Private Party DJs</h3>
              <p className="cardText">
                Music and entertainment for birthdays, reunions, graduation
                parties, and other private events.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Corporate Event DJs</h3>
              <p className="cardText">
                DJ services for company parties, networking events, and business
                gatherings that need a polished but fun atmosphere.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Beach & Outdoor Events</h3>
              <p className="cardText">
                Entertainment options for Gulf Shores beach events, outdoor
                setups, and coastal celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">How DJ Booking Works</h2>
        </div>

        <div className="stepsGrid">
          <div className="stepCard">
            <div className="stepNumber">01</div>
            <h3 className="cardTitle">Tell us about your event</h3>
            <p className="cardText">
              Submit your event date, location, guest count, and what type of DJ
              service you need.
            </p>
          </div>

          <div className="stepCard">
            <div className="stepNumber">02</div>
            <h3 className="cardTitle">We help match the right fit</h3>
            <p className="cardText">
              We review your request and help connect you with DJs that fit your
              event and availability.
            </p>
          </div>

          <div className="stepCard">
            <div className="stepNumber">03</div>
            <h3 className="cardTitle">Your booking moves forward</h3>
            <p className="cardText">
              Once booked, the DJ handles the event service details directly
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
            <h3 className="cardTitle">Do you plan the full event?</h3>
            <p className="cardText">
              No. Gulf Coast Event Hub helps connect you with vendors and helps
              move the booking process forward. We do not act as a full event
              planner.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Can I book a DJ for a beach event?</h3>
            <p className="cardText">
              Yes. We can help with DJ requests for beach events and other
              outdoor gatherings in Gulf Shores and surrounding areas.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Do you only serve Gulf Shores?</h3>
            <p className="cardText">
              No. We also help with events in nearby Gulf Coast areas depending
              on the service and availability.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">Book a DJ in Gulf Shores</h2>
          <p className="sectionText">
            Submit your request and we’ll help connect you with available DJs
            for your event.
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