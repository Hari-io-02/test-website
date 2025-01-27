import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Container from "../../../components/ui/container/Container";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: " ",
    phoneNumber: "",
    positionApplied: "",
    totalExperience: "",
    relevantExperience: "",
    currentCTC: "",
    expectedCTC: "",
    noticePeriod: "",
    currentLocation: "",
    willingToMove: "",
    resume: null,
  });
  const [countryCode, setcountryCode] = useState();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#002171] text-white  ">
      <Container>
        <form
          className="w-full bg-transparent px-6 md:px-20 rounded-lg"
          onSubmit={handleSubmit}
        >
          {/* Header Section */}
          <h2 className="text-center text-3xl md:text-6xl font-semibold mb-2 mt-10 md:mt-0">
            Let’s create great things together!
          </h2>
          <p className="text-center text-paragraph_text_sm mb-8">
            Submit your application today to become part of our energetic and
            pioneering team!
          </p>

          {/* Form Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            {/* Full Name */}
            <div>
              <label className="block font-medium mb-1 text-left">
                Full Name (as per National ID / Passport){" "}
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full p-3 border rounded focus:outline-none text-black"
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block font-medium mb-1 text-left">
                Email Address<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-3 border rounded focus:outline-none text-black"
                required
              />
            </div>

            {/* Country Code & Phone Number */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block font-medium mb-1 text-left">
                  Country Code <span className="text-red-600">*</span>
                </label>
                <PhoneInput
                  international
                  defaultCountry="US"
                  value={countryCode}
                  onChange={setcountryCode}
                  className="p-3 border rounded focus:outline-none bg-white text-black"
                />
              </div>
              <div className="w-full">
                <label className="block font-medium mb-1 text-left">
                  Phone Number<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full p-3 border rounded focus:outline-none text-black"
                  required
                />
              </div>
            </div>

            {/* Position Applied */}
            <div>
              <label className="block font-medium mb-1 text-left">
                Position Applied <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="positionApplied"
                value={formData.positionApplied}
                onChange={handleChange}
                placeholder="Enter position"
                className="w-full p-3 border rounded focus:outline-none text-black"
                required
              />
            </div>

            {/* Total Experience */}
            <div>
              <label className="block font-medium mb-1 text-left">
                Total Experience <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="totalExperience"
                value={formData.totalExperience}
                onChange={handleChange}
                placeholder="Enter total experience"
                className="w-full p-3 border rounded focus:outline-none text-black"
                required
              />
            </div>

            {/* Relevant Experience */}
            <div>
              <label className="block font-medium mb-1 text-left">
                Relevant Experience <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="relevantExperience"
                value={formData.relevantExperience}
                onChange={handleChange}
                placeholder="Enter relevant experience"
                className="w-full p-3 border rounded focus:outline-none text-black"
                required
              />
            </div>

            {/* Current CTC */}
            <div>
              <label className="block font-medium mb-1 text-left">
                Current CTC (Per Annum) <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="currentCTC"
                value={formData.currentCTC}
                onChange={handleChange}
                placeholder="Enter current CTC"
                className="w-full p-3 border rounded focus:outline-none text-black"
                required
              />
            </div>

            {/* Expected CTC */}
            <div>
              <label className="block font-medium mb-1 text-left">
                Expected CTC (Per Annum)<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="expectedCTC"
                value={formData.expectedCTC}
                onChange={handleChange}
                placeholder="Enter expected CTC"
                className="w-full p-3 border rounded focus:outline-none text-black"
                required
              />
            </div>

            {/* Notice Period */}
            <div>
              <label className="block font-medium mb-1 text-left">
                Notice Period<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="noticePeriod"
                value={formData.noticePeriod}
                onChange={handleChange}
                placeholder="Enter notice period"
                className="w-full p-3 border rounded focus:outline-none text-black"
                required
              />
            </div>

            {/* Current Location */}
            <div>
              <label className="block font-medium mb-1 text-left">
                Current Location <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="currentLocation"
                value={formData.currentLocation}
                onChange={handleChange}
                placeholder="Enter current location"
                className="w-full p-3 border rounded focus:outline-none text-black"
                required
              />
            </div>

            {/* Willing to Move */}
            <div>
              <label className="block font-medium mb-1 text-left">
                Are you willing to move to Chennai?
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="willingToMove"
                value={formData.willingToMove}
                onChange={handleChange}
                placeholder="Enter yes or no"
                className="w-full p-3 border rounded focus:outline-none text-black"
                required
              />
            </div>

            {/* Upload Resume */}
            <div>
              <label className="block font-medium mb-1 text-left">
                Upload Resume Here <span className="text-red-600">*</span>
              </label>
              <div className="flex items-center   rounded overflow-hidden">
                <input
                  type="text"
                  value={
                    formData.resume ? formData.resume.name : "No file chosen"
                  }
                  readOnly
                  className="w-full p-3 text-black bg-gray-100"
                />
                <label
                  htmlFor="resume"
                  className="bg-[#0D47A1] p-3 text-white whitespace-nowrap cursor-pointer"
                >
                  Choose File
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleChange}
                  className="hidden"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-[#0D47A1] hover:bg-[#1565C0] text-white px-6 py-3 rounded transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default JobApplicationForm;
