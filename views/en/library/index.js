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
        <div className=" min-h-screen ">
          <SimpleImage
            width={2000}
            height={1000}
            className="w-full mb-10 mx-auto"
            src="/raw/art/human-colors.jpg"
            alt=""
          />
        </div>
        <div className="container top-0 relative md:absolute md:top-72 px-4 mx-auto">
          <div className="md:max-w-6xl mx-auto mb-12 text-center">
            <div className="inline-block py-1 px-3 mb-6 text-xs leading-5 text-white font-medium uppercase bg-indigo-800 rounded-full shadow-sm">
              The Human Blog
            </div>

            <p className="mb-10 bg-indigo-50 p-4 opacity-90 rounded-lg text-lg md:text-xl font-medium text-coolGray-500 shadow-md">
              At some point, I realized that almost all of my beliefs about
              myself, life, and the world were mistaken. Very clearly, I see the
              society of humankind as a virtual reality full of concepts like
              countries, businesses, and so on. But I can't find them on the
              ground. Yes, there are gates and signs, but the games they play
              have nothing to do with nature, science and the universe.
              <br /> Here you'll find notes, essays, and meditations about such
              topics.
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
              <Link locale={locale} href="/library/preparation-to-go-within">
                <div>
                  <a className="block mb-6 overflow-hidden rounded-md">
                    <SimpleImage
                      width={300}
                      className="w-full"
                      transformations={[
                        { cropMode: "cm_extract", height: 300, width: 600 },
                      ]}
                      src="/raw/art/mind-learn.jpg"
                    />
                  </a>
                  <div className="mb-4">
                    <a className="inline-block py-1 px-3 text-xs leading-5 text-indigo-500 hover:text-indigo-600 font-medium uppercase bg-indigo-100 hover:bg-indigo-200 rounded-full shadow-sm">
                      Satsang
                    </a>
                  </div>
                  <p className="mb-2 text-coolGray-500 font-medium">
                    Roberto Rodriguez • 4 Jun 2022
                  </p>
                  <a className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline">
                    0. Preparation to go within
                  </a>
                  <p className="mb-4 text-base md:text-lg text-coolGray-400 font-medium">
                    A motivational text that gives advice on how to reach an
                    open state of mind compatible with learning.
                  </p>
                </div>
              </Link>
            </div>

            <div className="w-full md:w-1/2 px-4 mb-8 cursor-pointer">
              <Link locale={locale} href="/library/the-one-in-the-background">
                <div>
                  <a className="block mb-6 overflow-hidden rounded-md">
                    <SimpleImage
                      width={300}
                      className="w-full"
                      transformations={[
                        { cropMode: "cm_extract", height: 300, width: 600 },
                      ]}
                      src="/raw/art/human-background.jpg"
                    />
                  </a>
                  <div className="mb-4">
                    <a className="inline-block py-1 px-3 text-xs leading-5 text-indigo-500 hover:text-indigo-600 font-medium uppercase bg-indigo-100 hover:bg-indigo-200 rounded-full shadow-sm">
                      Satsang
                    </a>
                  </div>
                  <p className="mb-2 text-coolGray-500 font-medium">
                    Roberto Rodriguez • 2 Jun 2022
                  </p>
                  <a className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline">
                    1. The one in the background
                  </a>
                  <p className="mb-4 text-base md:text-lg text-coolGray-400 font-medium">
                    Some call this background the unconscious, the ego, the
                    self, and no matter its name - it's out of reach to any
                    external element because it exists before the devices that
                    are mindful of the exterior.
                  </p>
                </div>
              </Link>
            </div>

            <div className="w-full md:w-1/2 px-4 mb-8 cursor-pointer">
              <Link locale={locale} href="/library/the-contract-of-life">
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
                      Satsang
                    </a>
                  </div>
                  <p className="mb-2 text-coolGray-500 font-medium">
                    Roberto Rodriguez • 27 May 2022
                  </p>
                  <a className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline">
                    {" "}
                    2. The contract of life
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
