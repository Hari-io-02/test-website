/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Arrow, CalanderWhiteFill, PaperPin } from "../../../assets/svg";

const RelatedArticals = ({ blogPosts }) => {
  return (
    <div>
      <h2 className="font-semibold text-left mb-7 ">Related Articles</h2>

      <div className="flex flex-col md:flex-row scale-95 md:scale-100 justify-center gap-4 ">
        {blogPosts.slice(0, 3).map((post, index) => (
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
              <Link to="/blog/view">
                <button className="mt-4 bg-[#0D47A1] text-white px-4 py-2 text-sm rounded flex items-center">
                  Reade More
                  <span className="ml-2">
                    {" "}
                    <Arrow />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticals;
