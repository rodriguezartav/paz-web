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
        title="conectandonos con la vida"
        subtitle={`Aprovechamos el lugar mas biodiverso del mundo para superar la superficialidad humana y encontrar el lugar donde todos somos naturaleza.`}
        images={[
          {
            src: "/optimized/forest/big_trees.jpg",
            width: 750,
            height: 1000,
          },
        ]}
      />

      <LeftPlain
        title="liberandonos de las preocupaciones"
        subtitle="Perciba el espacio en todas sus direcciones, descubra la verdadera belleza del momento y disfrute del silencio adentro y afuera. Aproveche nuestros consejos sobre la presencia en cada momento para aprender a disfrutar de este lugar."
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
            src: "/optimized/beach/sun_palm2.jpeg",
            width: 750,
            height: 700,
          },
        ]}
      />

      <RightPlain
        title="divirtiendonos como si vivieramos aquí"
        subtitle="En Costa Rica hay una forma particular de disfrutar de la vida. Una profundida espiritual, pero tambien un liviano sentido del humor siempre buscando una sonrisa."
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
        subtitle="El espiritú de la madre naturaleza esta presente aquī. La escuchamos y la queremos. Es la guia en esta aventura por realmente encontrarla en nosotros mismos."
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

      <Cta
        title="Que le parece?"
        subtitle="Cuentenos lo que esta buscando"
        post_title="Gracias por su mensaje"
        post_subtitle="Le gustaria una respuesta?"
        button={{
          post_text: "Sí",
          text: "Enviar",
        }}
      />

      <Footer />
    </div>
  );
}
