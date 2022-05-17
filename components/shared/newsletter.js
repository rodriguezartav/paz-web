import Link from "next/link";

import Image from "next/image";

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

  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url != "undefined") {
        window.location = url;
      }
    };
    gtag("event", "conversion", {
      send_to: "AW-10878250661/acu9CP2Lr7EDEKXdk8Mo",
      event_callback: callback,
    });
    return false;
  }

  async function onSave() {
    try {
      gtag_report_conversion();
    } catch (e) {}

    setFormSent(true);
    const r = await mutate({ whatsapp }, `/api/followers`);
  }

  return (
    <section
      data-section-id={18}
      data-category="newsletter-dark-mix"
      data-component-id="b8d36442_01_awz"
      className="wave-top wave-bottom bg-white"
    >
      <div className="wave wave-top w-full text-coolGray-900">
        <svg
          viewBox="0 0 1440 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-config-id="auto-svg-1-1"
        >
          <path
            d="M1440 64.5909H1090.08C833.336 64.5909 580.229 -7.62939e-06 360 -7.62939e-06C139.771 -7.62939e-06 0 64.5909 0 64.5909V116H1440V64.5909Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div
        className="relative py-24 bg-coolGray-900"
        style={{
          backgroundImage: 'url("flex-ui-assets/elements/pattern-dark.svg")',
          backgroundPosition: "center",
        }}
        data-config-id="auto-img-1"
      >
        <img
          className="absolute top-6 left-6 w-24 md:w-auto"
          src="flex-ui-assets/elements/dots3-violet.svg"
          data-config-id="auto-img-2-1"
        />
        <img
          className="absolute bottom-6 right-6 w-24 md:w-auto"
          src="flex-ui-assets/elements/dots3-yellow.svg"
          data-config-id="auto-img-3-1"
        />
        <div className="container relative z-10 px-4 mx-auto">
          <div className="mx-auto max-w-xl text-center">
            <h3
              className="mb-4 text-3xl md:text-4xl leading-tight text-white font-bold tracking-tighter"
              data-config-id="auto-txt-1-1"
            >
              Sign up for our newsletter
            </h3>
            <p
              className="mb-8 text-lg md:text-xl text-coolGray-400 font-medium"
              data-config-id="auto-txt-2-1"
            >
              Stay in the loop with everything you need to know.
            </p>
            <div className="mx-auto md:max-w-md text-left">
              <div className="flex flex-wrap mb-1">
                <div className="w-full md:flex-1 mb-3 md:mb-0 md:mr-6">
                  <input
                    className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xsm"
                    value={whatsapp}
                    onChange={(e) => setWhatsApp(e.currentTarget.value)}
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Enter your email"
                  />
                </div>
                <div className="w-full md:w-auto">
                  <a
                    className="inline-block py-3 px-5 w-full leading-5 text-white bg-violet-500 hover:bg-violet-600 font-medium text-center focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm"
                    onClick={onSave}
                    data-config-id="auto-txt-3-1"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wave wave-bottom w-full text-coolGray-900">
        <svg
          viewBox="0 0 1440 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-config-id="auto-svg-2-1"
        >
          <path
            d="M0 51.4091H349.922C606.664 51.4091 859.771 116 1080 116C1300.23 116 1440 51.4091 1440 51.4091V0H0V51.4091Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
