import { useEffect, useState, useRef, createRef } from "react";

export default function Carousel({ height, images, auto }) {
  // We will start by storing the index of the current image in the state.
  const [currentImage, setCurrentImage] = useState(0);
  const [autoSlide, setAutoSlide] = useState(auto);

  // We are using react ref to 'tag' each of the images. Below will create an array of
  // objects with numbered keys. We will use those numbers (i) later to access a ref of a
  // specific image in this array.
  const refs = images.reduce((acc, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const refOfRefs = useRef();

  useEffect(() => {
    refOfRefs.current = refs;
  }, [refs]);

  useEffect(() => {
    let timer;
    if (autoSlide) {
      timer = setTimeout(() => {
        if (auto) {
          if (currentImage == 2) {
            setAutoSlide(false);
            clearTimeout(timer);
            timer = null;
          } else nextImage(refOfRefs.current);
        }
      }, autoSlide);
    }
    return () => (timer ? clearTimeout(timer) : null);
  }, [refs]);

  const scrollToImage = (i, refOfRefs) => {
    // First let's set the index of the image we want to see next

    // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,
    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into
    // your current view! To do so we pass an index of the image, which is then use to identify our current
    // image's ref in 'refs' array above.

    const ref = refOfRefs && refOfRefs.current ? refOfRefs[i] : refs[i];

    ref.current.scrollIntoView({
      //     Defines the transition animation.
      behavior: "smooth",
      //      Defines vertical alignment.
      block: "nearest",
      //      Defines horizontal alignment.
      inline: "start",
    });
    setCurrentImage(i);
  };

  // Some validation for checking the array length could be added if needed
  const totalImages = images.length;

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousImage method.
  const nextImage = (refOfRefs) => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0, refOfRefs);
    } else {
      scrollToImage(currentImage + 1, refOfRefs);
    }
  };

  const previousImage = () => {
    setAutoSlide(false);
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
    <div className="flex  h-full justify-center w-full items-center">
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
            <div
              className="w-full  h-full flex-shrink-0"
              key={img}
              ref={refs[i]}
            >
              <img
                src={img}
                style={{ height: height }}
                className={"w-full h-full  overflow-y-hidden object-cover"}
              />
            </div>
          ))}
          {sliderControl()}
        </div>
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
