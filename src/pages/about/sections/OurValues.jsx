import image1 from "../../../assets/images/Subtract (1).png";
import image2 from "../../../assets/images/Graphic Elements (1).png";
import image3 from "../../../assets/images/Graphic Elements.png";
import image4 from "../../../assets/images/Frame.png";
import image5 from "../../../assets/images/Group (2).png";
import image6 from "../../../assets/images/Group (3).png";
import image7 from "../../../assets/images/Group (4).png";

const CardDetails = [
  {
    icon: image2,
    title: "Innovation",
    number: "01",
    description:
      "We strive to push boundaries, fostering creativity and continuous improvement in everything we do.",
  },
  {
    icon: image3,
    title: "Integrity",
    number: "02",
    description:
      "Our foundation is built on transparency, honesty, and ethical practices that inspire trust.",
  },
  {
    icon: image4,
    title: "Excellence",
    number: "03",
    description:
      "We are dedicated to delivering superior quality solutions that exceed expectations and set benchmarks.",
  },
  {
    icon: image5,
    title: "Collaboration",
    number: "04",
    description:
      "Teamwork and synergy are at the heart of our success, enabling us to achieve greater goals together.",
  },
  {
    icon: image6,
    title: "Customer-Centricity",
    number: "05",
    description:
      "Our focus is on understanding and exceeding client needs, ensuring satisfaction and long-term partnerships.",
  },
  {
    icon: image7,
    title: "Sustainability",
    number: "06",
    description:
      "We are committed to creating solutions that not only meet today’s needs but also ensure a better future for generations to come.",
  },
];

const OurMission = () => {
  return (
    <div className="py-16 bg-gray-50" data-aos="zoom-out-up">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="h-0.5 w-14 bg-[#0D47A1] "></div>
        <p className="font-semibold text-lg text-[#0D47A1]">Our Values</p>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
          What We Stand For
        </h2>
        <p className="text-paragraph_text_sm text-[#5F6368] max-w-2xl">
          Our Pursuit of Excellence, Innovation, and Lasting Impact
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 lg:px-16 w-full">
        {CardDetails.map((data, index) => (
          <div
            key={index}
            className="relative rounded-lg  transform transition-all duration-300 scale-95 md:scale-100 hover:scale-105"
          >
            {/* Background Shape */}
            <div className="absolute">
              <img
                src={image1}
                alt="Background shape"
                className=" h-[360px]  "
              />
            </div>
            <div className="h-[70px] relative left-[290px] md:left-[270px] w-[70px] rounded-full bg-[#0D47A1] flex flex-col justify-center items-center text-2xl text-white">
              {data.number}
            </div>
            {/* Icon Section */}
            <div className="relative   left-4 bottom-20 flex justify-start items-center pt-10">
              <img
                src={data.icon}
                alt={`Icon for ${data.title}`}
                className="w-[100px] h-[100px]  "
              />
            </div>

            {/* Content Section */}
            <div className="p-6 text-center z-50 relative bottom-16 ">
              <h3 className="text-xl text-left font-semibold text-white mb-4">
                {data.title}
              </h3>
              <p className="text-white text-left">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMission;
