import { HERO } from "@/constants";

const Hero = () => {
  return (
    <div
      className="hero flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url('${HERO.image}')` }}
    >
      {/* Overlay for transparency */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-6 pb-10">
        <div className="space-y-4 text-white">
          <h1 className="m-4 text-center text-5xl md:text-6xl lg:text-7xl font-bold">
            {HERO.title}
          </h1>
          <p className="p-4 text-center text-lg md:text-xl lg:text-2xl text-slate-300">
            {HERO.description}
          </p>
          <p className="p-4 text-center text-lg md:text-xl lg:text-2xl text-slate-300">
            {HERO.description1}
          </p>
          
          {/* Contact Number Link */}
          <div className="text-center mt-4">
            <a
              href="tel:+1234567890" // Replace with your contact number
              className="text-lg text-white hover:text-blue-600"
            >
              Contact Number :7020461507
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
