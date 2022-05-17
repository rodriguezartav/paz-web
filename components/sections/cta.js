import Link from "next/link";

import Image from "next/image";

export default function HomeApp({
  title,
  line1,
  color = "indigo-500",
  line2,
  line3,
  image,
  button,
  logoAfter,
  logoBefore,
  subtitle,
}) {
  return (
    <div className="relative">
      <section
        className="relative py-24 md:pb-0 bg-white overflow-hidden"
        style={{
          backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          backgroundPosition: "center",
        }}
      >
        {logoBefore && (
          <div className="relative max-w-4xl mx-auto">
            <img
              className="hidden absolute top-0 left-0 -mt-6 lg:-mt-12 -ml-6 lg:-ml-12 w-20 lg:w-auto z-10"
              src="flex-ui-assets/elements/circle3-yellow.svg"
              alt=""
            />
            <img
              className="hidden  absolute bottom-0 right-0 -mb-6 lg:-mb-10-mr-6 lg:-mr-12 w-20 lg:w-auto"
              src="flex-ui-assets/elements/dots3-blue.svg"
              alt=""
            />
            <img className="mx-auto relative w-44 h-44" src={image} alt="" />
          </div>
        )}

        <div className="relative container px-4 mx-auto">
          <div className="xl:max-w-4xl mb-18 md:mb-16 mx-auto text-center">
            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-indigo-500 bg-indigo-100 font-medium uppercase rounded-full shadow-sm">
              Sobre Paz
            </span>
            <h1
              className={`mb-4 text-3xl text-indigo-500 md:text-4xl leading-tight font-heading font-bold text-${color}`}
            >
              {title}
            </h1>
            <p className="mb-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-500 font-heading">
              {subtitle}
            </p>

            {button && (
              <Link href={button.href}>
                <a className="inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto text-lg leading-7 text-indigo-50 bg-indigo-500 hover:bg-indigo-600 font-medium focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm">
                  {button.text}
                </a>
              </Link>
            )}
          </div>

          {logoAfter && (
            <div className="relative max-w-4xl mx-auto">
              <img
                className="hidden absolute top-0 left-0 -mt-6 lg:-mt-12 -ml-6 lg:-ml-12 w-20 lg:w-auto z-10"
                src="flex-ui-assets/elements/circle3-yellow.svg"
                alt=""
              />
              <img
                className="hidden  absolute bottom-0 right-0 -mb-6 lg:-mb-10-mr-6 lg:-mr-12 w-20 lg:w-auto"
                src="flex-ui-assets/elements/dots3-blue.svg"
                alt=""
              />
              <img className="mx-auto relative" src={image} alt="" />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
