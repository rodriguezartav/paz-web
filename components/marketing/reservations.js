import { useState } from "react";
import { useMutate, useFetch } from "../../helpers/useFetch";
import Vacations from "./reservations/vacations";
import Retreats from "./reservations/retreats";
import Hosts from "./reservations/hosts";
import Result from "./reservations/result";

import { Dialog, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, UserIcon } from "@heroicons/react/outline";

export default function Example({ setView, parentView }) {
  let [formSent, setFormSent] = useState(false);

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [nights, setNights] = useState(3);
  let [persons, setPersons] = useState(2);

  let [checkIn, setCheckIn] = useState("");

  let [comments, setComments] = useState("");

  const {
    response,
    error: mutateError,
    isLoading,
    mutate,
  } = useMutate("/api/reservations/");

  async function onSave() {
    const r = await mutate(
      { name, email, nights, persons, checkIn, comments },
      `/api/reservations`
    );
    setFormSent(true);
  }

  function renderResult() {
    return <Result />;
  }
  function renderForm() {
    if (parentView == "vacations")
      return (
        <Vacations
          email={email}
          setEmail={setEmail}
          nights={nights}
          persons={persons}
          setPersons={setPersons}
          setNights={setNights}
          checkIn={checkIn}
          setCheckIn={setCheckIn}
          comments={comments}
          setComments={setComments}
        />
      );
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
                <span className="capitalize">{parentView}</span> Quotes
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
            {formSent ? renderResult() : renderForm()}
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
