export default function Hero(props) {
  return (
    <div>
      <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <div className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
          Welcome to my site!
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </header>

      <div className="bg-stone-100 object-cover ">
        <main className="relative">
          {/* Hero section */}
          <img className="object-cover object-top" src="./images/templo.jpeg" />
          <div className=" md:absolute top-12 pt-8     bg-gray-50 opacity-80 lg:py-14">
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
                      Private Beach Lounge | Comfy Jungle House | Natural
                      Wellness
                    </p>
                    <small className="text-xs text-gray-500 mx-1  block pb-10 md:pb-0">
                      Exercise - Relax - Connect with wildlife - Rest - Become
                      enchanted - Find your Peace
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
