// CivilConstruction.jsx
export default function CivilConstruction() {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            CIVIL CONSTRUCTION
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            As Saudi Arabia’s leading civil construction contractors, we take great 
            satisfaction in our ability to provide dominant arrangements. The majority 
            of our clients work closely with us to make sure that each project is 
            conveyed through the structure and construction completions.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition">
            GET STARTED NOW
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src="https://www.anicer.com.br/wp-content/uploads/2019/11/Constru%C3%A7%C3%A3o-Civil.jpg"
            alt="Civil Construction"
            className="rounded-md shadow-md w-full md:w-[500px] object-cover"
          />
        </div>
      </div>





     
    <div className="relative w-full h-[90vh]">
      {/* Background Image */}
      <img
        src="https://wallpapercave.com/wp/wp8414151.png"
        alt="Construction Background"
        className="w-full h-full object-cover"
      />

      {/* 3 Floating Images */}
      <div className="absolute inset-0 flex items-center justify-center gap-6">
        {/* Image 1 */}
        <div className="w-80 h-56 shadow-lg">
          <img
            src="https://wagcksa.com/wp-content/uploads/2025/03/Top-10-Job-Sectors-for-Civil-Engineering-Graduates-Social-Image.png"
            alt="Construction Plan"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="w-80 h-56 shadow-lg">
          <img
            src="https://wagcksa.com/wp-content/uploads/2025/03/image-2-1210x700-2.webp"
            alt="Workers"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 3 */}
        <div className="w-80 h-56 shadow-lg">
          <img
            src="https://wagcksa.com/wp-content/uploads/2025/03/photo_2025-03-09_13-43-37.jpg"
            alt="Bulldozer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Red Border */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-red-600"></div>
    </div>


 




    <div class="relative w-full h-[90vh]">
  
  <img
    src="https://rcceng.com.au/wp-content/uploads/2023/10/three-architects-front-modern-building-1.jpg"
    alt="Construction Background"
    class="w-full h-full object-cover"
  />

  
  <div class="absolute inset-0 bg-black/40"></div>

  
  <div class="absolute top-12 w-full flex justify-center">
    <div class="text-center text-white px-6">
      <h1 class="text-4xl md:text-5xl font-bold">Our Construction Expertise</h1>
      <p class="mt-3 text-lg md:text-xl text-gray-200">
        Innovative solutions shaping the future of infrastructure
      </p>
    </div>
  </div>

  
  <div class="absolute inset-0 flex items-center justify-center gap-6">
    
    <div class="w-80 h-56 shadow-lg overflow-hidden rounded-lg transform hover:scale-105 transition duration-300">
      <img
        src="https://as2.ftcdn.net/v2/jpg/05/82/34/99/1000_F_582349920_eobqSitBaZcB4lWgslwK5oU7QhvJn5HH.jpg"
        alt="Construction Plan"
        class="w-full h-full object-cover"
      />
    </div>

   
    <div class="w-80 h-56 shadow-lg overflow-hidden rounded-lg transform hover:scale-105 transition duration-300">
      <img
        src="https://delftint.com/wp-content/uploads/2025/01/2024-03-25_0.jpg"
        alt="Workers"
        class="w-full h-full object-cover"
      />
    </div>

     
    <div class="w-80 h-56 shadow-lg overflow-hidden rounded-lg transform hover:scale-105 transition duration-300">
      <img
        src="https://www.abnewswire.com/uploads/1656007634.png"
        alt="Bulldozer"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
 
  <div class="absolute bottom-0 left-0 w-full h-2 bg-red-600"></div>
</div>









    </div>
  );
}
