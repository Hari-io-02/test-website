import { useState } from "react";
import { RightArrow1 } from "../../../assets/svg";
import { Link } from "react-router-dom";

const CareerOpenings = () => {
  const categories = ["Design", "Development", "Digital Marketing", "Support"];
  const [activeCategory, setActiveCategory] = useState("Design");

  const jobList = [
    {
      category: "Design",
      jobs: [
        {
          title: "Graphic Designer",
          experience: "2 Year",
          deadline: "2025-02-28",
        },
        {
          title: "Senior Graphic Designer",
          experience: "1 Year",
          deadline: "2025-02-28",
        },
        {
          title: "UI/UX Designer (Intern)",
          experience: "0 Year",
          deadline: "2025-02-28",
        },
        {
          title: "Product Designer",
          experience: "2 Year",
          deadline: "2025-02-28",
        },
      ],
    },
    {
      category: "Development",
      jobs: [
        {
          title: "Frontend Developer",
          experience: "1 Year",
          deadline: "2025-03-15",
        },
        {
          title: "Backend Developer",
          experience: "2 Year",
          deadline: "2025-03-20",
        },
      ],
    },
    {
      category: "Digital Marketing",
      jobs: [
        {
          title: "SEO Specialist",
          experience: "1 Year",
          deadline: "2025-04-10",
        },
      ],
    },
    {
      category: "Support",
      jobs: [
        {
          title: "Customer Support Specialist",
          experience: "0 Year",
          deadline: "2025-05-01",
        },
      ],
    },
  ];

  const activeJobs = jobList.find((item) => item.category === activeCategory);

  return (
    <div className="  min-h-screen py-10 px-4 flex flex-col gap-8  ">
      <div className="flex flex-col items-center gap-2  ">
        <div className="h-0.5 w-14 bg-[#0D47A1] -mb-2" />
        <p className="font-semibold text-lg text-[#0D47A1] "> Come Join Us</p>
        <h2 className="text-2xl md:text-4xl font-semibold   text-gray-900 w-full  ">
          Career Openings
        </h2>
        <p className="text-paragraph_text_sm text-[#5F6368] text-center w-full md:w-[815px]">
          We're always looking for creative, talented self-starters to join the
          IOREADY family. Check out our open roles below and fill out an
          application.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 ">
        {/* Sidebar Categories */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <ul className="space-y-4">
            {categories.map((category) => (
              <li
                key={category}
                className={`cursor-pointer text-lg font-medium ${
                  activeCategory === category
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        {/* Job Listings */}
        <div className="w-full md:w-[919px]">
          {activeJobs?.jobs.map((job, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md mb-4"
            >
              <div className=" flex flex-col   md:flex-row justify-between  w-full items-start md:items-center">
                <h4 className=" font-semibold whitespace-nowrap md:whitespace-normal text-gray-800 w-1/2 text-left text-xl md:text-2xl">
                  {job.title}
                </h4>
                <div className="text-sm  w-1/4">
                  <p className="text-gray-600">Experience</p>{" "}
                  <h5 className="font-semibold text-lg md:text-2xl">
                    {job.experience}
                  </h5>
                </div>
                <div className="text-sm  w-1/4 text-left">
                  <p className="text-gray-600 ">Deadline</p>{" "}
                  <h5 className="font-semibold whitespace-nowrap  text-lg md:text-2xl">
                    {job.deadline}
                  </h5>
                </div>
              </div>
              <Link to="/career/details">
                <button className="  bg-white ">
                  {" "}
                  <RightArrow1 />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerOpenings;
