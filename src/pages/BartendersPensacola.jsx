import { Link } from "react-router-dom";
export default function BartendersPensacola() {
  return (
  <div className="page">

    {/* HEADER */}
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

    {/* PAGE CONTENT (your existing sections) */}
    <section className="section">
      <div className="sectionHeadingWrap">
        <h1 className="sectionTitle">
          Bartenders in Pensacola for Weddings, Parties & Events
        </h1>

        <p className="sectionText">
          Tell us what you need and we’ll connect you with experienced
          bartenders in Pensacola who match your event, guest count, and setup.
          No calling multiple vendors — we handle the booking for you.
        </p>
      </div>

      <div className="ctaBlock">
        <a href="/#request" className="primaryButton">
          Get Bartender Pricing
        </a>
      </div>
    </section>


    <section className="section sectionAlt">
      <div className="sectionHeadingWrap">
        <h2 className="sectionTitle">
          Mobile Bartending Services in Pensacola
        </h2>

        <p className="sectionText">
          We match you with bartenders for weddings, private parties,
          corporate events, beach gatherings, and more.
        </p>
      </div>

      <div className="cardGrid">
        <div className="serviceCard">
          <div className="serviceCardContent">
            <h3 className="cardTitle">Wedding Bartenders</h3>
            <p className="cardText">
              Professional bartenders for weddings and receptions.
            </p>
          </div>
        </div>

        <div className="serviceCard">
          <div className="serviceCardContent">
            <h3 className="cardTitle">Private Party Bartenders</h3>
            <p className="cardText">
              Perfect for birthdays and backyard events.
            </p>
          </div>
        </div>

        <div className="serviceCard">
          <div className="serviceCardContent">
            <h3 className="cardTitle">Corporate Event Bartenders</h3>
            <p className="cardText">
              Reliable service for business and networking events.
            </p>
          </div>
        </div>

        <div className="serviceCard">
          <div className="serviceCardContent">
            <h3 className="cardTitle">Mobile Bar Setups</h3>
            <p className="cardText">
              Full setups, drink stations, and service staff.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="sectionHeadingWrap">
        <h2 className="sectionTitle">
          How Bartender Booking Works
        </h2>
      </div>

      <div className="stepsGrid">
        <div className="stepCard">
          <div className="stepNumber">01</div>
          <h3 className="cardTitle">Submit your event details</h3>
          <p className="cardText">
            Tell us your date, location, and bar needs.
          </p>
        </div>

        <div className="stepCard">
          <div className="stepNumber">02</div>
          <h3 className="cardTitle">We match you with bartenders</h3>
          <p className="cardText">
            We find available bartenders in Pensacola.
          </p>
        </div>

        <div className="stepCard">
          <div className="stepNumber">03</div>
          <h3 className="cardTitle">Vendors handle the event</h3>
          <p className="cardText">
            Your bartender handles service and setup.
          </p>
        </div>
      </div>
    </section>

    <section className="section sectionAlt">
      <div className="sectionHeadingWrap">
        <h2 className="sectionTitle">
          Book a Bartender in Pensacola
        </h2>

        <p className="sectionText">
          Submit your request and we’ll connect you with available bartenders.
        </p>
      </div>

      <div className="ctaBlock">
        <a href="/#request" className="primaryButton">
          Check Availability & Get Pricing
        </a>
      </div>
    </section>

        <section className="section">
      <div className="sectionHeadingWrap">
        <h2 className="sectionTitle">Related Services & Locations</h2>
        <p className="sectionText">
          Explore more bartending services, drink rentals, and nearby Gulf Coast
          event options.
        </p>
      </div>

      <div className="cardGrid">
        <div className="serviceCard">
          <div className="serviceCardContent">
            <h3 className="cardTitle">
              <Link to="/wedding-bartenders-pensacola">
                Wedding Bartenders in Pensacola
              </Link>
            </h3>
            <p className="cardText">
              Bartending services for receptions, cocktail hours, and wedding
              celebrations.
            </p>
          </div>
        </div>

        <div className="serviceCard">
          <div className="serviceCardContent">
            <h3 className="cardTitle">
              <Link to="/frozen-drink-machine-rentals-pensacola">
                Frozen Drink Machine Rentals in Pensacola
              </Link>
            </h3>
            <p className="cardText">
              A great add-on for weddings, private parties, and outdoor events.
            </p>
          </div>
        </div>

        <div className="serviceCard">
          <div className="serviceCardContent">
            <h3 className="cardTitle">
              <Link to="/bartenders-orange-beach">
                Bartenders in Orange Beach
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
              <Link to="/tent-rentals-pensacola">
                Tent Rentals in Pensacola
              </Link>
            </h3>
            <p className="cardText">
              Pair bartending with tents and other event setup essentials.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* FOOTER */}
    <footer className="siteFooter">
      <div className="footerInner">
        <div className="footerBrandBlock">
          <img
            src="/images/gulf-coast-logo-complete.svg"
            alt="Gulf Coast Event Hub logo"
            className="footerLogo"
          />
          <p className="footerText">
            A simpler way to connect event customers with local Gulf Coast vendors.
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