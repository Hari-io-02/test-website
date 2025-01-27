import image1 from "../../../assets/images/Exclude.png";
import image2 from "../../../assets/images/Group (1).png";

const AboutSection = () => {
  return (
    <div className="flex items-center">
      <div
        className="text-left text-black space-y-4 md:w-1/2 flex flex-col gap-10 px-4 md:px-1 "
        data-aos="fade-right"
      >
        <div>
          <div className="h-0.5 w-14 bg-[#0D47A1]" />
          <p className="font-semibold text-subheading_text_md text-[#0D47A1]">
            Our Mission and Vision
          </p>
          <h2 className="text-2xl md:text-4xl font-semibold flex flex-col leading-relaxed text-gray-900">
            Empowering Tomorrow’s Innovations
          </h2>
          <p className="text-paragraph_text_sm text-[#5F6368]">
            Shaping a Sustainable and Inclusive Future Through Technology
          </p>
        </div>
        <div>
          <p className="text-paragraph_text_sm text-black">
            At IOREADY PRIVATE LIMITED, we believe that innovation is the
            cornerstone of growth. Our mission is to enable businesses to
            achieve their highest potential by leveraging advanced technologies
            and creative problem-solving. We are dedicated to fostering an
            environment where innovation flourishes, empowering businesses to
            adapt, evolve, and lead in an ever-changing digital landscape. By
            prioritizing sustainability, inclusivity, and collaboration, we aim
            to shape a world where technology is a force for good, bridging gaps
            and creating opportunities for individuals and communities
            worldwide.
          </p>
        </div>
      </div>
      <div
        className="relative mb-20 hidden md:block scale-75 "
        data-aos="fade-left"
      >
        {/* Background Star Image */}
        <img
          src={image2}
          alt="Decorative star"
          className=" relative top-32 left-28 "
        />

        {/* Main Image */}
        <img src={image1} alt="Team collaboration" className="  rounded-lg  " />
      </div>
    </div>
  );
};

export default AboutSection;
