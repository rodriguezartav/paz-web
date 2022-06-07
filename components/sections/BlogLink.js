import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

export default function BlogLink({ title, link }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  return (
    <section
      className="py-4 mx-4 md:mx-0"
      style={{
        backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
        backgroundPosition: "center",
      }}
    >
      <div className="container max-w-5xl  px-4 mx-auto ">
        <div className="flex flex-wrap py-4 bg-indigo-500 items-center -mx-4">
          <div className="w-full  md:w-3/4 px-4 mb-14 md:mb-0">
            <div className="max-w-xs mx-auto md:max-w-4xl text-center md:text-left">
              <h2 className=" text-3xl md:text-4xl text-indigo-50  font-heading font-bold">
                {title}
              </h2>
              <p className="text-lg md:text-xl font-heading font-medium text-coolGray-50">
                Next Chapter
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <Link locale={locale} href={link}>
              <div className="flex flex-wrap items-center md:justify-end">
                <a className="inline-flex items-center text-indigo-500 justify-center px-7 py-3 h-14 w-full md:w-auto mb-2 md:mb-0 md:mr-4 text-lg leading-7 text-indigo-500 bg-indigo-50 hover:bg-indigo-100 font-medium focus:ring-2 focus:ring-indigo-50 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm">
                  Read Now
                </a>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
