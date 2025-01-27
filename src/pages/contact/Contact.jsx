import Container from "../../components/ui/container/Container";
import ContactSection1 from "./sections/ContactSection1";
import ContactSection2 from "./sections/ContactSection2";

const Contact = () => {
  return (
    <div>
      <div className="py-[75px] bg-[#002171]">
        <Container>
          <ContactSection1 />
        </Container>
      </div>
      <div className="py-[75px] bg-white">
        <Container>
          <ContactSection2 />
        </Container>
      </div>
    </div>
  );
};

export default Contact;
