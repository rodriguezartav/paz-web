import { useEffect, useState, useRef, createRef } from "react";

const images = [
  "/images/house_2.jpg",
  "/images/templo.jpeg",
  "/images/beach.jpg",
  "/images/lounge_1.jpg",
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
        <main className=" grid-cols-1 sm:grid-cols-8 hidden  bg-white  sm:grid">
          {/* Hero section */}
          <div className="w-full object-cover col-span-1 sm:col-span-6  border-l-2 border-white">
            <div className="  w-full flex justify-center">
              <Carousel height={`calc(100vh - 100px)`} />
            </div>
          </div>

          <div className="   hidden sm:col-span-2 sm:block">
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
                          with nature connection courses
                        </p>
                      </div>
                    </div>

                    <p className="p-5 pt-0 text-stone-700 text-md">
                      A private resort experience in our 2-acre beachfront
                      property with your own beach.
                    </p>

                    <p className="p-5 pt-0 text-stone-700 text-md">
                      Join a course with Paz host @rober.enpaz.cr to reduce
                      stress and feel connected in the most biodiverse place on
                      earth. Take it home with you and transform your life.
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

const Carousel = (props) => {
  // We will start by storing the index of the current image in the state.
  const [currentImage, setCurrentImage] = useState(0);

  // We are using react ref to 'tag' each of the images. Below will create an array of
  // objects with numbered keys. We will use those numbers (i) later to access a ref of a
  // specific image in this array.
  const refs = images.reduce((acc, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToImage = (i) => {
    // First let's set the index of the image we want to see next
    setCurrentImage(i);
    // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,
    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into
    // your current view! To do so we pass an index of the image, which is then use to identify our current
    // image's ref in 'refs' array above.
    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: "smooth",
      //      Defines vertical alignment.
      block: "nearest",
      //      Defines horizontal alignment.
      inline: "start",
    });
  };

  // Some validation for checking the array length could be added if needed
  const totalImages = images.length;

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousImage method.
  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
  const arrowStyle =
    "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

  // Let's create dynamic buttons. It can be either left or right. Using
  // isLeft boolean we can determine which side we'll be rendering our button
  // as well as change its position and content.
  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
      style={{ top: "40%" }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? "◀" : "▶"}
      </span>
    </button>
  );

  return (
    // Images are placed using inline flex. We then wrap an image in a div
    // with flex-shrink-0 to stop it from 'shrinking' to fit the outer div.
    // Finally the image itself will be 100% of a parent div. Outer div is
    // set with position relative, so we can place our cotrol buttons using
    // absolute positioning on each side of the image.
    <div className="flex justify-center w-full items-center">
      <div className="relative w-full">
        <div
          style={{
            "scroll-snap-type": "x mandatory",
            "-webkit-overflow-scrolling": "touch",
            "scrollbar-width": "none",
            "-ms-overflow-style": "none",
          }}
          className="carousel inline-flex overflow-x-hidden"
        >
          {sliderControl(true)}
          {images.map((img, i) => (
            <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
              <img
                src={img}
                style={{ height: props.height }}
                className="w-full overflow-y-hidden object-cover"
              />
            </div>
          ))}
          {sliderControl()}
        </div>
      </div>
    </div>
  );
};
