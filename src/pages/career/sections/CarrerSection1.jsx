import {
  CareerIcon1,
  CareerIcon2,
  CareerIcon3,
  CareerIcon4,
} from "../../../assets/svg";

const CarrerSection1 = () => {
  const cardsData = [
    {
      icon: CareerIcon1,
      title: "Teamwork",
      color: "#E7F2FF",
      description:
        "Collaborate and thrive together. Join a team that values collaboration and mutual growth. At IOREADY, you’ll always find support and opportunities to excel as a team.",
    },
    {
      icon: CareerIcon2,
      title: "Secured Future",
      color: "#F1F7E8",
      description:
        "We care about your tomorrow. With competitive salaries, insurance plans, and retirement benefits, we help secure your financial and professional future.",
    },
    {
      icon: CareerIcon3,
      title: "Learning Opportunities",
      color: "#EFF2F5",
      description:
        "Grow your expertise with us. Access resources, workshops, and training programs to build your skills and stay ahead in your career.",
    },
    {
      icon: CareerIcon4,
      title: "Upgrade Skills",
      color: "#FFEEED",
      description:
        "Be at the forefront of innovation. Work on cutting-edge projects and gain hands-on experience with the latest technologies.",
    },
  ];

  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-2  items-center ">
      <div className="text-left w-full px-6 md:px-0 text-black space-y-4 md:w-1/2 ">
        <div>
          <div className="h-0.5 w-14 bg-[#0D47A1]" />
          <p className="font-semibold text-subheading_text_md text-[#0D47A1]">
            Benefits
          </p>
        </div>
        <h2 className="text-2xl md:text-4xl font-semibold flex flex-col leading-relaxed text-gray-900">
          Why You Should Join Our Amazing Team
        </h2>
        <p className="text-paragraph_text_sm text-[#5F6368]">
          We believe in creating a workplace where you feel empowered,
          supported, and inspired. Explore the unique benefits of being part of
          IOREADY PRIVATE LIMITED:{" "}
        </p>
      </div>
      <div className="grid gap-6 w-full    p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {cardsData.map((data, index) => (
          <div
            key={index}
            className="p-5  rounded-lg text-left bg-white  drop-shadow-md hover:drop-shadow-lg"
          >
            <div
              style={{ backgroundColor: data.color }}
              className={`text-4xl mb-4 flex justify-start items-center   w-14 h-14 rounded-lg   `}
            >
              <data.icon className="mx-auto w-10 h-10 " />
            </div>
            <h3 className="text-lg font-semibold mb-2">{data.title}</h3>
            <p className="text-sm text-gray-600">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarrerSection1;
