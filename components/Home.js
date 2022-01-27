import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

import Header from "./www/Header";
import Blog from "./www/Blog";

import { ChevronRightIcon, StarIcon } from "@heroicons/react/solid";
import Vimeo from "@u-wave/react-vimeo";

import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const stats = [
  { label: "Playa Calma", value: "a 10 minutos" },
  { label: "Playa Paz", value: "$50 a $150 persona" },
  { label: "Quebrada Bambu", value: "*Comidas y Actividades" },
  { label: "Poza de Barro", value: "a 5 minutos" },
  { label: "Templo", value: "En la arena, baño aparte" },
  { label: "Playa Esquina", value: "Bosque primario frente al mar" },
  { label: "Sendero de Arena", value: "Bosque primario frente al mar" },
  { label: "Sendero del Bosque", value: "Bosque primario frente al mar" },
  { label: "Temazcal", value: "Bosque primario frente al mar" },
  { label: "Temazcal", value: "Bosque primario frente al mar" },
];

const stats2 = [
  { label: "Abierto", value: "Diciembre a Septiembre" },
  { label: "Precio", value: "$50 a $150 persona" },
  { label: "Todo Incluido", value: "*Comidas y Actividades" },
  { label: "Casa", value: "2 Cuartos para 8 personas" },
  { label: "Glamping", value: "En la arena, baño aparte" },
  { label: "Ubicación", value: "Bosque primario frente al mar" },
  { label: "Beach Lounge", value: "Hamacas, Fogata, Sillones" },
  { label: "Caminatas", value: "Mas de 10 ideas + Corcovado" },
  { label: "Surf & Paddle", value: "Incluido" },
  { label: "Pesca", value: "Incluido" },
  { label: "Kayak", value: "Incluido" },
  { label: "Templos Naturales", value: "Mas de 15" },
  { label: "Temazcal", value: "1 por semana" },
  { label: "Fogata", value: "Todos los días" },
  { label: "Playas Virgenes", value: "+10Km" },
  { label: "Bosque Primario", value: "Si, una parte" },
  {
    label: "Animales en sitio",
    value:
      "Los 4 Monos, Pizotes, Perezos, Hormigueros, Felinos, todo es posible.",
  },
  {
    label: "Aves en sitio",
    value: "Lapa, Tucan, Gavilanes, y un concierto magico al amanercer",
  },
];

