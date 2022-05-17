import Link from "next/link";

import Image from "next/image";

export default function HomeApp({
  title,
  legend,
  image,
  subtitle,
  color = "indigo-500",
  t1_description,
  t1_title,
  t2_description,
  t2_title,
  t3_description,
  t3_title,
  t4_description,
  t4_title,
}) {
  return (
    <section
      className="py-24 bg-white overflow-hidden"
      style={{
        backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
        backgroundPosition: "center",
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-gray-500 bg-gray-100 font-medium uppercase rounded-full shadow-sm">
              {legend}
            </span>
            <h2
              className={` text-indigo-500 text-4xl md:text-5xl leading-tight font-bold tracking-tighter text-${color}`}
            >
              {title}
            </h2>
            {subtitle && (
              <p className="mb-8  text-lg md:text-3xl text-coolGray-500 text-left font-medium max-w-xl">
                {subtitle}
              </p>
            )}

            <div className="flex flex-wrap -mx-4 text-center md:text-left">
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-indigo-500 font-semibold rounded-full">
                  1
                </div>
                <h3 className="mb-2 text-xl font-bold">{t1_title}</h3>
                <p className="font-medium text-gray-500">{t1_description}</p>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-indigo-500 font-semibold rounded-full">
                  2
                </div>
                <h3 className="mb-2 text-xl font-bold">{t2_title}</h3>
                <p className="font-medium text-gray-500">{t2_description}</p>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-indigo-500 font-semibold rounded-full">
                  3
                </div>
                <h3 className="mb-2 text-xl font-bold">{t3_title}</h3>
                <p className="font-medium text-gray-500">{t3_description}</p>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-indigo-500 font-semibold rounded-full">
                  4
                </div>
                <h3 className="mb-2 text-xl font-bold">{t4_title}</h3>
                <p className="font-medium text-gray-500">{t4_description}</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
            <div className="relative mx-auto md:ml-0 max-w-max">
              <img
                className="absolute z-10 -right-8 -top-8 w-28 md:w-auto"
                src="flex-ui-assets/elements/circle3-yellow.svg"
                alt=""
              />
              <img
                className="absolute z-10 -left-10 -bottom-8 w-28 md:w-auto"
                src="flex-ui-assets/elements/dots3-blue.svg"
                alt=""
              />
              <img src={image} alt="" />;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
