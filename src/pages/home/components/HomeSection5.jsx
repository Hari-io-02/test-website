import { Arrow, CalanderWhiteFill, PaperPin } from "../../../assets/svg";
import image1 from "../../../assets/images/Rectangle 34625117.png";
import image2 from "../../../assets/images/Rectangle 34625117 (1).png";
import image3 from "../../../assets/images/Rectangle 34625117 (2).png";
const HomeSection5 = () => {
  const blogPosts = [
    {
      date: "JAN 17, 2025",
      category: "Technology",
      title: "SEO Fundamentals: Building a Strong Foundation for Success",
      description:
        "Bibendum est ultricies integer quis auctor elit sed vulputate. Diam sollicitudin tempor id eu...",
      buttonText: "Read More",
      image: image1,
    },
    {
      date: "JAN 17, 2025",
      category: "Technology",
      title: "SEO Fundamentals: Building a Strong Foundation for Success",
      description:
        "Bibendum est ultricies integer quis auctor elit sed vulputate. Diam sollicitudin tempor id eu...",
      buttonText: "Read More",
      image: image2,
    },
    {
      date: "JAN 17, 2025",
      category: "Technology",
      title: "SEO Fundamentals: Building a Strong Foundation for Success",
      description:
        "Bibendum est ultricies integer quis auctor elit sed vulputate. Diam sollicitudin tempor id eu...",
      buttonText: "Read More",
      image: image3,
    },
  ];
  return (
    <div className=" " data-aos="fade-up">
      <div className="flex flex-col items-center">
        <div className="h-0.5 w-14 bg-[#0D47A1]" />
        <p className="font-semibold text-lg text-[#0D47A1]">Our Blogs</p>
        <h2 className="text-2xl md:text-4xl font-semibold   text-gray-900 w-full  ">
          Insights into Technology, Trends, and Innovation
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-3 py-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-[#E3F2FD]   rounded-lg overflow-hidden w-[397px] h-[436px]"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            ></img>
            <div className="text-sm flex items-center gap-2 -rotate-90 relative -left-14 -top-24 bg-[#0D47A1]  text-white w-36 px-4 py-1 rounded-sm font-semibold">
              <span className="rotate-90">
                {" "}
                <CalanderWhiteFill />
              </span>{" "}
              {post.date}
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold text-[#0D47A1] flex gap-2">
                <PaperPin /> {post.category}
              </p>
              <h3 className="text-lg text-left font-semibold text-gray-900 mt-2">
                {post.title}
              </h3>
              <p className="text-sm text-left text-gray-600 mt-2">
                {post.description}
              </p>
              <button className="mt-4 bg-[#0D47A1] text-white px-4 py-2 text-sm rounded flex items-center">
                {post.buttonText}
                <span className="ml-2">
                  {" "}
                  <Arrow />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="flex items-center bg-[#1E88E5]">
          View All Blogs <Arrow />
        </button>
      </div>
    </div>
  );
};

export default HomeSection5;
