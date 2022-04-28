import Hero from "../components/marketing/hero21";
import Areas from "../components/marketing/areas";
import Features from "../components/marketing/features";

import Header from "../components/marketing/header";
import Cta from "../components/marketing/cta";
import News from "../components/marketing/news";
import Slideover from "../components/marketing/slideover";

import ImageGrid from "../components/marketing/imageGrid";

import Carousel from "../components/marketing/carousel";
import { isMobile } from "react-device-detect";

import { useState } from "react";

const images = [
  "/images/hero/house.jpg",
  "/images/house/room1/1.jpg",

  "/images/house/kitchen/4.jpeg",

  "/images/house/room2/1.jpg",
  "/images/hero/4.jpg",
  "/images/hero/6.jpg",

  "/images/house/room2/1.jpg",
];

const texts = {
  vacations: {
    left: {
      images: [
        "/images/house/final/12.jpeg",
        "/images/house/final/16.jpeg",
        "/images/house/final/19.jpeg",
        "/images/house/final/21.jpeg",
        "/images/house/final/5.jpeg",
      ],
      title: "The Living Room",
      paragraphs: [
        `Designed with huge screened windows to observe and be in
        nature all day long. No other house in the area is fully
        screened from bugs.You'll see monkeys fliying from branch to branch, morpho butterfiles, scarlet maccaws, huge trees and it's leaves
         dancing with the wind and playing with the light. The sound of the ocean, of the forest, it's really quite an experience - and our guests love it.
         \n\rBluetooth speakers, fans and cross ventilation, well balanced lighting, 
        handmade furniture - we created and improved this home over the span of 7 years so that it 
        fits perfectly with the surrondings. It feels increible to be here.\n\rThe house, it's location and our intention when 
        we created it is part of the holistic experience of Paz.
        
        `,
      ],

      caption: "",
    },

    right: {
      images: [
        "/images/house/kitchen/4.jpeg",

        "/images/house/kitchen/2.jpeg",
        "/images/house/kitchen/3.jpeg",

        "/images/house/kitchen/5.jpeg",
        "/images/house/kitchen/6.jpeg",
        "/images/house/kitchen/7.jpeg",
      ],
      title: "Kitchen & Dinning",
      paragraphs: [
        `Full kitchen with condiments and supplies. Bring your food - or
      - send us your shopping list and it will be sorted when you
      arrive - or request a typical costarican cook: the friendliness
      and love of our culture is the main condiment in our gastronomy.
    \n\rThe kitchen has everything you need to prepare your meals, and we have stocked it with good quality pots, pans, plates, knives.
    Also a large refrigerator, coffee maker, blender. Do notice that since we are an off-grid operation we don't have an oven, microwave or toster available.`,
      ],
      caption: "",
    },
  },

  rooms: {
    left: {
      images: [
        "/images/house/room1/1.jpg",
        "/images/house/room1/2.jpg",
        "/images/house/room1/3.jpg",
        "/images/house/room1/4.jpg",
        "/images/house/room1/5.jpg",

        "/images/house/room2/1.jpg",
        "/images/house/room2/2.jpg",
        "/images/house/room2/3.jpg",
      ],
      title: "The Rooms",
      paragraphs: [
        `The most important thing for a room in the jungle is that it's very well ventiladed both natural and with fans. 
        We have the best fans in the world for that and very good ventilation from very large windows. The second most important
        thing in a room and matresses, pillows and linens. We also made a good investment so that you have a good and comfortable sleep.
        \n\r
        The rooms can be arranged as 4 twin beds or as 2 kings beds, and each room has space for 4 guests.
        \n\r
        The bathrooms are spacious, clean and they have got good hot water.`,
      ],
      caption: ``,
    },
    right: {
      images: [
        "/images/lounge/2.jpg",
        "/images/lounge/3.jpg",
        "/images/lounge/4.jpg",
        "/images/lounge/1.jpg",
        "/images/lounge/5.jpg",
        "/images/lounge/4_4.jpg",
        "/images/lounge/6.jpg",
        "/images/lounge/7.jpg",
        "/images/lounge/8.jpg",
        "/images/lounge/9.jpg",
        "/images/lounge/10.jpg",
        "/images/lounge/11.jpg",
        "/images/lounge/12.jpg",
        "/images/lounge/13.jpg",
      ],
      title: "The beach lounge",
      paragraphs: [
        `This is your opportunity to enjoy a little secluded beach all to yourself.
        Paz is located in a small gulf where it's hard to see someone walking down the beach. 
        \n\rRight in front of the house (50 steps) you'll find a little sandy inlet, under the shadow of palm trees that we outfitted with hammocs and comfy furniture where you'll want to spend day and night.\n\r
        
        Discover why it's a favorite among scarlet maccaws and the 4 species of monkeys. Catch a wave, go paddle boarding or take a dip in the pacific ocean's turquioise and emmerald waters. 
       `,
      ],
    },
  },
};

export default function Example({ setView, posts }) {
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

          <div className="flex">
            <div className=" w-64 h-1 bg-violet-200"></div>
            <div className=" flex-auto  bg-violet-300"></div>
            <div className="flex-auto bg-sky-400"></div>
            <div className="flex-auto bg-sky-300"></div>
            <div className=" w-64 bg-lime-100"></div>
            <div className="flex-auto bg-amber-200"></div>{" "}
          </div>

          <div className="  bg-gray-50 mt-12 mb-12">
            <div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 className="text-4xl leading-10 font-extrabold tracking-tight text-purple-700 text-center sm:text-5xl sm:leading-none lg:text-6xl">
                The Villa
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl leading-normal text-gray-500 text-center">
                The house is 50 steps from the sand surrounded by primary
                forest. The lounge is covered with palm trees and enhanced with
                comfy furniture, hammocks, and a yoga deck. Great Wifi
              </p>
            </div>
          </div>

          <ImageGrid images={images} />

          <div className="flex">
            <div className=" w-64 h-1 bg-violet-200"></div>
            <div className=" flex-auto  bg-violet-300"></div>
            <div className="flex-auto bg-sky-400"></div>
            <div className="flex-auto bg-sky-300"></div>
            <div className=" w-64 bg-lime-100"></div>
            <div className="flex-auto bg-amber-200"></div>{" "}
          </div>

          <div className="mx-auto max-w-7xl">
            <Areas />
          </div>

          <Features
            left={texts["vacations"].left}
            right={texts["vacations"].right}
          />

          <Features left={texts["rooms"].left} right={texts["rooms"].right} />

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
