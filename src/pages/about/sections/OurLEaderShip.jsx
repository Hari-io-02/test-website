const OurLEaderShip = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="3000">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="h-0.5 w-14 bg-[#0D47A1]  "></div>
        <p className="font-semibold text-lg text-[#0D47A1]">Our Leadership</p>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
          Meet the Visionary Behind IOREADY
        </h2>
        <p className="text-paragraph_text_sm text-[#5F6368] max-w-2xl">
          Guiding Our Journey with Expertise and Passion
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-28 justify-items-center px-4 md:px-8 lg:px-16">
        <div className="relative w-[293px] h-[400px]  rounded-lg shadow-md overflow-hidden">
          {/* Gradient Border */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-[#81C7FF] to-[#E3F2FD] p-1">
            <div className="w-full h-full bg-white rounded-lg">
              {/* Card Content */}
              <div className="h-3/4 bg-blue-50 flex items-center justify-center">
                <span className="text-gray-400">Image Placeholder</span>
              </div>
              <div className="h-1/4 bg-white text-center p-4">
                <h3 className=" font-semibold text-black whitespace-nowrap">
                  Andrea Masotina
                </h3>
                <p className="text-sm text-gray-500">Chairman Of Company</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[293px] h-[400px] rounded-lg shadow-md overflow-hidden">
          {/* Gradient Border */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-[#81C7FF] to-[#E3F2FD] p-1">
            <div className="w-full h-full bg-white rounded-lg">
              {/* Card Content */}
              <div className="h-3/4 bg-blue-50 flex items-center justify-center">
                <span className="text-gray-400">Image Placeholder</span>
              </div>
              <div className="h-1/4 bg-white text-center p-4">
                <h3 className=" font-semibold text-black">Abdul Khaliq</h3>
                <p className="text-sm text-gray-500">Founder Of Company</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[293px] h-[400px] rounded-lg shadow-md overflow-hidden">
          {/* Gradient Border */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-[#81C7FF] to-[#E3F2FD] p-1">
            <div className="w-full h-full bg-white rounded-lg">
              {/* Card Content */}
              <div className="h-3/4 bg-blue-50 flex items-center justify-center">
                <span className="text-gray-400">Image Placeholder</span>
              </div>
              <div className="h-1/4 bg-white text-center p-4">
                <h3 className=" font-semibold text-black">Abdul Asif</h3>
                <p className="text-sm text-gray-500">Director Of Company</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[293px] h-[400px] rounded-lg shadow-md overflow-hidden">
          {/* Gradient Border */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-[#81C7FF] to-[#E3F2FD] p-1">
            <div className="w-full h-full bg-white rounded-lg">
              {/* Card Content */}
              <div className="h-3/4 bg-blue-50 flex items-center justify-center">
                <span className="text-gray-400">Image Placeholder</span>
              </div>
              <div className="h-1/4 bg-white text-center p-4">
                <h3 className=" font-semibold text-black">Stetsiuk Vitalii</h3>
                <p className="text-sm text-gray-500">Sales Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLEaderShip;
