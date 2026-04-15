import { Link } from "react-router-dom";

export default function WeddingBartendersDaphne() {
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
            Wedding Bartenders in Daphne for Receptions & Events
          </h1>

          <p className="sectionText">
            Looking for wedding bartenders in Daphne? Gulf Coast Event Hub helps
            connect couples and event hosts with bartending services for wedding
            receptions, rehearsal dinners, cocktail hours, and other
            wedding-related events along the Gulf Coast.
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
            Bartending Services for Weddings in Daphne
          </h2>

          <p className="sectionText">
            Whether you need bartenders for a wedding reception, cocktail hour,
            rehearsal dinner, or private venue celebration, we help make the
            booking process simpler. Submit one request and we help match you
            with options that fit your event and availability.
          </p>
        </div>

        <div className="cardGrid">
          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Wedding Reception Bartenders</h3>
              <p className="cardText">
                Bartending services for wedding receptions and formal event
                celebrations in Daphne.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Cocktail Hour Service</h3>
              <p className="cardText">
                Bartender service for cocktail hours and guest beverage service
                before the reception begins.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Rehearsal Dinner Bartenders</h3>
              <p className="cardText">
                Beverage service options for rehearsal dinners and wedding
                weekend gatherings.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Private Venue Wedding Bars</h3>
              <p className="cardText">
                Bartending support for private venues, outdoor receptions, and
                other wedding-related events.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">How Wedding Bartender Booking Works</h2>
        </div>

        <div className="stepsGrid">
          <div className="stepCard">
            <div className="stepNumber">01</div>
            <h3 className="cardTitle">Tell us about your wedding</h3>
            <p className="cardText">
              Submit your date, venue area, guest count, and the type of bar
              service you are looking for.
            </p>
          </div>

          <div className="stepCard">
            <div className="stepNumber">02</div>
            <h3 className="cardTitle">We help match your request</h3>
            <p className="cardText">
              We review your request and help connect you with bartending
              options that fit your wedding and availability.
            </p>
          </div>

          <div className="stepCard">
            <div className="stepNumber">03</div>
            <h3 className="cardTitle">Your booking moves forward</h3>
            <p className="cardText">
              Once booked, the vendor handles the service details directly with
              you for the event.
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
            <h3 className="cardTitle">Do you provide the bartenders directly?</h3>
            <p className="cardText">
              No. Gulf Coast Event Hub helps connect customers with vendors and
              helps move the booking process forward.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Can I request bartenders for cocktail hour only?</h3>
            <p className="cardText">
              Yes. You can request bartending support for cocktail hour, the
              full reception, or other wedding-related events.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Do you only serve Daphne?</h3>
            <p className="cardText">
              No. We also help with nearby Gulf Coast areas depending on vendor
              availability and event type.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">Book Wedding Bartenders in Daphne</h2>
          <p className="sectionText">
            Submit your request and we’ll help connect you with available
            bartending options for your wedding or event.
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