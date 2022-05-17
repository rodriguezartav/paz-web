import Header from "../components/marketing/header";
import Footer from "../components/marketing/footer";
import Hero from "../components/sections/hero";
import Left from "../components/sections/left";
import LeftPlain from "../components/sections/leftPlain";
import RightPlain from "../components/sections/rightPlain";
import How from "../components/sections/how";
import Cta from "../components/sections/cta";
import Application from "../components/sections/application";
import Bullet from "../components/sections/bullet";

import HeaderTop from "../components/sections/headerTop";
import HeaderLeft from "../components/sections/headerLeft";

import RightWithBullets from "../components/sections/rightWithBullets";

import Features from "../components/sections/features";

import { Fragment, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" antialiased bg-body text-body font-body">
      <img
        className="mt-20 mx-auto relative w-44 h-44"
        src="/marketing/logo/png/paz_lila__v2.png"
        alt=""
      />

      <HeaderTop
        button_1="Alquiler Propiedad en AirBnb"
        button_2="Participar en un retiro"
        logoBefore={true}
        title="El propósito de este lugar es que todos experimentemos un momento de paz"
        subtitle="Alquilamos el proyecto entero en AirBnb, pero lo mejor es participar de uno de los retiros temáticos. "
        image="/images/beach.jpg"
      />

      <HeaderLeft
        legend="Peninsula de Osa, Costa Rica"
        title="Se siente como estar en un parque nacional"
        subtitle="Creamos una experiencia que se siente como acampar en la playa y el bosque pero con la protección de una casa comoda"
        image="/images/house.jpg"
      />

      <RightPlain
        legend={"Ubicación"}
        title="Sienta la naturaleza como en ningún otro lugar"
        subtitle={`En un bosque con arboles gigantes que meditan frente al mar. En el lugar mas biodiverso del mundo, lleno de pajaritos, mariposas y animales. 
        La sensación de estar aquí es una fuente de aventura y admiración. Con humildad compartimos la experiencia de 20 años aprendiendo a conectarnos con este bello lugar.`}
        image="/images/jungle.jpg"
        button="Conozca mas sobre Peninsula de Osa (pronto)"
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
        button="Conocer mas sobre osa (pronto)"
      />

      <RightPlain
        title="La playa"
        subtitle="Damos clases introductorias de surf y paddle board en el mar. Mas fogatas, bbq's, musica y baile. En un pequeño rinconcito de Osa tan maravilloso que no se puede describir, solo vivir."
        t1_title="Caminatas a Cataratas"
        t1_description="Incluye 3 comidas, estacion de cafe y te, todas las actividades y transporte si viene en flysansa.com"
        t2_title="Fogatas y BBQ's en la playa"
        t2_description="Quisimos que estar en la casa se sintiera como acampar, pero con la comidad de una casa de playa. Ventanas gigantes con cedazos americanos nos hacen sentir afuera, pero estar adentro protegidos y comodos."
        t3_title="Lecciones de Surf y Paddleboard"
        t3_description="Otros retiros son para los que se quieren divertir, y para eso damos clases introductorias de surf y paddle board en el mar. En un pequeño rinconcito de Osa tan maravilloso que no se puede describir, solo vivir."
        t4_title="Exploración de positas"
        t4_description="La oportunidad de hacer un viaje de todo el día al parque nacional corcovado. Saliendo desde Paz, con transporte en bote y guia recomendado. No esta incluido en los precios."
        image="/images/lounge_3.jpg"
        button="Conocer mas (pronto)"
      />

      <LeftPlain
        title="Las olas y el mar"
        subtitle="Damos clases introductorias de surf y paddle board en el mar. Mas fogatas, bbq's, musica y baile. En un pequeño rinconcito de Osa tan maravilloso que no se puede describir, solo vivir."
        t1_title="Caminatas a Cataratas"
        t1_description="Incluye 3 comidas, estacion de cafe y te, todas las actividades y transporte si viene en flysansa.com"
        t2_title="Fogatas y BBQ's en la playa"
        t2_description="Quisimos que estar en la casa se sintiera como acampar, pero con la comidad de una casa de playa. Ventanas gigantes con cedazos americanos nos hacen sentir afuera, pero estar adentro protegidos y comodos."
        t3_title="Lecciones de Surf y Paddleboard"
        t3_description="Otros retiros son para los que se quieren divertir, y para eso damos clases introductorias de surf y paddle board en el mar. En un pequeño rinconcito de Osa tan maravilloso que no se puede describir, solo vivir."
        t4_title="Exploración de positas"
        t4_description="La oportunidad de hacer un viaje de todo el día al parque nacional corcovado. Saliendo desde Paz, con transporte en bote y guia recomendado. No esta incluido en los precios."
        image="/images/lounge/1.jpg"
        button="Conocer mas (pronto)"
      />

      <Application
        title="La casa principal"
        subtitle="From the Villa's huge screened windows you can see the fours species of monkeys, morpho butterflies, scarlet maccaws, hawks, tucans, pavones, pizotes, ant eaters even the Tapir and Ocelot."
        t1_title="2 Bedrooms with 4 Beds each"
        t1_description="Incluye 3 comidas, estacion de cafe y te, todas las actividades y transporte si viene en flysansa.com"
        t2_title="Full Kitchen, Living & Dinning"
        t2_description="Quisimos que estar en la casa se sintiera como acampar, pero con la comidad de una casa de playa. Ventanas gigantes con cedazos americanos nos hacen sentir afuera, pero estar adentro protegidos y comodos."
        t3_title="50 Steps from the Sand"
        t3_description="Otros retiros son para los que se quieren divertir, y para eso damos clases introductorias de surf y paddle board en el mar. En un pequeño rinconcito de Osa tan maravilloso que no se puede describir, solo vivir."
        t4_title="Exploración de positas"
        t4_description="La oportunidad de hacer un viaje de todo el día al parque nacional corcovado. Saliendo desde Paz, con transporte en bote y guia recomendado. No esta incluido en los precios."
        image="/images/house.jpg"
        button="Conocer mas (pronto)"
      />

      <LeftPlain
        title="Los retiros son temáticos, algunos son orientados a la naturtaleza"
        subtitle="los arboles, los animales y las plantas. Caminatas a cataratas, exploración de positas en playas desiertas. Conocer el Parque Nacional Corcovado"
        t1_title="Caminatas a Cataratas"
        t1_description="Incluye 3 comidas, estacion de cafe y te, todas las actividades y transporte si viene en flysansa.com"
        t2_title="Fogatas y BBQ's en la playa"
        t2_description="Quisimos que estar en la casa se sintiera como acampar, pero con la comidad de una casa de playa. Ventanas gigantes con cedazos americanos nos hacen sentir afuera, pero estar adentro protegidos y comodos."
        t3_title="Lecciones de Surf y Paddleboard"
        t3_description="Otros retiros son para los que se quieren divertir, y para eso damos clases introductorias de surf y paddle board en el mar. En un pequeño rinconcito de Osa tan maravilloso que no se puede describir, solo vivir."
        t4_title="Exploración de positas"
        t4_description="La oportunidad de hacer un viaje de todo el día al parque nacional corcovado. Saliendo desde Paz, con transporte en bote y guia recomendado. No esta incluido en los precios."
        image="/images/jungle.jpg"
        button="Conocer mas  (pronto)"
      />

      <How
        title="Nuestros retiros son como vacaciónes personales"
        subtitle="Tomarse una pausa con el proposito de regresar transformad@"
        t1_title="Todo incluido"
        t1_description="3 comidas, cafe y te y meriendas"
        t2_title="Actividades, guias y equipo"
        t2_description="Todas las actividades según el retiro"
        t3_title="Hospedaje frente al mar"
        t3_description="Cuartos o glamping para 2 y 3 personas."
        t4_title="Viaje a PN Corcovado (extra)"
        t4_description="Viaje al parque en bote el pen-último día"
        image={"/images/templo.jpeg"}
        button="Conocer mas (pronto)"
      />

      <RightPlain
        title="Otros retiros son para los que se quieren divertir"
        subtitle="Damos clases introductorias de surf y paddle board en el mar. Mas fogatas, bbq's, musica y baile. En un pequeño rinconcito de Osa tan maravilloso que no se puede describir, solo vivir."
        t1_title="Caminatas a Cataratas"
        t1_description="Incluye 3 comidas, estacion de cafe y te, todas las actividades y transporte si viene en flysansa.com"
        t2_title="Fogatas y BBQ's en la playa"
        t2_description="Quisimos que estar en la casa se sintiera como acampar, pero con la comidad de una casa de playa. Ventanas gigantes con cedazos americanos nos hacen sentir afuera, pero estar adentro protegidos y comodos."
        t3_title="Lecciones de Surf y Paddleboard"
        t3_description="Otros retiros son para los que se quieren divertir, y para eso damos clases introductorias de surf y paddle board en el mar. En un pequeño rinconcito de Osa tan maravilloso que no se puede describir, solo vivir."
        t4_title="Exploración de positas"
        t4_description="La oportunidad de hacer un viaje de todo el día al parque nacional corcovado. Saliendo desde Paz, con transporte en bote y guia recomendado. No esta incluido en los precios."
        image="/images/video-bkg.jpg"
        button="Conocer mas  (pronto)"
      />

      <Features
        title="En las actividades de cada retiro damos ideas de cómo aplicar la presencia en la naturaleza "
        subtitle="La presencia es un esfuerzo que se hace por estar en el lugar donde estamos y no pensando en otras de cosas de lado. La presencia es el camino más corto a la paz, esta aquī, ya, y no se necesita creer, hacer, ni ser nada más."
        list={[
          {
            title: "Caminatas en Silencio",
            description:
              "Vamos a cataratas, explorando posas en km's de playas y bosques. Aquí no hay que caminar mucho para ver animales y estar en el bosque, lo hacemos mas que nada para adentrarnos en nosotros mismos.",
          },
          {
            title: "Surf y Paddleboard",
            description:
              "El deporte de Osa es el surf, es lo que hacemos para divertirnos. Tenemos olas para principiantes e intermedias frente a la casa. Salir en paddle a hablar con al atardecer es la cereza del pastel.",
          },
          {
            title: "Fuego",
            description:
              "El fuego es uno de los maestros del retiro. Tenemos dos areas para hacer fogatas una por el bosque y otra en la playa. Nos encanta el fuego, jugar, bailar, hablar y estar con él. Cosas que ya todos hemos hecho.  ",
          },
          {
            title: "Agua",
            description:
              "El agua es la medicina del retiro y la reina del lugar. La lluvia para salir a correr, jugar y bailar en un bosque de playa, ningun niño se la pierde; y es lo que mas necesitamos. Tenemos el mar, quebradas y pozas.",
          },
          {
            title: "Tierra ",
            description:
              "Ir al bosque, salirse del sendero, ponerse de rodillas y tocar la tierra. Ver de que esta hecha, es la tierra de un bosque primario, es lo mas vivo que hay en el mundo. Tambien tenemos una poza con barro para cubrirse de piez a cabeza cuando quiera.",
          },
          {
            title: "Fiesta",
            description:
              "Es dificil imaginarse una fiesta sin pachanga, alchol y drogas. Nos es tan facil desinhibierse, olvidarse de quien te esta mirando, que estan pensado y sobre todo hay que poner de parte de uno para estar alegre. Hoy en día, no hay nada mas importante que aprender.",
          },
          {
            title: "Nada",
            description:
              "Un retiro exitoso se da cuando al final, ojala antes. Llegamos a un punto donde estamos comodos sin hacer nada. Para eso hacemos todo lo demas.",
          },
        ]}
      />

      <LeftPlain
        title="Tenemos otros retiros para los que se quieren explorar a sí mismos, aunque nunca lo hayan hecho"
        subtitle="Un retiro con mas charlas, preguntas y respuestas y acopañamiento para revisar su vida, hacer una pausa, descansar, sanarse de las cosas duras de la vida, una desconexión de su historia personal, buscar otra perspectiva, hablar con la naturaleza, con el mar, con la fogata que es lo mismo que hablar con el uno mismo verdadero y tomar decisiones importantes o mejor aun descubrir dimensiones nuevas de uno mismo que hacen esas decisiones irrelevantes."
        t1_title="Caminatas a Cataratas"
        t1_description="Incluye 3 comidas, estacion de cafe y te, todas las actividades y transporte si viene en flysansa.com"
        t2_title="Fogatas y BBQ's en la playa"
        t2_description="Quisimos que estar en la casa se sintiera como acampar, pero con la comidad de una casa de playa. Ventanas gigantes con cedazos americanos nos hacen sentir afuera, pero estar adentro protegidos y comodos."
        t3_title="Lecciones de Surf y Paddleboard"
        t3_description="Otros retiros son para los que se quieren divertir, y para eso damos clases introductorias de surf y paddle board en el mar. En un pequeño rinconcito de Osa tan maravilloso que no se puede describir, solo vivir."
        t4_title="Exploración de positas"
        t4_description="La oportunidad de hacer un viaje de todo el día al parque nacional corcovado. Saliendo desde Paz, con transporte en bote y guia recomendado. No esta incluido en los precios."
        image="/images/templo2.jpg"
        button="Conocer mas sobre osa (pronto)"
      />

      <Cta
        title="Paz es un ambiente no dogmático sin profesor - donde todos estamos en lo mismo. Porque esa es la verdad de la vida."
        subtitle="Todo fue diseñado, construido y es guiado por su fundador Roberto ( @monodepaz ) que utilizó todas estas herramientas para salir de situaciones muy retadoras de vida y sus consecuencia de salud mental. Ahora dedica su vida como cuidador de este lugar y compañero de todos los que nos visitan. * Surf y Paddle si tienen instructor"
        line2="Incluye 3 comidas, estacion de cafe y te, todas las actividades y transporte si viene en flysansa.com"
        line3="Fogatas y BBQ's en la playa"
        image="/marketing/logo/png/paz_lila__v2.png"
        button="Venga, lo estabamos esperando"
      />

      <Footer />
    </div>
  );
}


