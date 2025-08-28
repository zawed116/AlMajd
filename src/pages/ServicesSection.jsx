import { useNavigate } from 'react-router-dom';

// Main Services Component
export function ServicesSection() {
  const navigate = useNavigate();

  return (
    <div className="services-section py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Skilled Manpower Card */}
          <div className="service-card" onClick={() => navigate('/skilled-manpower')}>
            <div className="card-inner bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-full">
              <div className="image-container h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                  alt="Skilled Manpower"
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="card-content p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 uppercase">SKILLED MANPOWER</h3>
                <div className="text-blue-600 font-bold text-lg">→</div>
              </div>
            </div>
          </div>

          {/* Equipment Rental Card */}
          <div className="service-card" onClick={() => navigate('/equipment-rental')}>
            <div className="card-inner bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-full">
              <div className="image-container h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Equipment Rental"
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="card-content p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 uppercase">EQUIPMENT RENTAL</h3>
                <div className="text-blue-600 font-bold text-lg">→</div>
              </div>
            </div>
          </div>

          {/* Mechanical & Piping Card */}
          <div className="service-card" onClick={() => navigate('/mechanical-piping')}>
            <div className="card-inner bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-full">
              <div className="image-container h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Mechanical & Piping"
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="card-content p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 uppercase">MECHANICAL & PIPING</h3>
                <div className="text-blue-600 font-bold text-lg">→</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-gray-600 mb-6">How can I help you?</p>
          <button 
            className="contact-btn inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

// Skilled Manpower Page Component
export function SkilledManpowerPage() {
  return (
    <div className="service-page py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="content md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Skilled Manpower Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We provide highly trained construction professionals for all your project needs. Our workforce includes:
            </p>
            <ul className="text-gray-600 leading-relaxed mb-4 list-disc pl-5">
              <li>Certified engineers and architects</li>
              <li>Skilled tradespeople (electricians, plumbers, etc.)</li>
              <li>General construction laborers</li>
              <li>Project managers and supervisors</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              All workers are thoroughly vetted and trained in safety protocols.
            </p>
          </div>
          <div className="image md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
              alt="Skilled Manpower Team"
              className="rounded-lg object-cover h-full w-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}