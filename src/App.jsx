import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', eventName, {
    page_title: document.title,
    page_location: window.location.href,
    ...params,
  });
}

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    services: [],
    details: "",
  });

  const [infoForm, setInfoForm] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});

  const [infoSubmitMessage, setInfoSubmitMessage] = useState("");
    const [submitMessage, setSubmitMessage] = useState("");

 const serviceOptions = useMemo(
  () => [
    "Bar Services",
    "Entertainment",
    "Rentals & Setup",
    "Food & Catering",
    "Photography & Video",
    "Decor & Balloon Styling",
  ],
  []
);

  const categoryCards = [
   {
  title: "Bar Services",
  description:
    "Hire bartenders, mobile bars, and drink stations for your event — without calling multiple vendors.",
  icon: "🍸",
  image: "/images/bar-services-poolside.webp",
},
{
  title: "Entertainment",
  description:
    "Book DJs, live music, and party entertainment that keeps your event fun and engaging.",
  icon: "🎶",
  image: "/images/service-dj-wedding.webp",
},
{
  title: "Rentals & Setup",
  description:
    "From water slides and tents to tables and chairs — get everything delivered and set up for your event.",
  icon: "🎉",
  image: "/images/waterslide-rental.webp",
},
{
  title: "Food & Catering",
  description:
    "Find catering, food vendors, and serving options that fit your event size, style, and budget.",
  icon: "🍽️",
  image: "/images/food-catering-backyard-event.webp",
}
];

   const benefitCards = [
    {
      title: "Save Time",
      text: "Skip the endless searching, calling, and messaging. Start with one request.",
    },
    {
      title: "Get Matched Faster",
      text: "We help connect you with local vendors that fit your event needs.",
    },
    {
      title: "Keep It Simple",
      text: "You submit the request, we help make the match, and vendors handle the service details.",
    },
  ];

    const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
      name: "Do you plan the event?",
acceptedAnswer: {
  "@type": "Answer",
  text: "No. Gulf Coast Event Hub helps customers request and book vendors for their event. Gulf Coast Event Hub does not act as an event planner or coordinate the full event timeline.",
},
      },
      {
        "@type": "Question",
        name: "What happens after I submit a request?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "After a request is submitted, Gulf Coast Event Hub reviews the details, matches the customer with vendors that fit the event needs, and handles the booking process. After booking, vendors coordinate directly with the customer for service details.",
        },
      },
      {
        "@type": "Question",
        name: "Do I have to contact multiple vendors myself?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Customers submit one request, and Gulf Coast Event Hub helps connect them with the right vendors so they do not have to spend hours calling around.",
        },
      },
      {
        "@type": "Question",
        name: "What types of services can I book?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Customers can request bartenders, DJs, catering, rentals, tents, party services, and other event-related vendors depending on date and location.",
        },
      },
      {
        "@type": "Question",
        name: "Do vendors handle setup and execution?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Once booked, vendors are responsible for their own delivery, setup, scheduling, communication, and event execution.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gulf Coast Event Hub serves customers across the Gulf Coast, including Mobile, Gulf Shores, Orange Beach, Pensacola, and surrounding areas.",
        },
      },
    ],
  };

    const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Gulf Coast Event Hub",
    url: "https://www.gulfcoasteventhub.com",
