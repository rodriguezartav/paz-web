import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

import { PropertyPopover } from './Property'
import { ExperiencePopover } from './Experience'
import { Mobile } from './Mobile'
import { GuidesPopover } from './Guides'

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/outline'
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

export function Header() {
  return (
    <Container>
      <Popover className="relative z-50 bg-white">
        <div className="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link
              href="/"
              passHref={true}
              aria-label="Home"
              className="flex items-center rounded-2xl bg-indigo-500 px-4"
            >
              <Logo className="  inline-block h-16 w-auto" />
              <span className="inline-block font-bold text-indigo-50">PAZ</span>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <PropertyPopover />

            <ExperiencePopover />

            <Link href="/pricing">
              <span className="text-base font-medium text-gray-500 hover:text-gray-900">
                Pricing
              </span>
            </Link>

            <GuidesPopover />
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link href="/podcast">
              <a className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent border-indigo-600 px-4 py-2 text-base font-medium text-indigo-600 shadow-sm hover:bg-indigo-700 hover:text-white">
                Podcast
              </a>
            </Link>
            <a
              href="/reservation"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Reservations
            </a>
          </div>
        </div>

        <Mobile />
      </Popover>
    </Container>
  )
}
