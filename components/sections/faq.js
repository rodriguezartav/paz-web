import Link from "next/link";

import Image from "../Image";

export default function HomeApp({
  title,
  list,
  legend,
  subtitle,
  color = "indigo-500",
}) {
  return (
    <section>
      <div className="py-20 bg-gray-50 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="mb-16 max-w-xl mx-auto text-center">
            <span className="text-purple-600 font-bold">
              With love for our friends
            </span>
            <h2 className="text-5xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-wrap -mx-4 -mb-8">
            <div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="h-full p-8 bg-white rounded shadow">
                <div className="mb-6 flex items-start">
                  <span className="mr-4 inline-block p-3 rounded-full bg-blue-400">
                    <svg
                      className="w-6 h-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold">
                    Can you summerize what this is about?
                  </h3>
                </div>
                <p className="text-gray-400 leading-loose">
                  It's about smiling and knowing yourself, your awesomeness!
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="h-full p-8 bg-white rounded shadow">
                <div className="mb-6 flex items-start">
                  <span className="mr-4 inline-block p-3 rounded-full bg-pink-400">
                    <svg
                      className="w-6 h-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold">
                    Would this make me feel better
                  </h3>
                </div>
                <p className="text-gray-400 leading-loose">
                  This is about understanding and experiencing that being stuck
                  below emotions and thoughts is optional. Discovering a space
                  where we are able to take to start loving and taking great
                  care of the little persons we tought we were.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="h-full p-8 bg-white rounded shadow">
                <div className="mb-6 flex items-start">
                  <span className="mr-4 inline-block p-3 rounded-full bg-green-400">
                    <svg
                      className="w-6 h-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold">Will this work for me?</h3>
                </div>
                <p className="text-gray-400 leading-loose">
                  Not without every drop of will and intention in your heart.{" "}
                  <b>You need it all</b>, even if you believe there's nothing
                  left - ignore that and be certain that if you are alive there
                  is plenty there.
                  <br />
                  <br />
                  If you are able to separate and inch from
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="h-full p-8 bg-white rounded shadow">
                <div className="mb-6 flex items-start">
                  <span className="mr-4 inline-block p-3 rounded-full bg-yellow-400">
                    <svg
                      className="w-6 h-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold">
                    If there is no method, what do we do?
                  </h3>
                </div>
                <p className="text-gray-400 leading-loose">
                  We are all unique, and that is the truth. Listening to the
                  heart is about being spontaneous, learning to feel inside and
                  outside. It's about trusting our intuition and not having to
                  understand and plan everything in advance.
                  <br />
                  <br />
                  In a way the method is like Jazz. We start with a talk or
                  workshop and see were the exploration takes us.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="h-full p-8 bg-white rounded shadow">
                <div className="mb-6 flex items-start">
                  <span className="mr-4 inline-block p-3 rounded-full bg-blue-400">
                    <svg
                      className="w-6 h-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold">
                    Are you a healer? Can you help me?
                  </h3>
                </div>
                <p className="text-gray-400 leading-loose">
                  In my case, I remember being in a position where I felt really
                  bad and needed support. Silently hoped that someone would come
                  give me a hug and help get back up. I love those moments
                  because it is then when I have realized the power of presense.
                  <br />
                  <br />
                  So, in the ultimate reality. No, I can't. Only you can. But I
                  also believe that since we are here togheter we can support
                  each other during difficult times. If you are able to step
                  away from your problems for just a bit, I hope the tips, links
                  and references her can help quite a bit.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="h-full p-8 bg-white rounded shadow">
                <div className="mb-6 flex items-start">
                  <span className="mr-4 inline-block p-3 rounded-full bg-green-400">
                    <svg
                      className="w-6 h-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold">
                    Is this religion, filosophy, medicinal plants or yoga?
                  </h3>
                </div>
                <p className="text-gray-400 leading-loose">
                  None of the above. Don't worry, you can remain as you are.
                  Definetly keep your beliefs, one of our inspirations is
                  Matssumara Kamammm and even as a fully realized person, he
                  prayed every day. Keep practicing your human arts, and find
                  the right filosohpy for your type. Medicinal plants are cool,
                  even if they get you high ( you won't need them in the retreat
                  thou )
                  <br />
                  <br />. If you find medicinal plants that work for you, even
                  if they get you high, good for you! Can you think and have
                  peace at the same time?
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
