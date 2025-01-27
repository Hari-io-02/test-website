import PropTypes from "prop-types";
import image1 from "../../../assets/images/Rectangle 34625187.png";
import Container from "../../../components/ui/container/Container";
import RelatedArticals from "./RelatedArticals";

const BlogView = () => {
  const content = {
    title: "SEO Fundamentals: Building a Strong Foundation for Success",
    date: "JAN 17, 2025",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageUrl: image1,
    sections: [
      {
        title: "Understanding the Basics of SEO",
        contents: [
          "Search Engine Optimization (SEO) is the practice of improving your website’s visibility on search engines like Google, Bing, and Yahoo. It involves optimizing your content, structure, and online presence to ensure your site ranks higher in search engine results pages (SERPs). Understanding SEO basics begins with knowing its core components.",
          "Keywords, on-page optimization, off-page optimization, and technical SEO. Each element plays a crucial role in ensuring your website is not only discoverable but also relevant to search queries.",
        ],
      },
      {
        title: "Keyword Research: The Backbone of SEO",
        contents: [
          "Keywords are the terms and phrases users type into search engines when looking for information. Conducting effective keyword research helps you identify the words your target audience is searching for. Use tools like Google Keyword Planner, Ahrefs, or SEMrush to find relevant, high-volume keywords with low competition.",
          "By integrating these keywords naturally into your content, titles, and meta descriptions, you can increase your chances of ranking higher in search results.",
        ],
      },
      {
        title: "On-Page Optimization: Enhancing Content and Structure",
        contents: [
          "On-page SEO refers to optimizing individual pages on your website to improve search engine rankings and user experience. This includes crafting compelling meta titles and descriptions, using header tags (H1, H2, H3) effectively, and creating high-quality, keyword-rich content.",
          "Additionally, ensure that your site is mobile-friendly, fast-loading, and has a clean URL structure. Internal linking is another critical aspect, helping search engines crawl your site and users navigate it easily.",
        ],
      },
      {
        title: "Technical SEO: Ensuring a Solid Framework",
        contents: [
          "Technical SEO focuses on the backend aspects of your website that influence its performance and crawlability. This includes optimizing site speed, fixing broken links, and ensuring your site has an XML sitemap and robots.txt file. Moreover, implementing structured data (schema markup) can help search engines better understand your content and enhance how your pages appear in SERPs with rich snippets. Regular audits using tools like Screaming Frog or Google Search Console can help identify and resolve technical issues promptly.",
        ],
      },
    ],
  };

  const blogPosts = [
    {
      date: "JAN 17, 2025",
      category: "Technology",
      title: "SEO Fundamentals: Building a Strong Foundation for Success",
      description:
        "Bibendum est ultricies integer quis auctor elit sed vulputate. Diam sollicitudin tempor id eu...",
      image: image1,
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
  ];

  return (
    <Container>
      <div className="container mx-auto p-4">
        <Header
          title={content.title}
          date={content.date}
          subtitle={content.subtitle}
        />
        <ImageBanner imageUrl={content.imageUrl} />
        {content.sections.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            index={index + 1}
            contents={section.contents}
          />
        ))}
      </div>

      <div className="py-[75px]">
        <RelatedArticals blogPosts={blogPosts} />
      </div>
    </Container>
  );
};

export default BlogView;

export const Header = ({ title, date, subtitle }) => {
  return (
    <header className="text-center my-8">
      <div className="flex justify-center items-center  gap-4">
        <p className="text-subheading_text_md border-b-2 border-b-[#0D47A1] text-[#0D47A1] font-semibold cursor-pointer">
          Popular article
        </p>
        <p className="text-gray-500">{date}</p>
      </div>
      <h2 className="  font-semibold  md:text-center">{title}</h2>

      <p className="text-lg text-gray-700">{subtitle}</p>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  subtitle: PropTypes.string,
};

export const ImageBanner = ({ imageUrl }) => {
  return (
    <div className="my-6">
      <img
        src={imageUrl}
        alt="SEO blog banner"
        className="w-[1232px] h-[500px]:"
      />
    </div>
  );
};

ImageBanner.propTypes = {
  imageUrl: PropTypes.string,
};

export const Section = ({ index, title, contents }) => {
  return (
    <section className="my-8 flex flex-col justify-start text-left">
      <h3 className="font-semibold text-xl">
        {index}. {title}
      </h3>
      {contents.map((content, idx) => (
        <p key={idx} className="text-gray-600 mt-4">
          {content}
        </p>
      ))}
    </section>
  );
};

Section.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  contents: PropTypes.arrayOf(PropTypes.string),
};
