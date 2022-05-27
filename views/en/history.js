import Footer from "../../components/marketing/footer";
import LeftPlain from "../../components/sections/leftPlain";
import RightPlain from "../../components/sections/rightPlain";

import Cta from "../../components/sections/cta";

import Links from "../../components/sections/links";

import HeaderTop from "../../components/sections/headerTop";
import HeaderBottom from "../../components/sections/headerBottom";
import HeaderLeft from "../../components/sections/headerLeft";
import RightWithBullets from "../../components/sections/rightWithBullets";
import LeftWithBullets from "../../components/sections/leftWithBullets";

import { Fragment, useState } from "react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" antialiased bg-body text-body font-body">
      <Link href="/">
        <img
          className="mt-10 mx-auto relative w-44 h-44"
          src="/marketing/logo/png/paz_lila_tronco_color_v2.png"
          alt=""
        />
      </Link>

      <HeaderTop
        logoBefore={true}
        title={`Floating in the ocean, looking at the colors of the sky I asked the sunset: "what name should I give this place?`}
        subtitle={``}
        images={[
          {
            src: "/raw/beach/ocean_view_sunset.jpg",
            width: 960,
            height: 1000,
          },
        ]}
      />

      <RightPlain
        legend={"Ubicación"}
        title="Paz is located in the mystical cabo Mata Palo, in the Osa Peninsula of Costa Rica"
        subtitle={`A off-grid comunity that loves nature located between Corcovado National Park and Puerto Jimenez, the most remote town in Costa Rica.  `}
        images={[
          {
            src: "/raw/maps/cr.png",
            transformations: [
              { cropMode: "cm-extract", height: 500, width: 750 },
            ],
          },
          {
            src: "/raw/guide/matapalo/matapalo.webp",
            transformations: [
              { cropMode: "cm-extract", height: 500, width: 750 },
            ],
          },
        ]}
      />

      <LeftPlain
        legend={"Primer Paso"}
        title="Everything started with a visit to Corcovado National Park"
        subtitle={`In 2001 Roberto, our founder made his first trip to Corcovado National Park and felt mother nature for the first time.\nThat experience led him to transform his life, and that feeling is exactly what he wants to share. He believes that the Osa Peninsula is Mother Nature's best spiritual university for us, her children.`}
        images={[
          {
            src: "/raw/history/corcovado.png",
            width: 750,
            height: 1000,
          },
        ]}
      />

      <LeftPlain
        legend={"Llegada a Osa"}
        title="Until one day he was so sad to leave that somehow he realized, he should stay "
        subtitle={`Very much in his style, he quit his job, canceled the rent, sold his car and exchanged all his belongings for a motorcycle without knowing how to drive it and a tent without knowing how to camp. Thus began this adventure.`}
        images={[
          {
            src: "/raw/history/camping.jpeg",
            width: 750,
            height: 1000,
          },
        ]}
      />

      <RightPlain
        legend="Muchos años despues..."
        title={`History goes that Roberto finished reading "Autobiography of a Yogi" by P. Yogananda`}
        subtitle=" and that same night he appear in his dream, telling him to buy this property and like him - make it a retreat. He started the next day."
        t4_description="Viaje al parque en bote el pen-último día"
        images={[
          {
            src: "/raw/history/construccion_0.jpeg",
            transformations: [
              { cropMode: "cm-extract", height: 500, width: 750 },
            ],
          },
          {
            src: "/raw/history/casa_martino.jpeg",
            transformations: [
              { cropMode: "cm-extract", height: 500, width: 750 },
            ],
          },
          {
            src: "/raw/history/construccion_1.jpeg",
            transformations: [
              { cropMode: "cm-extract", height: 500, width: 750 },
            ],
          },
        ]}
      />

      <LeftPlain
        legend={"Ubicación"}
        title="But he wasn't ready yet..."
        subtitle={` Since he was a child, Roberto had a lot of interest in his spiritual dimension, but he grew up very isolated from the wisdom of life in a culture dedicated to the party. He was a step into alcoholism, smoked a lot of marijuana, and wasn't satisfied with his relationships, his job, or anything else. I didn't know how to live.\n

        When life itself presented him with those tests that arouse the deepest fear in all of us and for which no one is prepared - everything obviously got worse.\n
        
        But all that changed when he met Taita Lucho Flores, his first teacher, who introduced him to the sacred plant of Ayahuasca and with him he learned about shamanism. Especially the use of melody as an element of healing.\n
        
        After recognizing the multiple traumas that his way of living had generated, he began his return journey.`}
        images={[
          {
            src: "/raw/history/taita.jpeg",
            width: 750,
            height: 1000,
          },
        ]}
      />

      <RightPlain
        legend={"Ubicación"}
        title="The beginning of the road"
        subtitle={`With the help of the teachers and guides who appeared to help him, he gave up all liquor and all drugs and all self-destructive behavior. I disciplinedly seek your inner peace specializing in Yoga, Vipassana, Qi Gong, walks in nature and even surfing. A very beautiful and spontaneous healing melody awoke in him that to this day he shares with everyone he can.\n

        I remember that since I was a child I spoke with the sky, or with its interior and it always answered. In his prayers to heaven he always asked to know the truth of life and to be granted the possibility of helping other people who suffered like him.\n
        
        He truly believed that if he prayed and meditated at dawn nothing bad would happen to him again - which revealed that there was still fear in his heart.`}
        images={[
          {
            src: "/raw/history/lake.jpeg",
            transformations: [
              { cropMode: "cm-extract", height: 600, width: 650 },
            ],
          },
          {
            src: "/raw/history/utah.jpeg",
            transformations: [
              { cropMode: "cm-extract", height: 600, width: 650 },
            ],
          },
          {
            src: "/raw/history/flute.jpeg",
            transformations: [
              { cropMode: "cm-extract", height: 600, width: 650 },
            ],
          },
          {
            src: "/raw/history/contrabajo.jpeg",
            transformations: [
              { cropMode: "cm-extract", height: 600, width: 650 },
            ],
          },
        ]}
      />

      <LeftPlain
        legend={"Ubicación"}
        title="The beginning of the end"
        subtitle={`He never imagined the way his requests would arrive. With the good results of his more than 30 Ayahuasca ceremonies and believing that his path could be found in shamanism, he attended an invitation to a Hallucinogenic Mushrooms ceremony.\n

        The aggressiveness with which this experience revealed its truths to him destroyed him and left him incapacitated with post-traumatic stress for two years. Such was the physical and emotional suffering that he found himself in front of the door that seems to have no way out through which one says goodbye to life. He turned to psychiatry and had to take anti-anxiety and antidepressant medications;\n
        
        Especially in the first 8 months he was in a state very affected by psilocybin and he used all the techniques he knew, but especially the internal exploration that Ayahuasca taught him to save his life.\n
        
        It was there in the darkest moment of his life where he met a light so bright that no one or nothing could ever turn it off. He found himself, his light of life and with that he returned.`}
        images={[
          {
            src: "/raw/history/bosque.jpeg",
            width: 850,
          },
        ]}
      />

      <RightPlain
        legend={"Ubicación"}
        title="The end of knowledge"
        subtitle={`Upon returning, he found the breadcrumbs that that light had left on the road from the beginning, as if he knew that his world would turn off, and that he would need them to overcome those dark years.\n

        He recognized that he received what he asked for, because the only way to really know what so many people live - even oneself, is by taking that journey and reaching the end of the battle that really is from within us against the daring addiction that has the mind of calling myself.\n
        
        He met his Qi Gong teacher, Sifu Rama, who had learned the techniques of self-enquiry with a direct transmission line from Ramana Maharshi, and upon hearing them he instantly recognized the lessons he had learned.\n
        
        He found the place that today is Paz and that he had been waiting for for several years.`}
        images={[
          {
            src: "/raw/forest/bosque_brillante.jpeg",
            transformations: [
              { cropMode: "cm-extract", height: 660, width: 750 },
            ],
          },
          {
            src: "/raw/forest/higo_brillante.jpeg",
            transformations: [
              { cropMode: "cm-extract", height: 660, width: 750 },
            ],
          },
          {
            src: "/raw/beach/front_green.jpg",
            transformations: [
              { cropMode: "cm-extract", height: 660, width: 750 },
            ],
          },
          {
            src: "/raw/lounge/drone_300.jpg",
            transformations: [
              { cropMode: "cm-extract", height: 660, width: 750 },
            ],
          },
          {
            src: "/raw/lounge/empty_beach.jpg",
            transformations: [
              { cropMode: "cm-extract", height: 660, width: 750 },
            ],
          },
          {
            src: "/raw/lounge/hammocks.jpg",
            transformations: [
              { cropMode: "cm-extract", height: 660, width: 750 },
            ],
          },
          {
            src: "/raw/house/outside/from_firepit.jpg",
            transformations: [
              { cropMode: "cm-extract", height: 660, width: 750 },
            ],
          },
        ]}
      />

      <HeaderLeft
        legend="Paz is our home"
        title="In peace, everything flows"
        color="lime-700"
        subtitle={`We trust that this place has a purpose that transcends the material. That is why when creating it we do not sit down to think how to do it, nor do we contract design or construction. From this web page, the name, the logo; the design of the facilities, even the solar electric system is done in this way, by us and our team.\n

        We have tried to make everything here intuitive and spontaneous, letting things be done through one, without having to be thinking and solving one alone; blaming others if it went wrong or sticking out chest if it was done right.\n

        There will be more beautiful places and better pages, of course. But really we are not competing. This is simply an expression of what we feel in our hearts. Like a tree when the wind passes and it sounds so beautiful. It's not the tree that does it, it's life...
        `}
        images={[
          {
            src: "/raw/house/dinning/dinning_full.JPG",
            transformations: [{ cropMode: "cm-extract", height: 700 }],
          },
          {
            src: "/raw/house/living/master.jpeg",
            transformations: [
              { cropMode: "cm-extract", height: 660, width: 750 },
            ],
          },
          {
            src: "/raw/house/outside/outside_front.jpeg",
            transformations: [
              { cropMode: "cm-extract", height: 660, width: 750 },
            ],
          },
          {
            src: "/raw/house/living/lamps.jpeg",
            transformations: [
              { cropMode: "cm-extract", height: 660, width: 750 },
            ],
          },
        ]}
      />

      <HeaderLeft
        legend="Paz es un hogar"
        title="The retreats too"
        color="lime-700"
        subtitle={`
        The purpose of this place is that we all experience a moment of Peace and in that moment of freedom we have the opportunity to remember what we really are.\n

There is no technique or discipline that can take us there, there is nothing to conquer. Well, if we are not already, then who is the one that exists in each body?\n

We trust that this place has a purpose that transcends the material, that here comes who has to arrive and that when the time comes, this place and what we are inside - which is the same - will know what to do. It is useless to start thinking and planning when in the end if it rains, it will rain.\n

It is about practicing, letting what has to happen happen, and when we are in front of the sea, letting it be the sea and thus letting our note sound as it should.

This is what peace sounds like...\n
        `}
        images={[
          {
            src: "/raw/beach/paddle_from_sea.jpeg",
            width: 730,
          },
        ]}
      />

      <Links
        title="Paz in the World"
        subtitle="We publish books, music and inspirational content."
        logo_1={{
          src: "./images/logos/spotify.png",
          href: "https://open.spotify.com/artist/5iR7YvWgvzgv3JIc3b0TvK?si=PUMqBm46SpeDDC6geFCdEA",
        }}
        logo_2={{
          src: "./images/logos/instagram.jpg",
          href: "https://instagram.com/monodepaz",
        }}
        logo_3={{ src: "./images/logos/kindle.png", href: "/1" }}
        logo_4={{
          src: "./images/logos/airbnb.svg",
          href: "https://airbnb.com/h/pazz",
        }}
        images={[
          { src: "/optimized/me/me_flauta.jpg", width: 450, height: 700 },
        ]}
      />

      <HeaderBottom
        button_1={{
          text: "Rent the whole property in AirBnB",
          href: "https://airbnb.com/h/pazz",
        }}
        button_2={{ text: "Join our monthly retreat", href: "/retreat" }}
        logoBefore={true}
        title="How do you want to visit us?"
        subtitle="there are two options:"
      />
      <Footer />
    </div>
  );
}
