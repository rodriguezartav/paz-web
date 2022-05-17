import Link from "next/link";

import Image from "next/image";

export default function HomeApp({
  title,
  legend,
  image,
  color = "indigo-500",
  subtitle,
  button,
  onClick,
}) {
  return (
    <section
      className="relative   py-24 md:pb-32 bg-white overflow-hidden"
      style={{
        backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
        backgroundPosition: "center",
      }}
    >
      <div className="relative container px-4 mx-auto">
        <div className="xl:max-w-4xl mb-18 md:mb-16 mx-auto text-center">
          <img
            className="h-40 w-40 mx-auto text-white"
            src="/marketing/logo/svg/lila_solo.svg"
          />

          <h1
            className={`mb-4 text-3xl text-indigo-400 md:text-4xl leading-tight font-heading font-bold text-${color}`}
          >
            {title}
          </h1>
          <p className="mb-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-500 font-heading">
            {subtitle}
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <img
            className="absolute top-0 left-0 -mt-6 lg:-mt-12 -ml-6 lg:-ml-12 w-20 lg:w-auto z-10"
            src="flex-ui-assets/elements/circle3-yellow.svg"
            alt=""
          />
          <img
            className="z-50 absolute bottom-0 right-0 -mb-6 lg:-mb-10-mr-6 lg:-mr-12 w-20 lg:w-auto"
            src="flex-ui-assets/elements/dots3-blue.svg"
            alt=""
          />
          <img className="relative z-50 " src={image} alt="" />
        </div>
      </div>
    </section>
  );
}
