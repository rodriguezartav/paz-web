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

const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
      author: "Emily Selman",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    // More reviews...
  ],
};

import { StarIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Review(props) {
  return (
    <div>
      <label
        htmlFor="about"
        className="block text-sm font-medium text-gray-700"
      >
        {props.label}
      </label>
      <div className="flex items-center">
        {[0, 1, 2, 3, 4].map((rating) => (
          <StarIcon
            key={rating}
            className={classNames(
              reviews.average > rating ? "text-yellow-400" : "text-gray-300",
              "flex-shrink-0 h-5 w-5"
            )}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}

export default function Example() {
  return (
    <div className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div className="sm:col-span-6 mt-8">
            <Review label={"How would you rate the beach lounge"} />
          </div>

          <div className="mt-6 grid grid-cols-1  gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              {" "}
              <div className="sm:col-span-6 ">
                <Review label={"Rate the house"} />
              </div>
            </div>
            <div className="sm:col-span-3">
              <div className="sm:col-span-6">
                <Review label={"Rate your Host"} />
              </div>
            </div>
          </div>

          <div className="sm:col-span-6 mt-8">
            <Review label={"How would you rate your general stay"} />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Your name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Paz Wifi Password
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
                <p className="mt-2 text-sm text-gray-500">To check it's you</p>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700"
              >
                Review ( Public )
              </label>
              <div className="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                  defaultValue={""}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Write a few sentences about yourself.
              </p>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700"
              >
                Please share the reason behind any low rating, so we can improve
              </label>
              <div className="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                  defaultValue={""}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Let us know is something needs maintenance or improvement
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
