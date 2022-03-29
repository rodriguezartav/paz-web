import { useEffect, useState, useRef } from "react";

const images = ["house_2.jpg", "templo.jpeg", "beach.jpg", "lounge_1.jpg"];

export default function Hero(props) {
  const video1Ref = useRef();

  function onEnd() {
    setTimeout(function () {
      console.log(video1Ref.current);

      video1Ref.current.play();
    }, 8000);
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

          <div className=" hidden sm:block sm:col-span-3 pt-16  border-l-2 border-white  bg-gradient-to-br from-violet-400 to-violet-500 opacity-80 lg:pt-10 ">
            <div className=" sm:max-w-3xl   ">
              <div className="relative">
                <div className=" sm:max-w-xl pl-4 ">
                  <div className="flex">
                    <img
                      className="h-20 w-20"
                      src="/marketing/logo/svg/paz_blanco.svg"
                    />
                    <div className="pt-4">
                      <p className=" text-2xl text-white shadow-sm ">
                        Meaningful Vacations
                      </p>
                      <p className=" text-sm uppercase text-violet-800  ">
                        Transformational Retreats
                      </p>
                    </div>
                  </div>

                  <PlayIcon />

                  <div className="">
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
              className=" h-full bg-gradient-to-l from-pink-200 to-violet-500 "
            ></div>
          </div>
        </main>

        <main className="relative    sm:hidden">
          <video
            poster="/images/video-bkg.jpg"
            ref={video1Ref}
            onEnded={onEnd}
            className="col-span-1 sm:col-span-4  border-l-2 border-white   w-2xl  "
            autoPlay
            muted
            controls
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
