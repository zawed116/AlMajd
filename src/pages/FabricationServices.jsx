import React from "react";

const FabricationService = () => {
  return (
    <div className="bg-white">
      {/* Section 1: Fabrication Services */}
      <div className="flex flex-col md:flex-row items-center justify-between p-10">
        {/* Left Section - Text */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            FABRICATION SERVICES
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The ideal line in piping fabrication is one that blends quality,
            efficiency, and precision. Our organization guarantees that every
            pipe is constructed to perfection with the use of cutting-edge
            machinery, knowledgeable specialists, and adherence to industry
            standards. We provide quality in every weld and joint.
          </p>
          <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-orange-600 transition">
            GET STARTED NOW
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://wagcksa.com/wp-content/uploads/2025/03/FABRICATION-1.jpg"
            alt="Fabrication Services"
            className="rounded-lg shadow-md object-cover w-full max-w-md"
          />
        </div>
      </div>

      {/* Section 2: Image Gallery */}
      <div className="bg-[#d56d6d] w-full py-10 flex justify-center gap-10 flex-wrap">
        {/* Image 1 */}
        <div>
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.SOPMyFX_Iy-atmfmuHUhagHaEo?pid=Api&P=0&h=180"
            alt="Fabrication Work 1"
            className="w-[300px] h-[250px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Image 2 */}
        <div>
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.UXzNBtqenBpOYnicTkGjOAHaDk?pid=Api&P=0&h=180"
            alt="Fabrication Work 2"
            className="w-[300px] h-[250px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Image 3 */}
        <div>
          <img
            src="https://gisuser.com/wp-content/uploads/2022/02/AdobeStock_378775757-scaled.jpeg"
            alt="Fabrication Work 3"
            className="w-[300px] h-[250px] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>


      <div className="relative w-full h-screen bg-red-600 flex items-center justify-center">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2020/01/23/10/27/industry-4787104_1280.jpg')" }}
  ></div>

  {/* Overlay Image */}
  <div className="relative z-10 w-full">
  <img
    src="https://thumbs.dreamstime.com/b/welding-construction-blue-sky-background-industrial-business-concept-technician-focus-welding-construction-process-142839757.jpg"
    alt="welding work"
    className="w-full h-screen object-cover shadow-lg"
  />
</div>

</div>

    </div>
  );
};

export default FabricationService;
