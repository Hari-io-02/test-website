/* eslint-disable react/prop-types */
const BlogListing = ({ blogList }) => {
  return (
    <div className="bg-[#E3F2FD] h-auto w-auto  rounded-lg">
      <div className="py-6">
        <div className="px-3">
          <input
            type="search"
            id="keyword-search"
            name="keyword"
            placeholder="Enter Keyword"
            className="p-2 w-full rounded-md border border-gray-300 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="font-semibold text-left px-4">Recent Post:</h5>
          {blogList.slice(0, 6).map((data, index) => (
            <div
              key={index}
              className="flex gap-2 items-center border-b justify-start px-4"
            >
              <img
                src={data.image}
                alt={data.title}
                className="w-[108px] h-[110px] rounded-lg object-cover object-center"
              />
              <div className="flex flex-col gap-2  text-left">
                <p className="text-paragraph_text_sm">{data.date}</p>
                <h6 className="font-semibold">{data.title}</h6>
              </div>
            </div>
          ))}
        </div>
        <div className="text-left px-2">
          <h5 className="font-semibold">Tags:</h5>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 items-center px-2">
            <button className="p-1 px-2 rounded-md text-sm bg-[#0D47A1]">
              Design
            </button>
            <button className="p-1 px-2 text-sm rounded-md bg-[#0D47A1] ">
              Technology
            </button>
            <button className="p-1 px-2 text-sm rounded-md bg-[#0D47A1]">
              Creative
            </button>
            <button className="p-1 px-2 text-sm rounded-md bg-[#0D47A1]">
              Marketing
            </button>
            <button className="p-1   text-sm rounded-md bg-[#0D47A1]">
              Development
            </button>
            <button className="p-1 px-2 text-sm rounded-md bg-[#0D47A1]">
              Devops
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListing;
