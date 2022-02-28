import { useState } from "react";

import Gallery from "./gallery";

import { Dialog, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, UserIcon } from "@heroicons/react/outline";

export default function Example({ setView, parentView }) {
  let [formSent, setFormSent] = useState(false);

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [nights, setNights] = useState(3);
  let [persons, setPersons] = useState(2);

  function onSave() {
    setFormSent(true);
  }

  function renderResult() {
    return <Result />;
  }
  function renderForm() {
    if (parentView == "vacations") return <Vacations />;
    if (parentView == "retreats") return <Retreats />;
    else return <Hosts />;
  }

  return (
    <div className="pointer-events-auto w-screen max-w-md">
      <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
        <div className="h-0 flex-1 overflow-y-auto">
          <div className="bg-indigo-700 py-6 px-4 sm:px-6">
            <div className="flex items-center justify-between">
              <Dialog.Title className="text-lg font-medium text-white">
                {" "}
                <span className="capitalize">{parentView}</span> Gallery
              </Dialog.Title>
              <div className="ml-3 flex h-7 items-center">
                <button
                  type="button"
                  className="rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  onClick={() => setView(false)}
                >
                  <span className="sr-only">Close panel</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-1">
              <p className="text-sm text-indigo-300">
                Get started by filling in the information below to create your
                quote or reservation.
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <Gallery />
          </div>
        </div>
        <div className="flex flex-shrink-0 justify-end px-4 py-4">
          <button
            onClick={() => onSave()}
            type="button"
            className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Calculate
          </button>
        </div>
      </form>
    </div>
  );
}
