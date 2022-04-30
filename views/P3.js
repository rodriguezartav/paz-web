/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Header from "../components/marketing/header";

import { Fragment, useState } from "react";
import {
  Dialog,
  Disclosure,
  Popover,
  RadioGroup,
  Tab,
  Transition,
} from "@headlessui/react";
import {
  HeartIcon,
  MenuIcon,
  MinusSmIcon,
  PlusSmIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const product = {
  name: "Atarceder",
  price: "Paz en Peninsula de Osa",
  rating: 4,
  images: [
    {
      id: 1,
      name: "Robeto Rodriguez",
      src: "/images/me_flauta.jpeg",
      alt: "Roberto Rodriguez",
    },
    // More images...
  ],
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-gray-700",
      selectedColor: "ring-gray-700",
    },
    { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    {
      name: "Washed Gray",
      bgColor: "bg-gray-500",
      selectedColor: "ring-gray-500",
    },
  ],
  description: `
  Luego que un atardecer y yo nos hiciéramos amigos jugando en el mar; y el no se quería ir. Me vine para la casa con ganas de tocar su melodía con ese cariño que me dejó.
  
  Se me ocurrió grabarla en video también… y como me costó conectarme de verdad, quitarme y dejarla salir.
  
  Esta parte es la que mas me gusto
  `,
  details: [
    {
      name: "Features",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    // More sections...
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="bg-white">
      <Header />

      <main className="max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            {/* Image gallery */}

            <div style={{ padding: "55% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/704606733?h=b57e13437a&badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder={0}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title="atardecder_full.mp4"
              />
            </div>

            {/* Product info */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {product.name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-md text-gray-900">Studio: {product.price}</p>
              </div>

              {/* Reviews */}

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div className="text-base text-gray-700 space-y-6">
                  {product.description}
                </div>
              </div>

              <form className="mt-6">
                {/* Colors */}
                <div></div>

                <div className="mt-10 flex sm:flex-col1">
                  <a
                    target="_blank"
                    href="https://open.spotify.com/album/0k47gvTkdfgCs0U7PZnRv6?si=BL9VNH1IRoyXsCCKgiDlSg"
                    className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
                  >
                    Listen in Spotify
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
