const data = [
  { name: "Innovation", value: 60, color1: "#AB4B70F5", color2: "#EECDDA" },
  { name: "Collaboration", value: 30, color1: "#E67567", color2: "#EED1CD" },
  { name: "Quality", value: 10, color1: "#FFB25C", color2: "#EEDFCD" },
];

const BarChart = () => {
  const maxBarHeight = 315;

  return (
    <div className="flex justify-self-end items-end bg-[#0D47A133] w-full max-w-[606px] h-[510px] rounded-3xl mx-auto px-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center w-full max-w-[163px] lg:max-w-[202px]"
        >
          {/* Percentage */}
          <div
            className="text-sm font-semibold mb-2"
            style={{
              color: item.color1,
            }}
          >
            {item.value}%
          </div>

          {/* Label */}
          <div className="text-sm text-center font-medium text-white">
            {item.name}
          </div>

          {/* Bar */}
          <div
            className={`absolute w-[115px] top-2  lg:w-[180px] h-[50px]  rounded-t-lg  `}
            style={{
              background: ` ${item.color1} `,
              position: "relative",
              overflow: "hidden",
              opacity: 0.5,
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          ></div>
          <div
            className={`relative inset-0 w-[115px] lg:w-[180px] ${
              index === 0 ? "rounded-bl-3xl" : ""
            } ${
              index === data.length - 1 ? "rounded-br-3xl" : ""
            } rounded-t-lg`}
            style={{
              height: `${(item.value / 50) * maxBarHeight}px`,
              background: `linear-gradient(to bottom, ${item.color1}, ${item.color2})`,
              position: "relative",
              overflow: "hidden",
            }}
            data-aos="fade-up"
          ></div>
        </div>
      ))}
    </div>
  );
};

export default BarChart;
