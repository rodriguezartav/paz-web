import Header from "../../components/Header";
import Footer from "../../components/marketing/footer";

import ThreeFeatures from "../../components/sections/threeFeatures";

import HeaderTop from "../../components/sections/headerTop";

import Signup from "../../components/sections/signupForm";

import RightWithBullets from "../../components/sections/rightWithBullets";
import LeftWithBullets from "../../components/sections/leftWithBullets";

import { useState } from "react";
import Link from "next/link";

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
        title="Los retiros de Paz son vacaciones para reconectarnos con la naturaleza de nosotros mismos."
        subtitle={`De las mayores conquistas que cualquier ser humano puede alcanzar es estar cómodo y tranquilo consigo mismo. Un retiro es perfecto para retomar esa dirección.`}
      />

      <ThreeFeatures
        t3_title="Aventuras locales y divertidas"
        t3_description="Nuestro espíritu aventurero y cultura tranquila convierten el retiro en una aventura divertida."
        t1_title="Conexión con la naturaleza"
        t1_description="El enfoque de Paz esta en aprender a dejar que la naturaleza del universo sea la guía de nuestras vidas. "
        t2_title="Reconexión con uno mismo"
        t2_description="Se trata de sentir nuestra voz interior, lo que a veces no podemos escuchar por estar pensando sin parar."
      />

      <RightWithBullets
        title="Si lo que buscamos es la felicidad, seamos felices ya!"
        subtitle="Los niños son los maestros de la felicidad, y ellos siempre empiezan por disfrutar. "
        t1_title="Surf y Paddleboard Meditativo"
        t1_description="Clases de surf o Paddleboard con un enfoque espiritual de meditación. Una mezcla de Soul Surfing con Chi Kung y Tai Chi para fluir en el mar."
        t2_title="Fogatas, BBQ's y hamacas en la playa"
        t2_description="No hay nada más sanador que sentarse en la playa, en la arena, bajo las estrellas y frente a una fogata con amigos a reirnos, comer rico y conversar sobre la vida."
        t3_title="Fiestas Meditativas"
        t3_description="Una fiesta a la antigua, con fuego y danza libre. Una oportunidad para recordar a nuestros ancestros y cómo se divertían sanando su mente, bailando libres desde el corazón"
        images={[
          {
            src: "/optimized/beach/paddle_from_sea.jpeg",
            width: 745,
            height: 700,
          },
        ]}
      />

      <LeftWithBullets
        title="Para sentir la conexión con la naturaleza - percibirla - tenemos que exponernos a ella de manera auténtica y humilde."
        subtitle="Los árboles, los animales y las plantas no son objetos solo para ser fotografiados, son los guías y el ejemplo de cómo debemos vivir - si realmente queremos paz"
        t1_title="Caminatas Chi Meditativas"
        t1_description="En el bosque, en cascadas y en la playa. Salir a caminar sin pensar, sin expectativas y sin ningún lugar adonde llegar. "
        t2_title="Momentos de presencia en la naturaleza"
        t2_description="Usamos el fuego, el agua, el barro y actividades para practicar el estar presente y meditar espontáneamente, sin esfuerzo."
        t3_title="Música de sanación"
        t3_description="Nos unimos a la sinfonia del bosque y el mar con tambores, flautas y otros instrumentos nativos para reconfortar nuestro corazón."
        images={[
          { src: "/raw/wildlife/maccaw.webp", width: 1000, height: 700 },
        ]}
      />

      <LeftWithBullets
        title="Para conectarnos con nosotros mismos, tenemos que desconectarnos de lo que no somos."
        subtitle="Desde que somos niños hemos tenido que cumplir con un camino para serle útil a la sociedad, pero llega un punto en que necesitamos seguir nuestro propio camino. De eso se trata la vida y de eso se trata este retiro en Paz."
        t1_title="El retiro es un curso para recordar cómo se vive desde el corazón"
        t1_description="Quien somos, que queremos y como encontrar la fuerza de voluntad para vivir nuestra verdadera realidad."
        t2_title="Transformarnos, es reconocer de primera mano que no somos un pensamiento"
        t2_description="El retiro es un espacio para reconocer que la resistencia a profundizar más allá de donde el pensamiento puede llegar - es sólo un pensamiento."
        t3_title="Un curso para descubrir la llave mágica del interior"
        t3_description="Asī como todos tenemos genética corporal, támbien tenemos una espiritual. Cada camino es particular y con cada lección la llave abre mas. Dios quiera sea Paz donde abra al final."
        images={[
          {
            src: "/optimized/lounge/templo_from_back.jpg",
            width: 1000,
            height: 700,
          },
        ]}
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