<LeftPlain
title="Los retiros son temáticos, algunos son orientados a la naturtaleza"
subtitle="los arboles, los animales y las plantas. Caminatas a cataratas, exploración de positas en playas desiertas. Conocer el Parque Nacional Corcovado"
t1_title="Caminatas a Cataratas"
t1_description="Incluye 3 comidas, estacion de cafe y te, todas las actividades y transporte si viene en flysansa.com"
t2_title="Fogatas y BBQ's en la playa"
t2_description="Quisimos que estar en la casa se sintiera como acampar, pero con la comidad de una casa de playa. Ventanas gigantes con cedazos americanos nos hacen sentir afuera, pero estar adentro protegidos y comodos."
t3_title="Lecciones de Surf y Paddleboard"
t3_description="Otros retiros son para los que se quieren divertir, y para eso damos clases introductorias de surf y paddle board en el mar. En un pequeño rinconcito de Osa tan maravilloso que no se puede describir, solo vivir."
t4_title="Exploración de positas"
t4_description="La oportunidad de hacer un viaje de todo el día al parque nacional corcovado. Saliendo desde Paz, con transporte en bote y guia recomendado. No esta incluido en los precios."
image="/images/jungle.jpg"
button="Conocer mas  (pronto)"
/>

<How
title="Nuestros retiros son como vacaciónes personales"
subtitle="Tomarse una pausa con el proposito de regresar transformad@"
t1_title="Todo incluido"
t1_description="3 comidas, cafe y te y meriendas"
t2_title="Actividades, guias y equipo"
t2_description="Todas las actividades según el retiro"
t3_title="Hospedaje frente al mar"
t3_description="Cuartos o glamping para 2 y 3 personas."
t4_title="Viaje a PN Corcovado (extra)"
t4_description="Viaje al parque en bote el pen-último día"
image={"/images/templo.jpeg"}
button="Conocer mas (pronto)"
/>

