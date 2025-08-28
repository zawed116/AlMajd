import React from "react";

const ElectricalWorks = () => {
  return (
    <div className="flex flex-col">
      {/* Section 1 - Industrial Contracting */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white p-10">
        {/* Left Section - Text */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            INDUSTRIAL CONTRACTING
          </h2>
          <ul className="text-gray-700 space-y-2">
            <li>&gt; Warehouses and factories.</li>
            <li>&gt; Electrical Power plants</li>
            <li>&gt; Plastics &amp; steel Industries.</li>
            <li>&gt; Solar energy,</li>
            <li>&gt; Environmental &amp; heavy industries</li>
            <li>&gt; Demolition and relocation of industrial facilities</li>
          </ul>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://assets-global.website-files.com/63b6ad58a2acb53207682b15/63b6ad58a2acb52b8c682cdb_Ali%2520%2526%2520Sons%2520Marine%2520Engineering%2520Factory-p-800.png"
            alt="Industrial Contracting"
            className="rounded-md shadow-md object-cover w-full max-w-md"
          />
        </div>
      </div>

      {/* Section 2 - Gallery */}
      <div className="bg-gray-300">
        {/* Top Section - 3 images */}
        <div className="flex justify-center gap-4 p-6">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.1KQFjqU99-EUNxuuZktCJQHaEK?pid=Api&P=0&h=180"
            alt="Top Image 1"
            className="w-1/4 rounded-md shadow-md object-cover"
          />
          <img
            src="https://3.imimg.com/data3/IA/PA/MY-8172341/industrial-contracting-500x500.jpg"
            alt="Top Image 2"
            className="w-1/4 rounded-md shadow-md object-cover"
          />
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.ilnuYQoYCFoTeuV3y_kAhwHaFi?pid=Api&P=0&h=180"
            alt="Top Image 3"
            className="w-1/4 rounded-md shadow-md object-cover"
          />
        </div>

        {/* Bottom Section - Large Image */}
        <div className="w-full">
          <img
            src="https://img.lovepik.com/background/20211021/large/lovepik-the-scene-of-urban-construction-background-image_400149199.jpg"
            alt="Large Bottom Image"
            className="w-full h-[80vh] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ElectricalWorks;
