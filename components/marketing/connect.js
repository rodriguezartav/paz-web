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

  function renderForm() {
    return (
      <div className="flex flex-1 flex-col justify-between w-80 ml-7 mt-4">
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium text-gray-700"
          >
            Email / Whatsapp
          </label>
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
    );
  }

  function renderResult() {
    return (
      <div className="m-5">
        <h3 className="mt-2 text-sm font-medium text-gray-900">
          I'll be in touch via email or whatsapp real soon!
        </h3>
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex h-full flex-col divide-gray-200 ">
        <div className="">{!formSent ? renderForm() : renderResult()}</div>
        <div className="flex flex-shrink-0 justify-end py-4">
          <button
            onClick={() => {
              formSent ? setView(false) : onSave();
            }}
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {formSent ? "Ok" : "Connect"}
          </button>
        </div>
      </div>
    </div>
  );
}
