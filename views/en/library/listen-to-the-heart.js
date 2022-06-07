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
              Listen to the heart
            </h2>
            <p className="mb-10 text-lg md:text-xl font-medium text-coolGray-500">
              The heart plays a central role in the transformation or evolution
              of humankind. Internal arts, devotions, and religions direct us to
              discover the heart's energy field. I write this article right
              after a transformational retreat at{" "}
              <a
                target={"_blank"}
                className=" text-indigo-500 underline "
                href="http://lmazul.com"
              >
                Montaña Azul
              </a>
              , and it's my humble attempt at writing a painting of the
              mechanism of life by pointing to it rather than describing it.
            </p>
          </div>
        </div>

        <SimpleImage
          width={2000}
          className="w-full mb-10 mx-auto"
          src="/raw/art/real-human-heart.jpg"
          alt=""
        />

        <div className="container px-4 mx-auto">
          <div className="md:max-w-3xl mx-auto">
            <p className="mb-8 pb-10 text-lg md:text-xl font-medium text-coolGray-500 border-b border-coolGray-100">
              One of the most significant changes I've made is to shift my life
              so that I first listen to my heart and then do that. Living from
              the heart means that every action I take is made by listening to
              my heart, especially the most relevant ones.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              I am honestly quite surprised, but it becomes so simple when I
              think about it.{" "}
              <span className="text-indigo-600 text-xl">
                Even if we spend 1 hour/day taking care of our body and mind,{" "}
                <span className="text-indigo-600 text-2xl">
                  we spend 95% of the time doing something else
                </span>
              </span>{" "}
              - in a way - that perhaps is not suitable for the reality of who
              we are.
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              I've noticed how many resistances and uncomfortable feelings
              vanished from my body. The quality of my emotions, health, and
              general sense of well-being has improved dramatically.
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              When we live from the heart, we are in tune with ourselves all the
              time,{" "}
              <span className="text-indigo-600 text-2xl">
                not only when we set some time apart to be in tune with
                ourselves.{" "}
              </span>
              There is no conflict inside, and whatever happens, good or bad,
              everything always feels all right. It's like a coherence between
              reality, heart, and mind.
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              There is a new kind of faith that you don't have to protect
              because it's made by evidence in real life. Small coincidences
              happen all the time. The larger ones are surprising because the
              most complicated problems transform beautifully into realities
              that transcend our best hopes. Problems are no longer problems.
              They become shapes in the sand that get sorted on their own.
            </p>

            <BlogForm title="  I'll be writing an article about the ego soon... let me know if you'd like to receive it" />

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              The best part is knowing for a fact that no direct action was
              taken on our part, and it just happened as a result of living from
              the heart.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              <span className="text-indigo-600  text-2xl">
                Since we are born, a path has been set for us.
              </span>{" "}
              First, everyone wants us to learn how to walk and talk. Then we
              are sent to school to read and add. Then maybe high school or
              university, then a job, then perhaps a career, then get married,
              have kids, and it can go on until you die.
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Even if we are allowed to make up our own minds, we are trained to
              follow this path, and we'll only measure ourselves against this
              one, whatever the end result.
            </p>

            <div className="mb-6 p-6 border-l-2 border-indigo-500">
              <p className="mb-4 text-xl md:text-2xl leading-tight font-medium text-coolGray-800">
                "Everybody is a genius. But if you judge a fish by its ability
                to climb a tree, it will live its whole life believing that it
                is stupid."
              </p>
              <span className="text-base md:text-lg text-coolGray-400 font-medium">
                Albert Einstein
              </span>
            </div>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Traning, society, and religion are virtual layers so forcefully
              fused with natural reality that we can no longer tell them apart.
              Moreover, this training is so outdated that it does not even
              include Einstein's discoveries from 100 years ago.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              <span className="text-indigo-600  text-xl">
                When we look at different paradigms, we start looking for
                someone to train us in this new thing.
              </span>{" "}
              We forget what we want is to be free. The way of the heart is
              about finding out who we truly are.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              The heart is not the God that books talk about, and this has
              nothing to do with sin, desire, purification, or reaching
              enlightenment - the heart is closer to what we really are.So,{" "}
              <span className=" text-indigo-600  text-2xl">
                when we live from the heart, we live the way we truly are.
              </span>
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Many people I talk to share that they feel like their lives are
              not theirs. They have realized that{" "}
              <span className="text-indigo-600  text-2xl">
                they are just living to follow a path that never was their own
              </span>
              , and they are about ready to start living differently.
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Most of the time, we project our feelings towards our job. Since
              the job is the latest stop in a path we realized was not chosen
              consciously by us.
            </p>
            <p className="mb-4  text-base md:text-lg text-coolGray-500 ">
              <span className=" font-semibold">
                Please - really - don't read this as "quit your job and meditate
                all day in a cave."
              </span>{" "}
              We believe the solution has to do with changing jobs or even
              careers, and probably it does.
            </p>

            <p className="mb-4  text-base md:text-lg text-coolGray-500 ">
              But listening to the heart has nothing to do with what role or job
              we have. My teacher says there is honor in every role, and I agree
              with that.
            </p>

            <h3 className="mb-4 text-2xl md:text-3xl font-semibold text-indigo-600">
              What's living from the heart?
            </h3>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              It's the opposite of everything we know about living life. It's
              not a philosophy, a technic, or a method. It's not meditation or a
              new kind of Yoga. It's different. It's not done with the body or
              the mind, and most of us have never heard of that.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              <span className=" text-indigo-600  text-2xl">
                We must really learn to tell mind and heart apart.
              </span>{" "}
              For example, something may feel like it's coming from the heart -
              especially in relationships - but in reality, it was just{" "}
              <span className=" text-indigo-600 ">
                our mind seeing what it wants
              </span>
              , following desire, or filling a void it thinks it has.
            </p>
            <p className="mb-4 mt-10 text-base md:text-lg text-coolGray-500">
              <span className=" text-indigo-600  text-4xl">
                So we must also learn that listening to thoughts, feelings, and
                emotions is listening to our mind
              </span>
              , and it's very different from that which comes from the heart.
              What we really want is very different from what we think we want.
            </p>
            <div className=" p-6 mt-10 mb-6 border-l-2 border-indigo-500">
              <p className="mb-4 text-xl md:text-2xl leading-tight font-medium text-coolGray-800">
                🎵 You can't always get what you want
                <br /> But if you try sometime you'll find,
                <br />
                You get what you need 🎵
              </p>
              <span className="text-base md:text-lg text-coolGray-400 font-medium">
                The Rolling Stones
              </span>
            </div>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              There is also a biological tendency to make it seem like we are
              the mind , or even worse, a mere thought in the mind. It's called
              the ego or the self, our human identity. It's what we think we
              are; it's what we are defending when we fight!
            </p>
          </div>

          <div className="md:max-w-3xl mx-auto">
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              If we remove the noise in the mind, the drama, the past, and all
              the confusion in life, we'll be left with what we really want.
            </p>

            <div className="mt-10 p-6 border-l-2 border-indigo-500">
              <p className="mb-4 text-xl md:text-2xl leading-tight font-medium text-coolGray-800">
                "I wonder if you can go in and examine on your own if it's true
                that identity is just a thought?"
              </p>
              <span className="text-base md:text-lg text-coolGray-400 font-medium">
                Jiddu Krishnamurti
              </span>
            </div>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              And when we know what we really want, there is no need for the
              strategy, the calculation, and the imagination of the possible
              outcomes because we no longer have to waste energy on that. It's
              such a relief!
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              We then start to realize that the mind does not have as much
              information as the heart. All the mind knows belongs to the past,
              and{" "}
              <span className="text-indigo-600  text-3xl">
                we begin to trust our heart more than we trust our mind, and
                that transforms life.
              </span>
            </p>
          </div>
        </div>
      </section>

      <BlogLink
        title="How to look under the hood of consiousness"
        link="under-the-hood"
      />

      <Footer />
    </div>
  );
}
