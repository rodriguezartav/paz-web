import { useId } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshotContacts from '@/images/screenshots/contacts.png'
import screenshotInventory from '@/images/screenshots/inventory.png'
import screenshotProfitLoss from '@/images/screenshots/profit-loss.png'

import { BeakerIcon } from '@heroicons/react/solid'
import SimpleImage from './SimpleImage'

const features = [
  {
    name: 'Science',
    summary: 'Exploring the nature of the universe',
    description:
      'We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.',
    image: screenshotProfitLoss,
    icon: function ReportingIcon() {
      let id = useId()
      return (
        <>
          <defs>
            <linearGradient
              id={id}
              x1="11.5"
              y1={18}
              x2={36}
              y2="15.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".194" stopColor="#fff" />
              <stop offset={1} stopColor="#6692F1" />
            </linearGradient>
          </defs>
          <path
            d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
            stroke={`url(#${id})`}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )
    },
  },
  {
    name: 'Play',
    summary: 'Realizing Nature within and without',
    description: `We discover our humanity through interaction and our best version manifest when we don't think while having fun.
      We add meaningfulness to activities like surfing, hicking, swimming, bonefires and even dancing.
      `,
    image: screenshotInventory,
    icon: function InventoryIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            opacity=".3"
            d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
        </>
      )
    },
  },
  {
    name: 'Learn',
    summary: 'Listening to our voice',
    description: `The global & standarized society is damaging our mental health by forcing us into molds. The undeniable path to existencial suffering ( mental health ) starts by not listening and acting autentically. 
      Everything in Paz exists to help our visitors remember their super powers and recover the belief in themselfs.`,
    image: screenshotContacts,
    icon: function ContactsIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
            fill="#fff"
          />
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </>
      )
    },
  },
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? 'bg-blue-600' : 'bg-slate-500'
        )}
      >
        <feature.icon className="mx-auto h-8 w-8 stroke-white py-2" />
      </div>
      <h3
        className={clsx(
          'mt-6 text-left text-sm font-medium',
          isActive ? 'text-blue-600' : 'text-slate-600'
        )}
      >
        {feature.parent}
      </h3>
      <p className="mt-2 text-left font-display text-xl text-slate-900">
        {feature.name}
      </p>
      <p className="mt-4  mb-10 text-left text-sm text-slate-600">
        {feature.description}
      </p>
    </div>
  )
}

function FeaturesMobile(props) {
  return (
    <div className=" flex flex-col gap-y-10 overflow-hidden px-6  sm:px-6 lg:hidden">
      {props.features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop(props) {
  return (
    <Tab.Group as="div" className="hidden  lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-4 gap-x-8 px-10">
            {props.features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
        </>
      )}
    </Tab.Group>
  )
}

export function HorizontalFeatures(props) {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="  lg:pb-22   pb-4"
    >
      {props.headline && (
        <div className="mx-auto max-w-2xl md:text-left">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Activities that are inspired by nature
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            At Paz we have deep appreciation for all aspects of nature. The
            universe we are part and the experiences it provides to realize who
            we are.
          </p>
        </div>
      )}
      <FeaturesMobile {...props} />
      <FeaturesDesktop {...props} />
    </section>
  )
}
