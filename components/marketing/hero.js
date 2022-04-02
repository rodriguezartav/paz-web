import { useEffect, useState, useRef, createRef } from "react";
import Carousel from "./carousel";

const images = [
  "/images/hero/8.jpg",
  "/images/hero/house.jpg",
  "/images/hero/beach.jpg",

  "/images/hero/house2.jpg",
  "/images/hero/4.jpg",
  "/images/hero/6.jpg",

  "/images/hero/templo.jpg",
];

let videos = [
  { title: "Green Waves", subtitle: "Chill where the ocean meets Paz", id: 1 },
  {
    title: "Comfy Jungle House",
    subtitle: "A tour of our 8 person 2 bedroom house",
    id: 2,
  },
  {
    title: "Paz Beach Lounge",
    subtitle: "See what's like to relax on our beach",
    id: 3,
  },
  {
    title: "Meet Roberto",
    subtitle: "Paz host and resident instructor",
    id: 4,
  },
];

export default function Hero(props) {
  const video1Ref = useRef();
  const video2Ref = useRef();

  const imageRef = useRef();

  const [currentVideo, setCurrentVideo] = useState(1);
  const [autoPlayCount, setAutoPlayCount] = useState(0);
  const [isVideoInAutoPlay, setIsVideoInAutoPlay] = useState(true);
  const videoInAutoPlayRef = useRef(isVideoInAutoPlay);
  const setVideoInAutoPlayRef = useRef(setIsVideoInAutoPlay);

  const [imageIndex, setImageIndex] = useState(0);

  const autoPlayCountRef = useRef(autoPlayCount);
  const setAutoPlayCountRef = useRef(setAutoPlayCount);

  function onEnd() {}

  function renderPlayinIcon({ showPlay, showPause, showPending }) {
    if (showPause)
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mr-2 text-white    "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    else if (showPlay)
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mr-2 text-white    "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokewidth="{2}"
        >
          <path
            strokelinecap="round"
            strokelinejoin="round"
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokelinecap="round"
            strokelinejoin="round"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    else
      return (
        <div
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mr-2 text-white    "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokewidth="{2}"
        >
          <path
            strokelinecap="round"
            strokelinejoin="round"
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokelinecap="round"
            strokelinejoin="round"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </div>
      );
  }

  function renderVideoItem(props) {
    return (
      <>
        {renderPlayinIcon(props)}

        <div className="pt-1">
          <p className=" text-2xl text-white ">{props.title}</p>
          <p className=" text-sm uppercase text-violet-800  ">
            {props.subtitle}
          </p>
        </div>
      </>
    );
  }
  return (
    <div>
      <div className="  bg-stone-600">
        <main className=" grid-cols-1  sm:grid-cols-8 grid  bg-white  sm:grid">
          {/* Hero section */}
          <div className="w-full object-cover col-span-1 sm:col-span-6  border-l-2 border-white">
            <div className="  w-full flex justify-center">
              <Carousel
                auto={3300}
                images={images}
                height={`calc(100vh - 100px)`}
              />
            </div>
          </div>

          <div className="  cols-span-1  sm:col-span-2 sm:block">
            <div className=" h-full pt-12  border-l-2 border-white  bg-gradient-to-br from-stone-50 to-stone-100 opacity-80 lg:pt-6 ">
              <div className=" sm:max-w-3xl   ">
                <div className="relative">
                  <div className=" sm:max-w-xl pl-0    ">
                    <div className="flex  hover:cursor-pointer  ">
                      <img
                        className="h-20 w-20"
                        src="/marketing/logo/svg/paz_lila_tronco_color.svg"
                      />

                      <div className="pt-3">
                        <p className=" text-xl text-violet-700 ">
                          Transformational Vacations
                        </p>
                        <p className=" text-md  text-stone-700  ">
                          Inner peace is the souvenir
                        </p>
                      </div>
                    </div>

                    <p className="p-5 pt-6 px-7 text-stone-700 text-md">
                      Experience Corcovado by renting our Jungle Lodge.
                      #BeachFront #BeachLounge #Surfing #Wildlife #Wellness
                      #AllForYourself
                    </p>

                    <p className="p-5 px-6 pt-0 text-stone-700 text-md">
                      For the ultimate experience, join a course with Paz
                      founder{" "}
                      <a
                        href="https://instagram.com/rober.enpaz.cr"
                        target="_blank"
                      >
                        @rober.enpaz.cr
                      </a>{" "}
                      and learn to use nature and magical local spots to reduce
                      stress and feel an authentic conection with life.
                    </p>

                    <p className="p-5 pt-0 px-7 text-lime-700 text-sm">
                      * Corcovado is the most biodiverse place on earth, use it
                      as an opportunity to transform your life,
                    </p>

                    <p className="p-5 pt-0 text-justify px-7 text-lime-700 text-sm">
                      * The course is tailor-made and may include hiking,
                      waterfalls, mud baths, floating, surfing, sunset
                      paddleboarding and bonefires performed in a way that leads
                      to effortless presence and meditaton.
                    </p>

                    {/* 
                    <p className="text-sm text-white ml-4">+videos</p>
                    <div className=" flex border-b  ml-4 mr-10 hover:bg-purple-300 hover:cursor-pointer border-purple-800  pb-2 pt-2 ">
                      {renderVideoItem({
                        showPlay: true,
                        showPause: false,
                        title: "dsd",
                        subtitle: "dsds",
                      })}
                    </div>

                    <div className="flex ml-4 mr-10 border-b hover:bg-purple-300 hover:cursor-pointer border-purple-800 pb-2 pt-2 ">
                      {renderVideoItem({
                        showPlay: false,
                        showPause: true,
                        title: "dsd",
                        subtitle: "dsds",
                      })}
                    </div>

                    */}

                    <div className="mt-20 ml-4">
                      <div className="rounded  text-xs font-semibold text-purple-800 tracking-wide uppercase">
                        Cabo Matapalo, Peninsula de Osa,
                      </div>
                      <div className="text-xs font-medium text-purple-900 ">
                        Costa Rica
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
