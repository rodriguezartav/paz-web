import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import SimpleImage from '@/components/SimpleImage'
import { PropertyPopover } from './Property'
import { ExperiencePopover } from './Experience'

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  DocumentReportIcon,
  ChartBarIcon,
  RefreshIcon,
  CheckCircleIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

import {
  wellnessMap,
  adventureMap,
  blogPosts,
  callsToAction,
  propertyMap,
  resources,
} from './Data'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Guides() {
  return (
    <div className="py-4">
      <div className=" flex flex-wrap justify-around">
        {resources.map((resource) => (
          <Link
            className="mb-8 w-full px-4 hover:bg-gray-50 md:w-1/4  lg:w-1/4"
            key={resource.name}
            href={resource.href}
          >
            <div className="">
              <div className="mb-6 block overflow-hidden rounded-md">
                <SimpleImage
                  className="w-28 rounded-xl"
                  width={100}
                  src={resource.image}
                  alt={resource.alt || `${resource.name} Image`}
                ></SimpleImage>
              </div>

              <div className="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                <div>
                  <p className="text-base font-medium text-gray-900">
                    {resource.name}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {resource.description}
                  </p>
                </div>
                <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                  Learn more <span aria-hidden="true">&rarr;</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export function GuidesPopover() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? 'text-gray-900' : 'text-gray-500',
              'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            )}
          >
            <span>Wellness & Travel Guides</span>
            <ChevronDownIcon
              className={classNames(
                open ? 'text-gray-600' : 'text-gray-400',
                'ml-2 h-5 w-5 group-hover:text-gray-500'
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {resources.map((resource) => (
                    <Link key={resource.name} href={resource.href}>
                      <div className="-m-3 block rounded-md p-3 hover:bg-gray-50">
                        <p className="text-base font-medium text-gray-900">
                          {resource.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {resource.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
