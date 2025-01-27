import image1 from "../../../assets/images/Rectangle 34625112.png";
import { Arrow } from "../../../assets/svg";

const HomeSection2 = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-12 py-16 bg-white"
      data-aos="fade-up"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Content */}
        <div className="text-left space-y-6 px-6">
          {/* Title Section */}
          <div>
            <div className="h-0.5 w-14 bg-[#0D47A1]" />
            <p className="font-semibold text-lg text-[#0D47A1]">
              Why Choose Us
            </p>
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold leading-relaxed text-gray-900 w-full md:w-[500px]">
            Why Ioready is the right choice for you
          </h2>

          {/* Description Section */}
          <p className="text-sm text-[#5F6368]">
            Expertise in diverse technologies. Tailored solutions to match your
            unique needs. Dedicated support and maintenance.
          </p>
          <p className="text-sm text-gray-700">
            Choosing us means partnering with a team dedicated to turning your
            vision into reality. We combine technical expertise with a
            collaborative approach to deliver tailored, reliable, and scalable
            solutions. With a commitment to innovation and excellence, we ensure
            every project not only meets your expectations but also empowers
            your business to thrive in an ever-evolving digital landscape.
          </p>

          {/* Button */}
          <button className="bg-[#1E88E5] text-white flex items-center gap-2 px-6 py-3 rounded hover:bg-[#1565C0] transition">
            Let’s Talk
            <Arrow />
          </button>
        </div>

        {/* Right Section: Image and Decorative Grid */}
        <div className="relative flex justify-center items-center">
          <img
            src={image1}
            alt="Why Choose Us"
            className="w-full md:w-auto h-auto scale-75 md:scale-100"
          />

          {/* Decorative Grid */}
          <div className=" grid-cols-2 absolute hidden md:grid w-[202px] h-[202px] bottom-[-100px] left-[-100px]  ">
            <div className="h-[101px] w-[101px] bg-[#5472D3]"></div>
            <div className="h-[101px] w-[101px] bg-transparent"></div>
            <div className="h-[101px] w-[101px] bg-[#002171]"></div>
            <div className="h-[101px] w-[101px] bg-[#5472D3]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