<RightPlain
title="Otros retiros son para los que se quieren divertir"
subtitle="Damos clases introductorias de surf y paddle board en el mar. Mas fogatas, bbq's, musica y baile. En un pequeño rinconcito de Osa tan maravilloso que no se puede describir, solo vivir."
t1_title="Caminatas a Cataratas"
t1_description="Incluye 3 comidas, estacion de cafe y te, todas las actividades y transporte si viene en flysansa.com"
t2_title="Fogatas y BBQ's en la playa"
t2_description="Quisimos que estar en la casa se sintiera como acampar, pero con la comidad de una casa de playa. Ventanas gigantes con cedazos americanos nos hacen sentir afuera, pero estar adentro protegidos y comodos."
t3_title="Lecciones de Surf y Paddleboard"
t3_description="Otros retiros son para los que se quieren divertir, y para eso damos clases introductorias de surf y paddle board en el mar. En un pequeño rinconcito de Osa tan maravilloso que no se puede describir, solo vivir."
t4_title="Exploración de positas"
t4_description="La oportunidad de hacer un viaje de todo el día al parque nacional corcovado. Saliendo desde Paz, con transporte en bote y guia recomendado. No esta incluido en los precios."
image="/images/video-bkg.jpg"
button="Conocer mas  (pronto)"
/>

