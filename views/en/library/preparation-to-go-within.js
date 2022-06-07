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
                4 Jun 2022
              </p>
            </div>
            <h2 className="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">
              Preparation to go within
            </h2>
            <p className="mb-10 text-lg md:text-xl font-medium text-coolGray-500">
              A motivational text that gives advice on how to reach an open
              state of mind compatible with learning.
            </p>
          </div>
        </div>

        <SimpleImage
          width={2000}
          className="w-full mb-10 mx-auto"
          src="/raw/art/mind-learn.jpg"
          alt=""
        />

        <div className="container px-4 mx-auto">
          <div className="md:max-w-3xl mx-auto">
            <p className="mb-8 pb-10 text-lg md:text-xl font-medium text-coolGray-500 border-b border-coolGray-100">
              There is a state of mind designed to be used to learn new things.
              It's an open state of mind, it's focused, and it's relaxed.
              Unfortunately, it's also scarce these days. It gets even more
              infrequent the older we get, and our concepts solidify.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              When we want to learn something new, we must bring that state of
              mind when we go to a class, a course, or a retreat. Don't go to
              see what it's like to check it out. With that attitude, you'll
              never be able to see what it's like.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              If we approach learning by comparing it with the old, by wanting
              to understand what it's all about. Imagine a kid in class, the
              first of math, frustrated with the teacher because he can't grasp
              what all this is about when the teacher says, "Let's start with 1.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              If we are to learn anything, we must start with 1. We must trust,
              listen and do what our teacher tells us to do. Then, focus and
              send away all distractions in body and mind by saying - no! go
              away, I am focused on doing that.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500"></p>

            <div className="mb-6 p-6 border-l-2 border-indigo-500">
              <p className="mb-4 text-xl md:text-2xl leading-tight font-medium text-coolGray-800">
                Do it as if your life depended on it. In reality, it does. As if
                you are climbing a mountain and the rocks in the trail are
                loose, you have to be with each step. If a mosquito is flying
                about, you must let it fly because you have to focus on each
                step.
              </p>
              <span className="text-base md:text-lg text-coolGray-400 font-medium">
                Preparation to go within
              </span>
            </div>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Do your best, all the way. Close any other channels of thought,
              the ones comparing, the ones judging, labeling, and especially
              those trying to understand. There will be time for that. In the
              end, you will understand - but you need to focus now on each
              instruction as if your life depends on it. Otherwise, your brain
              won't know that it's learning time.
            </p>
          </div>
        </div>
      </section>

      <BlogLink title="They key to unlock the mind" link="the-key-the-mind" />

      <section
        className="py-24 md:py-32"
        style={{
          backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          backgroundPosition: "center",
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-14 md:mb-0">
              <div className="max-w-md">
                <h2 className="mb-4 text-3xl md:text-4xl text-indigo-500 font-heading font-bold">
                  The one in the background
                </h2>
                <p className="text-lg md:text-xl font-heading font-medium text-coolGray-500">
                  Read > Next Chapter
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <Link locale={locale} href="/library/the-one-in-the-background">
                <div className="flex flex-wrap items-center md:justify-end">
                  <a
                    className="inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto mb-2 md:mb-0 md:mr-4 text-lg leading-7 text-indigo-50 bg-indigo-500 hover:bg-indigo-600 font-medium focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm"
                    href="#"
                  >
                    Read Now
                  </a>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
