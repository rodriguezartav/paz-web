import Link from "next/link";

import Image from "../Image";

export default function HomeApp({
  title,
  legend,
  color = "indigo-500",
  images,
  subtitle,
  t1_description,
  t1_title,
  t2_description,
  t2_title,
  t3_description,
  t3_title,
  t4_description,
  t4_title,
}) {
  return (
    <section>
      <div className="skew skew-top mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10" />
        </svg>
      </div>

      <div className="py-20 bg-gray-50 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="mb-16 max-w-md mx-auto text-center">
            <span className="text-purple-600 font-bold">
              A center for the exploration of Humanity
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading">
              Welcome to Paz
            </h2>

            <p>
              A laboratory of the heart, soul and mind for <b>you</b> to find
              your different apporach to life.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="mb-8 lg:mb-0 w-full lg:w-1/3 px-4">
              <div className="py-12 px-6 bg-white rounded shadow text-center">
                <span className="mb-6 inline-block p-2 rounded-lg bg-yellow-100">
                  <svg
                    className="w-10 h-10 text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <h3 className="px-8 mb-4 text-2xl font-bold font-heading">
                  Why did it happend like that?
                </h3>
                <p className="text-gray-500">
                  Everyone has the sense of ‘being myself,' but not everyone
                  knows their self clearly
                </p>
              </div>
            </div>
            <div className="mb-8 lg:mb-0 w-full lg:w-1/3 px-4">
              <div className="py-12 px-6 bg-white rounded shadow text-center">
                <span className="mb-6 inline-block p-2 rounded-lg bg-purple-100">
                  <svg
                    className="w-10 h-10 text-purple-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </span>
                <h3 className="px-8 mb-4 text-2xl font-bold font-heading">
                  What do I really want?
                </h3>
                <p className="text-gray-500">
                  Ut tempus tellus ac nisi vestibulum tempus. Nunc tincidunt
                  lectus libero.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4">
              <div className="py-12 px-6 bg-white rounded shadow text-center">
                <span className="mb-6 inline-block p-2 rounded bg-pink-100">
                  <svg
                    className="w-10 h-10 text-pink-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <h3 className="px-8 mb-4 text-2xl font-bold font-heading">
                  Who am I
                </h3>
                <p className="text-gray-500">
                  Donec ut ligula nunc. Mauris blandit vel est et facilisis.
                  Integer sapien felis.
                </p>
              </div>
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
