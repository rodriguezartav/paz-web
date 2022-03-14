export default function Hero(props) {
  return (
    <div>
      <div className="bg-stone-100 object-cover ">
        <main className="relative">
          {/* Hero section */}
          <img className="object-cover object-top" src="./images/templo.jpeg" />
          <div className=" md:absolute top-12 pt-8  bg-gray-50 opacity-80 lg:pt-10 ">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
              <div>
                <div className="">
                  <div>
                    <a href="#" className="inline-flex space-x-2">
                      <span className="rounded bg-stone-50  py-1 text-xs font-semibold text-violet-600 tracking-wide uppercase">
                        Cabo Matapalo, Peninsula de Osa,
                      </span>
                      <span className="inline-flex items-center text-sm font-medium text-sky-600 ">
                        <span>Costa Rica</span>
                      </span>
                    </a>
                  </div>
                  <div className="mt-6 sm:max-w-xl">
                    <h1 className="text-6xl font-extrabold text-stone-500   tracking-tight sm:text-6xl">
                      Paz
                    </h1>
                    <p className="mt-6 text-xl text-gray-700 px-1">
                      Meaningful Wildlife Vacations <br /> Transformational
                      Wellness Retreats
                    </p>
                    <small className="text-lg text-purple-700 mx-1  block pb-0 md:pb-0 ">
                      <a href="http://airbnb.com/h/pazz" target="_blank">
                        <img src="/images/airbnb.svg" className="h-20 w-20" />
                      </a>
                    </small>
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
