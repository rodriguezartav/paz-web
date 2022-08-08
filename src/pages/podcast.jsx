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
  activityMap,
  adventureMap,
  propertyMap,
  mealMap,
} from '@/components/Header/Data'

function Pod(props) {
  return (
    <div className="mb-8 w-full px-4 md:w-1/2">
      <a className="mb-6 block overflow-hidden rounded-md" href="#">
        <img
          className="w-full"
          src="flex-ui-assets/images/blog/effect.jpg"
          alt=""
        />
      </a>
      <a
        className="text-coolGray-800 hover:text-coolGray-900 mb-4 inline-block text-2xl font-bold leading-tight hover:underline md:text-3xl"
        href="#"
      >
        A small business is only as good as its tools and it is totally true.
      </a>
      <a
        className="inline-flex items-center text-base font-semibold text-violet-500 hover:text-violet-600 md:text-lg"
        href="#"
      >
        <span className="mr-3">Read Post</span>
        <svg
          width={8}
          height={10}
          viewBox="0 0 8 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Paz - Podcast</title>
        <meta
          name="description"
          content="Paz's approach to Wellness is to have lots of fun adventures in paradise. Osa Peninsula, Costa Rica"
        />
      </Head>
      <Header />
      <main>
        <section
          className="bg-white py-24"
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left top',
          }}
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 text-center md:max-w-5xl">
              <span className="mb-4 inline-block rounded-full bg-violet-100 py-px px-2 text-xs font-medium uppercase leading-5 text-violet-500 shadow-sm">
                Podcast
              </span>
              <h3 className="text-darkCoolGray-900 mb-4 text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
                Paz Inspiration Center
              </h3>
              <p className="text-coolGray-500 text-lg font-medium md:text-xl"></p>
            </div>

            <div dangerouslySetInnerHTML={{ __html: episode1 }}></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

const episode1 = `<div id="buzzsprout-player-11097332"></div><script src="https://www.buzzsprout.com/2031327/11097332-the-intersection-between-drugs-and-spirituality.js?container_id=buzzsprout-player-11097332&player=small" type="text/javascript" charset="utf-8"></script>`
