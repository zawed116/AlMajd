import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage:
          "url('https://cdn.creativezone.ae/assets/building-contracting-company.png')",
      }}
    >
      {/* Overlay for better readability */}
      <div className="bg-black bg-opacity-60 min-h-screen py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Images */}
          <div className="space-y-6">
            <img
              src="https://wagcksa.com/wp-content/uploads/2025/03/Construction-Manpower-2.jpg"
              alt="Construction"
              className="rounded-lg shadow-lg w-full object-cover"
            />
            <img
              src="https://wagcksa.com/wp-content/uploads/2025/03/Manpower-Recruitment-Services-5.jpg"
              alt="Handshake"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-8">Contact US</h2>

            {/* Phone */}
            <div className="mb-6">
              <Phone className="mx-auto w-8 h-8 mb-2" />
              <p>+966 53 564 8185</p>
              <p>+966 50 066 4078</p>
            </div>

            {/* Email */}
            <div className="mb-6">
              <Mail className="mx-auto w-8 h-8 mb-2" />
              <p className="uppercase">info@wagcksa.com</p>
            </div>

            {/* Location */}
            <div className="mb-6">
              <MapPin className="mx-auto w-8 h-8 mb-2" />
              <p>35 514, Al Safa Dist. Al-Jubail Kingdom of Saudi Arabia</p>
            </div>

            {/* Button */}
            <button className="mt-4 bg-white text-rose-500 font-semibold py-2 px-6 rounded-md hover:bg-gray-100 transition">
              Talk To Us
            </button>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-16 flex justify-center">
          <div className="bg-white shadow-lg rounded-lg flex flex-col lg:flex-row max-w-4xl w-full">
            {/* Left Panel */}
            <div className="bg-gray-700 text-white p-10 flex flex-col items-center justify-center rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none">
              <h2 className="text-2xl font-bold mb-6 text-center">
                CONTACT INFORMATION
              </h2>
              <div className="text-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-600 rounded-full mb-4">
                  <span className="text-3xl">👓</span>
                </div>
                <p className="font-semibold">
                  write us or contact us <br /> on our social media
                </p>
              </div>

              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-gray-500 transition"
                >
                  <FaFacebookF className="text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-gray-500 transition"
                >
                  <FaTwitter className="text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-gray-500 transition"
                >
                  <FaInstagram className="text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-gray-500 transition"
                >
                  <FaYoutube className="text-white" />
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div className="flex-1 p-10">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 p-3 rounded"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full border border-gray-300 p-3 rounded"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border border-gray-300 p-3 rounded"
                />
                <input
                  type="text"
                  placeholder="Service Description"
                  className="w-full border border-gray-300 p-3 rounded"
                />
                <textarea
                  placeholder="Message"
                  className="w-full border border-gray-300 p-3 rounded h-28"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700"
                >
                  GET A FREE QUOTE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
