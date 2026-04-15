import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AdminPage from "./AdminPage";
import BartendersPensacola from "./pages/BartendersPensacola";
import DJServicesGulfShores from "./pages/DJServicesGulfShores";
import PartyRentalsOrangeBeach from "./pages/PartyRentalsOrangeBeach";
import CateringPensacola from "./pages/CateringPensacola";
import WeddingBartendersOrangeBeach from "./pages/WeddingBartendersOrangeBeach";
import CorporateEventDJsPensacola from "./pages/CorporateEventDJsPensacola";
import WeddingCateringOrangeBeach from "./pages/WeddingCateringOrangeBeach";
import TentRentalsOrangeBeach from "./pages/TentRentalsOrangeBeach";
import TableAndChairRentalsOrangeBeach from "./pages/TableAndChairRentalsOrangeBeach";
import BounceHouseRentalsPensacola from "./pages/BounceHouseRentalsPensacola";
import TentRentalsFairhope from "./pages/TentRentalsFairhope";
import TableAndChairRentalsDaphne from "./pages/TableAndChairRentalsDaphne";
import TentRentalsPensacola from "./pages/TentRentalsPensacola";
import BounceHouseRentalsDaphne from "./pages/BounceHouseRentalsDaphne";
import FrozenDrinkRentalsPensacola from "./pages/FrozenDrinkRentalsPensacola";
import SoftServeMachineRentalsPensacola from "./pages/SoftServeMachineRentalsPensacola";
import IceCreamCartRentalsPensacola from "./pages/IceCreamCartRentalsPensacola";
import FrozenDrinkRentalsFairhope from "./pages/FrozenDrinkRentalsFairhope";
import SoftServeMachineRentalsFairhope from "./pages/SoftServeMachineRentalsFairhope";
import IceCreamCartRentalsFairhope from "./pages/IceCreamCartRentalsFairhope";
import FrozenDrinkRentalsDaphne from "./pages/FrozenDrinkRentalsDaphne";
import SoftServeMachineRentalsDaphne from "./pages/SoftServeMachineRentalsDaphne";
import IceCreamCartRentalsDaphne from "./pages/IceCreamCartRentalsDaphne";
import BartendersOrangeBeach from "./pages/BartendersOrangeBeach";
import BartendersFairhope from "./pages/BartendersFairhope";
import BartendersDaphne from "./pages/BartendersDaphne";
import WeddingBartendersPensacola from "./pages/WeddingBartendersPensacola";
import WeddingBartendersFairhope from "./pages/WeddingBartendersFairhope";
import WeddingBartendersDaphne from "./pages/WeddingBartendersDaphne";
import BartendersGulfShores from "./pages/BartendersGulfShores";
import WeddingBartendersGulfShores from "./pages/WeddingBartendersGulfShores";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/bartenders-pensacola" element={<BartendersPensacola />} />
        <Route path="/dj-services-gulf-shores" element={<DJServicesGulfShores />} />
        <Route path="/party-rentals-orange-beach" element={<PartyRentalsOrangeBeach />} />
        <Route path="/catering-pensacola" element={<CateringPensacola />} />
        <Route path="/wedding-bartenders-pensacola" element={<WeddingBartendersPensacola />} />
        <Route path="/wedding-bartenders-fairhope" element={<WeddingBartendersFairhope />} />
        <Route path="/wedding-bartenders-orange-beach" element={<WeddingBartendersOrangeBeach />} />
        <Route path="/corporate-event-djs-pensacola" element={<CorporateEventDJsPensacola />} />
        <Route path="/wedding-catering-orange-beach" element={<WeddingCateringOrangeBeach />} />
        <Route path="/tent-rentals-orange-beach" element={<TentRentalsOrangeBeach />} />
        <Route path="/table-and-chair-rentals-orange-beach" element={<TableAndChairRentalsOrangeBeach />} />
        <Route path="/bounce-house-rentals-pensacola" element={<BounceHouseRentalsPensacola />} />
        <Route path="/tent-rentals-fairhope" element={<TentRentalsFairhope />} />
        <Route path="/table-and-chair-rentals-daphne" element={<TableAndChairRentalsDaphne />} />
        <Route path="/tent-rentals-pensacola" element={<TentRentalsPensacola />} />
        <Route path="/bounce-house-rentals-daphne" element={<BounceHouseRentalsDaphne />} />
        <Route path="/frozen-drink-machine-rentals-pensacola" element={<FrozenDrinkRentalsPensacola />} />
        <Route path="/soft-serve-machine-rentals-pensacola" element={<SoftServeMachineRentalsPensacola />} />
        <Route path="/ice-cream-cart-rentals-pensacola" element={<IceCreamCartRentalsPensacola />} />
        <Route path="/frozen-drink-machine-rentals-fairhope" element={<FrozenDrinkRentalsFairhope />} />
        <Route path="/soft-serve-machine-rentals-fairhope" element={<SoftServeMachineRentalsFairhope />} />
        <Route path="/ice-cream-cart-rentals-fairhope" element={<IceCreamCartRentalsFairhope />} />
        <Route path="/frozen-drink-machine-rentals-daphne" element={<FrozenDrinkRentalsDaphne />} />
        <Route path="/soft-serve-machine-rentals-daphne" element={<SoftServeMachineRentalsDaphne />} />
        <Route path="/ice-cream-cart-rentals-daphne" element={<IceCreamCartRentalsDaphne />} />
        <Route path="/bartenders-orange-beach" element={<BartendersOrangeBeach />} />
        <Route path="/bartenders-fairhope" element={<BartendersFairhope />} />
        <Route path="/bartenders-daphne" element={<BartendersDaphne />} />
        <Route path="/wedding-bartenders-daphne" element={<WeddingBartendersDaphne />} />
        <Route path="/bartenders-gulf-shores" element={<BartendersGulfShores />} />
        <Route path="/wedding-bartenders-gulf-shores" element={<WeddingBartendersGulfShores />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);