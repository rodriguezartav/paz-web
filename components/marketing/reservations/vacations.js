import { Dialog, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, UserIcon } from "@heroicons/react/outline";

import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Combobox } from "@headlessui/react";

import {
  LinkIcon,
  PlusSmIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";
import { useState } from "react";

export default function Example({ setView, parentView }) {
  let [formSent, setFormSent] = useState(false);

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [nights, setNights] = useState(3);
  let [persons, setPersons] = useState(2);

  let [whatsapp, setWhatsApp] = useState("");

  function onSave() {
    setFormSent(true);
  }

  function renderForm() {
    if (parentView == "vacations") return renderVacationForm();
    if (parentView == "retreats") return renderRetreatForm();
  }

  return (
    <div className="pointer-events-auto w-screen max-w-md">
      <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
        <div className="h-0 flex-1 overflow-y-auto">
          <div className="flex flex-1 flex-col justify-between">
            <div className="divide-y divide-gray-200 px-4 sm:px-6">
              <div className="space-y-6 pt-6 pb-5">
                <div>
                  <label
                    htmlFor="project-name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    {" "}
                    Email{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-900"
                  >
                    {" "}
                    Check-In Date (Estimated ok){" "}
                  </label>
                  <div className="mt-1">
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="block w-40 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-900"
                  >
                    {" "}
                    Number of Nights{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      min="1"
                      max="60"
                      name="number"
                      id="number"
                      className="block w-40 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-900"
                  >
                    {" "}
                    Number of People{" "}
                  </label>
                  <div className="mt-1">
                    <NumberOfPeople
                      value={persons}
                      onChange={(value) => setPersons(parseInt(value))}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-900"
                  >
                    {" "}
                    Comments{" "}
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="description"
                      name="description"
                      placeholder="Check-in, # of Nights, # of People"
                      rows={2}
                      className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      defaultValue={""}
                    />
                  </div>
                </div>
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
                      I'll do my best to confirm your quote in 24 hours so we
                      can proceed securing the reservation with a *refundable
                      deposit of 50%.
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

function NumberOfPeople(props) {
  const first =
    "relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500";
  const last =
    "-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300   text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500";
  const normal =
    "-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300   text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500";

  return (
    <span className="relative z-0 inline-flex shadow-sm rounded-md">
      {[2, 3, 4, 5, 6, 7, 8].map((item, index) => {
        return (
          <button
            onClick={() => props.onClick(item)}
            type="button"
            className={`${index == 0 ? first : index == 6 ? last : normal} ${
              item == props.value ? "bg-violet-400" : "bg-white"
            } `}
          >
            {item}
          </button>
        );
      })}
    </span>
  );
}
