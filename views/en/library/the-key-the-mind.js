import Footer from "../../../components/marketing/footer";
import SimpleImage from "../../../components/SimpleImage";

import BlogLink from "../../../components/sections/BlogLink";

import { Fragment, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import BlogForm from "../../../components/sections/blogForm";

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
                6 Jun 2022
              </p>
            </div>
            <h2 className="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">
              They key to unlock the mind
            </h2>
            <p className="mb-10 text-lg md:text-xl font-medium text-coolGray-500">
              Unfortunately, as adults, our attention becomes stuck in the one
              dimension of the mind - let's overcome that.
            </p>
          </div>
        </div>

        <SimpleImage
          width={2000}
          className="w-full mb-10 mx-auto"
          src="/raw/art/human-heart.jpg"
          alt=""
        />

        <div className="container px-4 mx-auto">
          <div className="md:max-w-3xl mx-auto">
            <p className="mb-8 pb-10 text-lg md:text-xl font-medium text-coolGray-500 border-b border-coolGray-100">
              Every mind is unique, so for each person, there is a unique key to
              take attention away from the mind, and one could say that growth
              is about finding and learning to use that key.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              <span className="text-indigo-600 text-2xl">
                The key can be made up of all religions, internal arts, forms of
                shamanism, and devotion.
              </span>{" "}
              The unique combination of movements creates a feeling that, when
              followed, frees our attention from being locked in the mind.
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Believing in the key, thinking about the key, talking, reading,
              understanding, praying, or any other mental action has no effect
              at all.{" "}
              <span className="text-indigo-600 text-2xl">
                So many people, including myself, spent so much time dueling
                with the mirrors of the mind.
              </span>
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Be brave! Take any hammer and break belief into a thousand parts{" "}
              so you can see for yourself what's behind. The hammer is the key.{" "}
              <span className="text-indigo-600 text-2xl">
                Look for it in the resulting feeling{" "}
              </span>{" "}
              of religion, devotion, and internal arts like Yoga, Qi Gong,
              meditation, and self-inquiry. Just don't get confused between the
              key and the heart.
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              This is very simple, but our mind-training makes it seem hard. We
              must concentrate and tell apart imagination from actual fact. We
              must{" "}
              <span className="text-indigo-600 text-2xl">
                tell apart what we really are from what we think we are.
              </span>{" "}
              It's not the same.
            </p>

            <div className="mb-6 p-6 border-l-2 border-indigo-500">
              <p className="mb-4 text-xl md:text-2xl leading-tight font-medium text-coolGray-800">
                Feel the heart as the energy field created when our attention
                sits between our physical dimension and our spiritual one.
              </p>
              <span className="text-base md:text-lg text-coolGray-400 font-medium">
                The key to unlock the mind
              </span>
            </div>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              <span className="text-indigo-600 text-2xl">
                Don't confuse attention with seeing, thinking, or imagining.
              </span>{" "}
              It's something else. Attention or awareness is way above that in
              terms of the hierarchy of consciousness. It's what notices the
              seeing and the thinking. It's what allows it to happen. So let's
              do a short exercise to realize that:
            </p>
            <video controls className="w-full h-10 my-10" name="media">
              <source src="/audio/meditacion_lampara.mp3" type="audio/mpeg" />
            </video>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              We are not particles that make up the body. We are not the body.
              <span className="text-indigo-600 text-2xl">
                We are not the mind.
              </span>{" "}
              We are not the heart and not even the energy field surrounding it.
              We are much more than that, So it could be said,{" "}
              <span className="text-indigo-600 text-2xl">
                we are what's aware of all that.
              </span>
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Follow awareness to the most subtle and delicate part. As close as
              possible to where it all starts. Notice you exist and move back.
              Notice what you are aware of and make it wide, make it wide, and
              <span className="text-indigo-600 text-2xl">
                {" "}
                then make it even wider until you are aware of everything you
                can.
              </span>
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Somewhere down the line, you'll find what you believed was you;
              thoughts, feelings, everything there is inside. But since you are
              aware of that, that can't be you. You are more than that.
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              <span className="text-indigo-600 text-2xl">
                Become fully aware that you are aware,
              </span>{" "}
              be brave and stay still. Enjoy the split second where home and you
              become one.
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              But again, like in dancing,{" "}
              <span className="text-indigo-600 text-2xl">
                understanding it takes us nowhere.
              </span>
              This is about doing, and reading a book will never be the way to
              learn how to dance. Here we are not talking facts. You are not
              meant to believe this.{" "}
              <span className="text-indigo-600 text-2xl">
                You are meant to try it out,
              </span>{" "}
              and here is a 20-minute meditation I invented to do just that:
            </p>
            <video controls className="w-full h-10 my-10" name="media">
              <source src="/audio/meditacion_olas.mp3" type="audio/mpeg" />
            </video>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