logo: "https://www.gulfcoasteventhub.com/images/gulf-coast-logo-complete.svg",
image: "https://www.gulfcoasteventhub.com/images/hero-gulf-coast-event.webp",
    description:
      "Gulf Coast Event Hub helps customers find and book event vendors across the Gulf Coast, including bartenders, DJs, catering, rentals, and more.",
    areaServed: [
  { "@type": "City", name: "Pensacola" },
  { "@type": "City", name: "Pensacola Beach" },
  { "@type": "City", name: "Gulf Breeze" },
  { "@type": "City", name: "Pace" },
  { "@type": "City", name: "Fairhope" },
  { "@type": "City", name: "Daphne" },
  { "@type": "City", name: "Spanish Fort" },
  { "@type": "City", name: "Mobile" },
  { "@type": "City", name: "Gulf Shores" },
  { "@type": "City", name: "Orange Beach" },
  { "@type": "Place", name: "Gulf Coast" }
],
    serviceType: [
      "Bar Services",
      "Entertainment",
      "Rentals and Setup",
      "Food and Catering",
      "Photography and Video",
      "Decor and Balloon Styling"
    ],
    knowsAbout: [
      "Event vendor booking",
      "Bartending services",
      "DJ services",
      "Event rentals",
      "Tent rentals",
      "Catering services",
      "Party vendor coordination"
    ]
  };

 const [formStarted, setFormStarted] = useState(false);

