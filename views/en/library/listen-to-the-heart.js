import Footer from "../../../components/marketing/footer";
import SimpleImage from "../../../components/SimpleImage";

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
          src="/raw/art/human-heart.jpg"
          alt=""
        />

        <div className="container px-4 mx-auto">
          <div className="md:max-w-3xl mx-auto">
            <p className="mb-8 pb-10 text-lg md:text-xl font-medium text-coolGray-500 border-b border-coolGray-100">
              One of the most significant changes I've made is to shift my life
              so that I first listen to my heart and then do that. Living from
              the heart means that every action I take is made by listening to
              my heart, especially the most relevant ones. Soon, I'll elaborate
              on that.
            </p>

            <h3 className="mb-4 text-2xl md:text-3xl font-semibold text-coolGray-800">
              The results
            </h3>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              I've noticed how many resistances and uncomfortable feelings
              vanish from my body. The quality of my emotions, health, and
              general sense of well-being has improved dramatically.
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              I am honestly quite surprised, but it becomes so simple when I
              think about it. Even if we give some time to take care of our body
              and mind, we spend 95% of the time doing something - in a way -
              that perhaps is not suitable for the reality of who we are.
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              When we live from the heart, we are in tune with ourselves all the
              time, not only when we set some time apart to be with ourselves.
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

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              The best part is knowing for a fact that no direct action was
              taken on our part, and it just happened as a result of living from
              the heart.
            </p>

            <h3 className="mb-4 mt-10 text-2xl md:text-3xl font-semibold text-coolGray-800">
              Why live from the heart?
            </h3>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Since we are born, a path has been set for us. First, everyone
              wants us to learn how to talk and walk. Then we are sent to school
              to read and add. Then maybe high school or university, then a job,
              then perhaps a career, then get married, have kids, and it can go
              on until you die.
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Of course, we are allowed to make up our own minds within this
              path, but whatever the end result, success will be measured only
              against that one path.
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
              The heart is not the God that books talk about, and this has
              nothing to do with sin, desire, purification, or reaching
              enlightenment - the heart is closer to what we really are. So when
              we live from the heart, we live the way we truly are.
            </p>

            <h3 className="mb-4 text-2xl md:text-3xl font-semibold text-coolGray-800">
              What is it?
            </h3>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              It's the opposite of everything we know about living life. It's
              not a philosophy, a technic, or a method. It's not meditation or a
              new kind of Yoga. It's different. It's not done with the body or
              the mind, and most of us have never heard of that.
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              So as you proceed, especially if you are new to this, think of it
              as someone that has never seen the sea, taking a safety brief
              before jumping in. Don't worry if you don't understand; a wave
              will explain everything deep and fast when you are inside. So pay
              as much attention as you can.
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Living from the heart sounds nice, but I am not selling a product
              here. It's the most challenging thing I have done. The heart knows
              nothing about math, and it can say - and it will - get rid of
              that. "That" can be your business, career, livelihood, marriage,
              friends, lifestyle, and habits.
            </p>
            <p className="mb-4 font-medium  text-base md:text-lg text-coolGray-500 ">
              <span className=" text-purple-600">
                Please - really - don't read this as "quit your job and meditate
                all day in a cave."
              </span>{" "}
              That would be listening to your mind, and we'll end up where we
              began. It has nothing to do with that; it has to do with doing in
              life what we really want.
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              If we remove the noise in the mind, the drama, the past, and all
              the confusion in life, we'll be left with what we really want. But
              that is very different from what we think we want.
            </p>

            <div className="mb-6 p-6 border-l-2 border-indigo-500">
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
              And when we know what we really want, there is no need for the
              strategy, the calculation, and the imagination of the possible
              outcomes because we no longer have to waste energy on that. It's
              such a relief!
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              We then start to realize that the mind does not have as much
              information as the heart. All the mind knows belongs to the past,
              and we begin to trust our heart more than we trust our mind, and
              that transforms life.
            </p>

            <h3 className="mb-4 mt-14 text-2xl md:text-3xl font-semibold text-coolGray-800">
              How internal arts, religions, and devotion fit into our own path
            </h3>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Each of us has a unique path, and that's the one we want to walk.
              That's listening to the heart and has nothing to do with what role
              or job we have. My teacher says there is honor in every role, and
              I agree with that.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              At first, living from the heart requires some discipline. We must
              really learn to tell mind and heart apart. The mind is not a
              thing, but for now lets temporarily say that the mind is an energy
              field surrounding the neurons in the brain.
            </p>
          </div>

          <BlogForm
            title="  I'll be writing an article about the nature of the mind
                  soon... let me know if you'd like to receive it"
          />

          <div className="md:max-w-3xl mx-auto">
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Neurons are everywhere, not just in the brain. There is even the
              famous saying, "trust your gut." There are as many neurons in the
              gut as in the brain. But, of course, there are also neurons in the
              heart. So, we want to shift the energy field from the brain into
              the heart.
            </p>
            <div className="mb-6 p-6 border-l-2 border-indigo-500">
              <p className="mb-4 text-xl md:text-2xl leading-tight font-medium text-coolGray-800">
                Simple enough? But unfortunately, it's not quite like that.
              </p>
              <span className="text-base md:text-lg text-coolGray-400 font-medium">
                Listen to the Heart
              </span>
            </div>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              A "message" may seem like it's coming from the heart, but it is
              just the field extending from the mind. How often do we believe -
              especially in relationships - that we were listening to our
              hearts. But in reality, it was just our mind seeing what it wants,
              following desire, or filling a void in our life. So we must also
              learn to tell apart thoughts, feelings, and emotions from that
              which comes from the heart.
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              There is also a biological tendency to make it seem like we are
              the mind, or even worse, a mere thought in the mind. It's called
              the ego or the self, our human identity. It's what we think we
              are; it's what we are defending when we fight and just dealing
              with that takes a lifetime to tell apart.
            </p>
            <div className="mb-6 p-6 border-l-2 border-indigo-500">
              <p className="mb-4 text-xl md:text-2xl leading-tight font-medium text-coolGray-800">
                "I wonder if you can go in and examine on your own if it's true
                that identity is just a thought?""
              </p>
              <span className="text-base md:text-lg text-coolGray-400 font-medium">
                Jiddu Krishnamurti
              </span>
            </div>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              When I talk about the heart, I don't mean the actual heart; I
              don't mean the neurons in the heart, the field, or any of that
              provisional nonsense.
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Feel the heart as the energy field created when our attention sits
              between our physical dimension and our spiritual one. But
              unfortunately, as adults, our attention becomes static in the one
              dimension of the mind so this becomes very hard.
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              We won't feel the heart until we take attention away from our
              minds. But unfortunately, we can't take attention away from our
              minds by using our minds in trying to understand or imagining what
              it's like.
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              It's something we do, not something we think about. It's like
              dancing. You can't learn to dance by understanding how to dance.
              You can't move your feet by thinking or imagining their movement.
              You have to move them, and dancing, the movement of the feet, is
              only enjoyed when there is no mind.
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              So it's like dancing. If you think about it, then you ruin it. If
              you try to learn by thinking about it, you'll never find out what
              it's like.
            </p>

            <h3 className="mb-4 mt-10 text-2xl md:text-3xl font-semibold text-coolGray-800">
              The key to the mind
            </h3>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Every mind is unique, so there is a unique key to take attention
              away from the mind, and one could say that life is about finding
              and learning to use that key.
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              The key can be made up of all religions, internal arts, forms of
              shamanism, and devotion. It's the unique combination of movements
              that frees our attention from being locked in the mind.
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Don't confuse attention with seeing, thinking, or imagining. It's
              something else. Attention or awareness is way above that in terms
              of the hierarchy of consciousness. It's what notices the seeing
              and the thinking. It's what allows it to happen.
            </p>
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              But again, like in dancing, understanding it takes us nowhere.
              This is about doing, and reading a book will never be the way to
              learn how to dance. Here we are not talking facts. You are not
              meant to believe this. You are meant to try it out, and here is a
              simple meditation I invented to do just that.
            </p>

            <video controls className="w-full h-10 my-10" name="media">
              <source src="/audio/meditacion_lampara.mp3" type="audio/mpeg" />
            </video>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              The key to unlocking the mind is real. But believing in the key,
              thinking about the key, talking, reading, understanding, praying,
              or any other mental action has no result. You must explore, play
              and realize the awareness that you are.
            </p>
          </div>

          <BlogForm
            title={`I'll be writing an article about my "key" soon... let me know
          if you'd like to receive it`}
          />

          <div className="md:max-w-3xl mx-auto">
            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Look for your "key" in religion, devotion, and internal arts like
              Yoga, Qi Gong, meditation, and self-inquiry. But know that all
              those are just provisional parts, like the scaffolding on the
              house until it becomes your home.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              We are not particles that make up the body. We are not the mind.
              We are not the heart and not even the energy field surrounding it.
              We are much more than that, So it could be said, we are what's
              aware of all that.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              This is so simple, but unfortunately, in the western world of
              humanity, which is now the whole world, we are only trained to use
              the mind. So this sounds like part of the new Star Wars movie.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              That's because Star Wars is inspired by "this," and all of "this"
              resonates with most of us deeply. Still, it also becomes a movie
              or fantasy if experienced in mind.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              So, to walk the talk, I'll try to get away from here now but
              first, let's summarize.
            </p>

            <ol className="list-decimal list-inside md:px-5 text-base md:text-lg text-coolGray-500">
              <li>Listening to the heart and then do that</li>
              <li>To tap into our true selfs, we must open our hearts.</li>
              <li>
                To open our hearts, be with kids, animals and nature, and learn
                to take attention away from our minds.
              </li>
              <li>
                Find and practice moving your attention by discovering your
                unique keys.
              </li>
              <li>
                None of this is a fact. It's provisional until you reach your
                heart
              </li>
              <li>
                You are not the key, not the field. You are awesome. You are
                what's aware of all that. Find that.
              </li>
            </ol>
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
