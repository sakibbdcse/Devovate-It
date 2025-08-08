import Breadcrumb from "../components/Common/breadcrumb/Breadcrumb";
import Cta from "../components/Common/cta/Cta";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

const ContactUs = () => {
  return (
    <>
      <Breadcrumb
        pageTitle="Contact Us"
        pageName="contact-us"
        pageUrl="/contact-us"
      />
      <div className="container py-3">
        <div className="row align-items-center">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <Cta />
    </>
  );
};

export default ContactUs;
