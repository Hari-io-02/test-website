import { useNavigate } from "react-router-dom";
import image from "../../../assets/images/1_y7ZgcnbxdF4aDgh-XaS1-Q.webp";
const WorkInProgress = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  bg-[#F7F7F7] text-gray-800">
      <div className="text-center">
        {/* Illustration or Icon */}
        <img src={image} alt="Work in Progress" className="mx-auto mb-6" />

        {/* Message */}
        <h1 className="text-2xl md:text-4xl font-semibold mb-4">
          We're working on it!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          This page is under Development. Stay tuned for updates!
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default WorkInProgress;
