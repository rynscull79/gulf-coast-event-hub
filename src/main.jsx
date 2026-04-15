import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AdminPage from "./AdminPage";
import SeoLandingPage from "./pages/SeoLandingPage";
import { seoPages } from "./data/seoPages";
import "./index.css";
import CityHubPage from "./pages/CityHubPage";
import { cityPages } from "./data/cityPages";
import ScrollToTop from "./ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />

        {seoPages.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={
              <SeoLandingPage
                serviceKey={page.serviceKey}
                cityKey={page.cityKey}
              />
            }
          />
        ))}

        {cityPages.map((city) => (
          <Route
            key={city.path}
            path={city.path}
            element={
              <CityHubPage
                cityKey={city.key}
                cityName={city.name}
              />
            }
          />
        ))}

        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);