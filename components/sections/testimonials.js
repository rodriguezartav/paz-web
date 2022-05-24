import Link from "next/link";

import Image from "../Image";

export default function HomeApp({
  color = "indigo-500",
  person,
  position,
  quote,

  subtitle,
}) {
  return (
    <section
      className="py-24 md:pb-28 bg-white"
      style={{
        backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
        backgroundPosition: "center",
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="relative max-w-5xl sm:px-6 pb-6 mb-10 mx-auto text-center">
          <img
            className="absolute top-0 left-0"
            src="flex-ui-assets/elements/testimonials/quote-top-green.svg"
            alt=""
          />
          <img
            className="absolute bottom-0 right-0"
            src="flex-ui-assets/elements/testimonials/quote-down-green.svg"
            alt=""
          />
          <div className="relative">
            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">
              Quotes
            </span>
            <h2 className="text-2xl md:text-5xl font-semibold tracking-tighter">
              {quote}
            </h2>
          </div>
        </div>
        <div className="text-center mb-8">
          <img
            className="w-24 h-24 mx-auto mb-6 rounded-full"
            src={image}
            alt=""
          />
          <h3 className="mb-2 text-xl md:text-2xl font-semibold">{person}</h3>
          <span className="text-lg text-coolGray-500 font-medium">
            {position}
          </span>
        </div>
        <div className="text-center">
          <button className="inline-block h-3 w-3 mr-3 rounded-full bg-coolGray-100" />
          <button className="inline-block h-3 w-3 mr-3 rounded-full bg-green-500" />
          <button className="inline-block h-3 w-3 rounded-full bg-coolGray-100" />
        </div>
      </div>
    </section>
  );
}
