/* This example requires Tailwind CSS v2.0+ */
import { MenuIcon, XIcon, UserIcon } from "@heroicons/react/outline";
import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";

import Reservations from "./reservations";
import Connect from "./connect";
import Call from "./call";
import Profile from "./profile";
import Gallery from "./gallery";

import {
  DotsVerticalIcon,
  VideoCameraIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/solid";

export default function Slideover({ parentView }) {
  const [open, setOpen] = useState(true);

  const [view, setView] = useState("profile");

  return (
    <>
      {/* 
      dsd
        Make sure you add some bottom padding to pages that include a sticky banner like this to prevent
        your content from being obscured when the user scrolls to the bottom of the page.
      */}
      <Slide
        parentView={parentView}
        view={view}
        setView={setView}
        open={open}
        setOpen={setOpen}
      />
      <div className="fixed inset-x-0 bottom-0">
        <div className="bg-stone-200 opacity-90">
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center flex-wrap">
              <div
                onClick={() => {
                  setOpen(true);
                  setView("profile");
                }}
                className=" flex-1 flex items-center"
              >
                <span className="flex p-2 rounded-lg bg-sky-400">
                  <UserIcon className="h-3 w-3 text-white" aria-hidden="true" />
                </span>
                <p className="ml-3 font-medium text-stone-700 truncate">
                  <span className="md:hidden">Connect</span>
                  <span className="hidden md:inline">Connect</span>
                </p>
              </div>
              <div
                onClick={() => {
                  setOpen(true);
                  setView("reservations");
                }}
                className="flex-1 flex items-center"
              >
                <span className="flex p-2 rounded-lg bg-purple-800">
                  <CurrencyDollarIcon
                    className="h-3 w-3 text-white"
                    aria-hidden="true"
                  />
                </span>
                <p className="ml-3 font-medium text-stone-700 truncate">
                  <span className="md:hidden">Prices</span>
                  <span className="hidden md:inline">Prices</span>
                </p>
              </div>
              <div
                onClick={() => {
                  setOpen(true);
                  setView("gallery");
                }}
                className=" flex-1 flex "
              >
                <span className="flex p-2 rounded-lg bg-yellow-400">
                  <VideoCameraIcon
                    className="h-3 w-3 text-white"
                    aria-hidden="true"
                  />
                </span>
                <p className="ml-3 font-medium text-stone-700 truncate">
                  <span className="md:hidden">Videos</span>
                  <span className="hidden md:inline">Videos</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* This example requires Tailwind CSS v2.0+ */

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Slide({ open, setOpen, view, setView, parentView }) {
  useEffect(() => {
    if (view == false || !view) {
      setOpen(false);
      setView("profile");
    }
  }, [view]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden z-50"
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="pointer-events-none  fixed inset-y-0 right-10 md:right-0 flex max-w-full pl-10 sm:pl-16">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div>
                {view == "profile" && <Profile setView={setView} />}

                {view == "connect" && <Connect setView={setView} />}

                {view == "reservations" && (
                  <Reservations parentView={parentView} setView={setView} />
                )}

                {view == "gallery" && <Gallery setView={setView} />}

                {view == "call" && <Call setView={setView} />}
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
