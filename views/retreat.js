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

import Signup from "../components/sections/signupForm";

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
          className="mt-28 mx-auto relative w-44 h-44 mb-10"
          src="/marketing/logo/png/blanco_fondo color_v2.png"
          alt=""
        />
      </Link>
      <HeaderTop
        logoBefore={true}
        title="Los retiros de Paz son como vacaciónes individuales para hacer una pausa y regresar mejor de lo que se salió"
        subtitle="Nuestra receta es un poco de aventura, naturaleza hasta que no quepa y mucha relajación fuera de la zona de confort."
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
        image={{ src: "/images/jungle.jpg", width: 1000, height: 700 }}
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
        image={{ src: "/images/video-bkg.jpg", width: 1000, height: 700 }}
      />
      <How
        title="Tienen todo lo que realmente se necesita para estar bien"
        subtitle="Venga y no se preocupe por nada."
        t1_title="Todo incluido"
        t1_description="3 comidas, cafe y te y meriendas"
        t2_title="Actividades, guias y equipo"
        t2_description="Todas las actividades según el retiro"
        t3_title="Hospedaje frente al mar"
        t3_description="Cuartos o glamping para 2 y 3 personas."
        t4_title="Viaje a PN Corcovado (extra)"
        t4_description="Viaje al parque en bote el pen-último día"
        image={{ src: "/images/templo.jpeg", width: 1000, height: 700 }}
        button={{ text: "Conocer mas (pronto)", href: "#" }}
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
            title: "Charlas",
            description:
              "Un retiro exitoso se da cuando al final, ojala antes. Llegamos a un punto donde estamos comodos sin hacer nada. Para eso hacemos todo lo demas.",
          },
          {
            title: "Circulos Conversatorios",
            description:
              "Un retiro exitoso se da cuando al final, ojala antes. Llegamos a un punto donde estamos comodos sin hacer nada. Para eso hacemos todo lo demas.",
          },
          {
            title: "Nada",
            description:
              "Un retiro exitoso se da cuando al final, ojala antes. Llegamos a un punto donde estamos comodos sin hacer nada. Para eso hacemos todo lo demas.",
          },
        ]}
      />
      <RightPlain
        title="Tenemos otros retiros para los que se quieren explorar a sí mismos, aunque nunca lo hayan hecho"
        subtitle="Acopañamiento para revisar su vida, hacer una pausa, descansar, sanarse de las cosas duras de la vida, una desconexión de su historia personal, buscar otra perspectiva, hablar con la naturaleza, con el mar, con la fogata que es lo mismo que hablar con el uno mismo verdadero y tomar decisiones importantes o mejor aun descubrir dimensiones nuevas de uno mismo que hacen esas decisiones irrelevantes."
        t1_title="Caminatas a Cataratas"
        t1_description="Incluye 3 comidas, estacion de cafe y te, todas las actividades y transporte si viene en flysansa.com"
        t2_title="Fogatas y BBQ's en la playa"
        t2_description="Quisimos que estar en la casa se sintiera como acampar, pero con la comidad de una casa de playa. Ventanas gigantes con cedazos americanos nos hacen sentir afuera, pero estar adentro protegidos y comodos."
        t3_title="Lecciones de Surf y Paddleboard"
        t3_description="Otros retiros son para los que se quieren divertir, y para eso damos clases introductorias de surf y paddle board en el mar. En un pequeño rinconcito de Osa tan maravilloso que no se puede describir, solo vivir."
        t4_title="Exploración de positas"
        t4_description="La oportunidad de hacer un viaje de todo el día al parque nacional corcovado. Saliendo desde Paz, con transporte en bote y guia recomendado. No esta incluido en los precios."
        image={{ src: "/images/templo2.jpg", width: 1000, height: 700 }}
        button={{ text: "Conocer mas (pronto)", href: "#" }}
      />

      <Signup
        onComplete={(e) => console.log(e)}
        title="Reciba precios, ofertas y detalles sobre nuestros retiros"
        subtitle="Estamos alistandonos para lanzar los primeros retiros con precios muy accesibles. Registrese si le interesa saber cuando los lancemos."
        image={{ src: "/images/jungle.jpg", width: 1000, height: 700 }}
        button={{ text: "Si, quiero ir", onClick: () => {} }}
      />
      <Footer />
    </div>
  );
}
