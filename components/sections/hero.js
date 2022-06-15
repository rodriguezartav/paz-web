import Link from "next/link";

import Image from "../Image";
import SimpleImage from "../SimpleImage";

export default function HomeApp({
  title,
  legend,
  images,
  color = "indigo-500",
  subtitle,
  button,
  onClick,
}) {
  let titleParts = title.split("|");
  let subtitleParts = subtitle.split("|");
  return (
    <section className="relative  overflow-hidden">
      <div className="relative pt-12 lg:pt-12 pb-20 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 flex items-center">
              <div className="w-full text-center lg:text-left">
                <div className="max-w-lg mx-auto lg:mx-0">
                  <span className="text-stone-600 font-bold">{legend}</span>
                  <h2 className="mb-3 dm text-4xl text-indigo-500 lg:text-6xl font-bold font-heading leading-tight ">
                    {titleParts.map((item, index) => {
                      return (
                        <span
                          className={
                            index == 1 || index == titleParts.length - 2
                              ? "  text-lime-700 font-bold "
                              : ""
                          }
                        >
                          {item}
                        </span>
                      );
                    })}
                  </h2>
                </div>
                <div className="max-w-md mx-auto lg:mx-0">
                  <p className="mb-6 text-gray-600 text-xl sm:text-2xl leading-loose">
                    {subtitleParts.map((item, index) => {
                      return (
                        <span
                          className={
                            index == 1 || index == titleParts.length - 2
                              ? "  text-lime-700 font-bold "
                              : ""
                          }
                        >
                          {item}
                        </span>
                      );
                    })}
                  </p>
                  <div>
                    <a
                      className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                      href="#"
                    >
                      Online Retreat
                    </a>
                    <a
                      className="inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200"
                      href="#"
                    >
                      Presence Retreat
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="flex flex-wrap lg:mb-4 lg:ml-6">
                <SimpleImage
                  {...images[0]}
                  className="w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none"
                />

                <SimpleImage
                  {...images[1]}
                  className="w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none"
                />
              </div>
              <div className="flex flex-wrap lg:mb-4 lg:mr-6">
                <SimpleImage
                  {...images[2]}
                  className="w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none"
                />

                <SimpleImage
                  {...images[3]}
                  className="w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="hidden lg:block absolute inset-0 w-full"
        src="atis-assets/background/lines.svg"
        alt=""
      />
    </section>
  );
}
