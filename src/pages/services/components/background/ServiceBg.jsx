import Container from "../../../../components/ui/container/Container";
import style from "./Service.module.css";

const ServiceBg = () => {
  return (
    <div className={style.banner}>
      <div className={`${style.bubble} ${style.bubble_one}`}></div>
      <div className={`${style.bubble} ${style.bubble_two}`}></div>
      <div className={`${style.bubble} ${style.bubble_three}`}></div>
      <div className={`${style.bubble} ${style.bubble_four}`}></div>
      <Container>
        <div className="relative flex flex-col  justify-center items-center h-full w-full">
          <h1 className="font-semibold text-black text-center text-3xl lg:text-8xl">
            Comprehensive Services Tailored to Your Needs
          </h1>
          <h5 className="text-black text-center font-semibold">
            Innovative Solutions to Accelerate Your Business Growth
          </h5>
        </div>
      </Container>
    </div>
  );
};

export default ServiceBg;
