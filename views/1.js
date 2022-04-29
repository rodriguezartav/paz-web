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
  name: "En Paz",
  price: "Amazon Kindle & Paperback",
  rating: 4,
  images: [
    {
      id: 1,
      name: "Robeto Rodriguez",
      src: "/images/me_enpaz.jpg",
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
  description: `Este libro  no es para hacer amigos. ( aunque el 2 de Mayo lo voy a poner gratis por un día ).

  Es para los que sienten, como yo, que es hora de voltearse y verse de frente. 
  
  Dejar de andar con preocupaciones, repitiendo cuentos e historias en la cabeza. Del trabajo, del cuerpo, de la iluminación, de la energía. Todo eso pasa en el dominio del pensamiento y solo lleva a más pensadora.
  
  Para mí ya es suficiente de acomodar las experiencias para defender mis posiciones. Prefiero averiguar que soy más allá de un nombre y numero de cédula, de una profesión, de un rol y 100 likes.
  
  Más allá de lo que otros piensan de mí, lo que les proyecto y lo que dice esa voz en mi cabecita que insiste llamarse Roberto. Más allá de la interpretación - condicionada - que hace esta cabecita de su historia. 
  
  Tampoco quiero que me lo cuenten, ni caminar detrás de un barbudo que dice saberlo. Quiero verlo yo mismo. Por mí mismo. Porque puedo, porque tengo derecho. El derecho garantizado que me da la vida de conocer la verdad de la vida.
  
  Este libro es el primero, el inocente y el más puro. Yo no sé que seguirá, solo sé que esto se siente vivo y a mi me sirve mucho escribirlo y leerlo. Ojalá a alguien también.`,
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

            <div className="flex flex-col-reverse">
              <div className="w-full aspect-w-1 aspect-h-1">
                <img
                  className="w-full h-full object-center object-cover sm:rounded-lg"
                  src="images/me_enpaz.jpg"
                />
              </div>
            </div>

            {/* Product info */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {product.name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-xl text-gray-900">{product.price}</p>
              </div>

              {/* Reviews */}

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div className="text-base text-gray-700 space-y-6">
                  <p>Este libro no es para hacer amigos.</p>

                  <p>
                    Es para los que sienten, como yo, que es hora de voltearse y
                    verse de frente.{" "}
                  </p>

                  <p>
                    Dejar de andar con preocupaciones, repitiendo cuentos e
                    historias en la cabeza. Del trabajo, del cuerpo, de la
                    iluminación, de la energía. Todo eso pasa en el dominio del
                    pensamiento y solo lleva a más pensadora.
                  </p>

                  <p>
                    Para mí ya es suficiente de acomodar las experiencias para
                    defender mis posiciones. Prefiero averiguar que soy más allá
                    de un nombre y numero de cédula, de una profesión, de un rol
                    y 100 likes.
                  </p>

                  <p>
                    Más allá de lo que otros piensan de mí, lo que les proyecto
                    y lo que dice esa voz en mi cabecita que insiste llamarse
                    Roberto. Más allá de la interpretación - condicionada - que
                    hace esta cabecita de su historia.{" "}
                  </p>

                  <p>
                    Tampoco quiero que me lo cuenten, ni caminar detrás de un
                    barbudo que dice saberlo. Quiero verlo yo mismo. Por mí
                    mismo. Porque puedo, porque tengo derecho. El derecho
                    garantizado que me da la vida de conocer la verdad de la
                    vida.
                  </p>

                  <p>
                    Este libro es el primero, el inocente y el más puro. Yo no
                    sé que seguirá, solo sé que esto se siente vivo y a mi me
                    sirve mucho escribirlo y leerlo. Ojalá a alguien también.
                  </p>
                </div>
              </div>

              <form className="mt-6">
                {/* Colors */}
                <div></div>

                <div className="mt-10 flex sm:flex-col1">
                  <a
                    target="_blank"
                    href="https://www.amazon.com/dp/B09TLF5LVB"
                    className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
                  >
                    Buy in Amazon
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
