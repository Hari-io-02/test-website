/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";

const Card = ({
  title,
  subtitle,
  icon,
  tertiary,
  secondary,
  primary,
  bgColor,
  delay,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        width: 300,
        height: 389,
        overflow: "hidden",
        borderRadius: "16px",
        padding: "20px",
        cursor: "pointer",
        backgroundColor: bgColor || "#FFE5E1",
      }}
      className={`flex`}
      data-aos="fade-down-right"
      data-aos-delay={delay}
    >
      <motion.div
        style={{
          position: "absolute",
          right: "-152px",
          bottom: "-152px",
          width: "280px",
          height: "280px",
          borderRadius: "44%",
          backgroundColor: tertiary || "#FF816E33",
        }}
        initial={{ scale: 0.8, opacity: 0.8 }}
        animate={
          isHovered ? { scale: 4, opacity: 1 } : { scale: 0.8, opacity: 0.8 }
        }
        transition={{ duration: 0.4 }}
        className="z-10"
      />
      <motion.div
        style={{
          position: "absolute",
          right: "-108px",
          bottom: "-108px",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          backgroundColor: secondary || "#FF816E80",
        }}
        initial={{ scale: 0.8, opacity: 0.8 }}
        animate={
          isHovered ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.8 }
        }
        transition={{ duration: 0.4 }}
      />
      <motion.div
        style={{
          position: "absolute",
          right: "-100px",
          bottom: "-100px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: primary || "#FF816E",
        }}
        initial={{ scale: 0.8, opacity: 0.8 }}
        animate={
          isHovered ? { scale: 0.9, opacity: 1 } : { scale: 0.8, opacity: 0.8 }
        }
        transition={{ duration: 0.4 }}
      />

      {/* Content */}
      <div
        style={{ position: "relative", zIndex: 10, color: "#000" }}
        className="flex justify-start items-start flex-col mt-14"
      >
        <div
          className="inline-flex p-2 rounded-md justify-center items-center mb-4"
          style={{ backgroundColor: primary }}
        >
          {icon}
        </div>
        <h4 className="mb-2 font-semibold text-left">{title}</h4>
        <p className="bg-transparent text-left text-paragraph_text_sm">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Card;
