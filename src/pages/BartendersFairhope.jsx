import { Link } from "react-router-dom";

export default function BartendersFairhope() {
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
            Bartenders in Fairhope for Weddings, Parties & Events
          </h1>

          <p className="sectionText">
            Looking for bartenders in Fairhope? Gulf Coast Event Hub helps
            connect customers with bartending services for weddings, private
            parties, corporate events, outdoor gatherings, and other
            celebrations along the Gulf Coast.
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
            Bartending Services for Fairhope Events
          </h2>

          <p className="sectionText">
            Whether you're planning a wedding, hosting a private party, or
            organizing a corporate event, we help simplify the booking process by
            matching your request with bartending options that fit your event
            size and style.
          </p>
        </div>

        <div className="cardGrid">
          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Wedding Bartenders</h3>
              <p className="cardText">
                Bartending services for ceremonies, receptions, and wedding
                weekend celebrations.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Private Parties</h3>
              <p className="cardText">
                Great for birthdays, backyard parties, and family gatherings.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Corporate Events</h3>
              <p className="cardText">
                Professional bartenders for company events and team gatherings.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Outdoor & Venue Events</h3>
              <p className="cardText">
                Bartending services for outdoor venues, private spaces, and
                special events in Fairhope.
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
              Submit your event date, location, guest count, and bartending
              needs.
            </p>
          </div>

          <div className="stepCard">
            <div className="stepNumber">02</div>
            <h3 className="cardTitle">We match your request</h3>
            <p className="cardText">
              We help connect you with bartending options that fit your event.
            </p>
          </div>

          <div className="stepCard">
            <div className="stepNumber">03</div>
            <h3 className="cardTitle">Your booking moves forward</h3>
            <p className="cardText">
              The service provider handles setup and service details.
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
            <h3 className="cardTitle">Do you provide bartenders directly?</h3>
            <p className="cardText">
              No. Gulf Coast Event Hub helps connect customers with bartending
              services and helps move the booking process forward.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Can I request drink machines too?</h3>
            <p className="cardText">
              Yes. You can request bartenders along with frozen drink machines,
              rentals, and other services in one quote request.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Do you only serve Fairhope?</h3>
            <p className="cardText">
              No. We also help with nearby Gulf Coast areas.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">Book Bartenders in Fairhope</h2>
          <p className="sectionText">
            Submit your request and we’ll help connect you with available
            bartending services for your event.
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
    <h2 className="sectionTitle">Related Services & Locations</h2>
    <p className="sectionText">
      Explore more bartending services, rentals, and nearby Gulf Coast locations.
    </p>
  </div>

  <div className="cardGrid">
    <div className="serviceCard">
      <div className="serviceCardContent">
        <h3 className="cardTitle">
          <Link to="/wedding-bartenders-fairhope">
            Wedding Bartenders in Fairhope
          </Link>
        </h3>
        <p className="cardText">
          Bartending services for receptions, cocktail hours, and wedding events.
        </p>
      </div>
    </div>

    <div className="serviceCard">
      <div className="serviceCardContent">
        <h3 className="cardTitle">
          <Link to="/frozen-drink-machine-rentals-fairhope">
            Frozen Drink Machine Rentals in Fairhope
          </Link>
        </h3>
        <p className="cardText">
          A great add-on for parties, weddings, and outdoor events.
        </p>
      </div>
    </div>

    <div className="serviceCard">
      <div className="serviceCardContent">
        <h3 className="cardTitle">
          <Link to="/bartenders-pensacola">
            Bartenders in Pensacola
          </Link>
        </h3>
        <p className="cardText">
          Explore bartending services in another nearby Gulf Coast market.
        </p>
      </div>
    </div>

    <div className="serviceCard">
      <div className="serviceCardContent">
        <h3 className="cardTitle">
          <Link to="/tent-rentals-fairhope">
            Tent Rentals in Fairhope
          </Link>
        </h3>
        <p className="cardText">
          Pair bartending with tents and full event setup options.
        </p>
      </div>
    </div>
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