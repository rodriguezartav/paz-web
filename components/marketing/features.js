import { useEffect, useState, useRef, createRef } from "react";
/* This example requires Tailwind CSS v2.0+ */
import { SparklesIcon } from "@heroicons/react/outline";
import { PlusIcon } from "@heroicons/react/solid";

import Carousel from "./carousel";

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
      <div className="lg:mx-auto lg:max-w-8xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="px-4 max-w-xl mx-auto  sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2  ">
          <div className="lg:mr-20">
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
                <Carousel
                  images={props.images}
                  classes={
                    "w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  }
                  height={`100%`}
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
            <Carousel
              images={props.images}
              classes={
                "w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
              }
              height={`100%`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturesLeft(props) {
  return (
    <div className="lg:mx-auto lg:max-w-8xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
      <div className="px-4 lg:ml-20 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
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
              <Carousel
                images={props.images}
                cls={
                  "block md:hidden mt-5 w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                }
                height={`100%`}
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
          <Carousel
            images={props.images}
            cls={
              "w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
            }
            height={`100%`}
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
