import Header from "../../components/Header";
import Footer from "../../components/marketing/footer";
import Hero from "../../components/sections/hero";
import Left from "../../components/sections/left";
import LeftPlain from "../../components/sections/leftPlain";
import RightPlain from "../../components/sections/rightPlain";
import How from "../../components/sections/how";
import Cta from "../../components/sections/cta";
import Application from "../../components/sections/application";
import Links from "../../components/sections/links";

import FeaturesCenter from "../../components/sections/featuresCenter";

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
        title="...days in the beach by the forest to remember how to live in peace..."
        images={[
          {
            src: "optimized/beach/drone_e_300.PNG",
            width: 960,
          },
          {
            src: "optimized/lounge/hammocks.jpg",
            width: 960,
          },
        ]}
      />

      <RightPlain
        legend={"Ubicación"}
        title="Connecting with life"
        subtitle={`We take advtange of the most biodiverse place on earth in a unique way, so that we can find the space where we are also nature. `}
        images={[
          {
            src: "/optimized/forest/big_trees.jpg",
            width: 750,
            height: 1000,
          },
        ]}
      />

      <LeftPlain
        title="Letting all your worries behind"
        subtitle="The beach, the sun, the wind and the ocean. The song of the forest and it's invisible magic works like a stream cleansing us of time which is stress "
        images={[
          {
            src: "/optimized/beach/sun_palm2.jpeg",
            width: 750,
            height: 700,
          },
        ]}
      />

      <RightPlain
        title="Enjoying it as if you grew up here - pura vida style"
        subtitle="As one of the very few retreats owned and staffed by costarricans, we find that our fun and easy going way that made us famous worldwide is the best experience we can share with you."
        t1_title="Caminatas a Cataratas"
        t1_description="Incluye 3 comidas, estacion de cafe y te, todas las actividades y transporte si viene en flysansa.com"
        t2_title="Fogatas y BBQ's en la playa"
        t2_description="Quisimos que estar en la casa se sintiera como acampar, pero con la comidad de una casa de playa. Ventanas gigantes con cedazos americanos nos hacen sentir afuera, pero estar adentro protegidos y comodos."
        t3_title="Lecciones de Surf y Paddleboard"
        t3_description="Otros retiros son para los que se quieren divertir, y para eso damos clases introductorias de surf y paddle board en el mar. En un pequeño rinconcito de Osa tan maravilloso que no se puede describir, solo vivir."
        t4_title="Exploración de positas"
        t4_description="La oportunidad de hacer un viaje de todo el día al parque nacional corcovado. Saliendo desde Paz, con transporte en bote y guia recomendado. No esta incluido en los precios."
        images={[
          {
            src: "/raw/wildlife/titis.webp",
            width: 960,
            height: 700,
          },
        ]}
      />

      <HeaderLeft
        legend="Peninsula de Osa, Costa Rica"
        title="feels like being in a National Park"
        color="lime-700"
        subtitle="By designing and building everything ourselfs, we crafted an unique experience that feels like camping on the forest by the beach, with the comfort of a beachfront villa."
        images={[
          {
            src: "/optimized/house/living/master.jpeg",
            width: 730,
            height: 700,
          },
        ]}
      />

      <RightPlain
        title="but in actuality, it's a very special natural temple"
        subtitle="The spirit of mother nature is present here, we listen and love her. She's the guide in this adventure of finding her in ourselves."
        images={[
          {
            src: "/optimized/art/meditation.jpg",
            width: 800,
            height: 600,
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
