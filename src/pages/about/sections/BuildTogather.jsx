const BuildTogather = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  justify-center items-center   gap-2 py-20 px-8">
      <div className="text-white text-left" data-aos="fade-right">
        <h3 className="font-semibold">Let’s Build the Future Together</h3>
        <p className="text-paragraph_text_sm text-left text-[#E0E0E0]">
          Reach out to explore how we can turn your vision into a lasting
          success story, with innovative strategies and dedicated support
          tailored to your unique needs.
        </p>
      </div>
      <div className="flex gap-2 items-center  " data-aos="fade-left">
        <input
          type="email"
          className="p-2 border rounded-lg  w-[200px] md:w-[380px]"
          name="email"
          placeholder="Enter the email"
        />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default BuildTogather;
