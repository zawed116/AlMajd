import React from "react";
import { Link } from "react-router-dom";

function Services() {
  const cards = [
    {
      title: "SKILLED MANPOWER",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2069&q=80",
      to: "/services/skilled-manpower",
    },
    {
      title: "EQUIPMENT RENTAL",
      img: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=2070&q=80",
      to: "/services/equipment-rental",
    },
    {
      title: "MECHANICAL & PIPING",
      img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2070&q=80",
      to: "/services/mechanical-piping",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <Link
              key={i}
              to={c.to}
              className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-full"
              aria-label={`${c.title} details`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 uppercase">
                  {c.title}
                </h3>
                <div className="text-blue-600 font-bold text-lg">→</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-gray-600 mb-6">How can I help you?</p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
