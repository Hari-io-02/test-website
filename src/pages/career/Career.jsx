import Container from "../../components/ui/container/Container";
import Background from "../home/components/Background";
import CareerOpenings from "./sections/CareerSection2";
import CareerSection1 from "./sections/CarrerSection1";

const Career = () => {
  return (
    <div>
      <div className="h-[893px]">
        <Background />
      </div>
      <Container color="white">
        <CareerSection1 />
      </Container>
      <div className="bg-[#F3F8FF]">
        <Container>
          <CareerOpenings />
        </Container>
      </div>
    </div>
  );
};

export default Career;
