import Hero from "../components/marketing/hero21";
import Areas from "../components/marketing/areas";
import Features from "../components/marketing/features";

import Header from "../components/marketing/header";
import Cta from "../components/marketing/cta";
import News from "../components/marketing/news";
import Slideover from "../components/marketing/slideover";

import ItemFeature from "../components/guide/features";
import List from "../components/guide/list";

import ImageGrid from "../components/marketing/imageGrid";

import Carousel from "../components/marketing/carousel";
import { isMobile } from "react-device-detect";
import Division from "../components/marketing/division";
import { useState } from "react";

const images = [
  "/images/hero/8.jpg",
  "/images/hero/house.jpg",
  "/images/hero/beach.jpg",

  "/images/hero/house2.jpg",
  "/images/hero/4.jpg",
  "/images/hero/6.jpg",

  "/images/hero/templo.jpg",
];

const texts = {
  vacations: {
    left: {
      images: [
        "/images/lounge/final/4.jpeg",
        "/images/lounge/final/5.jpeg",
        "/images/lounge/final/3.jpeg",
        "/images/lounge/final/6.jpeg",
      ],
      title: "fff",
      paragraphs: [
        `This is your opportunity to enjoy a little secluded beach all to yourself.
          Paz is located in a small gulf where it's hard to see someone walking down the beach. 
          \n\rRight in front of the house (50 steps) you'll find a little sandy inlet, under the shadow of palm trees that we outfitted with hammocs and comfy furniture where you'll want to spend day and night.\n\r
          
          Discover why it's a favorite among scarlet maccaws and the 4 species of monkeys. Catch a wave, go paddle boarding or take a dip in the pacific ocean's turquioise and emmerald waters. 
         `,
      ],
      caption: "",
    },
    right: {
      images: [
        "/images/house/final/12.jpeg",
        "/images/house/final/16.jpeg",
        "/images/house/final/19.jpeg",
        "/images/house/final/21.jpeg",
        "/images/house/final/5.jpeg",
      ],
      title: "Comfy Jungle House",
      paragraphs: [
        `Floor to cealing screened windows to watch all the wildlife as
      they flow by the house. Big Ass Fans for superb
      ventilation in two extra large bedroms with 4 individual or 2 king resort grade beds each.\n\r Split the rooms for boys
      and girls, parents and kids and add a fun camping vibe to your
      adventure!\n\rFull kitchen with condiments and supplies. Bring your food - or
      - send us your shopping list and it will be sorted when you
      arrive - or request a typical costarican cook: the friendliness
      and love of our culture is the main condiment in our gastronomy.
    `,
        `Ask us for a free upgrade and we'll setup big glaming tents
      right on the sand for the best posible experience in Costa Rica.`,
      ],

      caption: "",
    },
  },

  rooms: {
    left: {
      images: ["/images/templo2.png", "/images/beach.jpg"],
      title: "De-stress and natural connection course",
      paragraphs: [
        `Paz (peace) is the feeling I hope that you experience while being here. It's not the opposite of stress, it's the result of being aware to the mechanisms of stress
           and the mastery to overcome them at any time.\n\r
  
        It's the indescribable presence that???s felt when we are truly here. Instead of thinking about situations that are not here in front of us. \n\r
        
        Here in Paz, it's easy to find a spot where nothing 'human' is happending, nothing needs to be done, and yet everything happends wonderfully. We can just be present, drop the weight of our shoulders and let things happend.\n\r
        
           In this course we'll use nature and observation. Simple things like sitting on the beach, hicking on the jungle, watching a bonefire, looking at the sunset. To surface our behavior and become aware of our particular stress mechanics.\n\r
  
           We'll use you own insights and my diverse background in internal arts to find the mix of technics that work best for you. \n\r
           
           Our goal is to develop the awareness to observe our state of mind, uncover the source of it's conditining and discover the internal arts ( mind,heart,++ ) 
           that resonate with you to start or further enhance your self-healing intent.`,
      ],
      caption: ``,
    },
    right: {
      images: ["/images/map.png", "/images/templo2.png"],
      title: "Location",
      paragraphs: [
        `
                  The Osa the Peninsula is the last frontier in Costa Rica. Unspolied and pristine it's considered the most biodiverse place on earth,
                  meaning it's packed densily with wildlife. The jaguar and 7 other species of felines lives here, tapir, ant eaters, sloths, the scarlet maccaw, 
                  humpback and shark whales, turtles, rays, the 4 species of monkeys, 900 types of huge trees and the most amazing insects yet to be discoved and named.\n\r
                  We are located on the tip of the peninsula in Cabo Matapalo, a 2 acre beach front property covered in forest. We are blessed with an area of primary forest, 
                  a cozy little white sand beach, a sand bottom creek, 4 swimming spots near by, a small bay to paddleboard with beginner and intermediate waves for surfing right in front.
        `,
        `
                    Activities are included, and there are over 45 of them to
                    choose from. Some are in the property and some require hiking.
                    Some require equipment, like paddle boards and kayaking. The
                    solo-bonefire under the stars is a favorite!
         `,
      ],

      caption:
        "Cabo Mata Palo can be reached via the scenic Coastal Highway by car (3.5 hours from Jaco) or by taking a beatiful short flight from SJO airport ( 45 minutes flight + 25 minute Taxi ).",
    },
  },
};

