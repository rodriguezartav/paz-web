import Link from "next/link";

import Image from "next/image";

import { useState } from "react";

import { useMutate } from "../../helpers/useFetch";

export default function HomeApp({
  title,
  color = "indigo-500",
  image,
  button,
  post_subtitle,
  post_title,
  logoAfter,
  onComplete,
  logoBefore,
  subtitle,
}) {
  let [message, setMessage] = useState("");
  let [isMessageSaved, setIsMessageSaved] = useState(false);
  let [isPhoneSaved, setIsPhoneSaved] = useState(false);

  let [countryCode, setCountryCode] = useState("");
  let [phone, setPhone] = useState("");

  let { mutate, response, isLoading, error, isSuccess } = useMutate(
    `${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/messages`
  );

  async function onMessageClick() {
    const res = await mutate({ message });
    setIsMessageSaved(true);
  }

  async function onPhoneClick() {
    const res = await mutate({ phone, country_code: countryCode, message });
    setIsPhoneSaved(true);
    onComplete && onComplete(res);
  }

  return (
    <div className="relative">
      <section
        className="relative py-4 md:pb-0 bg-white overflow-hidden"
        style={{
          backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          backgroundPosition: "center",
        }}
      >
        {logoBefore && (
          <div className="relative max-w-4xl mx-auto">
            <img
              className="hidden absolute top-0 left-0 -mt-6 lg:-mt-12 -ml-6 lg:-ml-12 w-20 lg:w-auto z-10"
              src="flex-ui-assets/elements/circle3-yellow.svg"
              alt=""
            />
            <img
              className="hidden  absolute bottom-0 right-0 -mb-6 lg:-mb-10-mr-6 lg:-mr-12 w-20 lg:w-auto"
              src="flex-ui-assets/elements/dots3-blue.svg"
              alt=""
            />
            <img className="mx-auto relative w-44 h-44" src={image} alt="" />
          </div>
        )}

        <div className="relative container px-4 mx-auto">
          <div className="xl:max-w-4xl mb-18 md:mb-16 mx-auto text-center">
            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-indigo-500 bg-indigo-100 font-medium uppercase rounded-full shadow-sm">
              Sobre Paz
            </span>
            <h1
              className={`mb-4 text-3xl text-indigo-500 md:text-4xl leading-tight font-heading font-bold text-${color}`}
            >
              {isMessageSaved ? post_title : title}
            </h1>
            <p className="mb-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-500 font-heading">
              {isMessageSaved ? post_subtitle : subtitle}
            </p>

            {isPhoneSaved && (
              <div className="text-green-500 text-2xl">
                Su mensaje fue enviado, gracias
              </div>
            )}

            {!isPhoneSaved && (
              <div>
                <div className="mt-1 mb-4 max-w-xl mx-auto">
                  {!isMessageSaved && (
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.currentTarget.value)}
                      rows={2}
                      className="py-3 px-4 block w-full mx-auto shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                      placeholder="Escriba su mensaje"
                    />
                  )}

                  {isMessageSaved && (
                    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-4 sm:gap-x-8">
                      <div className="sm:col-span-1">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Country Code
                        </label>
                        <div className="mt-1 sm:col-span-1">
                          <input
                            type="text"
                            name="country-code"
                            autoComplete="country-code"
                            value={countryCode}
                            onChange={(e) =>
                              setCountryCode(e.currentTarget.value)
                            }
                            placeholder="+xx"
                            className="py-3 px-4  block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm  text-left font-medium text-gray-700"
                        >
                          Telefono
                        </label>
                        <div className="mt-1  sm:col-span-3">
                          <input
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.currentTarget.value)}
                            autoComplete="phone"
                            className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  {error && (
                    <p className="text-red-500">Error: {error.message}</p>
                  )}
                </div>

                {button && (
                  <a
                    onClick={isMessageSaved ? onPhoneClick : onMessageClick}
                    className="inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto text-lg leading-7 text-indigo-50 bg-indigo-500 hover:bg-indigo-600 font-medium focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm"
                  >
                    {button.text}
                  </a>
                )}
              </div>
            )}
          </div>

          {logoAfter && (
            <div className="relative max-w-4xl mx-auto">
              <img
                className="hidden absolute top-0 left-0 -mt-6 lg:-mt-12 -ml-6 lg:-ml-12 w-20 lg:w-auto z-10"
                src="flex-ui-assets/elements/circle3-yellow.svg"
                alt=""
              />
              <img
                className="hidden  absolute bottom-0 right-0 -mb-6 lg:-mb-10-mr-6 lg:-mr-12 w-20 lg:w-auto"
                src="flex-ui-assets/elements/dots3-blue.svg"
                alt=""
              />
              <img className="mx-auto relative" src={image} alt="" />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
