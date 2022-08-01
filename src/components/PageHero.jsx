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
import { TextWithImage } from './TextWithImage'

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

export function PageHero({ title, description, label, image, parent }) {
  return (
    <Container className="">
      <div className="px-10 py-14 pb-6  text-left ">
        <div className="">
          <div className="container mx-auto px-4">
            <div className="-mx-4 flex flex-wrap xl:items-center">
              <div className="mb-16 w-full px-4 md:mb-0 md:w-1/2">
                <span className="rounded-9xl mb-4 inline-block rounded-md bg-indigo-500 py-px px-2 text-xs uppercase leading-5 text-white">
                  {parent}
                </span>
                <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-indigo-400 md:text-5xl lg:text-6xl">
                  {title}
                </h1>
                <p className="text-coolGray-500 mb-8 pl-3 text-lg font-medium md:text-xl">
                  {description}
                </p>
                <div className="flex justify-start gap-x-6 pt-2">
                  <Button
                    color="indigo"
                    className=" hover:bg-indigo-500"
                    variant="outline"
                    href="/register"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 stroke-indigo-500 hover:fill-white hover:stroke-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <span className="pl-2">10</span>
                  </Button>
                  <Button
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    variant="outline"
                    className=" hover:bg-indigo-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 hover:stroke-indigo-50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <span className="pl-2">10</span>
                  </Button>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2">
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
                    className=" relative rounded-4xl"
                    src={image}
                    width={800}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
