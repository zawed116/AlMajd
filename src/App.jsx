import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import CompanyProfile from "./pages/CompanyProfile";
import SkilledManpower from "./pages/SkilledManpower.jsx";
import EquipmentRental from "./pages/EquipmentRental.jsx";
import MechanicalPiping from "./pages/MechanicalPiping.jsx";
import CivilConstruction from "./pages/CivilConstruction.jsx";
import ElectricalWorks from "./pages/ElectricalWorks";
import FabricationServices from "./pages/FabricationServices";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-us" element={<Contact />} /> {/* ✅ alias added */}
            <Route path="/companyProfile" element={<CompanyProfile />} />

            {/* Service Detail Pages */}
            <Route path="/services/skilled-manpower" element={<SkilledManpower />} />
            <Route path="/services/equipment-rental" element={<EquipmentRental />} />
            <Route path="/services/mechanical-piping" element={<MechanicalPiping />} />
            <Route path="/services/civil-construction" element={<CivilConstruction />} />
            <Route path="/services/electrical-works" element={<ElectricalWorks />} />
            <Route path="/services/fabrication-services" element={<FabricationServices />} />

            {/* (Optional) Legacy shortcuts */}
            <Route path="/civil-construction" element={<CivilConstruction />} />
            <Route path="/electrical-works" element={<ElectricalWorks />} />
            <Route path="/fabrication-services" element={<FabricationServices />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
