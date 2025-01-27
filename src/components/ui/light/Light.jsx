import light from "../../../assets/images/light.png";
import Container from "../container/Container";
import style from "./Light.module.css";
const Light = () => {
  return (
    <>
      <div className="relative overflow-hidden  w-full  bg-dark h-screen   md:h-screen bg-[#020B18]  ">
        <div className={`${style.light_container}`}>
          <img src={light} alt="Light" className={style.light_image} />
          <div className={style.light_rays}></div>
          <div className={style.ambient_glow}></div>
        </div>

        <div className="text-container absolute inset-0 flex items-center justify-center  ">
          <Container>
            <h1 className={`${style.Container_text} text-4xl lg:text-8xl`}>
              Your Trusted Partner in Technology
            </h1>
            <h5 className={`${style.Container_text}`}>
              Driven by Passion, Powered by Expertise
            </h5>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Light;
