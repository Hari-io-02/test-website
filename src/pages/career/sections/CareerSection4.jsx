/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Book,
  Calander,
  Chair,
  HamBurger,
  Job,
  Location,
  Time,
} from "../../../assets/svg";
import Container from "../../../components/ui/container/Container";
import image from "../../../assets/images/Rectangle 34625186.png";

const CareerDetails = () => {
  // Job Data
  const jobData = [
    {
      title: "Graphic Designer",
      whoWeAreLookingFor: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Nullam dictum ligula a gravida porta.",
        "Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.",
        "Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.",
        "Nulla non enim eu quam rutrum dictum in non urna.",
      ],
      responsibilities: [
        "Collaborate with the team to create stunning visuals.",
        "Design marketing materials including brochures, banners, and social media posts.",
        "Participate in brainstorming sessions and contribute creative ideas.",
      ],
      bonusPoints: [
        "Experience with animation tools like After Effects.",
        "Familiarity with UX/UI design principles.",
        "Knowledge of modern design trends and best practices.",
      ],
      salary: {
        range: "18,000 to 35,000 BDT",
        review: "Yearly",
      },
      workingHours: "8 AM – 5 PM",
      workingDays: {
        weekly: "5 days",
        weekend: "Friday and Saturday",
      },
      perks: [
        "Health insurance and wellness benefits.",
        "Flexible working hours.",
        "Access to learning and development programs.",
        "Regular team-building activities.",
      ],
      applicationProcess: [
        "Submit your updated resume and portfolio.",
        "Complete a design task to showcase your skills.",
        "Attend an interview with the hiring team.",
      ],
      statement: `Contrary to popular belief, Lorem Ipsum is not simply random text. 
        It has roots in a piece of classical Latin literature from 45 BC, 
        making it over 2000 years old.`,
    },
  ];

  const [selectedJob] = useState(jobData[0]);

  const Section = ({ title, content }) => (
    <section>
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      {Array.isArray(content) ? (
        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 mt-4 whitespace-pre-line">{content}</p>
      )}
    </section>
  );

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          aspectRatio: "inherit",
        }}
        className="h-[408px]"
      >
        <Container>
          <div className="flex flex-col justify-center relative top-20 items-center  gap-6">
            <h2 className="font-semibold text-white">Graphic Designer</h2>
            <p className="text-white text-paragraph_text_sm">
              Job Type: Full Time No of Vacancies:02
            </p>
            <div>
              <Link to="/career/form">
                <button className="">Apply Now </button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="min-h-screen   py-10 px-6   text-left grid grid-cols-1 md:grid-cols-2  w-full">
          <div className="w-full">
            {/* Job Header */}
            <div className="text-left mb-10 px-5 ">
              <div>
                <Link className="text-black">Career</Link>/
                <Link className="text-[#0D47A1]">Career Details</Link>
              </div>
              <h3 className="text-left font-semibold text-gray-900">
                {selectedJob.title}
              </h3>
            </div>
            {/* Job Details */}
            <div className="   rounded-lg   space-y-8">
              <Section
                title="Who Are We Looking For"
                content={selectedJob.whoWeAreLookingFor}
              />
              <Section
                title="What You Will Be Doing"
                content={selectedJob.responsibilities}
              />
              <Section
                title="Bonus Points for Familiarity With"
                content={selectedJob.bonusPoints}
              />
              <Section
                title="Salary"
                content={
                  <>
                    <p>
                      <strong>Salary:</strong> {selectedJob.salary.range}
                    </p>
                    <p>
                      <strong>Review:</strong> {selectedJob.salary.review}
                    </p>
                  </>
                }
              />
              <Section
                title="Working Hours and Days"
                content={
                  <>
                    <p>
                      <strong>Hours:</strong> {selectedJob.workingHours}
                    </p>
                    <p>
                      <strong>Days:</strong> {selectedJob.workingDays.weekly}
                    </p>
                    <p>
                      <strong>Weekend:</strong>{" "}
                      {selectedJob.workingDays.weekend}
                    </p>
                  </>
                }
              />
              <Section title="Perks & Benefits" content={selectedJob.perks} />
              <Section
                title="The Application Process"
                content={selectedJob.applicationProcess}
              />
              <Section title="Our Statement" content={selectedJob.statement} />
            </div>
          </div>
          <div>
            <div className="min-h-screen   py-10   md:px-20">
              {/* Job Summary Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900"></h1>
              </div>
              {/* Job Summary Details */}
              <div className="bg-[#F3F8FF] shadow-md rounded-lg py-8 space-y-6 w-full">
                <div className="flex justify-center">
                  <Link to="/career/form">
                    <button> Apply Now</button>
                  </Link>
                </div>
                <section className="space-y-4 flex flex-col">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Job Summary
                  </h2>
                  <div className="space-y-2">
                    <div className="flex flex-col items-start">
                      <div className="flex gap-3 items-center">
                        <span>
                          <Location />
                        </span>
                        <h5 className="font-semibold">Location</h5>
                      </div>
                      <p className="px-7">
                        Amirtha Villa, No.39, 1st Floor, 7th Main Road, Ramnagar
                        North Extension, Velachery, Chennai - 600 042.
                      </p>
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="flex gap-2 items-center">
                        <span className="ml-[-6px]">
                          <Job />
                        </span>
                        <h5 className="font-semibold">Job Type</h5>
                      </div>
                      <p className="px-8">Full Time</p>
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="flex gap-3 items-center">
                        <span className="ml-[-6px]">
                          <Calander />
                        </span>
                        <h5 className="font-semibold">Date Posted</h5>
                      </div>
                      <p className="px-7">26 Jan 2025 - 5 Feb 2025</p>
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="flex gap-3 items-center">
                        <span className="ml-[-6px]">
                          <Book />
                        </span>
                        <h5 className="font-semibold">Experience</h5>
                      </div>
                      <p className="px-7">1-3 years</p>
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="flex gap-3 items-center">
                        <span className="ml-[-6px]">
                          <Time />
                        </span>
                        <h5 className="font-semibold">Working Hours</h5>
                      </div>
                      <p className="px-7">9 AM - 6 PM</p>
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="flex gap-2 items-center">
                        <span className="ml-[-6px]">
                          <HamBurger />
                        </span>
                        <h5 className="font-semibold">Working Days</h5>
                      </div>
                      <p className="px-7">
                        Weekly: 5 Days (Weekend: Saturday, Sunday)
                      </p>
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="flex gap-2 items-center">
                        <span className="ml-[-6px]">
                          <Chair />
                        </span>
                        <h5 className="font-semibold">No. of Vacancies</h5>
                      </div>
                      <p className="px-7">3</p>
                    </div>
                  </div>
                </section>
                <div className="text-start  w-24  ml-4">
                  <p className="  border-b border-b-[#0D47A1] text-[#0D47A1]   cursor-pointer hover:font-semibold   ">
                    View All Jobs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <Link to="/career/form">
            <button>Apply Now</button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default CareerDetails;
