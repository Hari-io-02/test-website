import image1 from "../../../assets/images/Rectangle 34625105.png";
import image2 from "../../../assets/images/Rectangle 34625106.png";
import image3 from "../../../assets/images/Ellipse 14983.png";
const HomeSection1 = () => {
  return (
    <div className="w-full px-6 md:px-8 lg:px-10 space-y-12" data-aos="fade-up">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between  items-start  md:items-start gap-8">
        {/* Left Section: Who We Are */}
        <div className="text-left text-black space-y-4 md:w-1/2">
          <div>
            <div className="h-0.5 w-14 bg-[#0D47A1]" />
            <p className="font-semibold text-subheading_text_md text-[#0D47A1]">
              Who we are?
            </p>
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold flex flex-col leading-relaxed text-gray-900">
            <span>Innovative Technology</span>
            <span>Solutions for Modern</span>
            <span>Businesses</span>
          </h2>
        </div>

        {/* Right Section: Grid and Decorative Elements */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:w-1/2">
          {/* Large Square with Text */}
          <div className="relative bg-[#5472D3] h-[290px] w-[345px] p-4 flex flex-col justify-center items-start">
            <img
              src={image3}
              alt="Profile"
              className="absolute top-4 left-4 h-[100px] w-[100px] object-cover"
            />
            <h6 className="font-semibold text-white mt-16 text-left w-[250px] ">
              “ We transform your imagination into innovative technology and
              software solutions ”
            </h6>
          </div>

          {/* Grid Layout */}
          <div className=" hidden  md:grid grid-cols-4 grid-rows-4 w-[345px] h-[290px] bg-blue-900">
            {Array.from({ length: 16 }).map((_, index) => {
              let classes =
                "w-full h-full border border-[#E0E0E033] flex items-center justify-center";

              if (index === 6) {
                classes += " bg-white h-[43px] w-[43px]";
              } else if (index === 5 || index === 10) {
                classes += " bg-blue-500 h-[43px] w-[43px]";
              }

              return <div key={index} className={classes}></div>;
            })}
          </div>
        </div>
      </div>

      {/* Decorative Overlay */}
      <div className="relative  md:flex md:items-center md:justify-center left-10 top-4 hidden ">
        <div className="absolute flex flex-col items-center justify-center bg-[#5472D3] w-[100px] h-[100px] p-4">
          <div className="absolute top-[-40px] left-[-40px] w-[40px] h-[40px] bg-[#002060]"></div>
          <div className="absolute bottom-[-40px] right-[-40px] w-[40px] h-[40px] bg-[#002060]"></div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
        {/* Left: Images */}
        <div className="hidden  md:flex flex-col md:flex-row items-center md:w-1/2 gap-4 -mt-10 px-6 ">
          <img src={image1} alt="Home Image 1" className="w-1/2 object-cover" />
          <img src={image2} alt="Home Image 2" className="w-1/2 object-cover" />
        </div>

        {/* Right: Description */}
        <div className="text-left md:w-1/2 space-y-4">
          <p className="text-gray-600">
            At the heart of who we are lies a relentless focus on innovation. We
            strive to redefine possibilities, pushing the limits of technology
            to deliver transformative solutions that empower businesses to
            thrive.
          </p>
          <p className="text-gray-600">
            Our success is built on collaboration. We work closely with our
            clients, combining their vision with our expertise to create
            software that is both practical and impactful.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection1;
