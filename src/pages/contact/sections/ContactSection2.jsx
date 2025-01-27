import {
  Belgium,
  Email,
  Facebook,
  India,
  Instagram,
  LinkedIn,
  Location,
  Malaysia,
  PhoneCall,
  Twitter,
} from "../../../assets/svg";

const ContactSection2 = () => {
  return (
    <div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 w-full justify-between  ">
        <div className="text-black mb-6 text-left flex flex-col  gap-5">
          <h3 className="font-semibold text-left">Address Information</h3>
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-[#0D47A1]">
              {" "}
              <Location /> Operating Location
            </h3>
          </div>
          <div className="flex gap-2 items-start">
            <p className="py-1">
              <Malaysia />
            </p>
            <p className="mb-4">
              <strong>Malaysia (Head Quarter)</strong>
              <br />
              Ioready, 33-02, Persiaran Austin Heights, Taman Mount Austin,
              <br />
              81100 Johor Bahru, Johor, Malaysia
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <p className="py-1">
              <India />
            </p>
            <p className="mb-4">
              <strong>India</strong>
              <br />
              Amirtha Villa, No.39, 1st Floor, 7th Main road, Ramnagar North
              Extension,
              <br />
              Velachery, Chennai - 600 042.
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <p className="py-1">
              <Belgium />
            </p>
            <p className="mb-4">
              <strong>Belgium</strong>
              <br />
              Dendermondsesteenweg, 40, 9000, Ghent
            </p>
          </div>
        </div>
        <div className="flex flex-col text-left gap-5">
          <h3 className="font-semibold text-left">Contact information</h3>
          <div className="flex items-start gap-2">
            <p className="py-1">
              <Email />
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#0D47A1]">
                Email Address
              </h3>
              <p className="mb-4">Info@ioready.com</p>
              <p className="mb-4">admin@ioready.com</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <p className="py-1">
              <PhoneCall />
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#0D47A1]">
                Phone Number
              </h3>
              <p>+91-7305909990</p>
            </div>
          </div>
        </div>

        <div className=" text-left flex flex-col gap-5 ">
          <h3 className="font-semibold text-left">Social Link</h3>
          <div className="flex gap-4">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </a>
            <a
              href="https://www.instagram.com/ioready.official/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Twitter />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection2;
