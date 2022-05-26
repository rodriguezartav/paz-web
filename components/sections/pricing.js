import Link from "next/link";

import Image from "../Image";

export default function HomeApp({
  title,
  line1,
  color = "indigo-500",
  line2,
  line3,
  images,
  legend,
  button,
  logoAfter,
  logoBefore,
  period,
  subtitle,
  prices,
}) {
  return (
    <section
      className="py-20 xl:pt-24 xl:pb-28  bg-white"
      style={{
        backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
        backgroundPosition: "center",
      }}
    >
      <div className="container px-4 mx-auto">
        <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-indigo-500 bg-indigo-100 font-medium uppercase rounded-9xl">
          {legend}
        </span>
        <h3
          className={`mb-4 text-3xl md:text-5xl text-coolGray-900 font-bold tracking-tighter  text-${color}`}
        >
          {title}
        </h3>
        <p className="mb-12 text-lg md:text-xl text-coolGray-500 font-medium">
          {subtitle}
        </p>
        <div className="flex flex-wrap justify-center max-w-8xl mx-auto">
          {prices.map((price) => {
            return (
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="flex flex-col items-center pt-10 px-8 pb-8 bg-coolGray-50 rounded-md shadow-md hover:scale-105 transition duration-500">
                  <span className="inline-block py-px px-2 mb-6 text-xs leading-5 text-indigo-500 bg-indigo-100 font-medium uppercase rounded-9xl">
                    Pricing
                  </span>
                  <h3 className="mb-4 text-lg md:text-xl text-indigo-500 font-medium">
                    {price.title}
                  </h3>
                  <div className="mb-4">
                    <span className="relative -top-6 right-1 text-2xl text-coolGray-900 font-medium">
                      $
                    </span>
                    <span className="text-5xl text-coolGray-900 font-medium">
                      {price.price}
                    </span>
                    <span className="text-3xl text-coolGray-900 font-medium">
                      /{period}
                    </span>
                  </div>
                  <p className="mb-7 text-lg md:text-xl text-coolGray-400 font-medium">
                    {price.subtitle}
                  </p>
                  <ul className="self-start mb-8">
                    {price.list.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center mb-3 text-coolGray-500 font-medium"
                        >
                          <img
                            className="mr-3"
                            src="/flex-ui-assets/elements/pricing/checkbox-green.svg"
                          />
                          <span>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <a
                    className="inline-block py-3 px-7 w-full text-indigo-50 font-medium text-center bg-indigo-500 hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 rounded-md shadow-sm"
                    href="#"
                  >
                    {price.button}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
