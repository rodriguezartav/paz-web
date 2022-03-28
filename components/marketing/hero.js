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

          <div className=" md:absolute  pt-16 top-40  bg-gradient-to-br from-violet-500 to-rose-300 opacity-80 lg:pt-10 border-l-0 border-white border-2 ">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
              <div>
                <div className="mt-6 sm:max-w-xl">
                  <p className="mt-6 text-2xl text-white px-1">
                    Meaningful Vacations <br /> Transformational Retreats
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          <video className=" w-full " autoPlay loop muted>
            <source src="./videos/result.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </main>
      </div>
    </div>
  );
}
