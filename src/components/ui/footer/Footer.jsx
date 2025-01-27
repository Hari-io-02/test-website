import { Link } from "react-router-dom";
import {
  FaceBookWhiteFill,
  InstagramWhiteFill,
  LinkedInWhiteFill,
  LogoWhiteFill,
  TwitterWhiteFill,
} from "../../../assets/svg";
import Container from "../container/Container";

const Footer = () => {
  return (
    <div className="bg-[#0D47A1]">
      <Container>
        <div className=" text-white grid grid-cols-2 px-8 md:grid-cols-4  justify-center gap-8  items-start   space-y-16 w-full ">
          {/* Logo Section */}
          <div className="text-3xl font-bold py-16">
            <LogoWhiteFill />
            <p className="text-paragraph_text_sm text-left text-[#E0E0E0]">
              Committed to delivering exceptional services with innovation and
              expertise, we strive to help your business thrive.
            </p>
          </div>

          {/* Navigation Links */}
          <div className=" flex flex-col w-20 px-16 justify-center gap-4 text-left">
            <p className="text-subheading_text_md">Pages</p>
            <Link to="/" className="hover:text-[#26C6DA] text-white">
              Home
            </Link>

            <Link to="/services" className="hover:text-[#26C6DA] text-white">
              Services
            </Link>
            <Link to="/product" className="hover:text-[#26C6DA] text-white">
              Product
            </Link>
            <Link to="/blog" className="hover:text-[#26C6DA] text-white">
              Blog
            </Link>
            <Link to="/about" className="hover:text-[#26C6DA] text-white  ">
              About
            </Link>

            <Link
              to="/career"
              className="hover:text-[#26C6DA] text-white col-span-1"
            >
              Career
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#26C6DA] text-white col-span-0"
            >
              Contact
            </Link>
          </div>

          <div className="text-left flex flex-col gap-4">
            <p className="text-subheading_text_md font-semibold">Services</p>
            <p className="text-paragraph_text_sm  ">Website Development</p>
            <p className="text-paragraph_text_sm  ">Mobile App Development</p>
            <p className="text-paragraph_text_sm  ">Software Development</p>
            <p className="text-paragraph_text_sm  ">
              Blockchain & Cryptocurrency
            </p>
            <p className="text-paragraph_text_sm  ">Chatbot Development</p>
            <p className="text-paragraph_text_sm  ">SaaS Products</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col gap-4 text-left">
            <p className="text-subheading_text_md font-semibold">
              Social Links
            </p>
            <div className=" flex flex-col md:flex-row gap-8">
              <a
                href="https://www.linkedin.com/company/ioreadyio/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInWhiteFill className="fill-white hover:fill-[#26C6DA]" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <TwitterWhiteFill className="fill-white hover:fill-[#26C6DA]" />
              </a>
              <a
                href="https://www.instagram.com/ioready.official/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramWhiteFill className="fill-white hover:fill-[#26C6DA]" />
              </a>
              <a
                href="Ioready | Johor Bahru | Facebook"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaceBookWhiteFill className="fill-white hover:fill-[#26C6DA]" />
              </a>
            </div>
          </div>

          {/* Bottom Section */}
        </div>
        <div className="w-full flex text-center py-10 text-white justify-center ">
          <p className="text-sm text-center whitespace-nowrap ">
            Copyright © 2024 IOREADY – All Rights Reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
