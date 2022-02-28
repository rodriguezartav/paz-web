/* This example requires Tailwind CSS v2.0+ */
import { MoonIcon, SparklesIcon } from "@heroicons/react/outline";

import GridList from "./gridlist";

export default function Example() {
  return (
    <div className="relative bg-white pt-4 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 ">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Our latest posts
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  This website has lot's of information, but check out these
                  videos if you'd like to meet us.
                </p>
              </div>
              <GridList />
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div></div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
