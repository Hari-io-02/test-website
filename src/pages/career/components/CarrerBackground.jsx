import { motion } from "framer-motion";
import style from "./Career.module.css";
import Container from "../../../components/ui/container/Container";

const CarrerBackground = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0.3,
        duration: 5,
        ease: "circInOut",
      }}
      className={`h-screen w-screen flex relative ${style.bg_color}`}
    >
      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col items-center top-52 z-10 text-center">
        <Container>
          <h1 className="text-white font-semibold text-3xl lg:text-8xl tracking-normal mb-4">
            Join Our Team of Innovators
          </h1>
        </Container>
        <h5 className="text-white text-lg lg:text-3xl">
          Shape the Future of Technology with IOREADY PRIVATE LIMITED
        </h5>
      </div>

      {/* Decorative Elements */}
      <div className={`w-1/2 ${style.element_2} ${style.transition}`}></div>
      <div
        className={`w-1/2 ${style.element_2} ${style.flipped} ${style.transition}`}
      ></div>

      {/* Layer Gradient */}
      <div className={`absolute inset-0 ${style.layer}`}></div>
    </motion.div>
  );
};

export default CarrerBackground;
