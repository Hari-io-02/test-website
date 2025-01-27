/* eslint-disable react/prop-types */
import Slider from "react-slick";
import image1 from "../../../assets/images/Ellipse 14984 (3).png";
import image2 from "../../../assets/images/Ellipse 14984 (4).png";
import image3 from "../../../assets/images/Ellipse 14984 (5).png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Arrow, LeftArrows } from "../../../assets/svg";

const CustomArrow = ({ onClick, direction }) => (
  <button
    onClick={onClick}
    className={`absolute h-[50px] w-[50px] top-[270px]  rounded-full bg-[#212121] hover:bg-[#0D47A1] text-white flex items-center justify-center 
  ${direction === "prev" ? "left-[550px] " : "right-[550px]"}`}
    style={{
      bottom: "-30px",
      transform: "translateY(50%)",
      zIndex: 2,
    }}
  >
    {direction === "prev" ? (
      <span className="scale-110">
        <LeftArrows />
      </span>
    ) : (
      <span className="scale-110">
        {" "}
        <Arrow />
      </span>
    )}
  </button>
);
function CustomPaging() {
  const settings = {
    dotsClass: "slick-dots custom-arrows",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      image: image1,
      title: "Awesome Services!",
      text: "Our AI image solutions have exceeded our customer’s expectations. They appreciate the opportunities.",
      author: "Saiful Talukdar",
      rating: 4,
    },
    {
      image: image2,
      title: "Awesome Services!",
      text: "Our AI image solutions have exceeded our customer’s expectations. They appreciate the opportunities.",
      author: "Saiful Talukdar",
      rating: 4,
    },
    {
      image: image3,
      title: "Awesome Services!",
      text: "Our AI image solutions have exceeded our customer’s expectations. They appreciate the opportunities.",
      author: "Saiful Talukdar",
      rating: 4,
    },
  ];

  return (
    <div className="w-full mx-auto  relative bg-white">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 text-center bg-[#FAFAFA] shadow-md p-6 rounded-lg"
          >
            <div className="flex justify-center">
              <img
                src={testimonial.image}
                alt={`${testimonial.author}'s photo`}
                className="w-16 h-16 rounded-full mb-4"
              />
            </div>
            <p className="text-lg font-semibold text-gray-800">
              {testimonial.title}
            </p>
            <p className="text-sm text-gray-600 italic my-4">
              “{testimonial.text}”
            </p>
            <p className="font-semibold text-gray-800">{testimonial.author}</p>
            <div className="flex items-center justify-center mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-yellow-500 ${
                    i < testimonial.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  ⭐
                </span>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomPaging;
