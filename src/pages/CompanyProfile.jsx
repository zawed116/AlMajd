// src/pages/CompanyProfile.jsx
import React from "react";

const CompanyProfile = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* ===== Cover Page ===== */}
      <section className="relative h-screen flex items-center justify-center text-white">
        {/* Background gradient + overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-700/90 to-red-500/80"></div>

        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1600"
          alt="City Skyline"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          {/* Logo + Vision */}
          <div className="flex justify-between items-start w-full max-w-6xl mx-auto mb-12">
            <img
              src="https://wagcksa.com/wp-content/uploads/2025/03/%D9%82%D8%B1%D8%A9-%D8%B9%D9%8A%D9%86%D9%8A-1.png"
              alt="Wajhat Logo"
              className="h-20"
            />
            <div className="text-right">
              <h3 className="text-xl font-bold">VISION 2030</h3>
              <p className="text-sm">Saudi Arabia</p>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">COMPANY PROFILE</h1>
        </div>

        {/* Footer strip */}
        <div className="absolute bottom-0 w-full bg-red-700 text-center py-2 text-sm">
          <p>
            info@wagcksa.com | www.wagcksa.com
          </p>
        </div>
      </section>

      {/* ===== Table of Contents ===== */}
      <section className="relative py-16 text-white">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600"
          alt="Construction Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-red-800/85"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-8">Table of Contents</h2>
            <ul className="space-y-4 text-lg">
              <li>About Us .................................................. 03</li>
              <li>Mission, Vision & Values ..................... 04</li>
              <li>Health & Safety Environment .............. 05</li>
              <li>Meet Our Team .................................. 06</li>
              <li>Organization Chart .............................. 07</li>
              <li>Our Services ......................................... 08</li>
              <li>Our Valuable Clients .......................... 09</li>
              <li>Contact Us ............................................ 10</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <img
              src="https://images.unsplash.com/photo-1581093806997-124204d9fa9d?q=80&w=600"
              alt="Workers"
              className="rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1613545326278-3f4782555026?q=80&w=600"
              alt="Excavator"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Footer strip */}
        <div className="absolute bottom-0 w-full bg-red-700 text-center py-2 text-sm">
          <p>
            info@wagcksa.com | www.wagcksa.com
          </p>
        </div>




      
</section>







<div class="font-sans text-gray-800">


<div class="w-full">
  <div class="h-[350px] w-full">
    <img
      src="https://www.ishn.com/ext/resources/2022/09/29/Nighttime-construction-work-Getty.jpg?1687573798"
      alt="Construction Work"
      class="w-full h-full object-cover"
    />
  </div>

  <div class="max-w-5xl mx-auto px-6 py-12 bg-white">
    <h2 class="text-4xl font-bold mb-6">About Us</h2>
    <p class="text-lg leading-relaxed">
      <strong>Wajhat AlMajd General Contracting Est</strong> works to
      establish and preserve an atmosphere that motivates our dynamic and
      varied staff to add value for our customers. Founded in 2019,
      Wajhat AlMajd has grown into one of Saudi Arabia's most respected
      contracting firms. We provide material supply, heavy equipment
      rental, and manpower solutions – turning challenges into long-term
      business success.
    </p>
  </div>
</div>


<div class="w-full bg-gray-100 py-12 px-6">
  <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
    <div class="p-6 shadow rounded-lg bg-white">
      <h3 class="text-2xl font-bold mb-2">Mission</h3>
      <p>
        We are enthusiastic about what we do, providing top-quality client
        service and delivering work of the highest caliber.
      </p>
    </div>
    <div class="p-6 shadow rounded-lg bg-white">
      <h3 class="text-2xl font-bold mb-2">Vision</h3>
      <p>
        Our goal is to offer high-quality, creative, and efficient solutions
        while being competitive in every way.
      </p>
    </div>
    <div class="p-6 shadow rounded-lg bg-white">
      <h3 class="text-2xl font-bold mb-2">Values</h3>
      <p>
        Our employees’ deep understanding of industrial services allows us
        to assign them to the right tasks and environments effectively.
      </p>
    </div>
  </div>
</div>

</div>








