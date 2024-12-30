import { ABOUT_US_TEXT } from "@/constants";

const AboutUs = () => {
  return (
    <div
      id="about" // This id matches the "url" value in NAV_LINKS for the About section
      className="container mx-auto my-20 border-b pb-10"
    >
      <div className="mb-8">
        <h2 className="mb-6 text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
          About Us
        </h2>
        <p className="py-6 text-center text-lg tracking-tighter lg:pr-20">
          {ABOUT_US_TEXT}
        </p>
      </div>
    </div>  
  );
};

export default AboutUs;
