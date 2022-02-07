/* This example requires Tailwind CSS v2.0+ */
import { MoonIcon, SparklesIcon } from "@heroicons/react/outline";

export default function Example() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-violet-500">
                  <MoonIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  The Beach Lounge
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Discover why our little secluded beach is a favorite among
                  scarlet maccaws and the 4 species of monkeys. Spend your days
                  - and nights - alone under the shadow of palm trees and the
                  sound of waves.
                </p>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;All beaches in Costa Rica are public, but our small
                    beach is so secluded you'll see more wildlife than people
                    walking by.&rdquo;
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="./images/beach.jpg"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
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
                  Comfy Jungle house
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Floor to cealing screened windows to watch all the wildlife as
                  they flow by the house. Big Ass Fans &trade; for superb
                  ventilation and 8 resort grade beds. Split the rooms for boys
                  and girls, parents and kids and add a fun camping vibe to your
                  adventure!
                </p>

                <p className="mt-4 text-lg text-gray-500">
                  Full kitchen with condiments and supplies. Bring your food -
                  or - send us your shopping list and it will be sorted when you
                  arrive - or request a typical costarican cook: the
                  friendliness and love of our culture is the main condiment in
                  our gastronomy.
                </p>

                <p className="mt-4 text-lg text-gray-500">
                  Ask us for a free upgrade and we'll setup big glaming tents
                  right on the sand for the best posible experience in Costa
                  Rica.
                </p>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6">
                <blockquote>
                  <div>
                    <p className="text-base text-gray-500">
                      &ldquo;The house is 1690 square feet hermetically
                      screened. Two bedrooms, two bathrooms with hot water,
                      kitchen, dinning room and lounge. Additional space for 8
                      extra people in glamping tents with a max occupancy of
                      16&rdquo;
                    </p>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="./images/house.jpg"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
