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
import LeftWithBullets from "../components/sections/leftWithBullets";

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
        title="Los retiros de Paz son vacaciónes con un proposito de transformación"
        subtitle={`Nuestra receta es única. Tiene uns espiritú aventurero, una relación cercana con la naturaleza y facilita la dimensión espiritual de la vida`}
      />
      <LeftWithBullets
        title="Para sentir una conexión con la naturaleza, y recibir una respuesta del espiritú vivo de la vida, tenemos que exponernos a ella autentica y humildemente"
        subtitle="Los arboles, los animales y las plantas no son objetos para ser fotografiados, son los guias y el ejemplo de como debemos vivir - si realmente queremos paz"
        t1_title="Caminatas orientadas a la conexión espiritual con la naturaleza"
        t1_description="En el bosque, en cascadas y en la playa"
        t2_title="Momentos de presencia en la naturaleza"
        t2_description="Usamos el fuego, el agua, el barro y todas las actividades para practicar el estar presente y meditar espontaneamente, sin esfuerzo."
        t3_title="Espacios de silencio y reflexión para la auto sanación"
        t3_description="Una vez descubiertas y disueltas las ideas que generan las tensiones, nos podemos concentrar en nosotros mismos y escucharnos. Las soluciones llegan solas desde adentro."
        images={[
          { src: "/raw/wildlife/maccaw.webp", width: 1000, height: 700 },
        ]}
      />
      <RightWithBullets
        title="Si lo que buscamos es la felicidad, empecemos por disfrutar y pasarla muy bien."
        subtitle="Aprovechamos nuestra ubicación en el bosque mas biodiverso del mundo y frente al mar del Golfo Dulce en un lugar muy remoto para tener una experiencia muy divertida"
        t1_title="Lecciones de Surf y Paddleboard"
        t1_description="Le eseñamos a surfear o usar un Paddleboard justo al frente de nuestra propiedad, con un enfoque espirutual conocido como Soul Surfing "
        t2_title="Fogatas, BBQ's y hamacas en la playa"
        t2_description="No hay nada mas sanador que sentarse en la playa, en la arena, bajo las estrellas y frente a una fogata con amigos a reirnos, comer rico y conversar sobre la vida."
        t3_title="Baile y música como expresion del alma"
        t3_description="Una fiesta a la antigua, con fuego y danza libre. Una oportunidad para recordar a nuestros ancestros y como se divertian sanando su mente, viviendo libres desde el corazón"
        images={[
          {
            src: "/optimized/beach/paddle_from_sea.jpeg",
            width: 745,
            height: 700,
          },
        ]}
      />

      <LeftWithBullets
        title="Si realmente queremos transformar nuestra vida de preocupaciones, inconformidades y enojos en creatividad, libertad y alegria - eso solo se puede hacer desde el corazón y solo lo puede hacer uno"
        subtitle="La balanza de la vida moderna esta inclinada hacia el pensamiento y su momentum controla cada decisión. Tratamos de contrarestarlo con tecnicas, creecnias e ideas - pero todo eso solo son mas pensamientos."
        t1_title="El retiro es un curso para recordar como se vive desde el corazón"
        t1_description="La coherencia entre la mente y el corazón es nuestro estado natural, ya todos lo vivimos y no se olvida - como andar en bicicleta."
        t2_title="Un curso vivo, no dogamtico y no profesorado donde el ingrediente magico somos todos"
        t2_description="Estamos juntos en esta vida porque la dirección para recordar y descubrir las dimensiones invencibles de nuestro existir es un trabajo en equipo."
        t3_title="Transformarnos, es reconocer de primera mano que nos somos un pensamiento"
        t3_description="El retiro es un espacio para vencer la resistencia a profundizar en lo que somos en verdad. Cada quien a su estilo y a su ritmo con el apoyo de la madre naturaleza, de todos nuestros ancestros que nos ayudan en cada momento y del abrazo de los que estamos aquí."
        images={[
          {
            src: "/optimized/lounge/templo_from_back.jpg",
            width: 1000,
            height: 700,
          },
        ]}
      />

      <How
        title="Los retiros tienen lo que realmente se necesita para estar bien"
        subtitle="Venga y no se preocupe por nada."
        t1_title="Todo incluido"
        t1_description="3 comidas, cafe y te y meriendas"
        t2_title="Actividades, guias y equipo"
        t2_description="Todas las actividades según el retiro"
        t3_title="Hospedaje frente al mar"
        t3_description="Cuartos o glamping para 2 y 3 personas."
        t4_title="Viaje a PN Corcovado (extra)"
        t4_description="Viaje al parque en bote el pen-último día"
        images={[
          {
            src: "/optimized/house/dinning/dinning_full.JPG",
            width: 750,
            height: 700,
          },
        ]}
      />
      {/*

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

      */}

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
