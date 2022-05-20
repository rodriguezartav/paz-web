import Header from "../components/marketing/header";
import Footer from "../components/marketing/footer";
import Hero from "../components/sections/hero";
import Left from "../components/sections/left";
import LeftPlain from "../components/sections/leftPlain";
import RightPlain from "../components/sections/rightPlain";
import How from "../components/sections/how";
import Cta from "../components/sections/cta";
import Application from "../components/sections/application";
import Links from "../components/sections/links";

import FeaturesCenter from "../components/sections/featuresCenter";

import HeaderTop from "../components/sections/headerTop";
import HeaderBottom from "../components/sections/headerBottom";
import HeaderLeft from "../components/sections/headerLeft";

import RightWithBullets from "../components/sections/rightWithBullets";
import LeftWithBullets from "../components/sections/leftWithBullets";

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
          className="mt-20 mx-auto relative w-44 h-44"
          src="/marketing/logo/png/blanco_fondo color_v2.png"
          alt=""
        />
      </Link>

      <HeaderTop
        button_1={{
          text: "Alquilar Propiedad en AirBnb",
          href: "https://airbnb.com/h/pazz",
        }}
        button_2={{ text: "Participar en un retiro", href: "/retreat" }}
        logoBefore={true}
        title="El propósito de este lugar es que todos experimentemos un momento de paz"
        subtitle="Hay dos formas de visitar:"
        image={{ src: "/images/beach.jpg", width: 1000, height: 700 }}
      />

      <HeaderLeft
        legend="Peninsula de Osa, Costa Rica"
        title="Se siente como estar en un parque nacional"
        color="lime-700"
        subtitle="Creamos una experiencia que se siente como acampar en la playa y el bosque pero con la protección de una casa comoda"
        image={{ src: "/images/house.jpg", width: 1000, height: 700 }}
      />

      <RightPlain
        legend={"Ubicación"}
        title="Viva la naturaleza como en ningún otro lugar"
        subtitle={`En un bosque con arboles gigantes que meditan frente al mar. En el lugar mas biodiverso del mundo, lleno de pajaritos, mariposas y animales. 
        La sensación de estar aquí es una fuente de aventura y admiración. Con humildad compartimos la experiencia de 20 años aprendiendo a conectarnos con este bello lugar.`}
        image={{ src: "/images/jungle.jpg", width: 1000, height: 700 }}
      />

      {/*
      <RightWithBullets
        legend="La propiedad"
        title={`La historia dice que el fundador de Paz termino de leer el "Diario de un Yogi" de P. Yogananda`}
        subtitle=" y esa misma noche... se le apareció en un sueño y le dio instrucciones especificas de que hacer en este lugar. El día siguiente empezó y 7 años despues el mar le puso Paz"
        t1_title="Un templo natural"
        t1_description="Tratamos a La Peninsula de Osa y a este lugar como una universidad de enseñanza de la naturaleza para el hombre. Como todo en la vida, las cosas son lo que queremos que sean."
        t2_title="100% desconectados del mundo"
        t2_description="Estamos a 10 km despues del pueblo mas lejano de Costa Rica. Camino el PN Corcovado. Aquí no llega la electricidad, el agua, ni nada mas. La electricidad la generamos con el sol y el agua nos la da la tierra."
        t3_title="Construido con intuición, respecto y amor"
        t3_description="Nunca hubieron planos y todo lo hacemos aquī mismo poco a poco, observando y siguiendo la inspiración. Ha tomado mucho tiempo darle el punto. El respecto al bosque y el mar esta por encima de lo demas."
        t4_title="Viaje a PN Corcovado (extra)"
        t4_description="Viaje al parque en bote el pen-último día"
        image={{ src: "/images/wellness.jpg", width: 800, height: 600 }}
      />

      */}

      <RightWithBullets
        legend="La propiedad"
        title={`Venga a descansar, pero tambien a profundizar`}
        subtitle=" "
        t1_title="Un templo natural"
        t1_description="Tratamos a La Peninsula de Osa y a este lugar como una universidad de enseñanza de la naturaleza para el hombre. Como todo en la vida, las cosas son lo que queremos que sean."
        t2_title="100% desconectados del mundo"
        t2_description="Estamos a 10 km despues del pueblo mas lejano de Costa Rica. Camino el PN Corcovado. Aquí no llega la electricidad, el agua, ni nada mas. La electricidad la generamos con el sol y el agua nos la da la tierra."
        t3_title="Construido con intuición, respecto y amor"
        t3_description="Nunca hubieron planos y todo lo hacemos aquī mismo poco a poco, observando y siguiendo la inspiración. Ha tomado mucho tiempo darle el punto. El respecto al bosque y el mar esta por encima de lo demas."
        t4_title="Viaje a PN Corcovado (extra)"
        t4_description="Viaje al parque en bote el pen-último día"
        image={{ src: "/images/wellness.jpg", width: 800, height: 600 }}
      />

      <RightPlain
        title="La playa"
        subtitle="Esto es un regalo del mar, cuando vengan verán. Una playita con palmeras, almendros donde llegan las lapas y los monos. Tenemos un templo para relajarse, hamacas y sillones en un rincón fresquito muy solitario de Osa."
        t1_title="Caminatas a Cataratas"
        t1_description="Incluye 3 comidas, estacion de cafe y te, todas las actividades y transporte si viene en flysansa.com"
        t2_title="Fogatas y BBQ's en la playa"
        t2_description="Quisimos que estar en la casa se sintiera como acampar, pero con la comidad de una casa de playa. Ventanas gigantes con cedazos americanos nos hacen sentir afuera, pero estar adentro protegidos y comodos."
        t3_title="Lecciones de Surf y Paddleboard"
        t3_description="Otros retiros son para los que se quieren divertir, y para eso damos clases introductorias de surf y paddle board en el mar. En un pequeño rinconcito de Osa tan maravilloso que no se puede describir, solo vivir."
        t4_title="Exploración de positas"
        t4_description="La oportunidad de hacer un viaje de todo el día al parque nacional corcovado. Saliendo desde Paz, con transporte en bote y guia recomendado. No esta incluido en los precios."
        image={{ src: "/images/lounge_3.jpg", width: 1000, height: 700 }}
      />

      <LeftPlain
        title="Las olas y el mar"
        subtitle="Estamos a 2km de donde el golfo dulce se encuentra con el oceano pacifico. Aguas azul turquesa que se alternan con verde esmeralda. Por el frente pasan las ballenas y esta lleno de tortugas. En una bahia quebrada donde hay buenas olas para suerfear, muuuucho espacio para salir a remar. Pero tambien pozas y rincones para flotar y nadar."
        t1_title="Caminatas a Cataratas"
        t1_description="Incluye 3 comidas, estacion de cafe y te, todas las actividades y transporte si viene en flysansa.com"
        t2_title="Fogatas y BBQ's en la playa"
        t2_description="Quisimos que estar en la casa se sintiera como acampar, pero con la comidad de una casa de playa. Ventanas gigantes con cedazos americanos nos hacen sentir afuera, pero estar adentro protegidos y comodos."
        t3_title="Lecciones de Surf y Paddleboard"
        t3_description="Otros retiros son para los que se quieren divertir, y para eso damos clases introductorias de surf y paddle board en el mar. En un pequeño rinconcito de Osa tan maravilloso que no se puede describir, solo vivir."
        t4_title="Exploración de positas"
        t4_description="La oportunidad de hacer un viaje de todo el día al parque nacional corcovado. Saliendo desde Paz, con transporte en bote y guia recomendado. No esta incluido en los precios."
        image={{ src: "/images/lounge/1.jpg", width: 1000, height: 700 }}
      />

      <LeftWithBullets
        title="La casa del mono"
        subtitle="Ventanas gigantes con cedazo americano permiten ver el bosque en su totalidad. Los animales nos pasan a la par. Monos, Tucanes, Lapas, mariposas morpho, gavilanes, pavones, pizotes, perezoso, hormigueros y una vez una danta y dos ocelotes,"
        t1_title="Para alquilar"
        t1_description="Dos cuartos con cama king para 8 personas, cocina completa, sala comedor."
        t2_title="Para retiros"
        t2_description="2 Cuartos grandes con 4 camas individuales y glampings para 2 personas. La cocina se usa para meriendas personales."
        t3_title="Frente al mar"
        t3_description="La casa esta a 50 pasos de la arena y en el medio un bosque de arboles de mas de 50 metros de altura."
        image={{ src: "/images/house.jpg", width: 800, height: 600 }}
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
        image={{ src: "/images/me_flauta.jpg", width: 1000, height: 700 }}
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
