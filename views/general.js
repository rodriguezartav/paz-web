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
import HeaderLeft from "../components/sections/headerLeft";

import RightWithBullets from "../components/sections/rightWithBullets";

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
          src="/marketing/logo/png/lila_solo_v2.png"
          alt=""
        />
      </Link>

      <HeaderTop
        button_1={{
          text: "Alquiler Propiedad en AirBnb",
          href: "https://airbnb.com/h/pazz",
        }}
        button_2={{ text: "Participar en un retiro", href: "/retreat" }}
        logoBefore={true}
        title="El propósito de este lugar es que todos experimentemos un momento de paz"
        subtitle="Hay dos formas de visitar:"
        image="/images/beach.jpg"
      />

      <HeaderLeft
        legend="Peninsula de Osa, Costa Rica"
        title="Se siente como estar en un parque nacional"
        color="lime-700"
        subtitle="Creamos una experiencia que se siente como acampar en la playa y el bosque pero con la protección de una casa comoda"
        image="/images/house.jpg"
      />

      <RightPlain
        legend={"Ubicación"}
        title="Sienta la naturaleza como en ningún otro lugar"
        subtitle={`En un bosque con arboles gigantes que meditan frente al mar. En el lugar mas biodiverso del mundo, lleno de pajaritos, mariposas y animales. 
        La sensación de estar aquí es una fuente de aventura y admiración. Con humildad compartimos la experiencia de 20 años aprendiendo a conectarnos con este bello lugar.`}
        image="/images/jungle.jpg"
      />

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
        image={"/images/wellness.jpg"}
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
        image="/images/lounge_3.jpg"
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
        image="/images/lounge/1.jpg"
      />

      <Application
        title="La villa principal"
        subtitle="Ventanas gigantes con cedazo americano permiten ver el bosque en su totalidad. Los animales nos pasan a la par. Monos, Tucanes, Lapas, mariposas morpho, gavilanes, pavones, pizotes, perezoso, hormigueros y una vez una danta y dos ocelotes,"
        t1_title="2 Bedrooms with 4 Beds each"
        t1_description="Incluye 3 comidas, estacion de cafe y te, todas las actividades y transporte si viene en flysansa.com"
        t2_title="Full Kitchen, Living & Dinning"
        t2_description="Quisimos que estar en la casa se sintiera como acampar, pero con la comidad de una casa de playa. Ventanas gigantes con cedazos americanos nos hacen sentir afuera, pero estar adentro protegidos y comodos."
        t3_title="50 Steps from the Sand"
        t3_description="Otros retiros son para los que se quieren divertir, y para eso damos clases introductorias de surf y paddle board en el mar. En un pequeño rinconcito de Osa tan maravilloso que no se puede describir, solo vivir."
        t4_title="Exploración de positas"
        t4_description="La oportunidad de hacer un viaje de todo el día al parque nacional corcovado. Saliendo desde Paz, con transporte en bote y guia recomendado. No esta incluido en los precios."
        image="/images/house.jpg"
      />

      <FeaturesCenter
        title="En las actividades de cada retiro damos ideas de cómo aplicar la presencia en la naturaleza"
        subtitle="Esta es la dirección de Paz y cada persona decide cuanto, como y cuando incorporarla."
        t1_title="Que tipo de actividades son?"
        t1_description="Aquí hay de todo por hacer, y nos gusta hacerlas de forma divertida y aventurera. Desde lecciones de surf y paddle, caminatas a cascadas, fogatas. Simplemente le recordamos estar presente."
        t2_title="Para quien son?"
        t2_description="Para todos! Familias, amigos, viejos y jovenes. La diversidad es el corazón de paz. No hay que saber meditar, ni saber surfear, ni haber estado en el monte. Ser humano con ganas de estar vivo."
        t3_title="Que es la presencía?"
        t3_description="Es tan sencillo que cuesta explicarlo. Es simplemente estar presente en el lugar donde estamos, viviendo lo que esta pasando en vez de estar pensando en lugares y cosas que no estan."
        t4_title="Como se aprende la presencia?"
        t4_description="No se aprende, ya todos las sabemos. Se practica. En un lugar lleno de belleza y magia de vida. Con una intención hacia eso y el apoyo del espiritú de la naturaleza - que siempre esta - es mas facil, eso es todo"
        image="/images/house.jpg"
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
        image="/images/house.jpg"
      />

      <Cta
        title="Paz es un ambiente no dogmático sin profesor - donde todos estamos en lo mismo. Porque esa es la verdad de la vida."
        subtitle="Todo fue diseñado, construido y es guiado por su fundador Roberto ( @monodepaz ) que utilizó todas estas herramientas para salir de situaciones muy retadoras de vida y sus consecuencia de salud mental. Ahora dedica su vida como cuidador de este lugar y compañero de todos los que nos visitan."
        line2="Incluye 3 comidas, estacion de cafe y te, todas las actividades y transporte si viene en flysansa.com"
        line3="Fogatas y BBQ's en la playa"
        image="/marketing/logo/png/paz_lila__v2.png"
        button={{ text: "Más información sobre los retiros", href: "/retreat" }}
        href="de todas formas gracias por su visita"
      />

      <Footer />
    </div>
  );
}
