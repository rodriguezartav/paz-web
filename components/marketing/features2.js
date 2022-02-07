/* This example requires Tailwind CSS v2.0+ */
import {
  EmojiHappyIcon,
  GlobeAltIcon,
  GlobeIcon,
  InboxIcon,
  SparklesIcon,
} from "@heroicons/react/outline";

export default function Example() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-yellow-600">
                  <EmojiHappyIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-stone-700">
                  Natural Wellness
                </h2>
                <p className=" text-lg text-lime-800">
                  It's simple and it's free.
                </p>

                <p className="mt-4 text-lg text-gray-500">
                  Discover wellness is the traditional costarrican way - it's
                  called Pura Vida and it represents the way we use natural
                  beauty. Leave your troubles behind, find a magical spot, and
                  have a great time.
                </p>

                <p className="mt-4 text-lg text-gray-500">
                  This is the most biodiverse place on earth, the most magical
                  place in Costa Rica, the last lowlands rain forest in Central
                  America, the home of the Jaguar, the Tapir, the Harp Eagle,
                  where whales come to give birth - we don't need to add
                  anything!
                </p>

                <p className="mt-4 text-lg text-gray-500">
                  Activities are included, and there are over 45 of them to
                  choose from. Some are in the property and some require hiking.
                  Some require equipment, like paddle boards and kayaking. The
                  solo-bonefire under the stars is a favorite!
                </p>

                <p className="my-4 max-w-2xl text-md bg-lime-50 border-2 p-3 text-stone-500 lg:mx-auto">
                  The root of our disconection is the speed we run our lives. So
                  calm down, be silent, stay still, put down the heavy weight of
                  thought as to slow down enought to re-join the flow of nature.
                  You'll know, when you hear the song of the forest...
                </p>

                <p className="mt-4 text-lg text-gray-500">
                  Our staff takes care of the heavylifting and I
                  (@roberto_rodriguez_artavia) am available most of the time for
                  one-on-one sessions.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="./images/wellness.jpg"
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
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-green-600">
                  <GlobeIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  The Jungles of Peace in Corcovado
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Our 2 acre property is located on one of the last patches of
                  primary rainforest on the beach. Everyone, specially animals
                  love it here.
                </p>

                <p className="mt-4 text-lg text-gray-500">
                  Part of it is because of our scientific arm with the Saimiri
                  Non-Profit organization. Most people think about tress in
                  terms of size, but whats important is the food they provide.
                  So we know what food, trees and plants to preserve for the
                  whole food chain.
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  But we suspect that they also love the beach! We are
                  constantly visited by the four species of monkeys, scarlet
                  maccaws, toucans, pavones, pizontes, ant eaters, the Tapir and
                  wild hogs have visited here. Tracks and sightings of felines
                  are possible. You can see the whales from the beach, swim with
                  turtles.
                </p>

                <p className="mt-4 text-lg text-gray-500">
                  Instead of having the house right on the beach, we gave 150
                  feet of space protecting a beautifll patch of primary forest
                  with ancient gigantic trees. It's an amazing ecosystem full of
                  the stangest insects, butterflies, beautifill birds and the
                  coolest birds of pray. A beachfront primary forest is very
                  rare this days and it's worth preserving.
                </p>

                <p className="mt-4 text-lg text-gray-500">
                  Life and sound is so abundant that it takes a while to get
                  used to it.
                </p>

                <p className="mt-4 text-lg text-gray-500">This is for real!</p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="./images/jungle.jpg"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
