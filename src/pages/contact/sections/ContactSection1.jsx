import { useState } from "react";

import image from "./../../../assets/images/Group 1171276083.png";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactSection1 = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState(""); // Default to India
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Handle form submission (e.g., send data to server)
    console.log("Form submitted:", {
      fullName,
      email,
      phoneNumber,
      message,
    });
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-10 px-6 md:px-12 py-8 items-center md:items-start">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt="Contact Us"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {/* Heading Section */}
          <div className="text-left text-white space-y-4">
            <div>
              <div className="h-0.5 w-14 bg-[#81C7FF]" />
              <p className="font-semibold text-subheading_text_md text-[#81C7FF]">
                Contact Us
              </p>
            </div>
            <h2 className="text-2xl md:text-4xl font-semibold flex flex-col leading-relaxed">
              Let’s Build Something Amazing Together
            </h2>
            <p className="text-paragraph_text_sm text-[#F5F5F5]">
              Connect with IOREADY PRIVATE LIMITED Today
            </p>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-1 gap-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-white text-left"
                >
                  Name<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="Name"
                  placeholder="Enter your name"
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white text-left"
                >
                  Your e-mail address<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Phone Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-full flex flex-col">
                  <label
                    htmlFor="countryCode"
                    className="block text-sm font-medium text-white text-left"
                  >
                    Country Code<span className="text-red-600">*</span>
                  </label>
                  <PhoneInput
                    international
                    defaultCountry="US"
                    value={countryCode}
                    onChange={setCountryCode}
                    className="mt-1 p-3 w-full border rounded-md focus:outline-none"
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-white text-left"
                  >
                    Phone Number<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                    className="mt-1 p-3 w-full border rounded-md focus:outline-none"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Message Section */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white text-left"
                >
                  Message<span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message here"
                  rows={4}
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col justify-start items-start">
                <button
                  type="submit"
                  className="mt-4 bg-[#81C7FF] text-white font-bold py-2 px-6 rounded hover:bg-[#6bb5ee] transition duration-300"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection1;
