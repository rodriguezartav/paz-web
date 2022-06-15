import Footer from "../../components/marketing/footer";

import LeftPlain from "../../components/sections/leftPlain";
import RightPlain from "../../components/sections/rightPlain";
import SimpleImage from "../../components/SimpleImage";
import Links from "../../components/sections/links";
import Portafolio from "../../components/sections/portafolio";
import HeaderTop from "../../components/sections/headerTop";
import HeaderBottom from "../../components/sections/headerBottom";
import HeaderLeft from "../../components/sections/headerLeft";
import Hero from "../../components/sections/hero";
import Quote from "../../components/sections/quote";
import Faq from "../../components/sections/faq";

import { useState } from "react";
import Link from "next/link";

import {
  ArrowNarrowLeftIcon,
  CheckIcon,
  HomeIcon,
  PaperClipIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ThumbUpIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const eventTypes = {
  applied: { icon: UserIcon, bgColorClass: "bg-gray-400" },
  advanced: { icon: ThumbUpIcon, bgColorClass: "bg-blue-500" },
  completed: { icon: CheckIcon, bgColorClass: "bg-green-500" },
};
const timeline = [
  {
    id: 1,
    type: eventTypes.applied,
    content: "Start the ",
    target: "Journey to Paz",
    date: " 1",
    datetime: "2020-09-20",
  },
  {
    id: 2,
    type: eventTypes.advanced,
    content: "Optionally follow us ",
    target: "Instgram, Linkedin, Ticktok",
    date: "2",
    datetime: "2020-09-22",
  },
  {
    id: 3,
    type: eventTypes.completed,
    content: "Receive 2-min pods via",
    target: "SMS, Email, Social",
    date: " 3",
    datetime: "2020-09-28",
  },
  {
    id: 4,
    type: eventTypes.advanced,
    content: "When one resonates with you",
    target: "buy ($5-$20) the full content course online",
    date: "Sep 30",
    datetime: "2020-09-30",
  },
  {
    id: 5,
    type: eventTypes.completed,
    content: "Join a Paz Retreat when you are ready",
    target: " for an in person workshop on that topic",
    date: "Oct 4",
    datetime: "2020-10-04",
  },
];

export default function Example() {
  return (
    <div className=" antialiased bg-body text-body font-body">
      <Hero
        logoBefore={true}
        legend="Journey to Paz"
        title="Remembering how to live from the heart"
        subtitle="A journey that starts online and takes us to a nature retreat in paradise"
        images={[
          {
            src: "raw/lounge/drone_300.jpg",
            transformations: [
              { cropMode: "cm_extract", height: 650, width: 1100 },
            ],
          },
          {
            src: "raw/lounge/empty_beach.jpg",
            transformations: [
              { cropMode: "cm_extract", height: 650, width: 1100 },
            ],
          },

          {
            src: "raw/beach/drone_s_400_300.PNG",
            transformations: [
              { cropMode: "cm_extract", height: 650, width: 1100 },
            ],
          },

          {
            src: "raw/beach/sun_palm2.jpeg",
            transformations: [
              { cropMode: "cm_extract", height: 650, width: 1100 },
            ],
          },

          {
            src: "raw/forest/higo_brillante.jpeg",
            transformations: [
              { cropMode: "cm_extract", height: 650, width: 1100 },
            ],
          },
        ]}
      />

      <Quote
        image="/raw/me/me.jpeg"
        author="Rober"
        title="Founder of Paz"
        quote="Peace comes to those that listen to their hearts, because whatever happens afterwards is all right"
      />

      <div className="relative">
        <div className=" z-20 ">
          <RightPlain
            legend={"location"}
            title="Paz is located in the mystical cabo Mata Palo, in the Osa Peninsula of Costa Rica"
            subtitle={`A off-grid comunity that loves nature located between Corcovado National Park and Puerto Jimenez, the most remote town in Costa Rica.  `}
            images={[
              {
                src: "/raw/guide/matapalo/matapalo.webp",
                transformations: [
                  { cropMode: "cm-extract", height: 650, width: 750 },
                ],
              },
            ]}
          />
        </div>

        <div className="hidden sm:block sm:absolute sm:-top-10 sm:left-1/3 z-10  ">
          <SimpleImage
            width={300}
            className=" w-full  rounded-11xl border-2 border-indigo-200 shadow-md"
            src={"/raw/maps/cr.jpg"}
            transformations={[{ height: 300 }]}
          />
        </div>
      </div>

      <HeaderLeft
        legend="a word from our founder"
        title="In this temple, nature is our guide"
        subtitle={`\n
        When I discovered nature's voice in my heart - in Corcovado National Park - it drove me to change my life. Paz is the result of that.\n I see the animals, trees and plants connected among one another, living in the moment. They feel enlightenend to me, and do effortlessly the simple things I struggle with.`}
        images={[
          {
            src: "/raw/forest/barrigon_alto.jpeg",
            transformations: [
              { cropMode: "cm_extract", focus: "top", height: 600, width: 750 },
            ],
          },
        ]}
      />

      <RightPlain
        legend={"what is it"}
        title="The 7-day retreat in the natural temple of Paz"
        subtitle={`A pristine beach to relax, hikes to beaches and waterfalls, learn to surf or paddleboard, bonefires at night. \nTalks and workshops in human arts ( Presence, Chi Kung, Meditation, Yoga, Physcology ) to support the journey of those that want to listen to their hearts, and live by that.`}
        images={[
          {
            src: "/optimized/forest/big_trees.jpg",
            transformations: [
              { cropMode: "cm_extract", height: 600, width: 750 },
            ],
          },
          {
            src: "/raw/lounge/hammocks.jpg",
            transformations: [
              { cropMode: "cm_extract", focus: "top", height: 600, width: 750 },
            ],
          },
          {
            src: "/raw/lounge/lounge_4.jpg",
            transformations: [
              { cropMode: "cm_extract", focus: "top", height: 600, width: 750 },
            ],
          },
          {
            src: "/raw/forest/barrigon_alto.jpeg",
            transformations: [
              { cropMode: "cm_extract", focus: "top", height: 600, width: 750 },
            ],
          },
        ]}
      />

      <section>
        <div className="skew skew-top mr-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 10 0 10" />
          </svg>
        </div>

        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                <div className="max-w-md lg:mx-auto">
                  <span className="text-stone-600 font-bold">Overview</span>
                  <h2 className="my-2 text-4xl text-indigo-500 lg:text-5xl font-bold font-heading">
                    Journey to Paz
                  </h2>
                  <p className="mb-6 text-gray-500 leading-loose">
                    Our online and in-person content revolves around 4 mayor
                    topics in the direction to reach inside.
                  </p>

                  <section
                    aria-labelledby="timeline-title"
                    className="lg:col-start-3 lg:col-span-1"
                  >
                    <div className=" ">
                      {/* Activity Feed */}
                      <div className="mt-6 flow-root">
                        <ul role="list" className="-mb-8">
                          {timeline.map((item, itemIdx) => (
                            <li key={item.id}>
                              <div className="relative pb-8">
                                {itemIdx !== timeline.length - 1 ? (
                                  <span
                                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                    aria-hidden="true"
                                  />
                                ) : null}
                                <div className="relative flex space-x-3">
                                  <div>
                                    <span
                                      className={classNames(
                                        item.type.bgColorClass,
                                        "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                                      )}
                                    >
                                      <item.type.icon
                                        className="w-5 h-5 text-white"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  </div>
                                  <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                    <div>
                                      <p className="text-sm text-gray-500">
                                        {item.content}{" "}
                                        <a
                                          href="#"
                                          className="font-medium text-gray-900"
                                        >
                                          {item.target}
                                        </a>
                                      </p>
                                    </div>
                                    <div className="text-right text-sm whitespace-nowrap text-gray-500"></div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6 flex flex-col justify-stretch">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Start - it's available now
                        </button>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-wrap -mx-4">
                <div className="mb-8 lg:mb-0 w-full md:w-1/2 px-4">
                  <div className="mb-8 py-6 pl-6 pr-4 shadow rounded bg-white">
                    <span className="mb-4 inline-block p-3 rounded-lg bg-yellow-100">
                      <svg
                        className="w-10 h-10 text-yellow-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <h4 className="mb-2 text-2xl font-bold font-heading">
                      Talks: Science & Theory
                    </h4>
                    <p className="text-gray-500 leading-loose">
                      Upgrade old conditioning ideas with a fresh understanding
                      of humans and the universe. Holistic physcology, quantum
                      physics, nuerology, medicinal plants, tibetan & american
                      shamanism, ancentral scriptures, myths and much more.
                    </p>
                  </div>
                  <div className="py-6 pl-6 pr-4 shadow rounded bg-white">
                    <span className="mb-4 inline-block p-3 rounded-lg bg-pink-100">
                      <svg
                        className="w-10 h-10 text-pink-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                    </span>
                    <h4 className="mb-2 text-2xl font-bold font-heading">
                      Turn: ideas into habits
                    </h4>
                    <p className="text-gray-500 leading-loose">
                      Understand the phycological forces that makes us drift
                      away from our goals and take advantage of the diversity of
                      proven methods from AA and Buddhism all the way to
                      corporate leadership and success until you find one that
                      resonates.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:mt-20 px-4">
                  <div className="mb-8 py-6 pl-6 pr-4 shadow rounded-lg bg-white">
                    <span className="mb-4 inline-block p-3 rounded bg-blue-100">
                      <svg
                        className="w-10 h-10 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <h4 className="mb-2 text-2xl font-bold font-heading">
                      Practice: how to let go
                    </h4>
                    <p className="text-gray-500 leading-loose">
                      Let's respectfully deconstruct Yoga, Qi Gong, Meditation,
                      Hiking, Traveling, music and even religion to find the
                      unique combination that frees our sedimented stress.
                    </p>
                  </div>
                  <div className="py-6 pl-6 pr-4 shadow rounded-lg bg-white">
                    <span className="mb-4 inline-block p-3 rounded bg-purple-100">
                      <svg
                        className="w-10 h-10 text-purple-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                    </span>
                    <h4 className="mb-2 text-2xl font-bold font-heading">
                      Be: true to yourself
                    </h4>
                    <p className="text-gray-500 leading-loose">
                      There is a point in life where we have to be true. But
                      first, we need to find the truth that does not change.
                      Because identity on the surface changes with the waves of
                      experience, and that would make us walk in circles.
                      <br />
                      <br />
                      Close your eyes and let go of everything until there is
                      nothing left. That's the source.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skew skew-bottom mr-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 0 10" />
          </svg>
        </div>
      </section>

      <Portafolio />

      <Faq />

      <Links
        title="Paz in the world"
        subtitle="We have published books, music and inspirational content in social networks to contribute in a positive way to the expansion of consiousness"
        logo_1={{
          src: "./images/logos/spotify.png",
          href: "https://open.spotify.com/artist/5iR7YvWgvzgv3JIc3b0TvK?si=PUMqBm46SpeDDC6geFCdEA",
        }}
        logo_2={{
          src: "./images/logos/instagram.jpg",
          href: "https://instagram.com/monodepaz",
        }}
        logo_3={{ src: "./images/logos/kindle.png", href: "/1" }}
        logo_4={{
          src: "./images/logos/airbnb.svg",
          href: "https://airbnb.com/h/pazz",
        }}
        images={[
          { src: "/optimized/me/me_flauta.jpg", width: 450, height: 700 },
        ]}
      />
      <HeaderBottom
        button_1={{
          text: "Rent the whole property in AirBnB",
          href: "https://airbnb.com/h/pazz",
        }}
        button_2={{ text: "Join our monthly retreat", href: "/retreat" }}
        logoBefore={true}
        title="How do you want to visit us?"
        subtitle="there are two options:"
      />
      <Footer />
    </div>
  );
}
