import { Dialog, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, UserIcon } from "@heroicons/react/outline";
import useSWR from "swr";
import fetcher from "../../helpers/fetcher";
import { useMutate, useFetch } from "../../helpers/useFetch";

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

  const {
    response,
    error: mutateError,
    isLoading,
    mutate,
  } = useMutate("/api/followers/");

  async function onSave() {
    setFormSent(true);
    const r = await mutate({ name, email, whatsapp }, `/api/followers`);
  }

  function renderForm() {
    return (
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
                  onChange={(e) => setName(e.currentTarget.value)}
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
                    onChange={(e) => setWhatsApp(e.currentTarget.value)}
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
                    onChange={(e) => setEmail(e.currentTarget.value)}
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
      </div>
    );
  }

  function renderResult() {
    return (
      <div className="m-5">
        <h3 className="mt-2 text-sm font-medium text-gray-900">
          You have been connected
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          We send an update once a week
        </p>
      </div>
    );
  }

  return (
    <div className="pointer-events-auto w-screen max-w-md">
      <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
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
      </div>
    </div>
  );
}
