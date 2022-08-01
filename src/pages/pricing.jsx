import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { TextWithImage } from '@/components/TextWithImage'
import { Container } from '@/components/Container'
import { QuickLinks } from '@/components/QuickLinks'
import { SimpleImage } from '@/components/SimpleImage'

import { BeakerIcon } from '@heroicons/react/outline'
import { ImageSlider } from '@/components/ImageSlider'

import { HorizontalFeatures } from '@/components/HorizontalFeatures'

import {
  wellnessMap,
  adventureMap,
  propertyMap,
  mealMap,
} from '@/components/Header/Data'

export default function Home() {
  return (
    <>
      <Head>
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        <TextWithImage
          label="Osa Peninsula"
          title="3 Options to create memories for years to come"
          description={`Our favorite option is the Full Week All-Inclusive plan as it gives us the opportunity to give it all out while providing a complete experience for different types of persons.
        The community retreats are very special encounters meant for individual travelers with profound interest in self realization and self healing
        `}
          image="guide/matapalo/matapalo.webp"
        />

        <HorizontalFeatures features={propertyMap} />

        <CallToAction />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
