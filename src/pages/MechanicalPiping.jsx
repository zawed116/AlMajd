export default function MECHANICALPIPING() {
  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side Image */}
        <div className="w-full h-full">
          <img
            src="http://www.nbwinc.com/wp-content/uploads/mechanical-piping-IMG_9278-1024x768.jpeg"
            alt="Mechanical Piping"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="bg-red-400 flex flex-col justify-center p-10 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            MECHANICAL &amp; PIPING
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            <span className="font-bold">
              Providing Wajhat AlMajd General Contracting Est
            </span>{" "}
            Transformers and H.T. switchgear, motor control centers,
            transformers and H.T. switchgear, L.T. switchgear, power and lighting
            distribution boards, and small power distribution are all included in
            the design, engineering, procurement, construction, testing,
            commissioning, and maintenance of industrial power distribution
            systems and process instrumentation. lights both indoors and outdoors.
            lightning protection, earthing, and grounding. systems for fire
            detection, security, and alarm. field–installed switches and sensors.
            cabinets, instrument panels, RIBs, control rooms, pipes, instruments,
            console and relay racks, and more. panel with both pneumatic and
            electronic devices.
          </p>
        </div>
      </div>






     
    <div className="w-full relative">
      {/* Background Image */}
      <div
        className="w-full h-[70vh] bg-cover bg-center flex justify-center items-center gap-6"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/industrial-pipeline-background_53876-104046.jpg')",
        }}
      >
        {/* Overlay Images */}
        <div className="flex justify-center items-center gap-6">
          {/* Image 1 */}
          <div className="bg-white shadow-lg p-2">
            <img
              src="https://pocketstop.com/wp-content/uploads/2021/07/Factory%20against%20blue%20cloudy%20sky-1.jpeg"
              alt="Industry Plant"
              className="h-48 w-72 object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="bg-white shadow-lg p-2">
            <img
              src="https://imbc.edu/wp-content/uploads/2019/11/AdobeStock_219897880.jpg"
              alt="Worker Welding"
              className="h-48 w-72 object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="bg-white shadow-lg p-2">
            <img
              src="https://st3.depositphotos.com/1046535/13916/i/450/depositphotos_139168064-stock-photo-welder-in-factory-welding-metal.jpg"
              alt="Pipe Welding"
              className="h-48 w-72 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom Red Strip */}
      <div className="bg-red-600 h-12 w-full"></div>
    </div>
 








    </div>
  );
}
