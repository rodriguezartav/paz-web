import Link from 'next/link'

import { Icon } from '@/components/Icon'

import { TextWithImage } from './TextWithImage'

export function ImageForMd({ title, description, href, right }) {
  return (
    <TextWithImage right={right} withNoYMargin={true} containerLess={true} />
  )
}
