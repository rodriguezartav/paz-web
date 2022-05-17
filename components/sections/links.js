import Link from "next/link";

import Image from "next/image";

export default function HomeApp({
  title,
  legend,
  color = "indigo-500",
  image,
  subtitle,
  logo_1,
  logo_2,
  logo_3,
  logo_4,
}) {
  return (
    <section
      className="py-20 xl:pt-24 bg-white"
      style={{
        backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
        backgroundPosition: "center",
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-10">
            <div className="max-w-md">
              <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">
                {legend}
              </span>
              <h3
                className={` text-4xl md:text-5xl text-coolGray-900 font-bold tracking-tighter text-${color}`}
              >
                {title}
              </h3>
              <p className="mb-2 text-lg md:text-xl text-coolGray-500 font-medium">
                {subtitle}
              </p>
              <img className="w-full mb-2" src="/images/me_flauta.jpg" />
              <audio className="w-full" controls id="audio">
                <source src="/audio/una_tranquila.mp3" />
              </audio>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex flex-wrap justify-center -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md">
                  <a href={logo_1.href} target="_blank">
                    {" "}
                    <img className="mx-auto" src={logo_1.src} alt="" />
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8 lg:mb-0">
                <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md">
                  <a href={logo_2.href} target="_blank">
                    {" "}
                    <img className="mx-auto" src={logo_2.src} alt="" />
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8 lg:mb-0">
                <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md">
                  <a href={logo_3.href} target="_blank">
                    {" "}
                    <img className="mx-auto" src={logo_3.src} alt="" />
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md">
                  <a href={logo_4.href} target="_blank">
                    {" "}
                    <img className="mx-auto" src={logo_4.src} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
