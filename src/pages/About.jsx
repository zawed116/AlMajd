import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            <span className="font-bold">Wajhat AlMajd General Contracting Est</span> works to
            establish and preserve an atmosphere that motivates our dynamic and varied staff
            to add value for our customers.{" "}
            <span className="font-bold">Wajhat AlMajd Contracting</span> was founded in 2019
            and has since developed into one of Saudi Arabia’s most respected trading and
            contracting firms.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            By monitoring the markets, communicating market trends, and being considerate of
            our customers’ demands, we strive to offer the best service at reasonable and
            competitive pricing. We offer a range of services, including material supply,
            heavy equipment rental, and manpower.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Our team can transform the challenge of managing employees and projects into a
            long-term business for your company, regardless of your needs.
          </p>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://static7.depositphotos.com/1010683/702/i/950/depositphotos_7025209-stock-photo-cement-factory-at-night.jpg"
            alt="About Us"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>








      <div className="bg-gray-100 py-16 px-6 lg:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Image */}
    <div>
      <img
        src="https://www.constructionbusinessowner.com/sites/default/files/main_image/AdobeStock_315860783.jpg"
        alt="Vision"
        className="rounded-lg shadow-lg w-full object-cover"
      />
    </div>

    {/* Right Content */}
    <div>
      <h2 className="text-3xl font-bold text-orange-500 mb-4">Vision</h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        Our goal is to offer high-quality, creative, and efficient solutions 
        while being competitive in every way.
      </p>
    </div>
  </div>
</div>







<div className="bg-gray-100 py-16 px-6 lg:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Content */}
    <div>
      <h2 className="text-3xl font-bold text-orange-500 mb-4">Mission</h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        We are enthusiastic about what we do and work hard to provide the best 
        possible client service and the greatest caliber of work. We have years 
        of experience in this industry, so we know exactly what needs to be done 
        and when.
      </p>
    </div>

    {/* Right Image */}
    <div>
      <img
        src="https://theconstructor.org/wp-content/uploads/2020/11/construction-contractors.jpg"
        alt="Mission"
        className="rounded-lg shadow-lg w-full object-cover"
      />
    </div>
  </div>
</div>













<div className="bg-gray-100 py-16 px-6 lg:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Image */}
    <div>
      <img
        src="https://www.procore.com/library/wp-content/uploads/2023/03/What-Is-a-General-Contractor_-Procore-Blog-Hero.png"
        alt="Values"
        className="rounded-lg shadow-xl w-full object-cover"
      />
    </div>

    {/* Right Content */}
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Values</h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        Our committed and knowledgeable employees have a deep understanding
        of industrial goods and services. We may assign our employees to the 
        appropriate tasks and environments when we have a thorough understanding 
        of their capabilities.
      </p>
    </div>

  </div>
</div>







    </div>
  );
};

export default About;
