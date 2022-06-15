import Link from "next/link";

import Image from "../Image";

export default function HomeApp({
  title,
  legend,
  color = "indigo-500",
  images,
  subtitle,
  logo_1,
  logo_2,
  logo_3,
  logo_4,
}) {
  return (
    <section>
      <div className=" radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-16 max-w-lg mx-auto text-center">
            <span className="text-green-600 dm font-bold">
              Online and In-Person
            </span>
            <h2 className="mb-6  dm text-4xl lg:text-5xl font-bold font-heading">
              Paz Journey
            </h2>
          </div>
          <div className="flex flex-wrap -mx-4 mb-12">
            <div className="flex flex-wrap w-full lg:w-1/2 mb-8 lg:mb-0">
              <div className="w-full lg:w-1/2 px-4 mb-8">
                <img
                  className="h-64 w-full rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                  alt=""
                />
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-8">
                <img
                  className="h-64 w-full rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
                  alt=""
                />
              </div>
              <div className="w-full px-4">
                <img
                  className="h-64 sm:h-128 w-full rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1127&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-wrap w-full lg:w-1/2">
              <div className="w-full px-4 mb-8">
                <div className="relative">
                  <img
                    className="h-128 w-full rounded-lg object-cover"
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gray-900 opacity-80 rounded-lg" />
                  <div className="absolute inset-0 p-6 flex justify-center">
                    <div className="max-w-md my-auto">
                      <span className="text-green-600 dm font-bold">
                        Everything is simple in life
                      </span>
                      <h2 className="text-4xl dm lg:text-2xl text-white font-bold">
                        Sample Paz Online
                      </h2>
                      <div className="max-w-xs">
                        <p className="mb-6 text-gray-400">
                          If it resonates with you, come to the Osa Peninsula in
                          Costa Rica, or stay online all you like.
                        </p>
                        <a
                          className="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose"
                          href="#"
                        >
                          Start - it's only available now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                <img
                  className="h-64 w-full rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                  alt=""
                />
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <img
                  className="h-64 w-full rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
