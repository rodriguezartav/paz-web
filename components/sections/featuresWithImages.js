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
      <div className="py-20 bg-white radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="mb-12 lg:mb-0 w-full lg:w-1/2 px-4">
              <div className="max-w-lg">
                <span className="text-indigo-600 font-bold">{legend}</span>
                <h2 className="mb-6 text-4xl lg:text-5xl font-bold dm font-heading">
                  {title}
                </h2>
                <ul>
                  <li className="flex mb-4">
                    <div>
                      <svg
                        className="mr-3 w-8 h-8 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        />
                      </svg>
                    </div>
                    <div className="max-w-xs">
                      <h3 className="font-bold font-heading">
                        Spend time inmersed in nature
                      </h3>
                      <p className="text-gray-500 leading-loose">
                        Reduce your mental activity naturaly by having fun for
                        3+ days in Paz.
                      </p>
                    </div>
                  </li>
                  <li className="flex mb-4">
                    <div>
                      <svg
                        className="mr-3 w-8 h-8 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        />
                      </svg>
                    </div>
                    <div className="max-w-xs">
                      <h3 className="font-bold font-heading">
                        An natural approach to relaxation
                      </h3>
                      <p className="text-gray-500 leading-loose">
                        You'll be surprised by the calmness experienced by
                        following minor suggestions to your regular vacation.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div>
                      <svg
                        className="mr-3 w-8 h-8 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        />
                      </svg>
                    </div>
                    <div className="max-w-xs">
                      <h3 className="font-bold font-heading">
                        Meditation as a science & art
                      </h3>
                      <p className="text-gray-500 leading-loose">
                        Discover the the intersection
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap items-center w-full lg:w-1/2 px-4">
              <div className="mb-6 w-full lg:w-1/2 px-3">
                <img
                  className="mb-6 w-full h-64 object-cover rounded-lg"
                  src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                  alt=""
                />
                <img
                  className="w-full h-64 object-cover rounded-lg"
                  src="https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                  alt=""
                />
              </div>
              <div className="w-full lg:w-1/2 px-3">
                <img
                  className="w-full h-64 object-cover rounded-lg"
                  src="https://images.unsplash.com/photo-1605201100110-1f07883d2882?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  alt=""
                />
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
