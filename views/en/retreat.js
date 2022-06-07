import Footer from "../../components/marketing/footer";

import HeaderTop from "../../components/sections/headerTop";

import Signup from "../../components/sections/signupForm";

import RightWithBullets from "../../components/sections/rightWithBullets";
import LeftWithBullets from "../../components/sections/leftWithBullets";

import ThreeFeatures from "../../components/sections/threeFeatures";
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
      {""}
      <HeaderTop
        logoBefore={true}
        title="Our retreats are fun vacations aimed at reconnecting the true nature of ourselves"
        subtitle={`One of the greatest achievments of any human being is to be comfortable and calm with herself. A retreat is the perfect place to align with that.`}
      />
      <ThreeFeatures
        t3_title="Fun Local Adventures"
        t3_description="Our easy going culture and youthful spirit turns the retreat into a fun adventure in paradise"
        t1_title="Authentic connection with nature"
        t1_description="Paz unique approach to healing and release of stress is about learning to let go and allowing the nature of the universe to be our guide."
        t2_title="Reunite with your(true)self"
        t2_description="It's about feeling our inner voice, which we sometimes can't hear because we are thinking too much"
      />

      <LeftWithBullets
        title="If we are searching for happiness, let's start by having a good time now!"
        subtitle="Kids are the gurus of hapiness and they always start with having a good time."
        t1_title="Surf and Paddle board Meditations"
        t1_description="Surf and Paddleboard lessons with an espiritual approach of meditation. A mix of soul surfing with Qi Gong and Tai Chi to flow in the sea"
        t2_title="Bonefires, BBQ's and hammocks on the beach"
        t2_description="There is nothing better than sitting in a bonefire in the sand under the starts eating smoked delicious food and having a great talk."
        t3_title="Dance and music as the expression of the soul"
        t3_description="Party like our ancestors, letting fire and dance set you free. An opportunity to remember how to have fun while healing owe mind and dancing with out hearts."
        images={[
          {
            src: "/optimized/beach/paddle_from_sea.jpeg",
            width: 745,
            height: 700,
          },
        ]}
      />
      <RightWithBullets
        title="To feel a connection with nature, we must approach with a genuine heart"
        subtitle="Trees, animals and birds are not objects to be photographed. Using their brave lives as an example, they become guides in the path of life that takes us home to our hearts."
        t1_title="While hiking we'll go beyond the physical and understandable, into realizing an spiritual connection with nature"
        t1_description="To form an actual healthy relationship, as we are supposed to do with our loved ones, we must enter the forest as sons and daughters enter their mother's home. That's how we'll enter waterfalls, creeks, ponds and primary forests."
        t2_title="The retreat is filled with opportunities to be fully present in nature"
        t2_description="To feel the effects of connecting with nature - within and without - we must endure the pressure of thoughts. Keep our attention with what is here, now. Since we are in one of the most pristine places in the world, it's very easy to do."
        t3_title="Healing music therapy"
        t3_description="We join the symphony of the forest and the beach with drums, flutes and other native instruments to reconfort out hearts."
        images={[
          { src: "/raw/wildlife/maccaw.webp", width: 1000, height: 700 },
        ]}
      />
      <LeftWithBullets
        title="To reconnect with ourselves we need have to disconect with what we are not."
        subtitle="Since we are young we had to follow a path to serve the collective of man. But we all reach a point were we must follow our path. That's what life is about, as well as this retreat at Paz."
        t1_title="A course to remember how to live from the heart."
        t1_description="Who are we? What do we really want, and how to find the strenght to live our true reality"
        t2_title="Transforming ourselves is to recognize that we are not our minds"
        t2_description="This retreat is a space to recognize that resistance to go within beyond the mind, only exists in as a though in the mind."
        t3_title="A course to discover the magic key that opens our soul"
        t3_description="In the same way our bodies have genetics, our soul it's own signature. That's why we all have our own path and in every step that key is made. God, please let it be so, that Paz is the place where it opens wide."
        images={[
          {
            src: "/optimized/lounge/templo_from_back.jpg",
            width: 1000,
            transformations: [
              { cropMode: "extract", height: 850, width: 1000 },
            ],
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
