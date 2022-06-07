import Footer from "../../../components/marketing/footer";
import SimpleImage from "../../../components/SimpleImage";
import BlogLink from "../../../components/sections/BlogLink";

import { Fragment, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  return (
    <div className=" antialiased bg-body text-body font-body ">
      <section
        className="py-16 md:py-24 bg-white"
        style={{
          backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="md:max-w-2xl mx-auto mb-12 text-center">
            <div className="inline-block py-1 px-3 mb-6 text-xs leading-5 text-indigo-500 font-medium uppercase bg-indigo-100 rounded-full shadow-sm">
              Satsang
            </div>
            <div className="flex items-center justify-center">
              <p className="inline-block text-indigo-500 font-medium">
                Roberto Rodriguez
              </p>
              <span className="mx-1 text-indigo-500">•</span>
              <p className="inline-block text-indigo-500 font-medium">
                23 May 2022
              </p>
            </div>
            <h2 className="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">
              The collective of humankind
            </h2>
            <p className="mb-10 text-lg md:text-xl font-medium text-coolGray-500"></p>
          </div>
        </div>

        <SimpleImage
          width={2000}
          className="w-full mb-10 mx-auto"
          src="/raw/art/human-background.jpg"
          alt=""
        />

        <div className="container px-4 mx-auto">
          <div className="md:max-w-3xl mx-auto">
            <p className="mb-8 pb-10 text-lg md:text-xl font-medium text-coolGray-500 border-b border-coolGray-100"></p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500"></p>

            <div className="mb-6 p-6 border-l-2 border-indigo-500">
              <p className="mb-4 text-xl md:text-2xl leading-tight font-medium text-coolGray-800"></p>
              <span className="text-base md:text-lg text-coolGray-400 font-medium">
                The contract of life
              </span>
            </div>

            <p className="mb-4 text-base md:text-lg text-coolGray-500"></p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