<div class="font-sans text-gray-800">

 
  <div class="w-full bg-white">
    <div class="max-w-5xl mx-auto px-6 py-12">
      <h2 class="text-3xl font-bold mb-4 uppercase">
        Health & Safety Environment
      </h2>
      <p class="text-lg leading-relaxed">
        <strong>Wajhat AlMajd Contracting Est</strong> is committed to providing a safe
        working environment for both its representatives as well as its customers. 
        We do this through training programs, security awareness, and effective 
        communication in all project activities. Safety, Wellbeing, and Environment 
        (HSE) strategy is a key feature since each representative’s prosperity depends 
        on security, wellbeing, and climate.
      </p>
    </div>

     
    <div class="w-full h-[600px]">
      <img
        src="https://www.chas.co.uk/wp-content/uploads/2022/04/shutterstock_1809693421.jpg"
        alt="Health & Safety"
        class="w-full h-full object-cover"
      />
    </div>

   
    <div class="bg-red-700 text-white text-center py-2 text-sm">
      <p>info@wagcksa.com | www.wagcksa.com</p>
    </div>
  </div>

  
  <div class="w-full bg-gray-50 py-12">
    <div class="max-w-6xl mx-auto text-center px-6">
      <h2 class="text-4xl font-bold mb-12">
        <span class="text-red-600">Meet Our</span> Team
      </h2>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
       
        <div class="bg-white shadow-lg rounded-lg p-6">
          <div class="w-28 h-28 mx-auto rounded-full bg-gray-300 mb-4"></div>
          <h3 class="text-xl font-semibold">Zawed Akhter</h3>
          <p class="text-gray-600">Co-Founder (Owner)</p>
        </div>

     
        <div class="bg-white shadow-lg rounded-lg p-6">
          <div class="w-28 h-28 mx-auto rounded-full bg-gray-300 mb-4"></div>
          <h3 class="text-xl font-semibold">Rituraj Raj</h3>
          <p class="text-gray-600">General Manager</p>
        </div>

        
        <div class="bg-white shadow-lg rounded-lg p-6">
          <div class="w-28 h-28 mx-auto rounded-full bg-gray-300 mb-4"></div>
          <h3 class="text-xl font-semibold">Anish Devadi</h3>
          <p class="text-gray-600">Chief Executive Officer (CEO)</p>
        </div>
      </div>
    </div>
  </div>

</div>









<div class="font-sans text-gray-800">

  
  <div class="relative w-full">
     
    <div class="h-[500px] w-full relative">
      <img
        src="https://wallpapercave.com/wp/wp8414135.jpg"
        alt="Organization Background"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/40"></div>

       
      <div class="relative z-10 max-w-5xl mx-auto text-center py-12 text-white">
        <h2 class="text-4xl font-bold mb-8">Organization Chart</h2>

        <div class="bg-white text-black inline-block px-6 py-3 rounded-md font-bold mb-6">
          General Manager
        </div>

        <div class="grid grid-cols-3 gap-4 mb-6">
          <div class="bg-red-600 text-white py-2 rounded">Marketing Head</div>
          <div class="bg-red-600 text-white py-2 rounded">Admin Department</div>
          <div class="bg-red-600 text-white py-2 rounded">Account Department</div>
        </div>

        <div class="grid grid-cols-3 gap-4 mb-6">
          <div class="bg-red-600 text-white py-2 rounded">Marketing Executive</div>
          <div class="bg-red-600 text-white py-2 rounded">Human Resource HR</div>
          <div class="bg-red-600 text-white py-2 rounded">Account Assistant</div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="bg-red-600 text-white py-2 rounded">Marketing Executive</div>
          <div class="bg-red-600 text-white py-2 rounded">Receptionist</div>
        </div>

        <div class="mt-4">
          <div class="bg-red-600 text-white py-2 rounded inline-block">
            Marketing Executive
          </div>
        </div>
      </div>
    </div>
 
    <div class="bg-red-700 text-white text-center py-2 text-sm">
      <p>info@wagcksa.com | www.wagcksa.com</p>
    </div>
  </div>

  
  <div class="w-full bg-white">
   
    <div class="relative h-[600px] w-full">
      <img
        src="https://wallpapercave.com/wp/wp10167352.jpg"
        alt="Services Background"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative z-10 flex items-center justify-center h-full">
        <h2 class="text-4xl font-bold text-white">OUR SERVICES</h2>
      </div>
    </div>

     
    <div class="max-w-6xl mx-auto px-6 py-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
      <div class="border-2 border-red-600 p-4">
        <img src="https://images.unsplash.com/photo-1581093806997-124204d9fa9d?q=80&w=600" class="w-full h-32 object-cover mb-4" />
        <h3 class="font-bold">Skilled Manpower</h3>
      </div>

      <div class="border-2 border-red-600 p-4">
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600" class="w-full h-32 object-cover mb-4" />
        <h3 class="font-bold">Equipment Rental</h3>
      </div>

      <div class="border-2 border-red-600 p-6">
        <img src="https://www.sunmarine.com.sg/wp-content/uploads/2018/10/piping-mechanical.jpg" class="w-full h-32 object-cover mb-4" />
        <h3 class="font-bold">Mechanical & Piping</h3>
      </div>

      <div class="border-2 border-red-600 p-4">
        <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=600" class="w-full h-32 object-cover mb-4" />
        <h3 class="font-bold">Civil Construction</h3>
      </div>

      <div class="border-2 border-red-600 p-4">
        <img src="https://www.immobilier-pinatel.com/wp-content/uploads/2021/07/installation-%C3%A9lectrique.png" class="w-full h-32 object-cover mb-4" />
        <h3 class="font-bold">Electrical Works</h3>
      </div>

      <div class="border-2 border-red-600 p-4">
        <img src="https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?q=80&w=600" class="w-full h-32 object-cover mb-4" />
        <h3 class="font-bold">Industrial Contracting</h3>
      </div>

      <div class="border-2 border-red-600 p-6 sm:col-span-2 md:col-span-3 flex flex-col items-center">
  <img 
    src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/weldingandfabrication1.jpg" 
    alt="Fabrication Services"
    class="w-full max-w-[1100px] h-[300px] object-cover mb-4 rounded"
  />
  <h3 class="font-bold text-xl">Fabrication Services</h3>
