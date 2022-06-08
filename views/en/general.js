import Footer from "../../components/marketing/footer";

import LeftPlain from "../../components/sections/leftPlain";
import RightPlain from "../../components/sections/rightPlain";

import Links from "../../components/sections/links";

import HeaderTop from "../../components/sections/headerTop";
import HeaderBottom from "../../components/sections/headerBottom";
import HeaderLeft from "../../components/sections/headerLeft";

import { useState } from "react";
import Link from "next/link";

export default function Example() {
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
        title="A place to remember how how to life from the heart"
        images={[
          {
            src: "raw/lounge/drone_300.jpg",
            transformations: [
              { cropMode: "cm_extract", height: 650, width: 1100 },
            ],
          },
          {
            src: "raw/lounge/empty_beach.jpg",
            transformations: [
              { cropMode: "cm_extract", height: 650, width: 1100 },
            ],
          },

          {
            src: "raw/beach/drone_s_400_300.PNG",
            transformations: [
              { cropMode: "cm_extract", height: 650, width: 1100 },
            ],
          },

          {
            src: "raw/beach/sun_palm2.jpeg",
            transformations: [
              { cropMode: "cm_extract", height: 650, width: 1100 },
            ],
          },

          {
            src: "raw/forest/higo_brillante.jpeg",
            transformations: [
              { cropMode: "cm_extract", height: 650, width: 1100 },
            ],
          },
        ]}
      />
      <RightPlain
        legend={"Ubicación"}
        title="Paz is located in the mystical cabo Mata Palo, in the Osa Peninsula of Costa Rica"
        subtitle={`A off-grid comunity that loves nature located between Corcovado National Park and Puerto Jimenez, the most remote town in Costa Rica.  `}
        images={[
          {
            src: "/raw/guide/matapalo/matapalo.webp",
            transformations: [
              { cropMode: "cm-extract", height: 500, width: 750 },
            ],
          },
          {
            src: "/raw/maps/cr.jpg",
            transformations: [
              { cropMode: "cm-extract", height: 500, width: 750 },
            ],
          },
        ]}
      />

      <HeaderLeft
        legend="Peninsula de Osa, Costa Rica"
        title="It feels like being in a National Park"
        color="lime-700"
        subtitle="We crafted an unique experience that feels like camping on the forest by the beach, with the comfort of a beachfront villa."
        images={[
          {
            src: "/optimized/house/living/master.jpeg",
            width: 730,
            height: 700,
          },
        ]}
      />

      <RightPlain
        legend={"Ubicación"}
        title="Paz is a natural meditation temple"
        subtitle={`Our founder designs a program according to each persons aspirations - starting at relaxing by the beach. \nIn this temple we have so much to work with: Magical wildlife, a pristine beach, emerald sea, cristaline waterfalls and huge trees`}
        images={[
          {
            src: "/optimized/forest/big_trees.jpg",
            transformations: [
              { cropMode: "cm_extract", height: 600, width: 750 },
            ],
          },

          {
            src: "/raw/wildlife/oruga.jpeg",
            transformations: [
              { cropMode: "cm_extract", height: 600, width: 750 },
            ],
          },

          {
            src: "/raw/wildlife/cariblanco_frente.jpeg",
            transformations: [
              { cropMode: "cm_extract", height: 600, width: 750 },
            ],
          },

          {
            src: "/raw/forest/barrigon_alto.jpeg",
            transformations: [
              { cropMode: "cm_extract", focus: "top", height: 600, width: 750 },
            ],
          },

          {
            src: "/raw/wildlife/tucan_atras.jpeg",
            transformations: [
              { cropMode: "cm_extract", height: 600, width: 750 },
            ],
          },

          {
            src: "raw/wildlife/perezozo.jpeg",
            transformations: [
              { cropMode: "cm_extract", focus: "top", height: 600, width: 750 },
            ],
          },
        ]}
      />

      <LeftPlain
        title="Paz is also pura vida & fun "
        subtitle="Bonefires and BBQ's on the beach under the stars, hikes in magical trails to waterfalls and pristine beaches with the forest on our side."
        images={[
          {
            src: "/raw/wildlife/titis.webp",
            width: 960,
            height: 700,
          },
        ]}
      />

      <Links
        title="Paz in the world"
        subtitle="We have published books, music and inspirational content in social networks to contribute in a positive way to the expansion of consiousness"
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
