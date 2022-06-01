import { Fragment, useState } from "react";
import Link from "next/link";
import HeaderTop from "../../../components/sections/headerTop";
import SimpleImage from "../../../components/SimpleImage";
import { useRouter } from "next/router";

export default function Example() {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  return (
    <div className=" antialiased bg-body text-body font-body">
      <section
        className="py-24 pt-0 bg-white relative"
        style={{
          backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left top",
        }}
      >
        <SimpleImage
          width={2000}
          className="w-full mb-10 mx-auto"
          src="/raw/art/human-colors.jpg"
          alt=""
        />
        <div className="container absolute top-72 px-4 mx-auto">
          <div className="md:max-w-6xl mx-auto mb-12 text-center">
            <div className="inline-block py-1 px-3 mb-6 text-xs leading-5 text-white font-medium uppercase bg-indigo-800 rounded-full shadow-sm">
              Satsang Blog
            </div>

            <p className="mb-10 bg-indigo-50 p-4 opacity-90 rounded-lg text-lg md:text-xl font-medium text-coolGray-500 shadow-md">
              While participating in the Vippasanna center of Soi Do Pre in
              Thailand and during my studies with Ayahuasca in the Amazon
              Putumayo Highlands, I was amazed at the triggers that shifted my
              mind. In Satsang I realized how those triggers are the first step
              in the transformation of humankind. My engineer's mind loves to
              create exercises, prayers, and meditations to bring creativity to
              our minds.
            </p>
            <div className="flex items-center justify-center text-left -mx-2">
              <div className="w-auto px-2">
                <img src="flex-ui-assets/images/blog/avatar.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-32 px-4 mx-auto">
          <div className="flex flex-wrap -mx-4 mb-12 md:mb-20">
            <div className="w-full md:w-1/2 px-4 mb-8 cursor-pointer">
              <Link locale={locale} href="/library/the-actualities-of-life">
                <div>
                  <a className="block mb-6 overflow-hidden rounded-md">
                    <SimpleImage
                      width={300}
                      className="w-full"
                      transformations={[
                        { cropMode: "cm_extract", height: 300, width: 600 },
                      ]}
                      src="/raw/art/human-space.jpg"
                    />
                  </a>
                  <div className="mb-4">
                    <a className="inline-block py-1 px-3 text-xs leading-5 text-indigo-500 hover:text-indigo-600 font-medium uppercase bg-indigo-100 hover:bg-indigo-200 rounded-full shadow-sm">
                      Technology
                    </a>
                  </div>
                  <p className="mb-2 text-coolGray-500 font-medium">
                    Roberto Rodriguez • 27 May 2022
                  </p>
                  <a className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline">
                    {" "}
                    The actualities of life
                  </a>
                  <p className="mb-4 text-base md:text-lg text-coolGray-400 font-medium">
                    {" "}
                    A strong text with an exercise that helped me reconcile with
                    the vulnerability of life. An invitation to shift how we see
                    life and engage with society in a way that can transform our
                    lives
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