const handleChange = (e) => {
  if (!formStarted) {
    setFormStarted(true);

    trackEvent('form_start', {
      form_name: 'lead_form',
    });
  }

  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

  const handleCheckboxChange = (service) => {
  trackEvent('service_type_select', {
    service_type: service,
  });

  setFormData((prev) => {
    const exists = prev.services.includes(service);
    return {
      ...prev,
      services: exists
        ? prev.services.filter((item) => item !== service)
        : [...prev.services, service],
    };
  });
};
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const response = await fetch(`${API_BASE_URL}/api/event-requests`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

    if (!response.ok) {
  trackEvent('form_error', {
    form_name: 'lead_form',
    error_type: 'backend_error',
  });

  console.error("Backend error:", data);
  setSubmitMessage(data.message || "Request failed.");
  return;
}

trackEvent('lead_form_submit', {
  form_name: 'lead_form',
  service_type: formData.services.join(', ') || 'unknown',
});

      setSubmitMessage("Request submitted successfully.");
      console.log("SUCCESS:", data);

      setFormData({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        eventType: "",
        services: [],
        details: "",
      });
    } catch (error) {
  trackEvent('form_error', {
    form_name: 'lead_form',
    error_type: 'network_error',
  });

  console.error("Network error:", error);
  setSubmitMessage("Server error. Try again.");
}
  };
  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setInfoForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleInfoSubmit = async (e) => {
    e.preventDefault();

    try {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

      const response = await fetch(`${API_BASE_URL}/api/contact-message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(infoForm),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Contact backend error:", data);
        setInfoSubmitMessage(data.message || "Message failed.");
        return;
      }

      setInfoSubmitMessage("Message sent successfully. We will call you within 24 hours.");

      setInfoForm({
  name: "",
  email: "",
  phone: "",
  message: "",
});
    } catch (error) {
      console.error("Contact network error:", error);
      setInfoSubmitMessage("Server error. Please try again.");
    }
  };
 

  return (
    <div className="page">
      <header className="header">
                  <div className="brandRow">
            <img
              src="/images/gulf-coast-logo-complete.svg"
              alt="Gulf Coast Event Hub logo"
              className="brandLogo"
            />
          </div>

          <nav className="nav">
  <a href="#how-it-works" className="navLink">How It Works</a>
  <a href="#services" className="navLink">Services</a>
  <a href="#request" className="navButton">Check Availability & Get Quote</a>
</nav>
      </header>

                <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <section className="heroSection">
          <div className="heroTextWrap">
            <p className="eyebrow">Local vendor matching across the Gulf Coast</p>
<h1 className="heroTitle">
  Stop Calling Vendors. Tell Us What You Need — We’ll Handle the Rest.
</h1>

<p className="heroText">
  Submit one request and get matched with bartenders, DJs, catering, rentals, and more across the Gulf Coast. 
  No back-and-forth, no chasing availability, and no commitment until you approve your quote.
</p>
            <div className="heroActions">
  <a
  href="#request"
  className="primaryButton"
  onClick={() =>
    trackEvent('get_matched_click', {
      button_location: 'hero',
    })
  }
>
  Check Availability & Get Quote
</a>
  <a href="#how-it-works" className="secondaryButton">How It Works</a>
</div>
<p style={{ marginTop: "10px", fontSize: "14px", color: "#5F6B7A" }}>
  Takes less than 60 seconds • See pricing before anything is booked
</p>

<div className="heroMiniList">
  <span>✔ Local Gulf Coast vendors</span>
  <span>✔ One simple request</span>
  <span>✔ Faster event booking</span>
</div>

            <div className="heroStatsRow">
              <div className="statCard">
                <div className="statNumber">1 Request</div>
                <div className="statLabel">to start the process</div>
              </div>
              <div className="statCard">
                <div className="statNumber">Local</div>
                <div className="statLabel">vendor-focused matching</div>
              </div>
              <div className="statCard">
                <div className="statNumber">Simple</div>
                <div className="statLabel">no endless searching</div>
              </div>
            </div>
          </div>

<div className="heroPanel">
  <div className="heroImageCard main">
    <img
      src="/images/hero-gulf-coast-event.webp"
      alt="Gulf Coast beach event with tent, DJ, catering, and bar service"
      className="heroImage heroImageMain"
    />
  </div>

  <div className="heroImageStack">
    <div className="heroImageCard stacked">
      <img
        src="/images/tent-rental.webp"
        alt="Outdoor tent rental setup with tables and lighting in Gulf Coast wedding venue"
        className="heroImage heroImageSmall heroImageTent"
      />
    </div>

    <div className="heroImageCard stacked">
      <img
        src="/images/thirsty-dawg-machine.webp"
        alt="Frozen drink machine setup for Gulf Coast parties and events"
        className="heroImage heroImageSmall heroImageMachine"
      />
    </div>
  </div>
</div>
        </section>

        <section className="section">
  <div className="trustBanner">
    Trusted by Gulf Coast families, hosts, and event organizers to simplify vendor booking and save hours of time.
  </div>
</section>

        <section id="how-it-works" className="section">
          <div className="sectionHeadingWrap">
            <p className="sectionEyebrow">How it works</p>
            <h2 className="sectionTitle">We book the vendors. They handle the event.</h2>
<p className="sectionText">
  Skip the hours of searching, calling, and comparing vendors. Tell us what you need once, and we’ll handle the vendor booking process by matching you with Gulf Coast providers that fit your date, location, and service needs.
</p>
          </div>

          <div className="stepsGrid">
            <div className="stepCard">
              <div className="stepNumber">01</div>
              <h3 className="cardTitle">Submit your event details</h3>
              <p className="cardText">
                Tell us your date, event type, and the services you need in one simple request.
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">02</div>
              <h3 className="cardTitle">Review your quote</h3>
<p className="cardText">
  We build a quote based on your event details, date, and services needed. You review pricing and options before anything is booked.
</p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">03</div>
              <h3 className="cardTitle">Vendors handle the event</h3>
              <p className="cardText">
                After booking, vendors coordinate directly with you for scheduling, delivery, setup, and execution.
              </p>
            </div>
          </div>
        </section>

        <section className="section sectionAlt">
  <div className="sectionHeadingWrap">
    <p className="sectionEyebrow">Planning your event?</p>
    <h2 className="sectionTitle">Start here — no matter how you’re planning your event</h2>

    <p className="sectionText">
      Whether you plan everything yourself or hire a coordinator, the hardest part is always the same:
      finding the right vendors and getting them all lined up.
    </p>
  </div>

  <div className="stepsGrid">
    <div className="stepCard">
      <h3 className="cardTitle">Planning it yourself?</h3>
      <p className="cardText">
        Skip hours of searching, calling, and comparing vendors. Submit one request and get matched with
        options that fit your event, date, and location.
      </p>
    </div>

    <div className="stepCard">
      <h3 className="cardTitle">Working with a coordinator?</h3>
            <p className="cardText">
        We help you find vendors faster and explore options across the Gulf Coast — whether you're planning it yourself or working with a coordinator.
      </p>
    </div>

    <div className="stepCard">
      <h3 className="cardTitle">Need a coordinator too?</h3>
            <p className="cardText">
        We can help connect you with experienced event coordinators who fit your style, event type, and budget — so you can get the right help from the start.
      </p>
    </div>
  </div>
</section>

        <section id="services" className="section sectionAlt">
          <div className="sectionHeadingWrap">
            <p className="sectionEyebrow">Popular event services</p>
            <h2 className="sectionTitle">
  Event Services Available on the Gulf Coast
</h2>

<p className="sectionText">
  Request bartending, entertainment, rentals, catering, and more for parties, weddings, and events across the Gulf Coast.
</p>
          </div>

              <div className="cardGrid">
            {categoryCards.map((card) => (
              <div key={card.title} className="serviceCard">
                {card.image ? (
                  <>
                    <img
                      src={card.image}
                      alt={`${card.title} for parties and events on the Gulf Coast`}
                      className="serviceCardImage"
                    />
                   <div className="serviceCardContent">
  <h3 className="cardTitle">{card.title}</h3>
  <p className="cardText">{card.description}</p>
</div>
                  </>
                ) : (
                 <div className="serviceCardContent">
  <div className="serviceIcon">{card.icon}</div>
  <h3 className="cardTitle">{card.title}</h3>
  <p className="cardText">{card.description}</p>
</div>
                )}
              </div>
            ))}
          </div>
        </section>

                <section className="section">
          <div className="sectionHeadingWrap">
            <p className="sectionEyebrow">Popular local searches</p>
            <h2 className="sectionTitle">Popular Gulf Coast Event Services</h2>
            <p className="sectionText">
              Explore popular event services and city-specific pages across the Gulf Coast.
            </p>
          </div>

          <div className="cardGrid">
            <div className="serviceCard">
              <div className="serviceCardContent">
                <h3 className="cardTitle">
                  <Link to="/bartenders-pensacola">Bartenders in Pensacola</Link>
                </h3>
                <p className="cardText">
                  Bartending services for weddings, parties, and events in Pensacola.
                </p>
              </div>
            </div>

            <div className="serviceCard">
              <div className="serviceCardContent">
                <h3 className="cardTitle">
                  <Link to="/bartenders-orange-beach">Bartenders in Orange Beach</Link>
                </h3>
                <p className="cardText">
                  Book bartenders for beach events, weddings, and private parties.
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
                  Popular frozen drink rentals for parties, weddings, and celebrations.
                </p>
              </div>
            </div>

            <div className="serviceCard">
              <div className="serviceCardContent">
                <h3 className="cardTitle">
                  <Link to="/tent-rentals-pensacola">Tent Rentals in Pensacola</Link>
                </h3>
                <p className="cardText">
                  Tent rentals and event setup options for Pensacola events.
                </p>
              </div>
            </div>

            <div className="serviceCard">
              <div className="serviceCardContent">
                <h3 className="cardTitle">
                  <Link to="/soft-serve-machine-rentals-fairhope">
                    Soft Serve Machine Rentals in Fairhope
                  </Link>
                </h3>
                <p className="cardText">
                  Soft serve rentals for weddings, parties, and local celebrations.
                </p>
              </div>
            </div>

            <div className="serviceCard">
              <div className="serviceCardContent">
                <h3 className="cardTitle">
                  <Link to="/wedding-bartenders-gulf-shores">
                    Wedding Bartenders in Gulf Shores
                  </Link>
                </h3>
                <p className="cardText">
                  Bartending services for Gulf Shores wedding receptions and cocktail hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section sectionAlt">
  <div className="sectionHeadingWrap">
    <p className="sectionEyebrow">Popular service areas</p>
    <h2 className="sectionTitle">Explore Event Services by City</h2>
    <p className="sectionText">
      Browse popular Gulf Coast service areas to explore bartenders, DJs, rentals,
      catering, dessert stations, and more by location.
    </p>
  </div>

  <div className="cardGrid">
    <div className="serviceCard">
      <div className="serviceCardContent">
        <h3 className="cardTitle">
          <Link to="/pensacola-event-services">Pensacola Event Services</Link>
        </h3>
        <p className="cardText">
          Explore bartenders, DJs, catering, rentals, dessert stations, and more in Pensacola.
        </p>
      </div>
    </div>

    <div className="serviceCard">
      <div className="serviceCardContent">
        <h3 className="cardTitle">
          <Link to="/orange-beach-event-services">Orange Beach Event Services</Link>
        </h3>
        <p className="cardText">
          Browse event services and rentals for beach events, weddings, and private parties.
        </p>
      </div>
    </div>

    <div className="serviceCard">
      <div className="serviceCardContent">
        <h3 className="cardTitle">
          <Link to="/gulf-shores-event-services">Gulf Shores Event Services</Link>
        </h3>
        <p className="cardText">
          Find bartenders, rentals, catering, dessert stations, and more in Gulf Shores.
        </p>
      </div>
    </div>

    <div className="serviceCard">
      <div className="serviceCardContent">
        <h3 className="cardTitle">
          <Link to="/fairhope-event-services">Fairhope Event Services</Link>
        </h3>
        <p className="cardText">
          Explore wedding-friendly and private event service options in Fairhope.
        </p>
      </div>
    </div>

    <div className="serviceCard">
      <div className="serviceCardContent">
        <h3 className="cardTitle">
          <Link to="/daphne-event-services">Daphne Event Services</Link>
        </h3>
        <p className="cardText">
          Browse party and event services for birthdays, family gatherings, and more in Daphne.
        </p>
      </div>
    </div>
  </div>
</section>

        <section className="section">
          <div className="sectionHeadingWrap">
            <p className="sectionEyebrow">Why use Gulf Coast Event Hub?</p>
            <h2 className="sectionTitle">Stop calling vendors and waiting on responses</h2>
            <p className="sectionText">
  Most events require reaching out to multiple vendors, waiting for availability, and comparing options. We simplify that by handling the vendor matching and booking process for you.
</p>
          </div>

          <div className="stepsGrid">
            {benefitCards.map((item) => (
              <div key={item.title} className="stepCard">
                <h3 className="cardTitle">{item.title}</h3>
                <p className="cardText">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="section">
          <div className="sectionHeadingWrap">
            <p className="sectionEyebrow">FAQ</p>
            <h2 className="sectionTitle">Common questions before you book</h2>
            <p className="sectionText">
              Here’s how Gulf Coast Event Hub works and what to expect when you submit a request.
            </p>
          </div>

          <div className="faqGrid">
            <div className="faqCard">
              <h3 className="cardTitle">Do you plan the event?</h3>
<p className="cardText">
  No. Gulf Coast Event Hub helps customers request and book vendors for their event. We do not act as an event planner or coordinate the full event timeline.
</p>
            </div>

            <div className="faqCard">
<h3 className="cardTitle">How is this different from a coordinator?</h3>
<p className="cardText">
  Coordinators manage your event timeline and execution. Gulf Coast Event Hub helps you find and book the right vendors quickly.
  Many customers use us to build their vendor team first, then decide if they want a coordinator to manage the event.
</p>
</div>

            <div className="faqCard">
              <h3 className="cardTitle">What happens after I submit a request?</h3>
              <p className="cardText">
  After you submit your request, we review your details and build a quote based on your event, date, and services needed. 
  Once you approve the quote, we move forward with securing vendors that match your event.
  
  You’ll always know what to expect before anything is booked, and vendors coordinate directly with you after booking for final details, scheduling, and execution.
</p>
            </div>

            <div className="faqCard">
              <h3 className="cardTitle">Do I have to contact multiple vendors myself?</h3>
              <p className="cardText">
                No. You submit one request, and we help connect you with the right vendors so you do not have to spend hours calling around.
              </p>
            </div>

            <div className="faqCard">
              <h3 className="cardTitle">What types of services can I book?</h3>
              <p className="cardText">
                You can request bartenders, DJs, catering, rentals, tents, party services, and other event-related vendors depending on your date and location.
              </p>
            </div>

            <div className="faqCard">
              <h3 className="cardTitle">Do vendors handle setup and execution?</h3>
              <p className="cardText">
                Yes. Once booked, vendors are responsible for their own delivery, setup, scheduling, communication, and event execution.
              </p>
            </div>

            <div className="faqCard">
              <h3 className="cardTitle">What areas do you serve?</h3>
              <p className="cardText">
                We serve customers across the Gulf Coast, including Mobile, Gulf Shores, Orange Beach, Pensacola, and surrounding areas.
              </p>
            </div>
          </div>
        </section>

                <section className="section">
          <div className="requestWrap">
            <div className="requestIntro">
              <p className="sectionEyebrow">Need more information?</p>
              <h2 className="sectionTitle">Want Additional Information? Send Us a Message.</h2>
              <p className="sectionText">
                Have a question before booking? Send us a message and we’ll reach out to help.
                We will call you within 24 hours.
              </p>

              <p className="sectionText" style={{ marginTop: "10px" }}>
                Prefer to talk now? Call or text us at{" "}
                <a href="tel:8507809757">(850) 780-9757</a>.
              </p>

              <div className="disclaimerBox">
                <strong>What to expect:</strong> Send us your question and a member of our team
                will follow up by phone within 24 hours.
              </div>
            </div>

            <form onSubmit={handleInfoSubmit} className="formCard">
              <div className="fieldWrap">
                <label className="label">Full Name</label>
                <input
                  name="name"
                  value={infoForm.name}
                  onChange={handleInfoChange}
                  placeholder="Your name"
                  className="input"
                  required
                />
              </div>

              <div className="fieldWrap">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  value={infoForm.email}
                  onChange={handleInfoChange}
                  placeholder="you@example.com"
                  className="input"
                  required
                />
              </div>

              <div className="fieldWrap">
  <label className="label">Phone Number</label>
  <input
    name="phone"
    value={infoForm.phone}
    onChange={handleInfoChange}
    placeholder="Your phone number"
    className="input"
    required
  />
</div>

              <div className="fieldWrap">
                <label className="label">Message</label>
                <textarea
                  name="message"
                  value={infoForm.message}
                  onChange={handleInfoChange}
                  placeholder="Tell us what you'd like to know."
                  rows={5}
                  className="textarea"
                  required
                />
              </div>

              {infoSubmitMessage && (
                <p style={{ marginBottom: "16px", color: "#0d3b66", fontWeight: 700 }}>
                  {infoSubmitMessage}
                </p>
              )}

              <button type="submit" className="submitButton">Send Message</button>
            </form>
          </div>
        </section>

        <section className="section sectionAlt">
          <div className="sectionHeadingWrap">
            <p className="sectionEyebrow">Service Areas</p>
            <h2 className="sectionTitle">Serving customers across the Gulf Coast</h2>
            <p className="sectionText">
              Gulf Coast Event Hub helps customers book event vendors in Pensacola, Pensacola Beach, Gulf Breeze, Pace, Fairhope, Daphne, Spanish Fort, Mobile, Gulf Shores, Orange Beach, and surrounding Gulf Coast areas.
            </p>
          </div>

          <div className="stepsGrid">
            <div className="stepCard">
              <h3 className="cardTitle">Florida Panhandle</h3>
              <p className="cardText">
                Pensacola, Pensacola Beach, Gulf Breeze, Pace, and nearby areas.
              </p>
            </div>

            <div className="stepCard">
              <h3 className="cardTitle">Eastern Shore & Mobile Bay</h3>
              <p className="cardText">
                Fairhope, Daphne, Spanish Fort, and surrounding communities.
              </p>
            </div>

            <div className="stepCard">
              <h3 className="cardTitle">Alabama Gulf Coast</h3>
              <p className="cardText">
                Mobile, Gulf Shores, Orange Beach, and surrounding Gulf Coast areas.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
  <div className="ctaBlock">
    <h2 className="sectionTitle">Tell us what you need. We’ll handle the vendor booking.</h2>
    <p className="sectionText">
      Skip the back-and-forth with multiple vendors. Submit one request and get matched with Gulf Coast providers that fit your event, date, and location.
    </p>

    <div className="heroActions">
      <a
  href="#request"
  className="primaryButton"
  onClick={() =>
    trackEvent('get_matched_click', {
      button_location: 'cta_section',
    })
  }
>
  Check Availability & Get Pricing
</a>
    </div>
  </div>
</section>

        <section id="request" className="section sectionAlt">
          <div className="requestWrap">
  <div className="requestIntro">
              <p className="sectionEyebrow">Get started</p>
              <h2 className="sectionTitle">Book your event services</h2>
<p className="sectionText">
  Submit your event details and we’ll handle booking the vendors that fit your needs — so you don’t have to search, call, or line everything up yourself.
</p>

             <ul className="bulletList">
  <li>We match you with available vendors for your exact date</li>
  <li>No calling multiple vendors or waiting on responses</li>
  <li>Save hours trying to line up vendors</li>
</ul>

              <div className="disclaimerBox">
  <strong>Important:</strong> Gulf Coast Event Hub books services with independent vendors on your behalf. Once booked, vendors are responsible for their own scheduling, communication, and event execution.
</div>
</div>
            <form onSubmit={handleSubmit} className="formCard">
              <div className="inputGrid">
                <div className="fieldWrap">
                  <label className="label">Full Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="input"
                    required
                  />
                </div>

                <div className="fieldWrap">
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="input"
                    required
                  />
                </div>

                <div className="fieldWrap">
                  <label className="label">Phone</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="input"
                    required
                  />
                </div>

                <div className="fieldWrap">
                  <label className="label">Event Date</label>
                  <input
                    name="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                </div>
              </div>

              <div className="fieldWrap">
                <label className="label">Event Type</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="input"
                  required
                >
                  <option value="">Select an event type</option>
                  <option>Birthday Party</option>
                  <option>Wedding</option>
                  <option>Corporate Event</option>
                  <option>Beach Event</option>
                  <option>School / Church Event</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="fieldWrap">
                <label className="label">Services Needed</label>
                <div className="checkboxGrid">
                  {serviceOptions.map((service) => (
                    <label key={service} className="checkboxLabel">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleCheckboxChange(service)}
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="fieldWrap">
                <label className="label">Event Details</label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell us what you're planning, guest count, location, and anything else helpful."
                  rows={5}
                  className="textarea"
                />
              </div>

              {submitMessage && (
                <p style={{ marginBottom: "16px", color: "#0d3b66", fontWeight: 700 }}>
                  {submitMessage}
                </p>
              )}

              <button type="submit" className="submitButton">Check Availability & Get Quote</button>
            </form>
          </div>
        </section>
      </main>
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
  <p className="footerServiceArea">
    Serving Pensacola, Pensacola Beach, Gulf Breeze, Pace, Fairhope, Daphne, Spanish Fort, Mobile, Gulf Shores, Orange Beach, and surrounding Gulf Coast areas.
  </p>
  <p className="footerText">
    Call or text: <a href="tel:8507809757">(850) 780-9757</a>
  </p>
</div>

    <div className="footerLinks">
      <a href="#how-it-works">How It Works</a>
      <a href="#services">Services</a>
      <a href="#request">Request Quote</a>
            <a href="tel:8507809757">(850) 780-9757</a>

     
    </div>
  </div>
</footer>
    </div>
  );
}