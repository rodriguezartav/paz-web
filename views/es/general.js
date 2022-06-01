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
        title="...días en el bosque a la orilla del mar para recordar como vivir en paz"
      />

      <RightPlain
        legend={"Ubicación"}
        title="Paz esta ubicado en el místico cabo Mata Palo en la Peninsula de Osa de Costa Rica"
        subtitle={`Una comunidad de amantes del medio ambiente entre Puerto Jimenez y el Parque Nacional Corcovado. La región mas alejada de Costa Rica que para protegerla sus habitantes decidieron no tener servicio de luz electrica ni de agua munipal. `}
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
        title="Todo empezó con una visita al parque nacional Corcovado"
        button={{ text: "Conozca la historia de Paz", href: "/history" }}
        subtitle={`En el 2001 Roberto, nuestro fundador, hizo su primer viaje al Parque Nacional Corcovado y sintió por primera vez a la madre naturaleza. \nEn ese momento llego a el la idea que la Peninsula de Osa era como una universidad para que el corazón del ser humano regresara a la naturaleza. \nEsa experiencia lo llevó a transformar su vida, y ese sentir es justamente lo que quiere compartir.`}
        images={[
          {
            src: "/raw/history/corcovado.png",
            width: 750,
            height: 1000,
          },
        ]}
      />

      <RightPlain
        legend={"Ubicación"}
        title="Un lugar destinado para conectarnos con la naturaleza"
        subtitle={`Buscando estar en el momento justo, en el lugar mas biodiverso del mundo, nos acercamos al ritmo de la madre naturaleza para experimentar su verdad; somos parte de la naturaleza.`}
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
        title="Un lugar para descansar de nuestras preocupaciones"
        subtitle={`Descansar es esencial para la salud. Un propósito de este lugar es que sea usado para "descansar de pensar" de una forma relajada y sin esfuerzo.\nCon la belleza y diversidad que hay, es natural que escojamos estar presentes aquí en vez de pensando cosas de allá.`}
        images={[
          {
            src: "/optimized/beach/sun_palm2.jpeg",
            width: 750,
            height: 700,
          },
        ]}
      />

      <RightPlain
        title="... y divertirnos como si viviéramos aquí"
        subtitle="En Costa Rica hay una forma particular de disfrutar de la vida, con humildad y sentido del humor. Este es un espacio que celebra esta forma de vivir compartiendola con nuestros visitantes."
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
        title="un lugar que se siente como estar en un parque nacional"
        color="lime-700"
        subtitle="Creamos una experiencia que se siente como acampar en la playa y el bosque pero con la protección de una casa comoda"
        images={[
          {
            src: "/optimized/house/living/master.jpeg",
            width: 730,
            height: 700,
          },
        ]}
      />

      <RightPlain
        title="pero que en realidad es un templo natural muy especial"
        subtitle="El espíritu de la madre naturaleza esta presente aquí. La escuchamos y la queremos. Es la guía en esta aventura por realmente encontrarla en nosotros mismos."
        images={[
          {
            src: "/optimized/art/meditation.jpg",
            width: 800,
            height: 600,
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
