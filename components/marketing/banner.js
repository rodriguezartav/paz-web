/* This example requires Tailwind CSS v2.0+ */
import { XIcon } from "@heroicons/react/outline";

export default function Example() {
  return (
    <div className="relative bg-stone-500">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            <span className="hidden md:inline">
              This site is still in construction
            </span>
            <span className="block sm:ml-2 sm:inline-block">
              <a href="#" className="text-white font-bold underline">
                {" "}
                Launching Soon <span aria-hidden="true">&rarr;</span>
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
