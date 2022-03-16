import { useEffect, useState, useRef } from "react";

const images = ["house_2.jpg", "templo.jpeg", "beach.jpg", "lounge_1.jpg"];

export default function Hero(props) {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);

  useEffect(() => {
    let interval = setInterval(() => {
      console.log(indexRef.current, images.length);
      if (indexRef.current < images.length - 1)
        indexRef.current = indexRef.current + 1;
      else indexRef.current = 0;
      setIndex(indexRef.current);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="object-cover  py-8 sm:py-0 h-screen overflow-y-hidden ">
        <main className="relative">
          {/* Hero section */}

          <div style={{ top: 500 }} className="absolute top-48  right-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div style={{ top: 500 }} className="absolute top-48 left-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
              />
            </svg>
          </div>

          <div className=" md:absolute  pt-16 top-40  bg-gradient-to-br from-violet-500 to-rose-300 opacity-80 lg:pt-10 border-l-0 border-white border-2 ">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
              <div>
                <div className="mt-6 sm:max-w-xl">
                  <p className="mt-6 text-2xl text-white px-1">
                    Meaningful Wildlife Vacations <br /> Transformational
                    Wellness Retreats
                  </p>

                  <div className="">
                    <div>
                      <a href="#" className="inline-flex space-x-2 mb-10 ml-2">
                        <span className="rounded   py-1 text-xs font-semibold text-stone-800 tracking-wide uppercase">
                          Cabo Matapalo, Peninsula de Osa,
                        </span>
                        <span className="inline-flex items-center text-sm font-medium text-sky-200 ">
                          <span>Costa Rica</span>
                        </span>
                      </a>
                    </div>

                    <small className="text-lg text-purple-100 bg-stone-200 px-3 rounded-xl mx-1 mt-5 h-15 my-3 opacity-80 w-20 p-1  block mb-6 md:pb-0 ">
                      <a href="http://airbnb.com/h/pazz" target="_blank">
                        <img
                          src="/images/airbnb.svg"
                          className=" text-purple-100 h-10 w-20"
                        />
                      </a>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="object-cover h-max-screen object-top w-screen"
            src={`./images/${images[indexRef.current]}`}
          />
        </main>
      </div>
    </div>
  );
}
