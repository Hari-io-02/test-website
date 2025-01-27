import Container from "../../../components/ui/container/Container";
import style from "./Background.module.css";
import { motion } from "framer-motion";

const Background = () => {
  const flameVariants = {
    animate: {
      scale: [1, 1.3, 0.9, 1.2, 1],
      rotate: [0, 60, 120, 180, 360],
      borderRadius: [
        "45% 55% 60% 40%",
        "50% 50% 55% 45%",
        "60% 40% 50% 50%",
        "55% 45% 60% 40%",
        "45% 55% 50% 50%",
      ],
      x: ["-10vw", "5vw", "15vw", "-5vw", "-10vw"],
      y: ["-10vh", "-20vh", "10vh", "20vh", "-10vh"],
    },
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };
  return (
    <>
      <div className="w-full h-[893px] overflow-hidden bg-[#121212] flex items-center justify-center relative">
        {/* Array of divs as background */}
        {[...Array(19)].map((_, index) => (
          <motion.div
            key={index}
            className={style.blackStripes}
            style={{
              left: `${index * 5}%`,
            }}
          />
        ))}

        {/* Flame-like spans */}
        <div className={style.flamesWrapper}>
          <motion.span
            className={`${style.flame} ${style.flame_1}`}
            variants={flameVariants}
            animate="animate"
            transition={{ ...flameVariants.transition, duration: 16, delay: 4 }}
          />
          <motion.span
            className={`${style.flame} ${style.flame_2}`}
            variants={flameVariants}
            animate="animate"
            transition={{ ...flameVariants.transition, duration: 14, delay: 6 }}
          />
          <motion.span
            className={`${style.flame} ${style.flame_3}`}
            variants={flameVariants}
            animate="animate"
            transition={{ ...flameVariants.transition, duration: 18, delay: 8 }}
          />
          <motion.span
            className={`${style.flame} ${style.flame_4}`}
            variants={flameVariants}
            animate="animate"
            transition={{
              ...flameVariants.transition,
              duration: 20,
              delay: 10,
            }}
          />
        </div>

        {/* Centered Content */}
        <div className="w-full flex relative justify-start"></div>
      </div>
      <div className="w-full flex relative justify-start -top-[700px]">
        <Container>
          <div className="flex flex-col items-center justify-center w-full text-white text-center z-10">
            <h1 className="font-semibold text-3xl md:text-4xl lg:text-[90px] leading-snug lg:leading-tight">
              Our Software and Solutions are Designed to help your Business Grow
            </h1>
            <button className="mt-6 px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 text-white bg-blue-600 rounded-lg transition duration-200 hover:bg-blue-700">
              Get a Free Consultation
            </button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Background;