<Features
title="En las actividades de cada retiro damos ideas de cómo aplicar la presencia en la naturaleza "
subtitle="La presencia es un esfuerzo que se hace por estar en el lugar donde estamos y no pensando en otras de cosas de lado. La presencia es el camino más corto a la paz, esta aquī, ya, y no se necesita creer, hacer, ni ser nada más."
list={[
  {
    title: "Caminatas en Silencio",
    description:
      "Vamos a cataratas, explorando posas en km's de playas y bosques. Aquí no hay que caminar mucho para ver animales y estar en el bosque, lo hacemos mas que nada para adentrarnos en nosotros mismos.",
  },
  {
    title: "Surf y Paddleboard",
    description:
      "El deporte de Osa es el surf, es lo que hacemos para divertirnos. Tenemos olas para principiantes e intermedias frente a la casa. Salir en paddle a hablar con al atardecer es la cereza del pastel.",
  },
  {
    title: "Fuego",
    description:
      "El fuego es uno de los maestros del retiro. Tenemos dos areas para hacer fogatas una por el bosque y otra en la playa. Nos encanta el fuego, jugar, bailar, hablar y estar con él. Cosas que ya todos hemos hecho.  ",
  },
  {
    title: "Agua",
    description:
      "El agua es la medicina del retiro y la reina del lugar. La lluvia para salir a correr, jugar y bailar en un bosque de playa, ningun niño se la pierde; y es lo que mas necesitamos. Tenemos el mar, quebradas y pozas.",
  },
  {
    title: "Tierra ",
    description:
      "Ir al bosque, salirse del sendero, ponerse de rodillas y tocar la tierra. Ver de que esta hecha, es la tierra de un bosque primario, es lo mas vivo que hay en el mundo. Tambien tenemos una poza con barro para cubrirse de piez a cabeza cuando quiera.",
  },
  {
    title: "Fiesta",
    description:
      "Es dificil imaginarse una fiesta sin pachanga, alchol y drogas. Nos es tan facil desinhibierse, olvidarse de quien te esta mirando, que estan pensado y sobre todo hay que poner de parte de uno para estar alegre. Hoy en día, no hay nada mas importante que aprender.",
  },
  {
    title: "Nada",
    description:
      "Un retiro exitoso se da cuando al final, ojala antes. Llegamos a un punto donde estamos comodos sin hacer nada. Para eso hacemos todo lo demas.",
  },
]}
/>

