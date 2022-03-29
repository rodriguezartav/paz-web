import { useEffect, useState, useRef } from "react";

const images = ["house_2.jpg", "templo.jpeg", "beach.jpg", "lounge_1.jpg"];

export default function Hero(props) {
  const video1Ref = useRef();

  function onEnd() {
    setTimeout(function () {
      console.log(video1Ref.current);

      video1Ref.current.play();
    }, 2000);
  }

  return (
    <div>
      <div className="  bg-stone-600">
        <main className=" grid-cols-1 sm:grid-cols-8 hidden  sm:grid">
          {/* Hero section */}

          <video
            poster="/images/video-bkg.jpg"
            ref={video1Ref}
            onEnded={onEnd}
            className="col-span-1 sm:col-span-4  border-l-2 border-white   w-2xl  "
            autoPlay
            muted
          >
            <source src="./videos/result_2.mp4" type="video/mp4" />
          </video>

          <div className=" hidden sm:block sm:col-span-3 pt-16  border-l-2 border-white bg-purple-400 to-stone-300 opacity-80 lg:pt-10 ">
            <div className=" px-4 sm:max-w-3xl   ">
              <div className="relative">
                <div className=" sm:max-w-xl">
                  <p className=" text-2xl text-white shadow-sm ">
                    Meaningful Vacations
                  </p>
                  <p className=" text-sm uppercase text-violet-800  ">
                    Transformational Retreats
                  </p>

                  <PlayIcon />

                  <div className="">
                    <div className="rounded  text-xs font-semibold text-stone-700 tracking-wide uppercase">
                      Cabo Matapalo, Peninsula de Osa,
                    </div>
                    <div className="text-xs font-medium text-stone-700 ">
                      Costa Rica
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" hidden sm:block sm:col-span-1   pt-16  border-l-2 border-white bg-gradient-to-br from-violet-500 to-purple-300  lg:pt-10 "></div>
        </main>

        <main className="relative    sm:hidden">
          <img src="/images/video-bkg.jpg" className="w-full" />
          <div className="absolute -top-12 left-16 opacity-80">
            <PlayIcon />
          </div>
        </main>
      </div>
    </div>
  );
}

function PlayIcon() {
  return (
    <div className="flex my-28">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-24 w-24 text-white  ml-20 "
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
      <span className="pt-8 hidden sm:block text-purple-100 text-2xl">
        Play Video
      </span>
    </div>
  );
}