</div>

    </div>
  </div>

</div>





<div class="font-sans text-gray-800">

   
  <div class="w-full bg-white">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-12">
       
      <div>
        <h2 class="text-4xl font-bold text-blue-900 mb-4">Skilled Manpower</h2>
        <p class="text-lg leading-relaxed">
          Manpower is your go-to partner for workforce solutions, supplying companies 
          with top talent. We have a successful track record of matching businesses 
          with skilled individuals that spur expansion and creativity. Count on us 
          to provide exceptional staffing and recruitment services customized to 
          meet your specific needs.
        </p>
      </div>
     
      <div class="flex justify-center">
        <img src="https://dhoorjasri.com/wp-content/uploads/2022/09/skilled-1-1.jpg"
             alt="Skilled Worker"
             class="w- h-64 object-cover rounded-lg shadow" />
      </div>
    </div>
  </div>

 
  <div class="w-full bg-red-700 text-white px-6 py-12">
    <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
      
      <div>
        <h3 class="text-2xl font-bold mb-4">Mechanical & Piping</h3>
        <ul class="space-y-2 text-sm">
          <li>Mechanical QA / QC Inspector</li>
          <li>Mechanical Supervisor</li>
          <li>Mechanical Foreman</li>
          <li>Millwright Technician</li>
          <li>Mechanical Fitter</li>
          <li>Piping QA / QC Inspector</li>
          <li>Piping Supervisor</li>
          <li>Piping Foreman</li>
          <li>Structure Fitter</li>
          <li>Welding QC Inspector</li>
          <li>Multi Welder</li>
          <li>3G / 4G / 6G Welder</li>
        </ul>
      </div>

       
      <div>
        <h3 class="text-2xl font-bold mb-4">Electricals</h3>
        <ul class="space-y-2 text-sm">
          <li>Industrial Electrician</li>
          <li>Electrical Engineer</li>
          <li>Electrical Supervisor</li>
          <li>Electrical Foreman</li>
          <li>Cable Puller</li>
          <li>Tray Fitter</li>
        </ul>
      </div>

      
      <div>
        <h3 class="text-2xl font-bold mb-4">Civil Construction</h3>
        <ul class="space-y-2 text-sm">
          <li>Civil QA / QC Inspector</li>
          <li>Civil Supervisor</li>
          <li>Civil Foreman</li>
          <li>Carpenter</li>
          <li>Steel Fixer</li>
          <li>Mason / Helper / Labor</li>
        </ul>
      </div>
    </div>
  </div>
 
  <div class="w-full bg-gray-100 py-12 px-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-800 mb-6 uppercase">Skilled Manpower</h2>

      <div class="grid md:grid-cols-2 gap-8">
        
        <div class="space-y-8">
          
          <div class="bg-red-600 text-white p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4">Aramco and TUV Certified</h3>
            <ul class="space-y-1 text-sm">
              <li>Rigger Level I, II, III</li>
              <li>Steel Erector</li>
              <li>Crane Operator</li>
              <li>Forklift Operator</li>
              <li>Man Lift Operator</li>
              <li>Bus Driver</li>
            </ul>
          </div>

        
          
        </div>

       
        <div class="space-y-8">
        
          <div class="bg-red-600 text-white p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4">Health and Safety (ARAMCO & SABIC Certified)</h3>
            <ul class="space-y-1 text-sm">
              <li>Safety Supervisor</li>
              <li>Safety Engineer</li>
              <li>Safety Officer</li>
              <li>Standby Man</li>
              <li>Fire Watchman</li>
              <li>Work Permit Receiver (WPR)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>








    </div>
  );
};

export default CompanyProfile;
