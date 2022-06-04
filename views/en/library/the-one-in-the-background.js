import Footer from "../../../components/marketing/footer";
import SimpleImage from "../../../components/SimpleImage";

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
                2 Jun 2022
              </p>
            </div>
            <h2 className="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">
              The one in the background
            </h2>
            <p className="mb-10 text-lg md:text-xl font-medium text-coolGray-500">
              Some call this background the unconscious, the ego, the self, and
              no matter its name - it's out of reach to any external element
              because it exists before the devices that are mindful of the
              exterior.
            </p>
            <div className="flex items-center justify-center text-left -mx-2">
              <div className="w-auto px-2">
                <img src="flex-ui-assets/images/blog/avatar.png" alt="" />
              </div>
            </div>
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
            <p className="mb-8 pb-10 text-lg md:text-xl font-medium text-coolGray-500 border-b border-coolGray-100">
              At one point in my life, I used to think that if I was good, I
              prayed and had positive thoughts nothing would happen to my loved
              ones and me. But at the same time, I was recovering from my
              brother dying in an accident. That tremendous event, mixed with my
              own problems and situations, made my life unbearable.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              So one of the things I tried to overcome the feelings inside was
              Ayahuasca, which did wonders for me on many levels. "The plant"
              was extra generous by helping me see many facts about my life and
              myself that I could not see. But my mind is so stubborn and
              ego-centric that it swapped some of it's my beliefs, moving from a
              science-mind-centric approach into a magic-spirit-centric one.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              What did not change and became a severe condition that made me
              suffer tremendously was a background reality where I was petrified
              of something else happening to me or my loved ones. Unfortunately,
              I overlooked this reality since it was not on the surface of my
              day to day, but it did show up in significant moments of my life.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              As a response, my mind was trying to reach an agreement with any
              form of God that would "sign it" where nothing terrible was going
              to happen again, and I would not feel so bad inside. So it swapped
              the old beliefs of getting security from society and medicine,
              that is, working hard, following the law, insurance, and so on.
              But in the background, everything remained the same.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              The back and forth between trying to get security from spirit in
              the form of energy and light against the dark and getting it from
              society in the form of money, power, and recognition must be
              expected until the need for security is gone. Finding that within
              ourselves is such an accomplishment for any human!
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Some call this background the unconscious, the ego, the self, and
              no matter its name - it's out of reach to any external element
              because it exists before the devices that are mindful of the
              exterior.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              It's actually out of reach from our own minds. So if we want to
              tap into that, motivated by a desire to heal, we must find our
              true self beyond the mind, which is the only one that can be aware
              of that.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500"></p>

            <div className="mb-6 p-6 border-l-2 border-indigo-500">
              <p className="mb-4 text-xl md:text-2xl leading-tight font-medium text-coolGray-800">
                If I don't understand myself, the self, the ego, the person.{" "}
                <br />
                <br />I may meditate for the rest of my life, and I may be
                deceiving myself. I may be living in a vast series of illusions,
                thinking those are real. So I must understand myself.
              </p>
              <span className="text-base md:text-lg text-coolGray-400 font-medium">
                Jido Krishnamirti
              </span>
            </div>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Following on my realization that even with my best intentions and
              discipline, parts of my humanity override that path I want to take
              in life. But, more importantly, the entanglement between the I's
              must be understood with something that's not the mind before
              anything "spirit" does not become an illusion, another a fantasy
              of the mind.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              These are, in essence, the teaching of Jeshua, Gautama, Maharishi,
              Yogananda, and Krishnamurti, among many others I consider
              teachers.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              I don't consider myself a teacher or anything like that. My
              passion is to explore the inside of life on my own and compare my
              experience to their advice. But to begin to see and then
              understand these entanglements between the I's - to find peace and
              not frustration in the question "Who Am I" - we must really listen
              to their advice and let go for a moment of our minds.
            </p>
          </div>
        </div>
      </section>

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
                  The Contract of Life
                </h2>
                <p className="text-lg md:text-xl font-heading font-medium text-coolGray-500">
                  Read > Next Chapter
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <Link locale={locale} href="/library/the-contract-of-life">
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
