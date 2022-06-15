import Link from "next/link";

import Image from "../Image";

export default function HomeApp({
  title,
  line1,
  color = "indigo-500",
  line2,
  line3,
  images,
  legend,
  button,
  logoAfter,
  logoBefore,
  subtitle,
}) {
  return (
    <section>
      <div className="py-20 bg-gray-50 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="relative flex">
            <div className="hidden xl:absolute inset-y-0 left-0 -ml-6 xl:flex items-center">
              <button className="p-4 bg-green-600 hover:bg-green-700 rounded-l-xl rounded-t-xl text-white z-10">
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </button>
            </div>
            <div className="w-full xl:w-4/5 xl:ml-auto">
              <img
                className="md:max-w-xl xl:max-w-4xl mx-auto relative object-cover rounded"
                src="https://images.unsplash.com/photo-1489493512598-d08130f49bea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1048&q=80"
                alt=""
              />
              <div className="xl:hidden mt-12 text-center">
                <button className="p-4 bg-green-600 hover:bg-green-700 rounded-l-xl rounded-t-xl text-white z-10 transition duration-200">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                </button>
                <button className="p-4 bg-green-600 hover:bg-green-700 rounded-r-xl rounded-t-xl text-white transition duration-200">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
              <div className="xl:absolute top-0 left-0 mt-12 xl:mt-20 max-w-xl mx-auto xl:mx-0 p-6 xl:py-24 rounded bg-white border-gray-50 shadow text-center">
                <span className="font-bold text-green-600">{legend}</span>
                <h2 className="text-3xl font-bold font-heading dm">{title}</h2>
                <p className="max-w-xs mx-auto text-gray-500 leading-loose">
                  {subtitle}
                </p>
              </div>
            </div>
            <div className="hidden xl:absolute inset-y-0 right-0 -mr-8 xl:flex items-center">
              <button className="p-4 bg-green-600 hover:bg-green-700 rounded-r-xl rounded-t-xl text-white">
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="skew skew-bottom mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10" />
        </svg>
      </div>
      <div className="skew skew-bottom ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 10 10" />
        </svg>
      </div>
    </section>
  );
}