const logos = [
  {
    name: "Casa para 8 Personas",
    url: "https://tailwindui.com/img/logos/laravel-logo-gray-400.svg",
  },
  {
    name: "Glamping para 2 y 4 pax ",
    url: "https://tailwindui.com/img/logos/statickit-logo-gray-400.svg",
  },
  {
    name: "Surf y Paddle",
    url: "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
  },
  {
    name: "Pesca y Kayak",
    url: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
  },
  {
    name: "Caminatas",
    url: "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg",
  },

  {
    name: "Fogatas",
    url: "https://tailwindui.com/img/logos/workcation-logo-gray-400.svg",
  },
  {
    name: "Beach Lounge",
    url: "https://tailwindui.com/img/logos/workcation-logo-gray-400.svg",
  },
  {
    name: "Comidas Incluidas o no",
    url: "https://tailwindui.com/img/logos/workcation-logo-gray-400.svg",
  },
];
const footerNavigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Partners", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Dribbble",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Example(props) {
  return (
    <div className="bg-stone-100">
      <main>
        {/* Hero section */}
        <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-24">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="mt-10">
                <div>
                  <a href="#" className="inline-flex space-x-4">
                    <span className="rounded bg-stone-50 px-2.5 py-1 text-xs font-semibold text-violet-600 tracking-wide uppercase">
                      Cabo Matapalo, Peninsula de Osa,
                    </span>
                    <span className="inline-flex items-center text-sm font-medium text-sky-600 space-x-1">
                      <span>Costa Rica</span>
                    </span>
                  </a>
                </div>
                <div className="mt-6 sm:max-w-xl">
                  <h1 className="text-6xl font-extrabold text-stone-500 tracking-tight sm:text-6xl">
                    Paz
                  </h1>
                  <p className="mt-6 text-xl text-gray-700 px-1">
                    Un lugarcito de{" "}
                    <span className="bg-purple-100 px-1">calma</span>, en el{" "}
                    <span className="bg-green-100 px-1">bosque</span>, en la{" "}
                    <span className="bg-amber-100 px-1">playa</span>, en medio
                    de la <span className="bg-lime-100 px-1">naturaleza</span>{" "}
                    para desconectarse de la{" "}
                    <span className="bg-red-100 px-1">mente</span> y estar{" "}
                    <span className="bg-stone-100 px-1">presente</span>
                  </p>
                </div>
                <form
                  action="#"
                  className="mt-12 sm:max-w-lg sm:w-full sm:flex"
                >
                  <div className="min-w-0 flex-1">
                    <label htmlFor="hero-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="hero-email"
                      type="email"
                      className="block w-full border border-gray-300 rounded-md px-5 py-3 text-md text-green-800 placeholder-gray-500 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                      placeholder="+Whatsapp"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full rounded-md border border-transparent px-5 py-3 bg-yellow-300 text-md font-medium text-gray-700 shadow hover:bg-violet-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:px-10"
                    >
                      Mantengame informado
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-48">
                <div id="container" _>
                  <div id="butterfly_">
                    <div id="leftwing_"></div>
                    <div id="rightwing_"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Feature />

        <div className="relative bg-white pt-20 pb-20">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-stone-600 sm:text-4xl">
            Visita los templos naturales de paz
          </h2>
          <p className="mt-4 max-w-3xl mx-auto leading-8 text-center text-2xl text-stone-600">
            Un programa opcional para sacarle mas provecho a su visita.
            <br />
            sin dogmas, sin drogas, sin gurus
          </p>
        </div>

        <Content1 />

        {/*  <Blog posts={props.posts} />

        CTA section */}
        <div className="relative mt-24 sm:mt-32 sm:py-16">
          <div aria-hidden="true" className="hidden sm:block">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
            <svg
              className="absolute top-8 left-1/2 -ml-3"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
              />
            </svg>
          </div>
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative rounded-2xl px-6 py-10 bg-sky-600 overflow-hidden shadow-xl sm:px-12 sm:py-20">
              <div
                aria-hidden="true"
                className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 1463 360"
                >
                  <path
                    className="text-violet-800 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-purple-700 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                    Reserve con un Zoom en 15 minutos
                  </h2>
                  <p className="mt-6 mx-auto max-w-2xl text-lg text-rose-100">
                    La mejor manera de explicar lo que hacemos, como lo hacemos
                    y realizar su reservación es en una muy corta video-llamada.
                  </p>
                </div>
                <form
                  action="#"
                  className="mt-12 sm:mx-auto sm:max-w-lg sm:flex"
                >
                  <div className="min-w-0 flex-1">
                    <label htmlFor="cta-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="cta-email"
                      type="email"
                      className="block w-full border border-transparent rounded-md px-5 py-3 text-md text-green-800 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full rounded-md border border-transparent px-5 py-3 bg-gray-900 text-md font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"
                    >
                      Registrese
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer section */}
      <footer className="mt-24 bg-gray-900 sm:mt-12">
        <div className="mx-auto max-w-md py-12 px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {footerNavigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a
                  href={item.href}
                  className="text-md text-gray-400 hover:text-gray-300"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
function Content1() {
  return (
    <div className="relative  bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="/images/beach.jpeg"
            alt=""
          />
        </div>
      </div>
      <div className="relative  px-4  sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="text-base mb-28 max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <h3 className="text-2xl font-extrabold text-stone-500 tracking-tight sm:text-3xl">
              Se trata de practicar o aprender a estar presente en la naturaleza
            </h3>

            <p className="text-lg mt-5 text-gray-500 leading-7">
              Un templo natural es un momento donde la belleza, la paz y la
              alegria se manifiestan en un lugar. Todos los hemos vivido.
            </p>

            <p className="text-lg mt-5 text-gray-500 leading-7">
              Sin embargo hay algo en nosotros, algo que activamos con el
              pensamiento, con las historias que nos contamos y con nuestras
              creencias que nos separa y{" "}
              <span className="bg-red-300 px-1">no</span> nos permite
              experimentar la belleza.
            </p>

            <h2 className="text-2xl text-stone-500 leading-7 mt-5">
              Como se llama el curso, que religion es, cual es el horario?
            </h2>

            <p className="text-lg mt-5 text-gray-500 leading-7">
              No hay una autoridad para la paz, la belleza, el amor y la
              alegria. El universo no tiene un horario, todo pasa cuando pasa.
            </p>

            <p className="text-lg mt-5 text-gray-500 leading-7">
              No hay manual, ni un carnet para pertenecer, ni nada que aprender.
              No hay nada que alcanzar, como un arbol, ya existimos.
            </p>

            <p className="text-lg  mt-5 p-2  bg-violet-200 text-center text-gray-800 rounded-md leading-7">
              Aqui lo que hacemos es buscar lugares y momentos magicos en la
              naturaleza, en un lugar que esta lleno de ellos.
            </p>

            <p className="text-lg mt-5 text-gray-500 leading-7">
              Nos entregamos con total presencia al momento para estar lo mas
              cerca posible de ese existir y lo mas largo de lo que nos separa
              de el.
            </p>

            <p className="text-lg mt-5 text-gray-500 leading-7">
              Hay ideas, consejos, somos amigos y al final del día nos sentamos
              en la fogata, a conversar como compañeros de viaje que somos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* This example requires Tailwind CSS v2.0+ */
function Test() {
  return (
    <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <blockquote className="mt-10">
            <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
              <p>
                &ldquo; Llegue a la peninsula hace mas de 15 años, y me quede,
                sin saber porque. No sabía que buscaba paz, ni tampoco como
                encontrarla. <br />
                Pero algo aquí me la mostró.&rdquo;
              </p>

              <p className="text-lg mt-8 text-gray-500 mb-8">
                Con el tiempo, la vida se convirtio en un gran reto y esta
                busqueda se convirtio en algo necesario para sobrevivir. Mi
                mantra personal es "estas en buenas manos" y con el he
                atravezado las noches mas oscuras solo para darme cuenta al
                amanecer que siempre tuve todo lo que necesité, preparado por
                algo mucho mas grande que yo, desde antes del anochecer.
              </p>

              <p>
                Este lugar es parte de eso, y lo que realmente quiero es
                compartirlo con otros que tambien valoren o necesiten la paz.
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <img
                    className="mx-auto h-14 w-18 rounded-full"
                    src="./images/me.jpeg"
                    alt=""
                  />
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">
                    Rober
                  </div>

                  <svg
                    className="hidden md:block mx-1 h-5 w-5 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-gray-500">
                    Cuidador
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* This example requires Tailwind CSS v2.0+ */

const features = [
  {
    name: "Casa de Alquiler",
    description:
      "Frente al mar, con una playa 'privada' en el bosque primario con visitas diarias de todos la vida del Parque Nacional Corcovado. 2 Habitaciones para 4 personas cada una, cocina equipada y condimentada, sala y comedor amplios.",
    icon: GlobeAltIcon,
  },
  {
    name: "Actividades Incluidas",
    description:
      "Surf para niños y adultos princiante, paseos en kayak, paddleboard, pesca, caminatas, meditaciones, temazcal, fogatas, baños de barro en el mar, 'grounding', 'forest-bathing' y otras tecnicas anti-stress",
    icon: ScaleIcon,
  },
  {
    name: "Detox de Stress y Pantallas",
    description:
      "Programa para profesionales, ejecutivos y empresas. Cupo para 20 personas con alimentación, actividades fisicas, emocionales no invasivas y espirituales no dogmaticas. Incluye Temazcal ( Sauna Detox ).",
    icon: LightningBoltIcon,
  },
  {
    name: "Retreats Individuales",
    description:
      "Glampings en una playa privada, aislada, en la arena. Para quien busque un espacio para produnfizar luego de un retreat de Vipassna, Yoga, Meditación y Ayuno - o para una transición importante en la vida. ",
    icon: AnnotationIcon,
  },
];

function Feature() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-lime-800 font-semibold tracking-wide uppercase">
            Conectado al Parque Nacional Corcovado*
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-stone-600 sm:text-4xl">
            Un lugar para encontrarse
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Paz es nuestro hogar, es de donde venimos, lo que somos cuando no
            hacemos nada. Llegue aquí persiguiendola, y en estos templos
            naturales entendí que en verdad me venia persiguiendo a mi y todo lo
            que tenia que hacer era parar. Hoy lo comparta con quien quiera -
            por un momento - <strong>parar</strong>
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-lime-700 text-stone-200">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function Hospedaje() {
  return (
    <div className="mt-12 bg-stone-200 py-20">
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 ">
          <div>
            <h2 className="text-2xl mb-3 text-lime-800 leading-7 mt-5">
              Hospedaje
            </h2>

            <p className="text-lg text-gray-500 leading-7">
              Con + de 15 años viviendo aqui, sin electricidad, agua, ni nada
              "civilizado" hemos encontrado un balance constructivo.
            </p>
            <div className="mt-6">
              <p className="text-lg text-gray-500 leading-7">
                Nos gusta dormir bien, con buenos abanicos, camas y sin
                mosquitos. Nos gusta el arte, la buena comida, los espacios
                abiertos, techos altos, y hacemos nuestros propios muebles para
                estar comodos en calor y humedad. Rustico cuando debe de serlo y
                moderno cuando hace falta.
              </p>

              <p className="text-lg mt-5  text-gray-500 leading-7">
                El hospedaje es muy versatil con espacio para 18 personas entre
                los glampings y la casa. Todo se puede reservar por separado, o
                la propiedad entera.
              </p>

              <h2 className="text-2xl mb-3 text-lime-800 leading-7 mt-5">
                Ubicación
              </h2>

              <p className="text-lg text-gray-500 leading-7">
                Cabo Mata Palo en la Peninsula de Osa es mágico, no hace falta
                agregarle nada. En nuestra propiedad viven las 4 especies de
                monos, pizotes, lapas, tucanes, tortugas, arboles abuelos,
                flores, plantas, mariposas, noches estrelladas, playas virgenes
                solas, y entre todos, unidos, somos la vida.
              </p>
            </div>

            <p className="text-md leading-7"></p>
            <div className="mt-6">
              <h2 className="text-2xl mb-3 text-lime-800 leading-7 mt-5">
                Actividades Externas
              </h2>

              <p className="text-lg text-gray-500 leading-7">
                Dicen los sabios que el secreto de la vida es el balance entre
                lo interno y externo. El cuerpo y la mente necesitan movimiento
                diario, y aquí nos encanta disfrutar la vida. A parte de
                espacios para hacer yoga, chi kung y meditacion contamos con
                equipo de surf para adultos y niños principiantes, paddle-board,
                kayak, pesca y en el area hay mucha caminatas a cascadas, rios y
                montañas incluida una de las joyas espirituales y naturales de
                Costa Rica la caminata a Sirena en el PN Corcovado.
              </p>

              <h2 className="text-lg text-lime-800 mb-3 leading-7 mt-5">
                Para veteranos
              </h2>

              <p className="text-lg text-gray-500 leading-7">
                Este lugar es tambien ideal para personas que quieran
                profundizar su practica de forma privada y asilada. Realizar un
                ayuno, silencio, un retiro auto-dirigido de Yoga, Meditación,
                Chi Kung. Apoyamos, asistimos, aconsejamos y hasta organizamos
                para grupos de amigos y familias con la posibilidad de agregar
                Satsang al atardecer.
              </p>
            </div>
          </div>
          <div className="mt-12  gap-0.5 lg:mt-0">
            <div className="">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {stats2.map((stat) => (
                  <div key={stat.label} className=" border-gray-100 pt-6">
                    <dt className="text-md font-medium text-amber-900">
                      {stat.label}
                    </dt>
                    <dd className="text-xl  tracking-tight text-lime-800">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
