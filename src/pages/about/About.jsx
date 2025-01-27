import Container from "../../components/ui/container/Container";
import AboutSection from "./sections/About";
import OurMission from "./sections/OurValues";
import image from "../../assets/images/Rectangle 34625201.png";
import MeetOurExperts from "./sections/MeetOurExperts";
import Background from "../home/components/Background";
import OurLEaderShip from "./sections/OurLEaderShip";
import OurJourny from "./sections/OurJourny";
import BuildTogather from "./sections/BuildTogather";

const About = () => {
  return (
    <div>
      <div className="h-[893px]">
        <Background />
      </div>

      <div className="bg-white">
        <div className="py-[75px]">
          <Container>
            <AboutSection />
          </Container>
        </div>
        <div className="  bg-[#F3F8FF] relative">
          <Container>
            <OurMission />
          </Container>
        </div>
        <div className="py-[75px]">
          <Container>
            <OurLEaderShip />
          </Container>
        </div>
        <div className="py-[75px]">
          <Container>
            <MeetOurExperts />
          </Container>
        </div>
        <div className="py-[75px] bg-[#E3F2FD]">
          <Container>
            <OurJourny />
          </Container>
        </div>

        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat ",
            backgroundSize: "cover",
          }}
        >
          <Container>
            <BuildTogather />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default About;
