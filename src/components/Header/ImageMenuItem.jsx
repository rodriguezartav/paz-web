import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import SimpleImage from '@/components/SimpleImage'

export function ImageMenuItem({ item }) {
  return (
    <Link
      href={item.href}
      className="-m-3 flex flex-col justify-between rounded-lg p-3 hover:bg-gray-50"
    >
      <div className="flex md:h-full lg:flex-col">
        <div className="flex-shrink-0">
          <SimpleImage
            className="w-28 rounded-xl"
            width={100}
            src={item.image}
            alt={`${item.name} Image`}
          ></SimpleImage>
        </div>
        <div className="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
          <div>
            <p className="text-base font-medium text-gray-900">{item.name}</p>
            <p className="mt-1 text-sm text-gray-500">{item.description}</p>
          </div>
          <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
            Learn more <span aria-hidden="true">&rarr;</span>
          </p>
        </div>
      </div>
    </Link>
  )
}
