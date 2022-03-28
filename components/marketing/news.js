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

export default function Example() {
  let [name, setName] = useState("");

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
    const r = await mutate({ whatsapp }, `/api/followers`);
  }

  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            id="newsletter-headline"
          >
            Want to visit someday?
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
            Sign up for our newsletter and we'll send you beautiful pictures and
            special offers by web-only discounts.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          {formSent ? (
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                You are all set, thanks!
              </button>
            </div>
          ) : (
            <div>
              <div className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  value={whatsapp}
                  onChange={(e) => setWhatsApp(e.currentTarget.value)}
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    onClick={onSave}
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                  >
                    Join
                  </button>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-300">
                We care about the protection of your data. Read our{" "}
                <a href="#" className="text-white font-medium underline">
                  Privacy Policy.
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