export default function OsaView({ setView, posts, guidedItems }) {
  let [selectedView, setSelectedView] = useState("vacations");

  const [sideView, setSideView] = useState("profile");
  const [sideViewOpen, setSideViewOpen] = useState(false);

  return (
    <div className="bg-stone-100  ">
      <main className="">
        <div className="">
          <Header
            selected={selectedView}
            setSelected={setSelectedView}
            open={sideViewOpen}
            setOpen={setSideViewOpen}
            view={sideView}
            setView={setSideView}
            parentView={selectedView}
          />

          <div className="  bg-gray-50 mt-5 pt-1 mb-12">
            <div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
              <p className="mt-6  max-w-3xl mx-auto text-md leading-normal text-gray-500 text-justify sm:text-center">
                The Osa Peninsula Travel guide is a collection of activities
                everyone can do, most of them for free, to experience the magic
                of this wonderful place.
              </p>
              <h1 className="mt-10 text-4xl leading-10 font-extrabold tracking-tight text-violet-500 text-center sm:text-5xl sm:leading-none lg:text-6xl">
                The Osa Peninsula Travel Guide
              </h1>
              <p className="mt-6  max-w-3xl mx-auto text-lg leading-normal text-gray-500 text-justify sm:text-center">
                The most biodiverse place on earth and the most extreme national
                park on the world, are both marketing phrases created by
                National Geographic. They are true and we appreciate them, but
                not everyone experience them. This non-comercial guide was
                created by me and a couple of friends to enhance our visitors
                experience.
              </p>
            </div>
          </div>

          <ImageGrid images={images} />

          <div className="">
            <p className="mt-10   border-black  max-w-3xl mx-auto text-2xl leading-normal text-gray-500 text-center">
              80% of visitors go to a luxury eco-lodge or a fancy AirBnb , take
              a couple of tours and go home having had a great vacation.
            </p>

            <div className="mt-10 pb-16 max-w-3xl mx-auto text-xl leading-normal text-gray-500 text-center">
              <Division />
              <p className="py-3">
                But some of them have a distictive look on their eyes
                <br /> they call this paradise <br />
                they don't want to leave
                <br />
                they've let Osa inside
              </p>
              <Division />
            </div>
          </div>

          <h2 className="mx-auto text-purple-500 max-w-7xl sm:max-w-6xl text-left pt-18 text-2xl">
            What's on this guide
          </h2>

          <div className="mx-auto mt-10 max-w-7xl">
            <Areas
              activities={[
                {
                  name: "Beaches and Tides",
                  title: "Directions to the best beach spots and tides",

                  icons: [],
                },
                {
                  name: "Hikes and Adventures",
                  title: "Fun ideas you can do on your own",

                  icons: [],
                },
                {
                  name: "Equipment Rental",
                  title: "Fun ideas that you need to rent equipment for",

                  icons: [],
                },
                {
                  name: "Natural Meditations",
                  title: "Relax + Connect with ideas by Paz Corcovado",

                  icons: [],
                },

                {
                  name: "Paz Selected Tours",
                  title: "With crazy guides that love the Osa and their Job",

                  icons: [],
                },
                {
                  name: "Other Services",
                  title: "Health, Laundry, Mechanics",

                  icons: [],
                },
              ]}
            />
          </div>

          <List items={guidedItems} />

          <div className="mt-20 bg-white">
            {guidedItems.map((item) => {
              return (
                <div className="pb-24 bg-stone-100 ">
                  <Division />
                  <ItemFeature item={item} />
                  <Division />
                </div>
              );
            })}
          </div>

          <Cta />

          <News />
        </div>
      </main>

      <Slideover
        open={sideViewOpen}
        setOpen={setSideViewOpen}
        view={sideView}
        setView={setSideView}
        parentView={selectedView}
      />
    </div>
  );
}
