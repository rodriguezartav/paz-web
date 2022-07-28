import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

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

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
            <MobileNavLink href="#pricing">Pricing</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/login">Sign in</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function OldHeader() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link
              href="/"
              passHref={true}
              aria-label="Home"
              className="flex items-center rounded-2xl bg-indigo-500 px-4"
            >
              <Logo className="  inline-block h-16 w-auto" />
              <span className="inline-block font-bold text-indigo-50">PAZ</span>
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="#features">Features</NavLink>

              <NavLink href="#pricing">Pricing</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href="/login">Sign in</NavLink>
            </div>
            <Button href="/podcasts" className="text-color-white bg-indigo-500">
              <span>Reservations</span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}

const wellnessMap = [
  { name: 'Temazcal & Polar Pool', href: '#', icon: InformationCircleIcon },
  { name: 'Intuitive Detox Workouts', href: '#', icon: BriefcaseIcon },
  { name: 'Natural Meditations', href: '#', icon: OfficeBuildingIcon },
  { name: 'Sound Healing', href: '#', icon: NewspaperIcon },
  { name: 'Self Realization', href: '#', icon: NewspaperIcon },
]

const adventureMap = [
  { name: 'Surf & Paddle School', href: '#', icon: UserGroupIcon },
  { name: 'Wildlife & Hiking Tours', href: '#', icon: GlobeAltIcon },
  { name: 'Pristine Beach Exploration', href: '#', icon: GlobeAltIcon },
  { name: 'Dolfine & Whale Whatching', href: '#', icon: BookmarkAltIcon },
  { name: 'Corcovado National Park', href: '#', icon: DesktopComputerIcon },
]

const blogPosts = [
  {
    id: 1,
    name: 'Visitors Guide to Paz',
    href: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'The Osa Peninsula Travel Guide',
    href: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
  },
]

const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'View All Products', href: '#', icon: CheckCircleIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]

const propertyMap = [
  {
    name: 'Beach House & Cabinas',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: 'beach-house',
    icon: ChartBarIcon,
  },

  {
    name: 'Spa Shamanic',
    description: "Your customers' data will be safe and secure.",
    href: 'spa-shamanic',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Beach Club',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: 'beach-club',
    icon: CursorClickIcon,
  },

  {
    name: 'Practice Temple',
    description: "Connect with third-party tools that you're already using.",
    href: 'practice-temple',
    icon: ViewGridIcon,
  },
]
const resources = [
  {
    name: 'The Osa Peninsula',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
  },
  {
    name: 'Visitors Guide to Paz',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
  },
  {
    name: 'Self Realization for Entreprenuers',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Property = (
  <Popover>
    {({ open }) => (
      <>
        <Popover.Button
          className={classNames(
            open ? 'text-gray-900' : 'text-gray-500',
            'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          )}
        >
          <span>Property</span>
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
          enterFrom="opacity-0 -translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-1"
        >
          <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform bg-white shadow-lg md:block">
            <div className="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
              {propertyMap.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a className="-m-3 flex flex-col justify-between rounded-lg p-3 hover:bg-gray-50">
                    <div className="flex md:h-full lg:flex-col">
                      <div className="flex-shrink-0">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                        <div>
                          <p className="text-base font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                        <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                          Learn more <span aria-hidden="true">&rarr;</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
            <div className="bg-gray-50">
              <div className="mx-auto max-w-7xl space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                {callsToAction.map((item) => (
                  <div key={item.name} className="flow-root">
                    <a
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">{item.name}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
)

const Experience = (
  <Popover>
    {({ open }) => (
      <>
        <Popover.Button
          className={classNames(
            open ? 'text-gray-900' : 'text-gray-500',
            'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          )}
        >
          <span>Experience</span>
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
          enterFrom="opacity-0 -translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-1"
        >
          <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform shadow-lg md:block">
            <div className="absolute inset-0 flex">
              <div className="w-1/2 bg-white" />
              <div className="w-1/2 bg-gray-50" />
            </div>
            <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
              <nav className="grid gap-y-10 bg-white px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wide text-gray-500">
                    Wellness
                  </h3>
                  <ul role="list" className="mt-5 space-y-6">
                    {wellnessMap.map((item) => (
                      <li key={item.name} className="flow-root">
                        <a
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                        >
                          <item.icon
                            className="h-6 w-6 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-4">{item.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wide text-gray-500">
                    Natural Adventures
                  </h3>
                  <ul role="list" className="mt-5 space-y-6">
                    {adventureMap.map((item) => (
                      <li key={item.name} className="flow-root">
                        <a
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                        >
                          <item.icon
                            className="h-6 w-6 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-4">{item.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
              <div className="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wide text-gray-500">
                    All inclusive meals
                  </h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {blogPosts.map((post) => (
                      <li key={post.id} className="flow-root">
                        <a
                          href={post.href}
                          className="-m-3 flex rounded-lg p-3 hover:bg-gray-100"
                        >
                          <div className="hidden flex-shrink-0 sm:block">
                            <img
                              className="h-20 w-32 rounded-md object-cover"
                              src={post.imageUrl}
                              alt=""
                            />
                          </div>
                          <div className="w-0 flex-1 sm:ml-8">
                            <h4 className="truncate text-base font-medium text-gray-900">
                              {post.name}
                            </h4>
                            <p className="mt-1 text-sm text-gray-500">
                              {post.preview}
                            </p>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    {' '}
                    View all posts <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
)

const Mobile = (
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
                <Link key={property.name} href={`/property/${property.href}`}>
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
            <a
              href="#"
              className="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Wellness Programs
            </a>

            <a
              href="#"
              className="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Natural Adventures
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Healthy Meals
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Surf School
            </a>
          </div>

          <div className="mt-6">
            <a
              href="#"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-200 px-4 py-2 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-700"
            >
              Travel Guides
            </a>
          </div>

          <div className="mt-4">
            <a
              href="#"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Reserve today
            </a>
          </div>
        </div>
      </div>
    </Popover.Panel>
  </Transition>
)

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
            {Property}

            {Experience}

            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Inspirational Studio
            </a>

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
                            <a
                              key={resource.name}
                              href={resource.href}
                              className="-m-3 block rounded-md p-3 hover:bg-gray-50"
                            >
                              <p className="text-base font-medium text-gray-900">
                                {resource.name}
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                {resource.description}
                              </p>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a
              href="#"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Reservations
            </a>
          </div>
        </div>

        {Mobile}
      </Popover>
    </Container>
  )
}
