import React from "react";

const EquipmentRental = () => {
  return (
    <div className="w-full bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            EQUIPMENT RENTAL
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            By providing clients with access to a wide range of well–maintained
            construction equipment, Wajhat AlMajd General Contracting Est.
            service boosts project efficiency without incurring ownership costs.
            Our rental options, which include everything from heavy equipment to
            specialty tools, offer cost–effectiveness, flexibility, and
            streamlined project timelines.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition">
            GET STARTED NOW
          </button>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <img
            src="https://wagcksa.com/wp-content/uploads/2025/03/db59a343fd4a2e9ec3fffa504c913a2c.jpg"
            alt="Excavator"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>







      {/* export default function Services() {
  return ( */}
    <div className="bg-red-400 min-h-screen flex flex-col items-center p-10 gap-10">
      
      {/* Lifting Equipment Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        
        {/* Crane Image */}
        <div className="bg-white rounded-lg shadow-md p-4 flex justify-center items-center">
          <img
            src="https://wagcksa.com/wp-content/uploads/2025/03/Mobile-Crane-1.jpg"
            alt="Crane"
            className="rounded-md"
          />
        </div>

        {/* Text Content */}
        <div className="bg-red-500 text-white rounded-lg shadow-md p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Lifting Equipment's</h2>
          <div className="space-y-2 font-medium">
            <div>&gt; Hydraulic Crane</div>
            <div>&gt; Crawler Crane</div>
            <div>&gt; Boom Truck</div>
            <div>&gt; Forklift</div>
            <div>&gt; Articulated and Telescopic Man lift</div>
            <div>&gt; Mobile Crane</div>
            <div>&gt; Tower Crane</div>
          </div>
        </div>
      </div>

      {/* Transportation Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        
        {/* Text Content */}
        <div className="bg-red-500 text-white rounded-lg shadow-md p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">TRANSPORTATION</h2>
          <div className="space-y-2 font-medium">
            <div>&gt; Flat Bed Trailer</div>
            <div>&gt; Hydraulic Low Bed Trailer</div>
            <div>&gt; 55 Seated Bus</div>
            <div>&gt; 33 Seated Coaster</div>
            <div>&gt; 15 Seated Hi Ace</div>
            <div>&gt; Pick Up, SUV's &amp; Sedan</div>
          </div>
        </div>

        {/* Bus Image */}
        <div className="bg-white rounded-lg shadow-md p-4 flex justify-center items-center">
          <img
            src="https://wagcksa.com/wp-content/uploads/2025/03/volvo-50-seater.jpg"
            alt="Bus"
            className="rounded-md"
          />
        </div>
      </div>
    </div>




    
    <div className="bg-gray-400 min-h-screen flex flex-col items-center p-10 gap-10">
      
      {/* Earth Moving Equipment Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        
        {/* Machine Image */}
        <div className="bg-white rounded-lg shadow-md p-4 flex justify-center items-center">
          <img
            src="https://wagcksa.com/wp-content/uploads/2025/03/jcb-work-500x500-1.webp"
            alt="Earth Moving"
            className="rounded-md"
          />
        </div>

        {/* Text Content */}
        <div className="bg-red-500 text-white rounded-lg shadow-md p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">EARTH MOVING EQUIPMENT</h2>
          <div className="space-y-2 font-medium">
            <div>&gt; Bulldozer</div>
            <div>&gt; Grader</div>
            <div>&gt; Wheel Loaders</div>
            <div>&gt; Excavator</div>
            <div>&gt; Rock Breaker</div>
            <div>&gt; Dump Truck</div>
            <div>&gt; Back Hoe</div>
            <div>&gt; Roller Compactor</div>
          </div>
        </div>
      </div>

      {/* Power & Portable Machinery Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        
        {/* Text Content */}
        <div className="bg-red-500 text-white rounded-lg shadow-md p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">POWER &amp; PORTABLE MACHINERY</h2>
          <div className="space-y-2 font-medium">
            <div>&gt; Air Compressor</div>
            <div>&gt; Tower Lights</div>
            <div>&gt; Welding Machine</div>
            <div>&gt; Power Generator</div>
          </div>
        </div>

        {/* Generator Image */}
        <div className="bg-white rounded-lg shadow-md p-4 flex justify-center items-center">
          <img
            src="https://wagcksa.com/wp-content/uploads/2025/03/20231128-bobcat-emea-large-air-compressors-pa21-22-studio-1.webp"
            alt="Power Generator"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  



   
    <div className="bg-white min-h-[60vh] flex flex-col">
      {/* Image Row */}
      <div className="flex justify-center items-center gap-10 py-10">
        
        {/* Boom Truck */}
        <div className="flex justify-center">
          <img
            src="https://wagcksa.com/wp-content/uploads/2025/03/SPS12500_%E5%89%AF%E6%9C%AC-114930.webp"
            alt="Boom Truck"
            className="max-h-60 object-contain"
          />
        </div>

        {/* Bulldozer */}
        <div className="flex justify-center">
          <img
            src="https://wagcksa.com/wp-content/uploads/2025/03/064278ee52554abbbdc4233290bebe74.png"
            alt="Bulldozer"
            className="max-h-60 object-contain"
          />
        </div>

        {/* Tower Lights */}
        <div className="flex justify-center">
          <img
            src="https://wagcksa.com/wp-content/uploads/2025/03/tower-lights-1.jpg"
            alt="Tower Lights"
            className="max-h-60 object-contain"
          />
        </div>
      </div>

      {/* Bottom Red Strip */}
      
    </div>















    </div>
  );
};

export default EquipmentRental;
