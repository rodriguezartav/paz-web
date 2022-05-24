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
import Pricing from "../components/sections/pricing";
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
        title="Los retiros de Paz son vacaciones con propósito de transformación"
        subtitle={`Nuestra receta es única. Tiene un espíritu aventurero, una relación cercana con la naturaleza viva y facilita la dimensión espiritual de la vida`}
      />
      <LeftWithBullets
        title="Para sentir la conexión con la naturaleza - percibirla - tenemos que exponernos a ella de manera auténtica y humilde."
        subtitle="Los árboles, los animales y las plantas no son objetos solo para ser fotografiados, son los guías y el ejemplo de cómo debemos vivir - si realmente queremos paz"
        t1_title="Caminatas orientadas a la conexión espiritual con la naturaleza"
        t1_description="En el bosque, en cascadas y en la playa"
        t2_title="Momentos de presencia en la naturaleza"
        t2_description="Usamos el fuego, el agua, el barro y actividades para practicar el estar presente y meditar espontáneamente, sin esfuerzo."
        t3_title="Espacios de silencio y reflexión para la auto-sanación"
        t3_description="Una vez descubiertas y disueltas las ideas que generan las tensiones, nos podemos concentrar en nosotros mismos y escucharnos. Las soluciones llegan solas desde adentro."
        images={[
          { src: "/raw/wildlife/maccaw.webp", width: 1000, height: 700 },
        ]}
      />
      <RightWithBullets
        title="Si lo que buscamos es la felicidad, empecemos por disfrutar y pasarla muy bien."
        subtitle="Aprovechamos nuestra ubicación en el bosque más biodiverso del mundo y frente al mar del Golfo Dulce en un lugar muy remoto para tener una experiencia muy divertida"
        t1_title="Lecciones de Surf y Paddleboard"
        t1_description="Le eseñamos a surfear o usar un Paddleboard justo al frente de nuestra propiedad, con un enfoque espiritual conocido como Soul Surfing "
        t2_title="Fogatas, BBQ's y hamacas en la playa"
        t2_description="No hay nada más sanador que sentarse en la playa, en la arena, bajo las estrellas y frente a una fogata con amigos a reirnos, comer rico y conversar sobre la vida."
        t3_title="Baile y música como expresion del alma"
        t3_description="Una fiesta a la antigua, con fuego y danza libre. Una oportunidad para recordar a nuestros ancestros y cómo se divertían sanando su mente, viviendo libres desde el corazón"
        images={[
          {
            src: "/optimized/beach/paddle_from_sea.jpeg",
            width: 745,
            height: 700,
          },
        ]}
      />

      <LeftWithBullets
        title="Para realmente transformar nuestras preocupaciones, inconformidades y enojos en creatividad, libertad y alegría no basta con un cambio de pensamiento."
        subtitle="La balanza de la vida moderna está inclinada hacia el pensamiento y su momentum controla cada decisión. Tratamos de contrarestarlo con técnicas, creencias e ideas - pero esos también son pensamientos. El mundo nuevo se vive con la sabiduría del corazón."
        t1_title="El retiro es un curso para recordar cómo se vive desde el corazón"
        t1_description="La coherencia entre la mente y el corazón es nuestro estado natural, ya todos lo vivimos y no se olvida - como andar en bicicleta."
        t2_title="Un curso vivo, no dogmático y no profesorado donde el ingrediente mágico somos todos"
        t2_description="Estamos juntos en esta vida porque la dirección para recordar y descubrir las dimensiones más puras de nuestro existir - es un trabajo en equipo."
        t3_title="Transformarnos, es reconocer de primera mano que no somos un pensamiento"
        t3_description="El retiro es un espacio para reconocer que la resistencia a profundizar más allá de donde el pensamiento puede llegar - es sólo un pensamiento."
        images={[
          {
            src: "/optimized/lounge/templo_from_back.jpg",
            width: 1000,
            height: 700,
          },
        ]}
      />

      <Pricing
        legend={"Precios"}
        title={"Retiros empiezan el segundo jueves de cada mes"}
        subtitle="Duración opcional de 5 a 7 días"
      />

      <Signup
        onComplete={(e) => console.log(e)}
        title="Reciba precios, ofertas y detalles sobre nuestros retiros"
        subtitle="Estamos alistándonos para lanzar los primeros retiros con precios muy accesibles. Regístrese aquí para enterarse primero."
        image={{ src: "/images/jungle.jpg", width: 1000, height: 700 }}
        button={{ text: "Si, quiero ir", onClick: () => {} }}
      />
      <Footer />
    </div>
  );
}
