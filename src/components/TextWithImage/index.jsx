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

import Text from './Text'
import SideImage from './SideImage'

export function TextWithImage(props) {
  let right = <Text />
  let left = <SideImage />
  if (props.right) {
    right = <SideImage />
    left = <Text />
  }

  let withNoYMargin = props.withNoYMargin || false

  let contents = (
    <section
      className={`overflow-hidden bg-white ${
        !withNoYMargin && 'py-24 md:py-32'
      }`}
      style={{
        backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap lg:items-center">
          {left}
          {right}
        </div>
      </div>
    </section>
  )

  if (props.containerLess) return contents

  return <Container className="">{contents}</Container>
}
