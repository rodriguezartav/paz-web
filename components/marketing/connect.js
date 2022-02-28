import { Dialog, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, UserIcon } from "@heroicons/react/outline";

import {
  LinkIcon,
  PlusSmIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";
import { useState } from "react";

export default function Example({ setView }) {
  let [useEmail, setUseEmail] = useState(false);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [interest, setInterest] = useState("");
  let [whatsapp, setWhatsApp] = useState("");

  let [formSent, setFormSent] = useState(false);

  function onSave() {
    if (!formSent) setFormSent(true);
    else setView(false);
  }

  function renderForm() {
    <div className="flex flex-1 flex-col justify-between">
      <div className="divide-y divide-gray-200 px-4 sm:px-6">
        <div className="space-y-6 pt-6 pb-5">
          <div>
            <label
              htmlFor="project-name"
              className="block text-sm font-medium text-gray-900"
            >
              {" "}
              Name
            </label>
            <div className="mt-1">
              <input
                value={name}
                onClick={(e) => setName(e.currentTarget.value)}
                type="text"
                name="project-name"
                id="project-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {!useEmail && (
            <div>
              <label
                htmlFor="project-name"
                className="block text-sm font-medium text-gray-900"
              >
                {" "}
                Whatsapp
              </label>
              <div className="mt-1">
                <input
                  value={whatsapp}
                  onClick={(e) => setWhatsApp(e.currentTarget.value)}
                  type="text"
                  name="project-name"
                  id="project-name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          )}

          {useEmail && (
            <div>
              <label
                htmlFor="project-name"
                className="block text-sm font-medium text-gray-900"
              >
                {" "}
                Email
              </label>
              <div className="mt-1">
                <input
                  onClick={(e) => setEmail(e.currentTarget.value)}
                  value={email}
                  type="text"
                  name="project-name"
                  id="project-name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          )}

          {!useEmail && (
            <div className="pt-0 pb-6">
              <div className="flex text-sm">
                <a
                  onClick={() => setUseEmail(true)}
                  className="group inline-flex items-center font-medium text-indigo-600 hover:text-indigo-900"
                >
                  <LinkIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-900"
                    aria-hidden="true"
                  />
                  <span className="ml-2"> Don't have Whatsapp? </span>
                </a>
              </div>
            </div>
          )}
          <fieldset>
            <legend className="text-sm font-medium text-gray-900">
              Interested in
            </legend>
            <div className="mt-2 space-y-5">
              <div className="relative flex items-start">
                <div className="absolute flex h-5 items-center">
                  <input
                    id="privacy-public"
                    name="privacy"
                    aria-describedby="privacy-public-description"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    defaultChecked
                  />
                </div>
                <div className="pl-7 text-sm">
                  <label
                    htmlFor="privacy-public"
                    className="font-medium text-gray-900"
                  >
                    {" "}
                    Vacations
                  </label>
                  <p id="privacy-public-description" className="text-gray-500">
                    Friends & Family
                  </p>
                </div>
              </div>
              <div>
                <div className="relative flex items-start">
                  <div className="absolute flex h-5 items-center">
                    <input
                      id="privacy-private-to-project"
                      name="privacy"
                      aria-describedby="privacy-private-to-project-description"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="pl-7 text-sm">
                    <label
                      htmlFor="privacy-private-to-project"
                      className="font-medium text-gray-900"
                    >
                      {" "}
                      Retreats
                    </label>
                    <p
                      id="privacy-private-to-project-description"
                      className="text-gray-500"
                    >
                      Private and scheduled retreats
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative flex items-start">
                  <div className="absolute flex h-5 items-center">
                    <input
                      id="privacy-private"
                      name="privacy"
                      aria-describedby="privacy-private-to-project-description"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="pl-7 text-sm">
                    <label
                      htmlFor="privacy-private"
                      className="font-medium text-gray-900"
                    >
                      {" "}
                      Host your retreat
                    </label>
                    <p
                      id="privacy-private-description"
                      className="text-gray-500"
                    >
                      Being your group and host your retreat at Paz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="pt-4 pb-6">
          <div className="mt-4 flex text-sm">
            <a className="group inline-flex items-center text-gray-500 hover:text-gray-900">
              <QuestionMarkCircleIcon
                className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
              <span className="ml-2">
                {" "}
                We won't share your information or use it for marketing
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>;
  }

  function renderResult() {
    return <p>result okj</p>;
  }

  return (
    <div className="pointer-events-auto w-screen max-w-md">
      <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
        <div className="h-0 flex-1 overflow-y-auto">
          <div className="bg-violet-700 py-6 px-4 sm:px-6">
            <div className="flex items-center justify-between">
              <Dialog.Title className="text-lg font-medium text-white">
                {" "}
                Connect with Paz
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
              <p className="text-sm text-white">
                Connect with Paz to receive inspirational updates and exclusive
                invitations to retreats and vacations.
              </p>
            </div>
          </div>

          {!formSent ? renderForm() : renderResult()}
        </div>
        <div className="flex flex-shrink-0 justify-end px-4 py-4">
          {!formSent && (
            <button
              type="button"
              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => setView(false)}
            >
              Cancel
            </button>
          )}
          <button
            onClick={() => onSave()}
            className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {formSent ? "Ok" : "Connect"}
          </button>
        </div>
      </form>
    </div>
  );
}
