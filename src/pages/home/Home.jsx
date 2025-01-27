import Container from "../../components/ui/container/Container";
import Background from "./components/Background";
import HomeSection1 from "./components/HomeSection1";
import HomeSection2 from "./components/HomeSection2";
import HomeSection3 from "./components/HomeSection3";
import HomeSection4 from "./components/HomeSection4";
import HomeSection5 from "./components/HomeSection5";
import HomeSection6 from "./components/HomeSection6";
import image1 from "../../assets/images/Rectangle 34625122.png";
import image2 from "../../assets/images/Rectangle 34625115.png";

const Home = () => {
  return (
    <div className="flex flex-col  ">
      <div className="h-[893px]">
        <Background />
      </div>
      <div className="py-[75px]">
        <Container color="transperant">
          <HomeSection1 />
        </Container>
      </div>
      <div className="py-[75px]">
        <Container>
          <HomeSection2 />
        </Container>
      </div>
      <div
        className="py-[75px] aspect-[4/3] md:aspect-[3/1] bg-cover bg-center"
        style={{
          backgroundImage: `url(${image2})`,
        }}
      >
        <Container>
          <HomeSection3 />
        </Container>
      </div>
      <div className="py-[75px]">
        <Container color="white">
          <HomeSection5 />
        </Container>
      </div>
      <div
        className="py-[75px] h-[583px] bg-cover w-full  bg-center"
        style={{
          backgroundImage: `url(${image1})`,
        }}
      >
        <Container>
          <HomeSection6 />
        </Container>
      </div>
      <div className="py-[75px] mb-10">
        <Container>
          <HomeSection4 />
        </Container>
      </div>
    </div>
  );
};

export default Home;
