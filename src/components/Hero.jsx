import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import SimpleImage from '@/components/SimpleImage'
import { useState } from 'react'
import useInterval from '@/utils/useInterval'

const logos = [
  [
    { name: 'Transistor', logo: logoTransistor },
    { name: 'Tuple', logo: logoTuple },
    { name: 'StaticKit', logo: logoStaticKit },
  ],
  [
    { name: 'Mirage', logo: logoMirage },
    { name: 'Laravel', logo: logoLaravel },
    { name: 'Statamic', logo: logoStatamic },
  ],
]

const quotes = [
  "what's important in life",
  'how to live from the heart',
  'who we always been',
  'that feeling of peace',
  'we are nature',
]

export function Hero() {
  const [count, setCount] = useState(0)
  // Dynamic delay
  // ON/OFF

  useInterval(
    () => {
      // Your custom logic here
      if (count < quotes.length - 1) setCount(count + 1)
    },
    // Delay in milliseconds or null to stop it
    4000
  )

  return (
    <Container className=" text-left ">
      <section
        className="relative overflow-hidden bg-white"
        style={{
          backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          backgroundPosition: 'center',
        }}
      >
        <div className="py-4 sm:py-20 ">
          <div className="container mx-auto px-4">
            <div className="-mx-4 flex flex-wrap xl:items-center">
              <div className="mb-16 w-full px-4 md:mb-0 md:w-1/2">
                <span className="rounded-9xl mb-4 inline-block bg-indigo-500 py-px px-2 text-xs uppercase leading-5 text-white">
                  Home
                </span>

                <div className="mt-4 block w-full px-4 sm:hidden md:w-1/2">
                  <div className="relative mx-auto max-w-max md:mr-0">
                    <img
                      className="absolute -right-14 -top-12 z-10 w-28 md:w-auto"
                      src="flex-ui-assets/elements/circle3-green.svg"
                      alt=""
                    />
                    <img
                      className="absolute -left-7 -bottom-8 z-10 w-28 md:w-auto"
                      src="flex-ui-assets/elements/dots3-yellow.svg"
                      alt=""
                    />

                    <SimpleImage
                      className="rounded-4xl"
                      src={'/house/living/master.jpeg'}
                      width={1000}
                    />
                  </div>
                </div>

                <h1 className="mx-auto mt-16 max-w-4xl font-display text-3xl font-medium tracking-tight text-indigo-400 sm:mt-0 sm:text-6xl">
                  A place{' '}
                  <span className="relative whitespace-nowrap text-indigo-500">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 418 42"
                      className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                      preserveAspectRatio="none"
                    >
                      <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                    </svg>
                    <span className="relative">to remember</span>
                  </span>{' '}
                  <span className="block text-2xl sm:mt-5 sm:text-3xl">
                    {quotes[count]}
                  </span>
                </h1>

                <p className="mb-8 py-5 text-lg font-medium text-slate-600 transition-all sm:my-0 md:text-xl">
                  <span className="font-bold text-indigo-500">Paz</span> sits in
                  the middle between a{' '}
                  <span className="font-bold text-red-700"> airbnb</span> and a{' '}
                  <span className="font-bold text-stone-500">resort</span>. An
                  exclusive vacation with excelent services in an unbelivable
                  location.{' '}
                  <span className="font-bold text-indigo-500">
                    Meals & Drinks included
                  </span>
                  <br />
                  <span className="mt-3 block">
                    Flying solo? Attend our{' '}
                    <span className="font-bold text-indigo-500">Retreat</span>{' '}
                  </span>
                </p>

                <div className="flex flex-wrap">
                  <div className="w-full py-1 md:mr-4 md:w-auto md:py-0">
                    <a
                      className="inline-block w-full rounded-md border border-indigo-500 bg-indigo-500 py-5 px-7 text-center text-base font-medium leading-4 text-indigo-50 shadow-sm hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 md:text-lg"
                      href="#"
                    >
                      Request a Call
                    </a>
                  </div>
                  <div className="w-full py-1 md:w-auto md:py-0">
                    <a
                      className="text-coolGray-800 hover:bg-coolGray-100 focus:ring-coolGray-200 border-coolGray-200 inline-block w-full rounded-md border bg-white py-5 px-7 text-center text-base font-medium leading-4 shadow-sm focus:ring-2 focus:ring-opacity-50 md:text-lg"
                      href="#"
                    >
                      Chat in Whatsapp
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden w-full px-4 sm:block md:w-1/2">
                <div className="relative mx-auto max-w-max md:mr-0">
                  <img
                    className="absolute -left-14 -top-12 z-10 w-28 md:w-auto"
                    src="flex-ui-assets/elements/circle3-green.svg"
                    alt=""
                  />
                  <img
                    className="absolute -right-7 -bottom-8 z-10 w-28 md:w-auto"
                    src="flex-ui-assets/elements/dots3-yellow.svg"
                    alt=""
                  />

                  <SimpleImage
                    className="rounded-4xl"
                    src={'/house/living/master.jpeg'}
                    width={1000}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}
