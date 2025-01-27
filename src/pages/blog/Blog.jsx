import Container from "../../components/ui/container/Container";
import BlogCard from "./components/BlogCard";
import BlogListing from "./components/BlogListing";
import image1 from "../../assets/images/Rectangle 34625117 (2).png";
import image2 from "../../assets/images/Rectangle 34625174.png";

const blogPosts = [
  {
    date: "JAN 17, 2025",
    category: "Technology",
    title: "SEO Fundamentals: Building a Strong Foundation for Success",
    description:
      "Bibendum est ultricies integer quis auctor elit sed vulputate. Diam sollicitudin tempor id eu...",
    image:
      "https://img.freepik.com/free-photo/vintage-style-office-workers-having-desk-job_23-2149851039.jpg?semt=ais_hybrid",
  },
  {
    date: "JAN 17, 2025",
    image: image1,
    category: "Technology",
    title: "SEO Fundamentals: Building a Strong Foundation for Success",
    description:
      "Bibendum est ultricies integer integer quis auctor elit sed vulputate. Diam sollicitudin tempor id eu...",
  },
  {
    date: "JAN 17, 2025",
    image: image1,
    category: "Technology",
    title: "SEO Fundamentals: Building a Strong Foundation for Success",
    description:
      "Bibendum est ultricies integer quis auctor elit sed vulputate. Diam sollicitudin tempor id eu...",
  },
  {
    date: "JAN 17, 2025",
    image: image1,
    category: "Technology",
    title: "SEO Fundamentals: Building a Strong Foundation for Success",
    description:
      "Bibendum est ultricies integer integer quis auctor elit sed vulputate. Diam sollicitudin tempor id eu...",
  },
  {
    date: "JAN 17, 2025",
    category: "Technology",
    image: image1,
    title: "SEO Fundamentals: Building a Strong Foundation for Success",
    description:
      "Bibendum est ultricies integer quis auctor elit sed vulputate. Diam sollicitudin tempor id eu...",
  },
  {
    date: "JAN 17, 2025",
    category: "Technology",
    image: image1,
    title: "SEO Fundamentals: Building a Strong Foundation for Success",
    description:
      "Bibendum est ultricies integer integer quis auctor elit sed vulputate. Diam sollicitudin tempor id eu...",
  },
  {
    date: "JAN 17, 2025",
    category: "Technology",
    image: image1,
    title: "SEO Fundamentals: Building a Strong Foundation for Success",
    description:
      "Bibendum est ultricies integer quis auctor elit sed vulputate. Diam sollicitudin tempor id eu...",
  },
  {
    date: "JAN 17, 2025",
    category: "Technology",
    image: image1,
    title: "SEO Fundamentals: Building a Strong Foundation for Success",
    description:
      "Bibendum est ultricies integer integer quis auctor elit sed vulputate. Diam sollicitudin tempor id eu...",
  },
  {
    date: "JAN 17, 2025",
    image: image1,
    category: "Technology",
    title: "SEO Fundamentals: Building a Strong Foundation for Success",
    description:
      "Bibendum est ultricies integer quis auctor elit sed vulputate. Diam sollicitudin tempor id eu...",
  },
  {
    date: "JAN 17, 2025",
    category: "Technology",
    image: image1,
    title: "SEO Fundamentals: Building a Strong Foundation for Success",
    description:
      "Bibendum est ultricies integer integer quis auctor elit sed vulputate. Diam sollicitudin tempor id eu...",
  },
  {
    date: "JAN 17, 2025",
    category: "Technology",
    image: image1,
    title: "SEO Fundamentals: Building a Strong Foundation for Success",
    description:
      "Bibendum est ultricies integer quis auctor elit sed vulputate. Diam sollicitudin tempor id eu...",
  },
  {
    date: "JAN 17, 2025",
    category: "Technology",
    image: image1,
    title: "SEO Fundamentals: Building a Strong Foundation for Success",
    description:
      "Bibendum est ultricies integer integer quis auctor elit sed vulputate. Diam sollicitudin tempor id eu...",
  },
  {
    date: "JAN 17, 2025",
    category: "Technology",
    image: image1,
    title: "SEO Fundamentals: Building a Strong Foundation for Success",
    description:
      "Bibendum est ultricies integer quis auctor elit sed vulputate. Diam sollicitudin tempor id eu...",
  },
  {
    date: "JAN 17, 2025",
    category: "Technology",
    image: image1,
    title: "SEO Fundamentals: Building a Strong Foundation for Success",
    description:
      "Bibendum est ultricies integer integer quis auctor elit sed vulputate. Diam sollicitudin tempor id eu...",
  },
  {
    date: "JAN 17, 2025",
    category: "Technology",
    image: image1,
    title: "SEO Fundamentals: Building a Strong Foundation for Success",
    description:
      "Bibendum est ultricies integer quis auctor elit sed vulputate. Diam sollicitudin tempor id eu...",
  },
];

const Blog = () => {
  return (
    <div>
      <div
        className="  aspect-[4/3] md:aspect-[3/1] flex flex-col justify-center items-center text-white text-center"
        style={{
          backgroundImage: `url(${image2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <div data-aos="fade-up" data-aos-duration="3000">
            <h1 className="font-semibold text-3xl md:text-8xl sm:text-xl leading-tight">
              Insights and Innovations at IOREADY
            </h1>
            <h4 className="text-lg md:text-2xl sm:text-sm mt-2">
              Stay Updated with the Latest in Technology, Trends, and Industry
              News
            </h4>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <div className=" flex flex-col md:flex-row  scale-95    mt-[-128px] md:mt-[1px] md:scale-100     ">
            <div className="w-3/4 ">
              <BlogCard blogPosts={blogPosts} />
            </div>
            <div className="w-auto md:w-[35%] relative top-8">
              <BlogListing blogList={blogPosts} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Blog;
