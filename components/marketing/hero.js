export default function Hero(props) {
  return (
    <div>
      <div className="bg-purple-100 object-cover  py-8 sm:py-0">
        <main className="relative">
          {/* Hero section */}

          <div
            style={{ top: "400px" }}
            className=" md:absolute  pt-16 top-100  bg-gradient-to-br from-violet-500 to-rose-300 opacity-80 lg:pt-10 border-l-0 border-white border-2 "
          >
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
          <img className="object-cover object-top" src="./images/templo.jpeg" />
        </main>
      </div>
    </div>
  );
}
