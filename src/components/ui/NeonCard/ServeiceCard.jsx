import {
  ArrowFill,
  ServeiceCard1,
  ServeiceCard2,
  ServeiceCard3,
  ServeiceCard4,
  ServeiceCard5,
  ServeiceCard6,
} from "../../../assets/svg";

const data = [
  {
    icon: ServeiceCard1,
    number: "01",
    title: "Website Development",
    description:
      "Business Website, E-commerce Development, Landing Pages,Dropshipping Website, Complete Website Builds",
  },
  {
    icon: ServeiceCard2,
    number: "02",
    title: "Mobile App Development",
    description:
      "Cross-platform Development, Android/iOS Apps, Website to App Conversion, App Maintenance, VR & AR Development",
  },
  {
    icon: ServeiceCard3,
    number: "03",
    title: "Software Development",
    description:
      "Web Applications, Desktop Applications, Automations, APIs, Databases, QA & Testing",
  },
  {
    icon: ServeiceCard4,
    number: "04",
    title: "Blockchain & Cryptocurrency",
    description: "dApps, Cryptocurrencies, Exchange Platforms",
  },
  {
    icon: ServeiceCard5,
    number: "05",
    title: "Chatbot Development",
    description: "AI Chatbots, Rules-Based Chatbots, Discord/Telegram Bots",
  },
  {
    icon: ServeiceCard6,
    number: "06",
    title: "SaaS Products",
    description: "Subscription-based software tailored for diverse industries.",
  },
];

const ServeiceCard = () => {
  return (
    <div className="container mx-auto  ">
      <div
        className="flex flex-col items-center text-center py-8"
        data-aos="flip-down"
      >
        <div className="h-0.5 w-14 bg-[#0D47A1] "></div>
        <p className="font-semibold text-lg text-[#0D47A1]">Our Services</p>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
          Your Technology Partner for Success
        </h2>
        <p className="text-paragraph_text_sm text-[#5F6368] max-w-2xl">
          Providing Innovative Solutions to Drive Growth and Efficiency in Your
          Business.
        </p>
      </div>
      <div
        className="grid grid-cols-1 px-6 md:px-1  sm:grid-cols-2 lg:grid-cols-3 gap-6"
        data-aos="flip-up "
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="h-[376px] bg-white drop-shadow-md  hover:drop-shadow-xl w-full flex flex-col justify-between text-left rounded-lg p-6 gap-3"
          >
            <div className="flex justify-between items-center">
              <div className="h-[80px] w-[80px] rounded-full flex flex-col justify-center items-center bg-[#E3F2FD]">
                <item.icon />
              </div>
              <h1 className="text-[#E3F2FD] font-semibold">{item.number}</h1>
            </div>
            <div>
              <h5 className="font-semibold text-black">{item.title}</h5>
              <p className="text-paragraph_text_sm text-[#5F6368]">
                {item.description}
              </p>
            </div>
            <div>
              <button className="bg-[#F3F8FF] flex justify-center items-center text-[#0D47A1] px-4 py-2 rounded-lg">
                Read More <ArrowFill className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServeiceCard;
