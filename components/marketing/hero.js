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
      <div className="  bg-stone-600">
        <main className="relative grid-cols-1 sm:grid-cols-8 grid ">
          {/* Hero section */}

          <video
            className="col-span-1 sm:col-span-4    w-2xl  "
            autoPlay
            loop
            muted
          >
            <source src="./videos/result_2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className=" hidden sm:block sm:col-span-3   pt-16  border-l-2 border-white   bg-purple-300 to-stone-300 opacity-80 lg:pt-10 ">
            <div className=" px-4 sm:max-w-3xl   ">
              <div>
                <div className=" sm:max-w-xl">
                  <p className=" text-2xl text-white ">Meaningful Vacations</p>
                  <p className=" text-xl text-white ">
                    Transformational Retreats
                  </p>

                  <div className="mt-44">
                    <div className="rounded  mt-10 text-xs font-semibold text-stone-700 tracking-wide uppercase">
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

          <div className="  hidden sm:block sm:col-span-1   pt-16  border-l-2 border-white bg-purple-200  lg:pt-10 "></div>
        </main>
      </div>
    </div>
  );
}
