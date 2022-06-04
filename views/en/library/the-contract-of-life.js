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
                23 May 2022
              </p>
            </div>
            <h2 className="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">
              The contract of life
            </h2>
            <p className="mb-10 text-lg md:text-xl font-medium text-coolGray-500">
              There is nothing we can acquire to solve our vulnerability as
              living beings. No weapon, no wall, no insurance, no amount of
              money, no medicine, no prayer, no knowledge, nothing. In the same
              way, there is nothing we can invent, build or create to solve our
              collective problems because those problems are produced by our
              attempt to be less vulnerable.
            </p>
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
              The fears mentioned in "The one in the background" are key to
              uncovering and bringing to the surface the mechanisms behind the
              mind. These mechanisms are also known as ego or self, although
              most people simply call them I. When we bring them to the surface,
              we can see them for what they are.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              We don't bring to the surface anything by using the mind directly.
              That would be called imagination. We want to see the real thing,
              the one that's alive. That's like thinking of our friends compared
              to being in front of them. Like thinking of our hand moving and
              actually moving the hand. Can you see how they seem the same, but
              they are not? The whole experience of life is like that.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              What exists in the mind is always an illusion, a picture, a movie,
              of the real living thing. However, it also serves a purpose for
              our survival, and there is nothing more effective in preserving
              life than fear. So, fear is perhaps the most significant driver of
              reality.
            </p>

            <div className="mb-6 p-6 border-l-2 border-indigo-500">
              <p className="mb-4 text-xl md:text-2xl leading-tight font-medium text-coolGray-800">
                The old teachings talk about the 5 reasons for the suffering of
                humanity. However, this kind of suffering seems to apply only to
                humans because it can't be found anywhere else in the universe.
              </p>
              <span className="text-base md:text-lg text-coolGray-400 font-medium">
                Vedanta
              </span>
            </div>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Two of those reasons are related to our attachments. The first is
              grasping or holding on to that which is temporary. - fear of
              losing it. The second is the aversion to that which is temporary
              and transitory - fear of it happening.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              For millennia, religions have proposed paths of "purifications"
              from sin and desire. Yet, the temples are empty, and the parties
              are packed. Since those ideas were presented, the world has
              changed so much that it no longer makes sense to go at them
              head-on.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              It's the same as when an alcoholic tries to fight head on with his
              addiction. It's like fighting a ghost that appears and disappears
              every day and night. Overcoming addiction is about finding its
              source.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              In the end, we don't want to vanish sin or desire. We don't want
              to vanish alcohol from the land. We have already tried all that
              and it just ends in wars. We just want to live in peace or to
              live, that is.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Instead of fighting with attachment, I can use it to explore
              myself. For example, I can feel the attachment with my son go as
              deep as it goes, so it can work as a guide. As an emotional road
              inside where we can feel where it ends and if we follow it, we
              should be able to learn where it starts.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Understanding attachment and realizing where it starts is far more
              significant in improving our lives than becoming purified. Same
              with sin, desire, mind and trauma.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              If we are serious about finding out the truth of who we are and
              what life is. We can begin by considering our most cherished
              attachments with other things and beings. Our loved ones,
              livelihoods, careers, everything we own, health, businesses,
              projects, and dreams.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              The contract of life is a meditation I invented while dealing with
              loss in my life, or rather by not knowing how to deal with it. In
              it, I conceptually believe we all signed an agreement before we
              were born.
            </p>

            <div className="mb-6 p-6 border-l-2 border-indigo-500">
              <p className="mb-4 text-xl md:text-2xl leading-tight font-medium text-coolGray-800">
                The contract of life says: After being born, anything can and
                will happen to you and everyone around you. There are no
                guarantees, no exceptions, no protections, and the only way out
                of the contract is to die.
              </p>
              <span className="text-base md:text-lg text-coolGray-400 font-medium">
                The contract of life
              </span>
            </div>

            <h3 className="mb-4 text-2xl md:text-3xl font-semibold text-coolGray-800">
              {" "}
              Following the contract of life to discover the truth of life
            </h3>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              From what we have experienced in life, we can't expect its
              actuality to be like our childish stories of enlightenment and
              heaven, where we only feel pleasure and joy while seeing rainbows
              in the sky. That's called getting high.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              So first, we must shake our childish beliefs out of their
              foundations, our comfort zone, which is the story our minds weave
              around us, so we feel safe and survive. Otherwise, we'll just be
              telling "truth" what to be so that we don't feel its weight;
              instead of finding out what it actually is.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              The feeling we are looking for shows up when we genuinely say:
              "Let anything that will happen, happen."
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              When meant from the heart, while thinking about what we love the
              most, this thought should send us falling into a void. Don't
              escape by grabbing on to a belief, like "God protects me," or I've
              been good, I have good karma, or anything like that. Instead, stay
              with the feeling and let all its power into your awareness.
            </p>

            <h3 className="mb-4 text-2xl md:text-3xl font-semibold text-coolGray-800">
              {" "}
              Enduring the Journey within
            </h3>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Allowing the consequence of the hard truths to touch our reality
              creates an uncomfortable feeling in the body and the mind.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              However, we must learn to be present with such feelings and
              thoughts and not run away from them, understanding they are
              gatekeepers for those who are not ready to explore the depths of
              life.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              At first, exposing ourselves to the full spectrum of the
              consequences of life makes our minds and bodies feel vulnerable.
              But this exposure is what connects us with nature. Look at the
              wild animals in the forest and feel what we are searching for in
              their presence. Look into their eyes.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              We were wild animals in the forest. But at some point, our species
              became conscious that one day we would cease to exist. This idea
              pushed us into an abyss with no protection, grabbing on to any
              belief that kept us from feeling that challenging reality, and it
              has been happening for more than 5000 years.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              These circumstances turned us against the universe, as in trying
              to renegotiate the contract of life. Since that day, almost
              everything we have done has been because of that.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              The fear of death and loss does not feel in a particular way.
              That's why everybody says they are not afraid of dying. But, as
              you have experienced here, it feels like a combination of powerful
              emotions that run in the background that can take any shape and
              form - even what doctors call chronic disease.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Don't believe it; instead, try to find out for yourself. Then, use
              the same technique to uncover something in your reality, a
              resistance, somewhere emotional you don't want to go. Then, when
              facing the actual thing and feeling all its intensity, ask
              yourself if there is anything you can do other than facing the
              truth that will help you become free of that.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Can you see that no practice, no meditation, no yoga, no diet, no
              technique, no belief, or guru can do this for us? Not because they
              are fake or flawed, I love all of that, but simply because they
              are outmatched - by our very own self.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Now breath deep three times and open your eyes, the eyes of
              awareness. Look around and notice that everything is all right.
              Look inside and see that everything is all right. You are safe,
              and there is nothing important around. Sit down in the most
              comfortable position you can find, don't move, don't move your
              mind. Let the dust settle from walking the path and stay there all
              you like.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              In the same way, we must learn how to explore the path; we must
              learn how to get back.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              If we can accept the contract of life for just a moment. If we
              don't judge, label, and reshape reality to try and make it fit our
              ideal, but rather let it be as it is. Then for that moment, an
              aliveness fills our bodies and minds, and we become one with life.
              It's that simple.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              Children and young people can simply enter the bliss of being one
              with life; they don't make any effort and need no training to dive
              into it. But, for adults who have lived much more, it's harder to
              understand that it requires no effort, no degree, and it's
              actually our natural state of mind.
            </p>

            <p className="mb-4 text-base md:text-lg text-coolGray-500">
              "Accepting everything" is the price we pay to be truly alive, and
              as we have more experiences - the higher is the price.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
