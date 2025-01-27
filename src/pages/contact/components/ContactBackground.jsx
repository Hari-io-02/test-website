import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Container from "../../../components/ui/container/Container";
import { Rocket } from "../../../assets/svg";

const ContactBackground = () => {
  const [brushStrokes, setBrushStrokes] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: -10, y: -30 });
  const [showText, setShowText] = useState(false);
  const [pathLength, setPathLength] = useState(0);
  const [randomStop, setRandomStop] = useState(0);
  const pathRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    if (pathRef.current) {
      const path = pathRef.current;
      const totalLength = path.getTotalLength();
      setPathLength(totalLength);

      // Generate a random stop point along the path (between 25% and 75% of the path)
      const stopPoint = Math.random() * 0.5 + 0.25;
      setRandomStop(totalLength * stopPoint);

      // Start the animation
      controls.start({
        length: [0, totalLength * stopPoint], // Move to random stop point
        transition: {
          duration: 8,
          ease: "easeInOut",
        },
      });
    }
  }, [controls]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });

      setTimeout(() => {
        setBrushStrokes((prevStrokes) => [
          ...prevStrokes,
          { x: clientX, y: clientY, id: Date.now() },
        ]);
      }, 20);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100vw", height: "893px" }}>
      {/* Render all brush strokes */}
      {brushStrokes.map((stroke) => (
        <motion.div
          key={stroke.id}
          style={{
            position: "absolute",
            top: stroke.y - 150,
            left: stroke.x - 100,
            width: 100,
            height: 100,
            borderRadius: "50%",
            filter: "blur(10px)",
            background: `rgba(255, 235, 59, 0.6)`,
          }}
          animate={{
            opacity: 0,
            scale: [1.5, 1.2, 1],
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            type: "keyframes",
          }}
        />
      ))}
      <div>
        {/* Rocket animation */}
        {!showText && (
          <div
            style={{ position: "relative", width: "100vw", height: "100vh" }}
          >
            <motion.div
              initial={{ x: 0, y: 0, rotate: 0 }}
              style={{
                position: "absolute",
                width: "40vw",
                height: "40vw",
                maxWidth: "600px",
                maxHeight: "600px",
              }}
              animate={{
                x: "80vw",
                y: "40vh",
                rotate: 700,
              }}
              transition={{
                duration: 3,
                ease: "easeIn",
                repeat: 0,
                type: "tween",
              }}
              onAnimationComplete={() => setShowText(true)}
            >
              <div className="scale-75">
                <Rocket />
              </div>
            </motion.div>
          </div>
        )}

        {/* Text appears after rocket reaches destination */}
        {showText && (
          <Container>
            <div className="z-10 h-full flex flex-col justify-center items-center text-white relative top-52">
              <h1 className="font-semibold text-3xl md:text-6xl lg:text-8xl">
                Let’s Build Something Amazing Together
              </h1>
              <h5 className="font-semibold mt-6 text-xl md:text-3xl ">
                Connect with IOREADY PRIVATE LIMITED Today
              </h5>
            </div>
          </Container>
        )}
      </div>
      {/* Animated circle following the cursor with smooth trail effect */}
      <motion.div
        style={{
          position: "absolute",
          top: mousePosition.y - 25,
          left: mousePosition.x - 25,
          width: 50,
          height: 50,
          borderRadius: "50%",
          background: "transparent",
        }}
      />
    </div>
  );
};

export default ContactBackground;
