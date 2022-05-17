import Link from "next/link";

import Image from "next/image";

export default function HomeApp({
  title,
  legend,
  color = "indigo-500",
  image,
  subtitle,
  button,
  onClick,
}) {
  return (
    <div className="relative">
      <section className=" relative -top-60 z-10 wave-top wave-bottom bg-white">
        <div className="wave wave-top w-full text-indigo-50">
          <svg
            viewBox="0 0 1440 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 64.5909H349.922C606.664 64.5909 859.771 -7.62939e-06 1080 -7.62939e-06C1300.23 -7.62939e-06 1440 64.5909 1440 64.5909V116H0V64.5909Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div
          className="py-24 md:py-32 bg-indigo-50 overflow-hidden"
          style={{
            backgroundImage:
              'url("flex-ui-assets/elements/pattern-light-big.svg")',
            backgroundPosition: "center",
          }}
        >
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap lg:items-center -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-indigo-500 bg-indigo-100 font-medium uppercase rounded-full shadow-sm">
                  {legend}
                </span>
                <h1
                  className={`mb-8 text-4xl md:text-5xl leading-tight text-lime-700 font-bold tracking-tighter text-${color}`}
                >
                  {title}
                </h1>
                <p className="mb-6 text-lg md:text-xl text-gray-500 font-medium">
                  {subtitle}
                </p>
                {button && (
                  <Link href={button.href}>
                    <a className="inline-block py-4 px-5 w-full md:w-auto text-base leading-4 text-indigo-50 bg-lime-700 hover:bg-lime-800 font-medium text-center focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 rounded-md shadow-sm">
                      {button.text}
                    </a>
                  </Link>
                )}
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="relative mx-auto md:mr-0 max-w-max">
                  <img
                    className="absolute z-10 -left-8 -top-8 w-28 md:w-auto text-yellow-400"
                    src="flex-ui-assets/elements/circle3-yellow.svg"
                    alt=""
                  />
                  <img
                    className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto text-blue-500"
                    src="flex-ui-assets/elements/dots3-blue.svg"
                    alt=""
                  />
                  <img src={image} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wave wave-bottom w-full text-indigo-50">
          <svg
            viewBox="0 0 1440 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1440 51.4091H1090.08C833.336 51.4091 580.229 116 360 116C139.771 116 0 51.4091 0 51.4091V0H1440V51.4091Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>
    </div>
  );
}
