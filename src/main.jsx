import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./ScrollToTop";
import "./index.css";

const AdminPage = lazy(() => import("./AdminPage"));
const SeoLandingPage = lazy(() => import("./pages/SeoLandingPage"));
const CityHubPage = lazy(() => import("./pages/CityHubPage"));
const { seoPages } = await import("./data/seoPages");
const { cityPages } = await import("./data/cityPages");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div style={{ padding: "40px", textAlign: "center" }}>Loading...</div>}>
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
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);