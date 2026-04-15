import { Link } from "react-router-dom";

export default function WeddingCateringOrangeBeach() {
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
            Wedding Catering in Orange Beach for Receptions & Events
          </h1>

          <p className="sectionText">
            Looking for wedding catering in Orange Beach? Gulf Coast Event Hub
            helps connect couples with catering options for wedding receptions,
            rehearsal dinners, cocktail hours, and full wedding weekend events
            along the Gulf Coast.
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
            Catering Options for Orange Beach Weddings
          </h2>

          <p className="sectionText">
            Whether you need full-service catering, buffet-style options, or
            simple reception food, we help make the booking process easier.
            Submit one request and we help match you with options that fit your
            wedding style, guest count, and venue.
          </p>
        </div>

        <div className="cardGrid">
          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Wedding Reception Catering</h3>
              <p className="cardText">
                Catering for wedding receptions in Orange Beach venues, private
                rentals, and coastal event spaces.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Cocktail Hour Food</h3>
              <p className="cardText">
                Light bites, appetizers, and food service options for cocktail
                hour and guest welcome periods.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Rehearsal Dinner Catering</h3>
              <p className="cardText">
                Catering options for rehearsal dinners and pre-wedding
                celebrations.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Buffet & Casual Options</h3>
              <p className="cardText">
                Flexible food service setups for weddings that want a polished
                but relaxed feel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">How Wedding Catering Booking Works</h2>
        </div>

        <div className="stepsGrid">
          <div className="stepCard">
            <div className="stepNumber">01</div>
            <h3 className="cardTitle">Tell us about your wedding</h3>
            <p className="cardText">
              Submit your wedding date, location, guest count, and food service
              preferences.
            </p>
          </div>

          <div className="stepCard">
            <div className="stepNumber">02</div>
            <h3 className="cardTitle">We match your request</h3>
            <p className="cardText">
              We help connect you with catering options that fit your event and
              availability.
            </p>
          </div>

          <div className="stepCard">
            <div className="stepNumber">03</div>
            <h3 className="cardTitle">Your booking moves forward</h3>
            <p className="cardText">
              Once booked, the vendor handles all catering details directly with
              you.
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
            <h3 className="cardTitle">Do you provide catering directly?</h3>
            <p className="cardText">
              No. We help connect you with vendors and streamline the booking
              process.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Can I request multiple food styles?</h3>
            <p className="cardText">
              Yes. You can request buffet, plated, casual, or mixed service
              options.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Do you only serve Orange Beach?</h3>
            <p className="cardText">
              No. We also help with nearby Gulf Coast locations depending on
              vendor availability.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">Book Wedding Catering in Orange Beach</h2>
          <p className="sectionText">
            Submit your request and we’ll help connect you with available
            catering options for your wedding.
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