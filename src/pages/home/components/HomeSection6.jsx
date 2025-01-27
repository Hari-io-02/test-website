import image2 from "../../../assets/images/Rectangle 34625124.png";
import { Arrow, GreenTickSquare } from "../../../assets/svg";

const HomeSection6 = () => {
  return (
    <div className="w-full   flex     items-center   px-10">
      <div className="w-auto" data-aos="fade-right">
        <div className="flex flex-col items-start gap-6">
          <div>
            <div className="h-0.5 w-20 bg-[#81C7FF]" />
            <p className="font-semibold text-lg text-[#81C7FF]">
              Join Our Business
            </p>
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold text-left   text-white">
            Let’s Collaborate on Your Next Big Project
          </h2>
          <p className="text-paragraph_text_sm text-[#E0E0E0] text-left">
            Your journey to innovative, tailored software solutions starts here.
            Whether you have a clear vision or just the spark of an idea, we’re
            ready to help bring it to life.
          </p>
          <p className="flex text-paragraph_text_sm text-white text-left items-center gap-2">
            <span>
              <GreenTickSquare />
            </span>
            Our team is here to guide you every step of the way, from
            brainstorming to launch and beyond.
          </p>
          <p className="flex text-paragraph_text_sm text-white items-center gap-2">
            <span>
              <GreenTickSquare />
            </span>
            Together, we’ll create something exceptional that drives your
            success.
          </p>
          <div className="px-14 md:px-1">
            <button className="flex  justify-center items-center bg-[#1E88E5]">
              Let’s Work Together <Arrow />
            </button>
          </div>
        </div>
      </div>
      <div className="w-auto hidden md:block" data-aos="fade-left">
        <img src={image2} alt="lets colabs image" />
      </div>
    </div>
  );
};

export default HomeSection6;
