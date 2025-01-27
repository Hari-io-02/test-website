import PropTypes from "prop-types";
import style from "./ContactUs.module.css";

const ContactUs = ({ color }) => {
  return (
    <div
      className={`relative flex flex-col md:flex-row items-center justify-between text-white p-6 md:p-10 h-[200px] rounded-3xl shadow-md w-full max-w-[1110px] mx-auto overflow-hidden`}
      style={{ backgroundColor: color }}
      data-aos="flip-up"
    >
      {/* Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`${style.bubble} w-4 h-4 bg-gradient-to-t from-cyan-400 to-blue-600 opacity-70 rounded-full`}
          data-aos="slide-right"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className={`${style.bubble} w-6 h-6 bg-gradient-to-t from-cyan-400 to-blue-600 opacity-70 rounded-full`}
          data-aos="slide-right"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className={`${style.bubble} w-7 h-7 bg-gradient-to-t from-cyan-400 to-blue-600 opacity-70 rounded-full`}
          data-aos="slide-right"
          style={{ animationDelay: "0.4s" }}
        ></div>
        <div
          className={`${style.bubble} w-5 h-5 bg-gradient-to-t from-cyan-400 to-blue-600 opacity-70 rounded-full`}
          data-aos="slide-left"
          style={{ animationDelay: "0.2s" }}
        ></div>

        <div
          className={`${style.bubble} w-7 h-7 bg-gradient-to-t from-cyan-400 to-blue-600 opacity-70 rounded-full`}
          data-aos="slide-left"
          style={{ animationDelay: "0.4s" }}
        ></div>
        <div
          className={`${style.bubble} w-4 h-4 bg-gradient-to-t from-cyan-400 to-blue-600 opacity-70 rounded-full`}
          data-aos="slide-left"
          style={{ animationDelay: "0.6s" }}
        ></div>
        <div
          className={`${style.bubble} w-6 h-6 bg-gradient-to-t from-cyan-400 to-blue-600 opacity-70 rounded-full`}
          data-aos="slide-left"
          style={{ animationDelay: "0.8s" }}
        ></div>
      </div>

      {/* Left Section */}
      <div className="flex flex-col text-center md:text-left px-11 z-10">
        <span
          className="text-sm font-light text-cyan-400"
          data-aos="slide-right"
        >
          Have a project on mind?
        </span>
        <h3
          className="font-semibold mt-2 text-lg  lg:text-[33px]"
          data-aos="slide-right"
        >
          Let’s Craft Brilliance Together.
        </h3>
      </div>

      {/* Right Section */}
      <div className="mt-4 md:mt-0 px-11 z-10">
        <button
          className="inline-flex items-center text-button_text_md justify-center px-6 py-3 font-medium text-white rounded-lg transition duration-200 shadow-lg"
          data-aos="slide-left"
        >
          Contact Us <span className="ml-2">↗</span>
        </button>
      </div>
    </div>
  );
};

ContactUs.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ContactUs;
