import { Link } from "react-router-dom";

export default function WeddingBartendersGulfShores() {
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
            Wedding Bartenders in Gulf Shores for Receptions & Events
          </h1>

          <p className="sectionText">
            Looking for wedding bartenders in Gulf Shores? Gulf Coast Event Hub
            helps connect couples and event hosts with bartending services for
            wedding receptions, rehearsal dinners, cocktail hours, and beach
            wedding celebrations along the Gulf Coast.
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
            Bartending Services for Weddings in Gulf Shores
          </h2>

          <p className="sectionText">
            Whether you're planning a beachfront wedding, a private venue
            reception, or a full wedding weekend celebration, we help simplify
            the booking process by matching your request with bartending options
            that fit your event and availability.
          </p>
        </div>

        <div className="cardGrid">
          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Wedding Reception Bartenders</h3>
              <p className="cardText">
                Bartending services for receptions and formal wedding
                celebrations in Gulf Shores.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Cocktail Hour Service</h3>
              <p className="cardText">
                Beverage service for cocktail hour and guest arrivals before the
                reception.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Rehearsal Dinner Bartenders</h3>
              <p className="cardText">
                Bartending options for rehearsal dinners and wedding weekend
                gatherings.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCardContent">
              <h3 className="cardTitle">Beach Wedding Bar Service</h3>
              <p className="cardText">
                Bartenders for beachfront ceremonies and outdoor coastal
                receptions.
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
              Submit your date, venue, guest count, and preferred bar setup.
            </p>
          </div>

          <div className="stepCard">
            <div className="stepNumber">02</div>
            <h3 className="cardTitle">We match your request</h3>
            <p className="cardText">
              We help connect you with bartending services that fit your wedding
              and availability.
            </p>
          </div>

          <div className="stepCard">
            <div className="stepNumber">03</div>
            <h3 className="cardTitle">Your booking moves forward</h3>
            <p className="cardText">
              The vendor handles service, setup, and event coordination details.
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
              No. Gulf Coast Event Hub connects you with bartending services and
              helps streamline the booking process.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Can I bundle with drink machines?</h3>
            <p className="cardText">
              Yes. You can request bartenders along with frozen drink machines
              and other rentals in one request.
            </p>
          </div>

          <div className="stepCard">
            <h3 className="cardTitle">Do you serve only Gulf Shores?</h3>
            <p className="cardText">
              No. We also help with nearby Gulf Coast locations depending on
              availability.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeadingWrap">
          <h2 className="sectionTitle">
            Book Wedding Bartenders in Gulf Shores
          </h2>
          <p className="sectionText">
            Submit your request and we’ll help connect you with available
            bartending services for your wedding.
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