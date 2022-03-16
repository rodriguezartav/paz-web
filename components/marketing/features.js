/* This example requires Tailwind CSS v2.0+ */
import { SparklesIcon } from "@heroicons/react/outline";
import { PlusIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function Features1(props) {
  return (
    <div className="relative bg-white pt-16 pb-12 overflow-hidden">
      <div className="relative">
        {props.left && props.right && (
          <>
            <FeaturesLeft {...props.left} />
            <FeaturesRight {...props.right} />
          </>
        )}

        {props.left && !props.right && (
          <>
            <FeaturesLeft {...props.left} />
          </>
        )}

        {!props.left && props.right && (
          <>
            <FeaturesLeft {...props.right} />
          </>
        )}
      </div>
    </div>
  );
}

function FeaturesRight(props) {
  return (
    <div className="mt-14">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
          <div>
            <div>
              <span className="h-12 w-12 rounded-md flex items-center justify-center bg-lime-500">
                <SparklesIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
            </div>
            <div className="mt-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {props.title}
              </h2>
              <div className="block md:hidden mt-5 ">
                <img
                  className="  w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={`./images/${props.images[0]}`}
                  alt="Customer profile user interface"
                />
              </div>
              <Paragraphs items={props.paragraphs} />
            </div>
            <div className="  mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">{props.caption}</p>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1 hidden md:block">
          <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img
              className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
              src={`./images/${props.images[0]}`}
              alt="Customer profile user interface"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturesLeft(props) {
  return (
    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
      <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
        <div>
          <div>
            <span className="h-12 w-12 rounded-md flex items-center justify-center bg-lime-500">
              <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-stone-700">
              {props.title}
            </h2>
            <div className="block md:hidden mt-5 relative ">
              <img
                className=" block md:hidden mt-5 w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={`./images/${props.images[0]}`}
                alt="Inbox user interface"
              />
            </div>
            <Paragraphs items={props.paragraphs} />
          </div>
        </div>
        <div className="  mt-8 border-t border-gray-200 pt-6">
          <blockquote>
            <div>
              <p className="text-base text-gray-500">{props.caption}</p>
            </div>
          </blockquote>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0 hidden md:block">
        <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full relative">
          <img
            className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
            src={`./images/${props.images[0]}`}
            alt="Inbox user interface"
          />
        </div>
      </div>
    </div>
  );
}

function Paragraphs(props) {
  let [open, setOpen] = useState(false);

  return props.items
    .filter((item, index) => {
      if (index >= 0 && open) return true;
      else if (index == 0 && !open) return true;
      else if (index > 0 && !open) return false;
    })
    .map((item) => {
      return (
        <>
          {item.split("\n\r").map((line, index) => (
            <p key={index} className="mt-4 text-lg text-gray-500">
              {line}
            </p>
          ))}

          <div className="flex mt-5 justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-stone-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-stone-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            {!open && props.items.length > 1 && (
              <button
                onClick={(e) => setOpen(true)}
                type="button"
                className="  inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-stone-600 hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <PlusIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                More info
              </button>
            )}
          </div>
        </>
      );
    });
}
