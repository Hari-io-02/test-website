import image from "../../../assets/images/Rectangle 34625168.png";
const OurJourny = () => {
  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      <div className="flex flex-col items-center text-center mb-12 ">
        <div className="h-0.5 w-14 bg-[#0D47A1]  "></div>
        <p className="font-semibold text-lg text-[#0D47A1]">Our Journey</p>
        <div className="py-5">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
            Tracing Our Path to Excellence
          </h2>
          <p className="text-paragraph_text_sm text-[#5F6368] max-w-2xl">
            From Humble Beginnings to Industry Leadership
          </p>
        </div>
        <p className="text-paragraph_text_sm text-center">
          IOREADY PRIVATE LIMITED began with a mission to redefine the
          technology landscape. Over the years, we have evolved from a small
          startup to a trusted name in the tech industry, serving clients across
          the globe. Our journey is marked by milestones of innovation,
          successful projects, and unwavering dedication to our clients’
          success. As we look to the future, we remain committed to setting new
          standards of excellence and innovation in everything we do.
        </p>
      </div>
      <div>
        <img src={image} alt="our journy " />
      </div>
    </div>
  );
};

export default OurJourny;
