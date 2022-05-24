import Header from "../../components/Header";
import Footer from "../../components/marketing/footer";
import Hero from "../../components/sections/hero";
import Left from "../../components/sections/left";
import LeftPlain from "../../components/sections/leftPlain";
import RightPlain from "../../components/sections/rightPlain";
import How from "../../components/sections/how";
import Cta from "../../components/sections/cta";
import Application from "../../components/sections/application";
import Links from "../../components/sections/links";

import FeaturesCenter from "../../components/sections/featuresCenter";

import HeaderTop from "../../components/sections/headerTop";
import HeaderBottom from "../../components/sections/headerBottom";
import HeaderLeft from "../../components/sections/headerLeft";
import Pricing from "../../components/sections/pricing";
import Signup from "../../components/sections/signupForm";

import RightWithBullets from "../../components/sections/rightWithBullets";
import LeftWithBullets from "../../components/sections/leftWithBullets";

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
        title="Paz Retreats are vacations aimed at realizing the huge potential within"
        subtitle={`Our easy going culture turns the retreat into a fun adventure. While Paz unique approach to releasing stress is guided by nature. Once you are happy and free, if you wan't - we'll point you within.`}
      />

      <LeftWithBullets
        title="If we are searching for happiness, let's start by having a good time now!"
        subtitle="Aprovechamos nuestra ubicación en el bosque más biodiverso del mundo y frente al mar del Golfo Dulce en un lugar muy remoto para tener una experiencia muy divertida"
        t1_title="Surf and Paddle board lessons for all ages"
        t1_description="Le eseñamos a surfear o usar un Paddleboard justo al frente de nuestra propiedad, con un enfoque espiritual conocido como Soul Surfing "
        t2_title="Bonefires, BBQ's and hammocks on the beach"
        t2_description="No hay nada más sanador que sentarse en la playa, en la arena, bajo las estrellas y frente a una fogata con amigos a reirnos, comer rico y conversar sobre la vida."
        t3_title="Dance and music as the expression of the soul"
        t3_description="Party like out ancestors, letting fire and dance set you free. An opportunuty to remember how our ancestors had fun while healing their mind and living free from their heart."
        images={[
          {
            src: "/optimized/beach/paddle_from_sea.jpeg",
            width: 745,
            height: 700,
          },
        ]}
      />
      <RightWithBullets
        title="To feel a conection with nature, our approach must be for real."
        subtitle="Trees, animals and birds are not objects to be photographed. Using their brave lifes as an example, they become guides in the path of life that takes us home to our hearts."
        t1_title="While hiking we'll go beyond the physical and understandable, into realizing an spiritual connection with nature"
        t1_description="To form an actual healty relationship, as we are supposed to do with our loved ones, we must enter the forest as sons and daughters enter their mother's home. That's how we'll enter waterfalls, creeks, ponds and primary forests."
        t2_title="The retreat is filled with opportunities to be fully present in nature"
        t2_description="To feel the effects of connecting with nature - within and without - we must endure the presure of thoughts. Keep our attention with what is here, now. Since we are in one of the most pristine places in the world, it's very easy to do."
        images={[
          { src: "/raw/wildlife/maccaw.webp", width: 1000, height: 700 },
        ]}
      />

      <LeftWithBullets
        title="A change of thought is not enought to transform our worry, discontent and anger into creativity, freedom and joy."
        subtitle="The balance of modern life is titled towards thought and it's momentum control our decisions. We try to counter with beliefs, ideas and technics. But those too are thoughts. The new world is created out of wisdom of the heart."
        t1_title="This retreat is a reminder of how to live from the heart."
        t1_description="La coherencia entre la mente y el corazón es nuestro estado natural, ya todos lo vivimos y no se olvida - como andar en bicicleta."
        t2_title="Embeded with a non-dogmatic course that's alive. Where the magical ingredient is each one of us"
        t2_description="Estamos juntos en esta vida porque la dirección para recordar y descubrir las dimensiones más puras de nuestro existir - es un trabajo en equipo."
        t3_title="Transforming into our true selfs is simply recognizing we are not a tought."
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
