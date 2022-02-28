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

                <Retreats />

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

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

const people = [
  {
    id: 1,
    name: "Private Retreat - 6 days - $1500 / person",
    online: true,
  },
  {
    id: 1,
    name: "Inaguration Retreat - To be anounced - $750",
    online: true,
  },
  // More users...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Retreats() {
  const [query, setQuery] = useState("");
  const [selectedPerson, setSelectedPerson] = useState();

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
      <Combobox.Label className="block text-sm font-medium text-gray-700">
        Retreat
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(person) => person.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredPeople.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredPeople.map((person) => (
              <Combobox.Option
                key={person.id}
                value={person}
                className={({ active }) =>
                  classNames(
                    "relative cursor-default select-none py-2 pl-3 pr-9",
                    active ? "bg-indigo-600 text-white" : "text-gray-900"
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex items-center">
                      <span
                        className={classNames(
                          "inline-block h-2 w-2 flex-shrink-0 rounded-full",
                          person.online ? "bg-green-400" : "bg-gray-200"
                        )}
                        aria-hidden="true"
                      />
                      <span
                        className={classNames(
                          "ml-3 truncate",
                          selected && "font-semibold"
                        )}
                      >
                        {person.name}
                        <span className="sr-only">
                          {" "}
                          is {person.online ? "online" : "offline"}
                        </span>
                      </span>
                    </div>

                    {selected && (
                      <span
                        className={classNames(
                          "absolute inset-y-0 right-0 flex items-center pr-4",
                          active ? "text-white" : "text-indigo-600"
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
