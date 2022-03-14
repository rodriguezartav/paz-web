import { MenuIcon, XIcon, UserIcon } from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";

import Connect from "./connect";

import {
  LinkIcon,
  PlusSmIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";

export default function Profile({ setView }) {
  return (
    <div className="pointer-events-auto w-screen max-w-md">
      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
        <div className="px-4 py-6 sm:px-6">
          <div className="flex items-start justify-between">
            <h2
              id="slide-over-heading"
              className="text-lg font-medium text-gray-900"
            >
              Host's Contact
            </h2>
            <div className="ml-3 flex h-7 items-center">
              <button
                type="button"
                className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                onClick={() => setView()}
              >
                <span className="sr-only">Close panel</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        {/* Main */}
        <div>
          <div className="pb-1 sm:pb-6">
            <div>
              <div className="relative h-40 sm:h-56">
                <img
                  className="absolute h-full w-full object-cover"
                  src="./images/me.jpeg"
                  alt=""
                />
              </div>

              <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                <div className="sm:flex-1">
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                        Roberto Rodriguez
                      </h3>
                      <span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
                        <span className="sr-only">Online</span>
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">@rober_en_paz</p>
                    <p className="text-sm text-gray-500">wa: +506 8419-1862</p>
                  </div>
                  <div className="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
                    <dl className="space-y-8 mt-5 px-4 sm:space-y-6 sm:px-6">
                      <div>
                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                          Bio
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                          <p>
                            I spend my time practicing internal arts like
                            surfing meditation, Qi Gong, Tai Chi and Jhana Yoga
                            or self-inquiry. World Traveler, Former Silicon
                            Valley Engineer and DIY enthusiast. <br />
                            <br /> Designed & built Paz for my own healing.
                            Opened in 2022 for the enjoyment of those looking to
                            improve their lives.
                          </p>
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="mt-2 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                    <dt className="ml-6 text-sm font-medium text-gray-500  sm:flex-shrink-0">
                      Let's start a conversation
                    </dt>
                    <Connect setView={setView} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
