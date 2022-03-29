import { useEffect, useState, useRef } from "react";

const images = ["house_2.jpg", "templo.jpeg", "beach.jpg", "lounge_1.jpg"];

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

  const [currentVideo, setCurrentVideo] = useState(1);
  const [autoPlayCount, setAutoPlayCount] = useState(0);
  const [isVideoInAutoPlay, setIsVideoInAutoPlay] = useState(true);
  const videoInAutoPlayRef = useRef(isVideoInAutoPlay);
  const setVideoInAutoPlayRef = useRef(setIsVideoInAutoPlay);

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
        <main className=" grid-cols-1 sm:grid-cols-8 hidden  sm:grid">
          {/* Hero section */}
          <video
            poster="/images/video-bkg.jpg"
            ref={video1Ref}
            className="col-span-1 sm:col-span-4  border-l-2 border-white   w-2xl  "
            autoPlay
            loop
            muted
          >
            <source src="./videos/result_2.mp4" type="video/mp4" />
          </video>
          <div className=" hidden sm:block sm:col-span-3 pt-12  border-l-2 border-white  bg-gradient-to-r from-purple-400 to-pink-300 opacity-80 lg:pt-6 ">
            <div className=" sm:max-w-3xl   ">
              <div className="relative">
                <div className=" sm:max-w-xl pl-4    ">
                  <div className="flex  hover:bg-purple-300 hover:cursor-pointer mb-10 ">
                    <img
                      className="h-20 w-20"
                      src="/marketing/logo/svg/paz_blanco.svg"
                    />

                    <div className="pt-3">
                      <p className=" text-2xl text-white ">
                        Meaningful Vacations
                      </p>
                      <p className=" text-sm uppercase text-violet-800  ">
                        TRANSFORMATIONAL RETREATS
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-white ml-2">+videos</p>
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

                  <div className="mt-20">
                    <div className="rounded  text-xs font-semibold text-stone-100 tracking-wide uppercase">
                      Cabo Matapalo, Peninsula de Osa,
                    </div>
                    <div className="text-xs font-medium text-stone-200 ">
                      Costa Rica
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="  hidden overflow-hidden sm:block sm:col-span-1  border-l-2 opacity-80 border-white  ">
            <div
              style={{ width: 500 }}
              className=" h-full bg-gradient-to-bl from-pink-300 to-pink-400 "
            ></div>
          </div>
        </main>

        <main className="relative    sm:hidden">
          <div className=" absolute bottom-0 w-full  sm:col-span-3 pt-1 pb-1 border-l-2 border-white  bg-gradient-to-br from-violet-400 to-violet-500 opacity-80   ">
            <div className=" sm:max-w-3xl   ">
              <div className="relative">
                <div className=" sm:max-w-xl pl-4  ">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 mt-0 text-white    "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div className="pt-0 ml-2">
                      <p className=" text-2xl text-white  ">
                        Meaningful Vacations
                      </p>
                      <p className=" text-sm uppercase text-violet-50  ">
                        Transformational Retreats
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <video
            poster="/images/video-bkg.jpg"
            ref={video2Ref}
            onEnded={onEnd}
            className="col-span-1 sm:col-span-4  border-l-2 border-white   w-2xl  "
            autoPlay
            loop
            muted
          >
            <source src="./videos/result_2.mp4" type="video/mp4" />
          </video>
        </main>
      </div>
    </div>
  );
}

function PlayIcon() {
  return (
    <div className="hidden sm:flex  my-20 text-white hover:bg-purple-200 hover:rounded-sm border-violet-500 hover:text-purple-600 hover:border-2 border-2 hover:border-white hover:cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-24 w-24   ml-14    "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="pt-8 ml-3 hidden sm:block  text-2xl">Play Video</span>
    </div>
  );
}
