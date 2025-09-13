import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const backgroundImages = [
    "https://s1.1zoom.me/b5050/767/Sky_JCB_220X_lc_Clouds_Sun_Excavator_Yellow_584272_1600x1200.jpg",
    "https://img.freepik.com/premium-photo/labor-day-construction-site-hd_773230-12646.jpg",
    "https://www.worldconstructiontoday.com/wp-content/uploads/2022/03/Saudi-Arabia.jpg",
    "https://www.arabianbusiness.com/cloud/2021/09/14/uxII71io-dubai-construction-cranes-10.jpg",
    "https://www.abiq.io/wp-content/uploads/2020/12/infrastrucutre-min-scaled.jpg",
    "https://tse2.mm.bing.net/th/id/OIP.luFE36wpM6Ow6Zlo3q1U3gHaEK?pid=Api&P=0&h=180"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center min-h-screen transition-all duration-1000 ease-in-out">
        {backgroundImages.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Wajhat AlMajd General Contracting Est
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Unlock your full potential and transform the way you work with our innovative platform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto px-6">
            <div className="bg-slate-300 text-gray-900 rounded-xl shadow-lg p-6 hover:scale-105 transform transition">
              <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
              <p>Delivering high-quality contracting solutions with trust, efficiency, and innovation.</p>
            </div>
            <div className="bg-slate-300 text-gray-900 rounded-xl shadow-lg p-6 hover:scale-105 transform transition">
              <h2 className="text-xl font-semibold mb-2">Our Services</h2>
              <p>From construction to engineering – we provide a wide range of services tailored for you.</p>
            </div>
            <div className="bg-slate-300 text-gray-900 rounded-xl shadow-lg p-6 hover:scale-105 transform transition">
              <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
              <p>To be a leading name in the contracting industry with excellence and innovation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Wajhat AlMajd General Contracting Est.</strong> works to establish and preserve an atmosphere that motivates our dynamic and varied staff to add value for our customers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                By monitoring the markets, communicating market trends, and being considerate of our customers' demands, we strive to offer the best service at reasonable and competitive pricing.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We offer a range of services, including material supply, heavy equipment rental, and manpower.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://wagcksa.com/wp-content/uploads/2025/03/construction_2.jpg" 
                alt="Construction Site" 
                className="rounded-lg object-cover h-full w-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group block cursor-pointer" onClick={() => navigate('/skilled-manpower')}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://www.revistaeconomia.com/wp-content/uploads/2023/05/Empresarios-de-la-construccion.jpeg" 
                    alt="Skilled Manpower"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 uppercase">SKILLED MANPOWER</h3>
                  <div className="text-blue-600 font-bold text-lg">→</div>
                </div>
              </div>
            </div>
            <div className="group block cursor-pointer" onClick={() => navigate('/equipment-rental')}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://superiorrents.com/wp-content/uploads/2018/07/20171215_104448-1024x498.jpg" 
                    alt="Equipment Rental"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 uppercase">EQUIPMENT RENTAL</h3>
                  <div className="text-blue-600 font-bold text-lg">→</div>
                </div>
              </div>
            </div>
            <div className="group block cursor-pointer" onClick={() => navigate('/mechanical-piping')}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://img.freepik.com/premium-photo/piping-system-hd-wallpaper-photographic-image_993236-11615.jpg?w=2000" 
                    alt="Mechanical & Piping"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 uppercase">MECHANICAL & PIPING</h3>
                  <div className="text-blue-600 font-bold text-lg">→</div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="text-center mt-12">
            <p className="text-xl text-gray-600 mb-6">How can I help you?</p>
            <button 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </button>
        </div> */}
        </div>
     </div>
    
    
    
    
    
    
    
    
    
    
    
    {/* Specialized Services Section */}
<div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Specialized Services</h2> */}
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Civil Construction */}
      <div 
        className="group block cursor-pointer"
        onClick={() => navigate('/civil-construction')}
      >
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-full">
          <div className="h-48 overflow-hidden">
            <img 
              src="https://www.tuacarreira.com/wp-content/uploads/2018/06/curso-de-engenharia-1.jpg" 
              alt="Civil Construction"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800 uppercase">CIVIL CONSTRUCTION</h3>
            <div className="text-blue-600 font-bold text-lg">→</div>
          </div>
        </div>
      </div>

      {/* Electrical Works */}
      <div 
        className="group block cursor-pointer"
        onClick={() => navigate('/electrical-works')}
      >
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-full">
          <div className="h-48 overflow-hidden">
            <img 
              src="https://sanbornsac.com/wp-content/uploads/2022/08/Sanborns_Electrical-Repair-%E2%80%93-1.png" 
              alt="Electrical Works"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800 uppercase">ELECTRICAL WORKS</h3>
            <div className="text-blue-600 font-bold text-lg">→</div>
          </div>
        </div>
      </div>

      {/* Fabrication Services */}
      <div 
        className="group block cursor-pointer"
        onClick={() => navigate('/fabrication-services')}
      >
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-full">
          <div className="h-48 overflow-hidden">
            <img 
              src="https://www.expansionsolutionsmagazine.com/wp-content/uploads/2022/10/Metalfabheadersep22.jpg" 
              alt="Fabrication Services"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800 uppercase">FABRICATION SERVICES</h3>
            <div className="text-blue-600 font-bold text-lg">→</div>
          </div>
        </div>
      </div>
    </div>






    <div>
  {/* Contact Section */}
  <div className="bg-gray-700 text-white px-8 py-12 flex flex-col md:flex-row justify-between items-center">
    <div className="text-center md:text-left">
      <h2 className="text-3xl font-semibold">
        Got <span className="text-blue-500">questions</span> or{" "}
        <span className="text-orange-400">ideas</span>?
      </h2>
      <p className="text-2xl mt-2">Let’s chat!</p>
    </div>

    <div className="bg-black p-6 mt-6 md:mt-0 rounded shadow-lg text-center">
      <p className="text-sm">+966 53 564 8185 • +966 50 066 4078</p>
      <p className="text-sm mt-1">Info@wagcksa.com</p>
      <button className="bg-orange-400 text-white px-4 py-2 mt-3 rounded">
        Let’s grab a coffee
      </button>
    </div>
  </div>

  {/* Team Section */}
  <div className="bg-rose-400 py-12">
    <h2 className="text-center text-3xl font-semibold text-black mb-8">
      Meet the Team
    </h2>

    <div className="flex flex-col md:flex-row justify-center gap-8 px-6">
      {/* Member 1 */}
      <div className="bg-white p-6 rounded shadow-md text-center w-full md:w-1/4">
  {/* Profile Image */}
  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
    <img
      src="/images/Zawed.png"   // <-- replace with actual image path
      alt="Zawed Akhter"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Name */}
  <h3 className="text-red-600 font-semibold mt-4">
    Zawed Akhter
  </h3>

  {/* Role */}
  <p className="text-gray-700 text-sm">Co-founder (owner)</p>

  {/* Social Icons */}
  <div className="flex justify-center gap-4 mt-3 text-gray-600">
    <i className="fab fa-twitter"></i>
    <i className="fab fa-linkedin"></i>
  </div>
