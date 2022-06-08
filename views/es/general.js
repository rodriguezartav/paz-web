import Footer from "../../components/marketing/footer";
import LeftPlain from "../../components/sections/leftPlain";
import RightPlain from "../../components/sections/rightPlain";

import Cta from "../../components/sections/cta";

import Links from "../../components/sections/links";

import HeaderTop from "../../components/sections/headerTop";
import HeaderBottom from "../../components/sections/headerBottom";
import HeaderLeft from "../../components/sections/headerLeft";

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
        title="Un lugar para recordar como vivir desde el corazón"
      />

      <RightPlain
        legend={"Ubicación"}
        title="Paz esta ubicado en el místico cabo Mata Palo en la Peninsula de Osa de Costa Rica"
        subtitle={`Una comunidad de amantes del medio ambiente entre Puerto Jimenez y el Parque Nacional Corcovado. La región mas alejada de Costa Rica que para protegerla sus habitantes decidieron no tener servicio de luz electrica ni de agua municipal. `}
        images={[
          {
            src: "/raw/maps/cr.jpg",
            transformations: [
              { cropMode: "cm-extract", height: 550, width: 700 },
            ],
          },
          {
            src: "/raw/guide/matapalo/matapalo.webp",
            transformations: [
              { cropMode: "cm-extract", height: 550, width: 750 },
            ],
          },
        ]}
      />

      <HeaderLeft
        legend="Peninsula de Osa, Costa Rica"
        title="Se siente como estar en un parque nacional"
        color="lime-700"
        subtitle="Creamos una experiencia que se siente como acampar en la playa y el bosque pero con la protección de una casa cómoda"
        images={[
          {
            src: "/optimized/house/living/master.jpeg",
            width: 730,
            height: 700,
          },

          {
            src: "/raw/wildlife/cariblanco_frente.jpeg",
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
            src: "raw/wildlife/perezozo.jpeg",
            transformations: [
              { cropMode: "cm_extract", focus: "top", height: 600, width: 750 },
            ],
          },
        ]}
      />

      <RightPlain
        legend={"Ubicación"}
        title="Paz es un templo de meditación natural"
        subtitle={`Nuestro fundador diseña un programa según las aspiraciones de cada persona. Desde relajarse frente al mar hasta donde quiera llegar.\n En este templo tenemos de todo para escoger la playa, el mar, la fauna y flora mas biodiversa del mundo, cataratas y mucho mas.`}
        images={[
          {
            src: "/optimized/forest/big_trees.jpg",
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
            src: "/raw/lounge/hammocks.jpg",
            transformations: [
              { cropMode: "cm_extract", focus: "top", height: 600, width: 750 },
            ],
          },
          {
            src: "/raw/lounge/lounge_4.jpg",
            transformations: [
              { cropMode: "cm_extract", focus: "top", height: 600, width: 750 },
            ],
          },
        ]}
      />

      <LeftPlain
        title="Paz también es pura vida y diversión"
        subtitle={
          "Fogatas y parrilladas en la playa bajo las estrellas, caminatas a cataratas en senderos mágicos y playas calladitas con el bosque a la par.\n Tal como nos gusta a los costarricense pasear."
        }
        images={[
          {
            src: "/raw/wildlife/titis.webp",
            width: 960,
            height: 700,
          },
        ]}
      />

      <Links
        title="Paz en el Mundo"
        subtitle="Hemos publicado, libros, música y contenido inspiracional en redes sociales."
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
          text: "Alquiler Propiedad en AirBnb",
          href: "https://airbnb.com/h/pazz",
        }}
        button_2={{ text: "Participar en un retiro", href: "/retreat" }}
        logoBefore={true}
        title="Como nos quiere visitar?"
        subtitle="Hay dos formas:"
      />

      <Footer />
    </div>
  );
}
