const MeetOurExperts = () => {
  return (
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <div className="flex flex-col items-start gap-4 text-center mb-12 px-4 md:px-0">
        <div>
          <div className="h-0.5 w-14 bg-[#0D47A1] "></div>
          <p className="font-semibold text-lg text-[#0D47A1]">Our Team</p>
        </div>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
          Meet Our Experts
        </h2>
        <p className="text-paragraph_text_sm text-[#5F6368] max-w-2xl">
          Skilled and Passionate Professionals
        </p>
      </div>
      <div className="flex flex-col md:flex-row  items-center md:items-end gap-6">
        {[
          {
            name: "Kabir",
            role: "Manager",
            img: "path_to_kabir_image",
            height: "[448px]",
          },
          {
            name: "Akileshwaran",
            role: "UI/UX Designer",
            img: "path_to_akileshwaran_image",
            height: "[398px]",
          },
          {
            name: "Hari",
            role: "Frontend Developer",
            img: "path_to_hari_image",
            height: "[348px]",
          },
          {
            name: "Balaji",
            role: "Backend Developer",
            img: "path_to_balaji_image",
            height: "[298px]",
          },
        ].map((person, index) => (
          <>
            <div className="flex flex-col justify-center">
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {person.name}
                </h3>
                <p className="text-sm text-gray-500">{person.role}</p>
              </div>
              <div
                key={index}
                className={`w-[293px]  h-[398px] md:h-${person.height}  bg-white rounded-lg shadow-md overflow-hidden text-center`}
              >
                {/* Image */}
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-2/3 object-cover"
                />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default MeetOurExperts;
