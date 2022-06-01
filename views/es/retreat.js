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
        t1_title="Aventuras locales y divertidas"
        t1_description="Creado y operado por costarricenses que aman la Peninsula de Osa, nuestro espíritu aventurero y cultura tranquila convierten el retiro en una aventura divertida en el paraiso."
        t2_title="Conexión con la naturaleza"
        t2_description="La enfoque de Paz esta en dejar que la naturaleza sea la guía. Para que esto funcione tenemos que trascender la intención y transformarla en un espacio de sentir."
        t3_title="Reconexión con uno mismo"
        t3_description="La esencia espontanea y tranquila de paz es una expresión de la experiencia de su fundador usando este lugar para mejorar su vida"
      />

      <RightWithBullets
        title="Si lo que buscamos es la felicidad, empecemos por disfrutar ya!"
        subtitle="Todos conocemos los beneficios de estar felices y relajados; sin pensar en todo lo demás. A muchos nos gustaría todos los días poder así funcionar. Los niños son los maestros de la felicidad, y ellos siempre empiezan por disfrutar. "
        t1_title="Surf y Paddleboard Meditativo"
        t1_description="Le enseñamos a surfear en tabla o Paddleboard justo al frente de paz. Nos enfocamos en complementar la parte física con la espiritual. Inspirados en el concepto de Soul Surfing, tomamos elementos de Tai Chi para fluir sin importar lo que que pase."
        t2_title="Fogatas, BBQ's y hamacas en la playa"
        t2_description="No hay nada más sanador que sentarse en la playa, en la arena, bajo las estrellas y frente a una fogata con amigos a reirnos, comer rico y conversar sobre la vida."
        t3_title="Fiestas Meditativas"
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
        title="Para sentir la conexión con la naturaleza - percibirla - tenemos que exponernos a ella de manera auténtica y humilde."
        subtitle="Los árboles, los animales y las plantas no son objetos solo para ser fotografiados, son los guías y el ejemplo de cómo debemos vivir - si realmente queremos paz"
        t1_title="Caminatas Meditativas"
        t1_description="En el bosque, en cascadas y en la playa. Salir a caminar sin pensar, sin expectativas y sin ningún lugar adonde llegar. "
        t2_title="Momentos de presencia en la naturaleza"
        t2_description="Usamos el fuego, el agua, el barro y actividades para practicar el estar presente y meditar espontáneamente, sin esfuerzo."
        t3_title="Espacios de silencio y reflexión para la auto-sanación"
        t3_description="Una vez descubiertas y disueltas las ideas que generan las tensiones, nos podemos concentrar en nosotros mismos y escucharnos. Las soluciones llegan solas desde adentro."
        images={[
          { src: "/raw/wildlife/maccaw.webp", width: 1000, height: 700 },
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
