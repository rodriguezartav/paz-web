import Link from 'next/link'

import { Logo } from '@/components/Logo'

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

import { propertyMap } from './Data'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Mobile() {
  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
      >
        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <div>
                <Link
                  href="/"
                  passHref={true}
                  aria-label="Home"
                  className="flex items-center rounded-2xl bg-indigo-500 px-4"
                >
                  <Logo className=" inline-block h-16 w-auto" />
                  <span className="inline-block font-bold text-indigo-50">
                    PAZ
                  </span>
                </Link>
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid grid-cols-1 gap-7">
                {propertyMap.map((property) => (
                  <Link key={property.name} href={`${property.href}`}>
                    <a className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white">
                        <property.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        {property.name}
                      </div>
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className="py-6 px-5">
            <div className="grid grid-cols-2 gap-4">
              <Link href="/experience/wellness">
                <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Wellness Programs
                </a>
              </Link>

              <Link href="/experience/adventure">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Natural Adventures
                </a>
              </Link>

              <Link href="/experience/food">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Healthy Meals
                </a>
              </Link>

              <Link href="/experience/adventure#surf">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Surf School
                </a>
              </Link>
            </div>

            <div className="mt-6">
              <Link href="/guides">
                <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-200 px-4 py-2 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-700">
                  Travel Guides
                </a>
              </Link>
            </div>

            <div className="mt-4">
              <Link href="/reservations">
                <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                  Reserve today
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  )
}
