import { Arrow } from "../../../assets/svg";

const HomeSection3 = () => {
  return (
    <div
      className="w-full flex flex-col-reverse md:flex-row justify-end items-center md:items-start px-20 md:px-12 py-8"
      data-aos="fade-left"
    >
      {/* Left Empty Space */}
      <div className="w-full md:w-1/2"></div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
        {/* Section Title */}
        <div className="flex flex-col items-start">
          <div className="h-0.5 w-16 md:w-20 bg-white" />
          <p className="font-semibold text-left text-base md:text-lg text-white">
            Explore Our Expertise
          </p>
        </div>

        {/* Main Heading */}
        <h2 className="text-xl md:text-4xl font-semibold leading-relaxed text-left text-white w-full md:w-[500px]">
          Comprehensive Services for a Digital Future
        </h2>

        {/* Description */}
        <p className="text-white text-sm md:text-base text-left">
          Quick overview of key service categories: Website Development, Mobile
          App Development, Cloud & Cybersecurity, Software Development,
          Blockchain & Cryptocurrency, Chatbot Development, and SaaS Solutions.
        </p>

        {/* CTA Button */}
        <p className="flex gap-1 items-center border border-white py-2 px-4 w-max text-white cursor-pointer hover:bg-white hover:text-black transition duration-300">
          Explore Our Services
          <Arrow />
        </p>
      </div>
    </div>
  );
};

export default HomeSection3;
