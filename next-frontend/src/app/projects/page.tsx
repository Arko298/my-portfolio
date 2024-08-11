import Image from "next/image";
export default function Projects() {
  return (
    <div>
      <h3 className="text-center font-header text-2xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Check out my Portfolio
      </h3>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Here what I have done 
      </h3>

      <div className="mx-auto grid w-full grid-cols-4 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-1">
        <a
          href="/"
          className="mx-auto transform transition-all hover:scale-105 md:mx-0"
        >
          <Image
             width={50} height={50}
            src=""
            className="w-full shadow"
            alt="portfolio image"
          />
        </a>
        <a
          href="/"
          className="mx-auto transform transition-all hover:scale-105 md:mx-0"
        >
          <Image
             width={50} height={50}
            src=""
            className="w-full shadow"
            alt="portfolio image"
          />
        </a>
        <a
          href="/"
          className="mx-auto transform transition-all hover:scale-105 md:mx-0"
        >
          <Image  width={50} height={50}
            src=""
            className="w-full shadow"
            alt="portfolio image"
          />
        </a>
        <a
          href="/"
          className="mx-auto transform transition-all hover:scale-105 md:mx-0"
        >
          <Image width={50} height={50}
            src=""
            className="w-full shadow"
            alt="portfolio image"
          />
        </a>
      </div>
    </div>
  );
}
