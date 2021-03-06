import { useEffect, useState, useRef, createRef } from "react";
import Carousel from "./carousel";
import { isMobile } from "react-device-detect";

import ImageGrid from "./imageGrid";

const images = [
  "/images/hero/house.jpg",
  "/images/hero/8.jpg",

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

  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url != "undefined") {
        window.location = url;
      }
    };
    gtag("event", "conversion", {
      send_to: "AW-10878250661/P240CKaH_LADEKXdk8Mo",
      event_callback: callback,
    });
    return false;
  }

  function renderTags() {
    return (
      <div className="hidden: sm:block p-5 pt-2 px-7 text-stone-700 text-md">
        {" "}
        <span className="bg-sky-100 ml-1">#BeachFront</span>
        {", "}
        <span className="bg-yellow-100 ml-1">#BeachLounge</span>{" "}
        <span className="bg-blue-100 ml-1">#SurfInFront</span>{" "}
        <span className="bg-lime-100  ml-1">#Wildlife Observation</span>{" "}
        <span className="bg-purple-100 ml-1">#Relax</span>{" "}
        <span className="bg-rose-100 ml-1">#Reconnect</span>
      </div>
    );
  }

  function renderDescriptionText() {
    return (
      <>
        <div className="sm:flex pt-3 ml-8 sm:ml-0">
          <img
            className="h-20 w-20 hidden sm:block"
            src="/marketing/logo/svg/paz_lila_tronco_color.svg"
          />
          <div>
            <p className=" text-xl text-violet-700 ">
              Transformational Vacations
            </p>
            <p className=" text-md  text-stone-700  ">
              Inner peace is the souvenir
            </p>
          </div>
        </div>

        <p className="p-5 pt-6 px-7 text-stone-700 text-md">
          Paz {"\u270C"} is a beach front villa {"???????"} in the Osa Peninsula.
          Rent our private retreat to relax within nature & play in the pristine
          beaches of the wildlife capital of Costa Rica.
        </p>
      </>
    );
  }

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
      <div className="  bg-stone-100">
        <main className=" grid-cols-1  sm:grid-cols-8 grid   sm:grid">
          {/* Hero section */}

          <div className="sm:hidden">{renderDescriptionText()}</div>

          <div className="w-full object-cover col-span-1 sm:col-span-6  border-l-2 border-white">
            <div className=" mt-10 pl-10  w-full flex justify-center">
              <ImageGrid images={images} />
            </div>
          </div>

          <div className="  cols-span-1  sm:col-span-2 sm:block">
            <div className=" h-full pt-12  lg:pt-6 ">
              <div className=" sm:max-w-3xl   ">
                <div className="relative">
                  <div className=" sm:max-w-xl pl-0    ">
                    <div className=" hidden sm:block hover:cursor-pointer  ">
                      {renderDescriptionText()}
                    </div>

                    {renderTags()}

                    <div className="flex justify-center my-7">
                      <div className="inline-flex rounded-md shadow">
                        <a
                          onClick={(params) => {
                            try {
                              gtag_report_conversion(params);
                            } catch (e) {}
                          }}
                          target="_blank"
                          href="https://airbnb.com/h/pazz"
                          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                        >
                          Book in Airbnb
                        </a>
                      </div>
                    </div>

                    <div className="mt-2 ml-8">
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
