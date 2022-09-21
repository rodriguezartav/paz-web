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

export default function SideImage({ image }) {
  return (
    <div className="w-full px-4 md:w-1/2">
      <div className="relative mx-auto max-w-max md:mr-0">
        <img
          className="absolute -left-8 -top-8 z-10 w-28 text-yellow-400 md:w-auto"
          src="flex-ui-assets/elements/circle3-green.svg"
          alt=""
        />
        <img
          className="absolute -right-2 -bottom-8 z-10 w-28 text-blue-500 md:w-auto"
          src="flex-ui-assets/elements/dots3-yellow.svg"
          alt=""
        />
        <SimpleImage
          transformations={[{ height: 1100 }]}
          className="rounded-2xl"
          src={image}
          width={800}
        />
      </div>
    </div>
  )
}
