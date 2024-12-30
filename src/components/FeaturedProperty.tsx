import { FEATURED_BRANDS } from "@/constants";
import Image from "next/image";

const FeaturedProperty = () => {
  return (
    <div className="container mx-auto border-b py-6 pb-10">
      <h2 className="text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
        Featured Brands
      </h2>
      <div className="flex flex-wrap">
        {FEATURED_BRANDS.map((property, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8" // Adjust widths for 3 in a row on larger screens
          >
            <a
              href={property.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="p-4 border rounded-md shadow-md hover:shadow-lg transition-shadow duration-200">
                <Image
                  className="rounded-md object-cover"
                  src={property.image}
                  alt={property.name}
                  width={300} // Set fixed width
                  height={200} // Set fixed height
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperty;
