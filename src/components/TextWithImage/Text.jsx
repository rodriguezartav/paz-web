import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import SimpleImage from '@/components/SimpleImage'

export default function Text() {
  return (
    <div className="mb-16  w-full px-4 md:mb-0 md:w-1/2">
      <span className="mb-4 inline-block rounded-full bg-violet-100 py-px px-2 text-xs font-medium uppercase leading-5 text-violet-500 shadow-sm">
        Features
      </span>
      <h1 className="text-coolGray-900 mb-8 text-4xl font-bold leading-tight tracking-tighter md:text-5xl">
        Gain more insight into how people use your
      </h1>
      <p className="text-coolGray-500 mb-6 text-lg font-medium md:text-xl">
        With our integrated CRM, project management, collaboration and invoicing
        capabilities, you can manage every aspect of your business in one secure
        platform.
      </p>
      <a
        className="inline-block w-full rounded-md bg-violet-500 py-4 px-5 text-center text-base font-medium leading-4 text-violet-50 shadow-sm hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 md:w-auto"
        href="#"
      >
        Get Started
      </a>
    </div>
  )
}
