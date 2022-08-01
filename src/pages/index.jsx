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
        <Hero />

        <TextWithImage
          label="Osa Peninsula"
          title="Feels like being in a National Park"
          description={`The Osa Peninsula offers the opportunity to experience a tropical rainforest triving with life. 
          You'll see, feel and hear the intensity of the most biodiverse place in world .
          There are no pictures or words that can describe it. It's such an impression on the senses, that guests need a day or two to get used to it.
          `}
          image="guide/matapalo/matapalo.webp"
        />

        <HorizontalFeatures features={propertyMap} />

        <ImageSlider
          images={[
            { src: 'house/outside/from_outside.jpeg', width: 300 },
            { src: 'forest/big_trees.jpg', width: 250 },
            { src: 'wildlife/maccaw.webp', width: 280 },
            { src: 'wildlife/perezozo.jpeg', width: 250 },
            { src: 'forest/barrigon_alto.jpeg', width: 200 },
            { src: 'wildlife/titis.webp', width: 250 },
          ]}
        />

        <TextWithImage
          label="Experience"
          title="A Costa Rican adventure with fun activities and great food"
          description={`
          We want you to experience the pura vida spirit of having an adventure with friends in Costa Rica.
          Bonefires, fishing and cooking with wood, bbq's, day trips to waterfalls. Mudbaths, tide pools, paddleboard and surfing.
          `}
          image="fun/fire2.jpg"
        />

        <HorizontalFeatures features={adventureMap.concat(mealMap)} />

        <ImageSlider
          images={[
            {
              src: 'beach/beach_side.jpeg',
              width: 250,
              text: { lable: 'Beach Walking' },
            },
            {
              src: 'beach/IMG_3119.jpeg',
              width: 250,
              text: { lable: 'Beach Walking' },
            },
            {
              src: 'fun/fuego_candelas.jpeg',
              width: 250,
              text: { lable: 'Beach Walking' },
            },
            {
              src: 'lounge/beach_kid.jpeg',
              width: 250,
              text: { lable: 'Beach Walking' },
            },
            {
              src: 'forest/barrigon_alto.jpeg',
              width: 250,
              text: { lable: 'Beach Walking' },
            },
            {
              src: 'wildlife/titis.webp',
              width: 250,
              text: { lable: 'Beach Walking' },
            },
          ]}
        />

        <TextWithImage
          label="Wellness"
          right={true}
          title="Upgrade your perspective of life, nature and yourself"
          description={`The Osa Peninsula is a mystic land of infinite profundity. Discovering it ignited a 20-year journey of self discovery and ultimately healing.
          
          When you arrive at Paz you'll feel an opportunity to use your trip to improve your life. Our Meditation course includes the spa, movement, science, natural and advanced meditations to empower you to take control of your health both physical and mental.
          `}
          image="lounge/templo_from_back.jpg"
        />

        <HorizontalFeatures features={wellnessMap} />

        <ImageSlider
          images={[
            {
              src: 'spa/temazcal/master.jpg',
              width: 250,
              text: { lable: 'Beach Walking' },
            },
            {
              src: 'beach/IMG_3119.jpeg',
              width: 250,
              text: { lable: 'Beach Walking' },
            },
            {
              src: 'fun/fuego_candelas.jpeg',
              width: 250,
              text: { lable: 'Beach Walking' },
            },
            {
              src: 'lounge/beach_kid.jpeg',
              width: 250,
              text: { lable: 'Beach Walking' },
            },
            {
              src: 'forest/barrigon_alto.jpeg',
              width: 250,
              text: { lable: 'Beach Walking' },
            },
            {
              src: 'wildlife/titis.webp',
              width: 250,
              text: { lable: 'Beach Walking' },
            },
          ]}
        />

        <CallToAction />

        <Pricing />

        <Faqs />
      </main>
      <Footer />
    </>
  )
}
