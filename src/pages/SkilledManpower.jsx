import React from "react";
import { useNavigate } from "react-router-dom";

const SkilledManpower = () => {
  const navigate = useNavigate();

  return (
    <div className="py-16 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skilled Manpower
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Manpower is your go-to partner for workforce solutions, supplying
            companies with top talent. We have a successful track record of
            matching businesses with talented individuals that spur expansion
            and creativity. Count on us to provide exceptional staffing and
            recruitment services that are customized to meet your specific needs.
          </p>
          <button
            onClick={() => navigate("/contact-us")}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
          >
            GET STARTED NOW
          </button>
        </div>

        {/* Right Side - Image */}
        <div>
          <img
            src="https://wagcksa.com/wp-content/uploads/2025/03/Trends-Shaping-Manpower-Supply-Blog-banner-1.jpg"
            alt="Skilled Manpower"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Skill Cards Section */}
<div
  className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center px-6 py-12"
  style={{
    backgroundImage: "url('https://awtadc.com/wp-content/uploads/2025/04/Manpower-supply.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Section Heading */}
  <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 drop-shadow-lg">
    Our Manpower Categories
  </h2>

  {/* Cards Grid */}
  <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full text-black">
    
    {/* Mechanical & Piping */}
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-lg font-bold mb-3">MECHANICAL & PIPING</h3>
      <p className="text-sm leading-relaxed text-gray-700">
        Mechanical QA / QC , Inspector , Mechanical Supervisor <br />
        Mechanical Foreman , Mechanical Technician , Mechanical Fitter / Fitter ,
        Structure Fitter , Piping QA / QC , Inspector , Piping Supervisor , Piping
        Foreman Structure , Piping Fabricator Vessel Fabricator , Vessel Fitter ,
        Vessel Fabricator Foreman Welding QC , Inspector Welding , Foreman , Multi
        Welder , FCAW Welder , SMAW Welder , Structure Welder 3G Welder , 4G Welder ,
        6G Welder
      </p>
    </div>

    {/* Electricals */}
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-lg font-bold mb-3">ELECTRICALS</h3>
      <ul className="text-sm text-gray-700 leading-relaxed list-disc list-inside">
        <li>Industrial Electrician</li>
        <li>Electrical Engineer</li>
        <li>Electrical Supervisor</li>
        <li>Electrical Foreman</li>
        <li>Cable Puller</li>
        <li>Tray Fitter</li>
      </ul>
    </div>

    {/* Civil Construction */}
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-lg font-bold mb-3">CIVIL CONSTRUCTION</h3>
      <ul className="text-sm text-gray-700 leading-relaxed list-disc list-inside">
        <li>Civil QA / QC</li>
        <li>Inspector</li>
        <li>Civil Supervisor</li>
        <li>Civil Foreman</li>
        <li>Carpenter</li>
        <li>Steel Fixer</li>
        <li>Mason Helper and Labor</li>
      </ul>
    </div>

    {/* Aramco Certified */}
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-lg font-bold mb-3">ARAMCO AND TUV CERTIFIED</h3>
      <ul className="text-sm text-gray-700 leading-relaxed list-disc list-inside">
        <li>Rigger level I - Crane Operator</li>
        <li>Rigger level II - Forklift Operator</li>
        <li>Rigger level III - Man lift Operator</li>
        <li>Steel Erector</li>
        <li>Bus Driver</li>
      </ul>
    </div>

    {/* Instrument Technician */}
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-lg font-bold mb-3">INSTRUMENT TECHNICIAN</h3>
      <ul className="text-sm text-gray-700 leading-relaxed list-disc list-inside">
        <li>Instrument QA / QC</li>
        <li>Instrument Tube Fitter</li>
        <li>Instrument Supervisor</li>
        <li>Instrument Calibrator</li>
        <li>Instrument Foreman</li>
        <li>Instrument Loop Check</li>
        <li>Instrument Technician</li>
        <li>Instrument Fitter</li>
        <li>Instrument Terminator</li>
      </ul>
    </div>

    {/* Health and Safety */}
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-lg font-bold mb-3">HEALTH AND SAFETY (ARAMCO AND SABIC CERTIFIED)</h3>
      <ul className="text-sm text-gray-700 leading-relaxed list-disc list-inside">
        <li>Safety Supervisor</li>
        <li>Safety Engineer</li>
        <li>Safety Officer Stand by Man</li>
        <li>Fire Watchman</li>
        <li>Work Permit Receiver (WPR)</li>
      </ul>
    </div>



    

  </div>
</div>





<div className="w-full">
  {/* Background Image with Centered Button */}
  <div
    className="relative w-full h-64 bg-cover bg-center flex items-center justify-center"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
    }}
  >
    {/* Button */}
    <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2 rounded shadow-md transition">
      READ MORE
    </button>
  </div>

  {/* Red Strip Below */}
  <div className="w-full bg-red-600 h-10"></div>
</div>


    </div>



  );
};

export default SkilledManpower;
