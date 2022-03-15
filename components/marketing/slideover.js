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

export default function Slideover({
  parentView,
  view,
  setView,
  open,
  setOpen,
}) {
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
      <Dialog as="div" className="fixed inset-0   z-50" onClose={setOpen}>
        <div className="absolute inset-0 ">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="  fixed inset-y-0 right-0 md:right-0 flex max-w-full  sm:pl-16">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className=" overflow-y-scroll ">
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
