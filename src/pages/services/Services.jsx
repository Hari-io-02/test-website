import Container from "../../components/ui/container/Container";
import ServeiceCard from "../../components/ui/NeonCard/ServeiceCard";
import Background from "../home/components/Background";
import image1 from "../../assets/images/Rectangle 34625200.png";
import { Arrow, GreenTickSquare } from "../../assets/svg";

const Services = () => {
  return (
    <div>
      <div className="h-[893px]">
        <Background />
      </div>
      <div className="py-[20px] text-white">
        <Container>
          <ServeiceCard />
        </Container>
      </div>
      <div
        className="w-full h-[601px] bg-cover  flex      bg-center px-10"
        style={{
          backgroundImage: `url(${image1})`,
        }}
      >
        <Container>
          <div
            className="flex flex-col gap-6"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex flex-col items-center  text-white text-center py-8">
              <div className="h-0.5 w-14 bg-[#81C7FF] "></div>
              <p className="font-semibold text-lg text-[#81C7FF]">
                Join Our Business
              </p>
              <Container>
                <h2 className="  text-3xl md:text-6xl  font-semibold  ">
                  Take Your Business to the Next Level with Tailored Solutions
                  That Drive Growth!
                </h2>
              </Container>
              <p className="text-paragraph_text_sm  max-w-2xl">
                Partner with us for innovative, scalable solutions designed to
                streamline operations, maximize efficiency, and accelerate your
                success.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-6">
              <div className="flex flex-col gap-4">
                <p className="flex text-paragraph_text_sm text-white text-left items-center gap-2">
                  <span>
                    <GreenTickSquare />
                  </span>
                  Streamline Operations with Our Expertise and Achieve Unmatched
                  Efficiency and Precision!
                </p>
                <p className="flex text-paragraph_text_sm text-white items-center gap-2">
                  <span>
                    <GreenTickSquare />
                  </span>
                  Tailored Solutions Designed to Meet Your Unique Business Goals
                  and Drive Long-Term Success.
                </p>
              </div>
              <div className="flex justify-center ">
                <button className="flex justify-center items-center">
                  Schedule Your Demo Now <Arrow />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Services;
