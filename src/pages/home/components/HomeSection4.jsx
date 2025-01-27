import CardSlider from "../../../components/ui/cardCarousal/CarousalCard";
const HomeSection4 = () => {
  return (
    <div className="flex flex-col gap-10" data-aos="fade-left">
      <div className="flex flex-col items-start">
        <div className="h-0.5 w-14 bg-[#0D47A1]" />
        <p className="font-semibold text-lg text-[#0D47A1]">Clients Feedback</p>
        <h2 className="text-2xl md:text-4xl font-semibold   text-gray-900">
          What People Think About Our Products
        </h2>
      </div>
      <div>
        <CardSlider />
      </div>
    </div>
  );
};

export default HomeSection4;