<LeftPlain
title="Tenemos otros retiros para los que se quieren explorar a sí mismos, aunque nunca lo hayan hecho"
subtitle="Un retiro con mas charlas, preguntas y respuestas y acopañamiento para revisar su vida, hacer una pausa, descansar, sanarse de las cosas duras de la vida, una desconexión de su historia personal, buscar otra perspectiva, hablar con la naturaleza, con el mar, con la fogata que es lo mismo que hablar con el uno mismo verdadero y tomar decisiones importantes o mejor aun descubrir dimensiones nuevas de uno mismo que hacen esas decisiones irrelevantes."
t1_title="Caminatas a Cataratas"
t1_description="Incluye 3 comidas, estacion de cafe y te, todas las actividades y transporte si viene en flysansa.com"
t2_title="Fogatas y BBQ's en la playa"
t2_description="Quisimos que estar en la casa se sintiera como acampar, pero con la comidad de una casa de playa. Ventanas gigantes con cedazos americanos nos hacen sentir afuera, pero estar adentro protegidos y comodos."
t3_title="Lecciones de Surf y Paddleboard"
t3_description="Otros retiros son para los que se quieren divertir, y para eso damos clases introductorias de surf y paddle board en el mar. En un pequeño rinconcito de Osa tan maravilloso que no se puede describir, solo vivir."
t4_title="Exploración de positas"
t4_description="La oportunidad de hacer un viaje de todo el día al parque nacional corcovado. Saliendo desde Paz, con transporte en bote y guia recomendado. No esta incluido en los precios."
image="/images/templo2.jpg"
button="Conocer mas sobre osa (pronto)"
/>
