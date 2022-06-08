import Footer from "../../components/marketing/footer";

import HeaderTop from "../../components/sections/headerTop";

import Signup from "../../components/sections/signupForm";

import RightWithBullets from "../../components/sections/rightWithBullets";
import LeftWithBullets from "../../components/sections/leftWithBullets";

import ThreeFeatures from "../../components/sections/threeFeatures";
import { Fragment, useState } from "react";
import Link from "next/link";
import posts from "./library/posts";
import SimpleImage from "../../components/SimpleImage";

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
        title="Our retreats are fun vacations aimed at reconnecting with the true nature of ourselves"
        subtitle={`One of the greatest achievments of any human being is to be comfortable and calm with herself. A retreat is the perfect place to align with that.`}
      />
      <ThreeFeatures
        t3_title="Have Fun"
        t3_description="Our easy going culture and youthful spirit turns the retreat into a fun adventure in paradise"
        t1_title="Connect with nature"
        t1_description="Paz unique approach to healing and release of stress is about learning to let go and allowing the nature of the universe to be our guide."
        t2_title="Be with you"
        t2_description="It's about feeling our inner voice, which we sometimes can't hear because we are thinking too much"
      />

      <LeftWithBullets
        title="Start by having a good time!"
        subtitle="Kids are the real gurus and they always want to have fun."
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
        t1_title="Meditative Chi Hiking"
        t1_description="While hiking we'll go beyond the physical and understandable, into realizing an spiritual connection with nature"
        t2_title="Moments to be fully present in nature"
        t2_description="Simply keep your attention in the here and now. Since we are in one of the most pristine places in the world, it's very easy to do."
        t3_title="Healing music therapy"
        t3_description="We join the symphony of the forest and the beach with drums, flutes and other native instruments to reconfort out hearts."
        images={[
          { src: "/raw/wildlife/maccaw.webp", width: 1000, height: 700 },
        ]}
      />
      <LeftWithBullets
        title="To reconnect with ourselves we need to disconnect with what we are not."
        subtitle="Since we are young we had to follow a path to serve the collective of man. But we all reach a point were we must follow our path. That's what this retreat is about"
        t1_title="A course to remember how to live from the heart."
        t1_description="Who are we? What do we really want, and where to find the strength to live our true reality"
        t2_title="Transforming ourselves is to recognize that we are not our minds"
        t2_description="This retreat is a space to recognize that the resistance to go within beyond our minds: is also a though in the mind."
        t3_title="A course to discover the magic key that opens our soul"
        t3_description="In the same way our bodies have genetics, 'our soul' has them too. Experiences in life are meant to shape our unique key. Religion, Devotion and Inner Arts are the movements that open us up. But in the end, all that matters is the you, inside."
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

      <section
        className="py-16 md:py-24 lg:pb-52 bg-white"
        style={{
          backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center mb-16">
            <div className="w-full md:w-3/4 mb-8 md:mb-0">
              <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-indigo-500 bg-indigo-100 font-medium uppercase rounded-full shadow-sm">
                Blog
              </span>
              <h3 className="mb-4 text-4xl md:text-5xl leading-tight text-indigo-600 font-bold tracking-tighter">
                Read about it
              </h3>
              <p className="text-lg md:text-xl text-coolGray-500 font-medium">
                The best way to decide if this retreat is for you, is to read
                the following posts
              </p>
            </div>
            <div className="w-full md:w-1/4"></div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {posts
              .filter((item) => [4, 5, 6].indexOf(item.id) > -1)
              .map((item) => (
                <Link href={"/library/" + item.link}>
                  <div className="w-full cursor-pointer md:w-1/2 lg:w-1/3 px-4 mb-8">
                    <a className="block mb-6 overflow-hidden rounded-md">
                      <SimpleImage
                        width={300}
                        className="w-full"
                        transformations={[
                          { cropMode: "cm_extract", height: 300, width: 600 },
                        ]}
                        src={item.image}
                      />
                    </a>
                    <p className="mb-2 text-coolGray-500 font-medium">
                      {item.author} • {item.date}
                    </p>
                    <a className="inline-block mb-4 text-2xl leading-tight text-indigo-600 hover:text-coolGray-900 font-bold hover:underline">
                      {item.title}
                    </a>
                    <p className="mb-4 text-base md:text-lg text-coolGray-400 font-medium">
                      {item.description}
                    </p>
                    <a className="inline-block py-1 px-3 text-xs leading-5 text-indigo-500 hover:text-indigo-600 font-medium uppercase bg-indigo-100 hover:bg-indigo-200 rounded-full shadow-sm">
                      Satsang
                    </a>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

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
