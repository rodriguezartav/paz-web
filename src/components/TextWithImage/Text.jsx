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

export default function Text({ title, description, label, button, children }) {
  let textParts = description.split('\n')

  return (
    <div className="  w-full px-4 md:mb-0 md:w-1/2">
      <span className="mb-4 mt-4 inline-block rounded-full bg-violet-100 py-px px-2 text-xs font-medium uppercase leading-5 text-violet-500 shadow-sm">
        {label}
      </span>
      <h1 className="mb-8 text-4xl font-bold leading-tight tracking-tighter text-indigo-400 md:text-5xl">
        {title}
      </h1>
      <p className="mb-6 text-lg font-medium text-stone-500 md:text-xl">
        {textParts.map((item) => {
          return <span className="block mt-3">{item}</span>
        })}
      </p>
      {button && (
        <a
          className="inline-block w-full rounded-md bg-violet-500 py-4 px-5 text-center text-base font-medium leading-4 text-violet-50 shadow-sm hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 md:w-auto"
          href="#"
        >
          {button.text}
        </a>
      )}
      {children && children}
    </div>
  )
}
