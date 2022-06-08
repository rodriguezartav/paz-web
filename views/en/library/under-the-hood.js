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
              How to look under the hood of consiousness
            </h2>
            <p className="mb-10 text-lg md:text-xl font-medium text-coolGray-500">
              Awareness is the key to the mind, but it's just a word here. We
              need to find the key, not the word or its meaning. To open the
              mind's door, we need the actual thing, the actual key. Let's find
              that out.
            </p>
          </div>
        </div>

        <SimpleImage
          width={2000}
          className="w-full mb-10 mx-auto"
          src="/raw/art/particle.jpg"
          alt=""
        />

        <div className="container px-4 mx-auto">
          <div className="md:max-w-3xl mx-auto">
            <p className="mb-8 pb-10 text-lg md:text-xl font-medium text-coolGray-500 border-b border-coolGray-100">
              Please don't read this as a philosophical system or the actual
              fact. Instead, it's like one of those pirate treasure maps, and I
              was definitely a pirate in a previous life. So it's up to you to
              find the hidden meaning in the map.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              When I talk about the heart, I don't mean the actual heart; I
              don't mean the neurons in the heart or any of that. Instead, we
              use them as navigational symbols when exploring an unknown land.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              <span className="text-indigo-600 text-3xl">
                Mind is not a thing;
              </span>{" "}
              <span className="text-indigo-600 text-2xl">
                let's temporarily say that the mind is an energy field
                surrounding the neurons in the brain.
              </span>
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Neurons are everywhere , not just in the brain. There is even the
              famous saying: "trust your gut." There are as many neurons in the
              gut as in the brain. But, of course, there are also neurons in the
              heart.
            </p>

            <div className="mb-6 mt-12 p-6 border-l-2 border-indigo-500">
              <p className="mb-4 text-xl md:text-2xl leading-tight font-medium text-coolGray-800">
                So, let's say - for now - that we want to shift the energy field
                from the brain into the heart.
              </p>
              <span className="text-base md:text-lg text-coolGray-400 font-medium">
                Simple enough? But unfortunately, it's not quite like that.
              </span>
            </div>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              We won't feel the heart until we take attention away from our
              minds. But unfortunately, we can't take attention away from our
              minds by trying to understand or imagine what it's like.{" "}
              <span className="text-indigo-600 text-2xl">
                If it involves thinking, then obviously, attention is in the
                mind.
              </span>
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              When we move into meditation, consciousness, and all that,{" "}
              <span className="text-indigo-600 text-2xl">
                we bring our pre-conditioned beliefs.
              </span>{" "}
              These are closer to myth and folk than the core religious beliefs.
              <span className="text-indigo-600 text-2xl">
                So take a peek into them and determine where they come from.
              </span>
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Some may come from a{" "}
              <span className="text-indigo-600 text-2xl">story</span> from
              someone, <span className="text-indigo-600 text-2xl">movies</span>,
              or even <span className="text-indigo-600 text-2xl">cartoons</span>
              . What we understood about enlightenment, karma, science,
              psychology, and Star Wars. Even if we are scholars, if they don't
              come from personal experience, they are not worth a grain of sand.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Letting these beliefs affect our exploration of consciousness it's
              like watching a movie and thinking that's how our love story will
              play out. As with any explorer worth its salt: Just make sure you
              don't let your expectations and beliefs contaminate the path you
              are about to walk.
            </p>

            <div className="mb-6 p-6 mt-10 border-l-2 border-indigo-500">
              <p className="mb-4 text-xl md:text-2xl leading-tight font-medium text-coolGray-800">
                "Are we able to explore consciousness without training,
                experience, and knowledge?"
              </p>
              <span className="text-base md:text-lg text-coolGray-400 font-medium">
                This is the question
              </span>
            </div>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Well, if we are conscious beings, yes, of course, we can. That's
              like asking if we can explore an unknown land? Well, if we have
              legs, then, of course, we can.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Anything related to consciousness and meditation it's like
              dancing.{" "}
              <span className="text-indigo-600 text-2xl">
                You can not learn to dance by understanding how to dance.
              </span>
              You can't move your feet by thinking about how to move your feet.
              You have to move them, but most importantly:{" "}
              <span className="text-indigo-600 text-2xl">
                dancing is only enjoyed when there is no mind.
              </span>{" "}
              Dancing is fun when we become the dance.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              So it's like dancing. If you think about it, then you ruin it. If
              you try to learn by thinking about it, you'll never find out what
              it's like.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Consciousness and awareness just are, and we'll never know what
              they are.
              <span className="text-indigo-600 text-2xl">
                We just know that we are.
              </span>{" "}
              So let's dance in the realm of consciousness and awareness into
              another dimension of existence.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              If you need something to hold on to, remember that we think we are
              made of particles. Then think about Heisenberg's Uncertainty
              Principle, where a particle's position and "movement" can't be
              known simultaneously. For example, in 1970, an experiment revealed
              all matter is a wave and a particle at the same time.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              That's us. Recall we think we are made of particles. Inherently,
              we can be two things at the same time. We can be a person and a
              wave at the same time. We can be individuals, and we can be one
              simultaneously. Don't think the owner of the eyes will ever
              understand, just know that's were we stand.
            </p>
            <BlogForm title="  I'll be writing an article about the ego soon... let me know if you'd like to receive it" />

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Humans are not meant to notice all that. Hence, the web of
              mind-reality protects us from getting confused; we are meant to
              focus and survive, but we are curious cats.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              We already know that things are not as they seem under the hood of
              matter. We know we are something, but we don't know what we are.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              We can not understand and be at the same time. So now that we are
              about to look under the hood of consciousness - we can expect the
              same. Just forget about thinking, and remember to dance.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              As a pirate, now is when I would write on the map: You still have
              time to turn back.
            </p>
          </div>
        </div>
      </section>

      <BlogLink title="They key to unlock the mind" link="the-key-the-mind" />

      <Footer />
    </div>
  );
}