</div>


      {/* Member 2 */}
      <div className="bg-white p-6 rounded shadow-md text-center w-full md:w-1/4">
  <img
    src="/images/Rituraj.png" 
    alt="Rituraj Pal"
    className="w-24 h-24 mx-auto rounded-full object-cover"
  />
  <h3 className="text-red-600 font-semibold mt-4">Rituraj Pal</h3>
  <p className="text-gray-700 text-sm">General manager</p>
  <div className="flex justify-center gap-4 mt-3 text-gray-600">
    <i className="fab fa-twitter"></i>
    <i className="fab fa-linkedin"></i>
  </div>
</div>


      {/* Member 3 */}
<div className="bg-white p-6 rounded shadow-md text-center w-full md:w-1/4">
  <img
    src="/images/Anish.png"  // 👉 Replace this with the actual image link or local file path
    alt="Anish Devadi"
    className="w-24 h-24 mx-auto rounded-full object-cover"
  />
  <h3 className="text-red-600 font-semibold mt-4">Anish Devadi</h3>
  <p className="text-gray-700 text-sm">Chief executive officer (CEO)</p>
  <div className="flex justify-center gap-4 mt-3 text-gray-600">
    <i className="fab fa-twitter"></i>
    <i className="fab fa-linkedin"></i>
  </div>
</div>
</div>
  </div>
</div>









<div className="bg-gray-700 text-white py-12 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
    {/* Left Side Info */}
    <div>
      <h2 className="text-lg font-bold">WAGCKSA.COM</h2>
      <hr className="my-4 border-gray-400" />

      <h3 className="text-3xl font-bold leading-snug">
        Where Your <span className="text-blue-500">Voice</span> Matters &{" "}
        <span className="text-orange-400">Ideas</span> Flow
      </h3>

      {/* Phone */}
      <div className="flex items-start mt-6">
        <span className="text-red-500 text-xl mr-3">📱</span>
        <div>
          <h4 className="font-semibold">Phone</h4>
          <p className="text-sm">+966 53 564 8185</p>
          <p className="text-sm">+966 50 066 4078</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start mt-6">
        <span className="text-red-500 text-xl mr-3">✉️</span>
        <div>
          <h4 className="font-semibold">Email Address</h4>
          <p className="text-sm">Info@wagcksa.com</p>
        </div>
      </div>

      {/* Address */}
      <div className="flex items-start mt-6">
        <span className="text-red-500 text-xl mr-3">📍</span>
        <div>
          <h4 className="font-semibold">Office Address</h4>
          <p className="text-sm">
            35 514, Al Safa Dist. Al-Jubail Kingdom Of Saudi Arabia
          </p>
        </div>
      </div>
    </div>

    {/* Right Side Form */}
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Enter your full name"
        className="w-full p-3 rounded text-black"
      />
      <input
        type="text"
        placeholder="Phone number"
        className="w-full p-3 rounded text-black"
      />
      <input
        type="email"
        placeholder="Your email"
        className="w-full p-3 rounded text-black"
      />
      <input
        type="text"
        placeholder="Service Description"
        className="w-full p-3 rounded text-black"
      />
      <textarea
        placeholder="Message"
        rows="4"
        className="w-full p-3 rounded text-black"
      ></textarea>
      <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
        GET A FREE QUOTE
      </button>
    </div>
  </div>
</div>











    <div className="text-center mt-12">
      <p className="text-xl text-gray-600 mb-6">Need more information about our services?</p>
      <button 
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
        onClick={() => navigate('/contact')}
      >
        Get In Touch
      </button>
    </div>
  </div>
</div>
    
    
    
    
    
    
    
    
    
    
    </div>
  );
}

export default Home;