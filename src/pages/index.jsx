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

export default function Home() {
  return (
    <>
      <Head>
        <title>Paz - Costa Rican retreats</title>
        <meta
          name="description"
          content="Paz's approach to Wellness is to have lots of fun adventures in paradise. Osa Peninsula, Costa Rica"
        />
      </Head>
      <Header />
      <main>
        <Hero />

        <TextWithImage
          label="Osa Peninsula"
          title="Una experiencia mística en la Peninsula de Osa"
          description={`
          El día a día moderno es la receta perfecta para agotar la energía del cuerpo, la mente y desconectarnos del espíritu humano.
          Paz Corcovado es guiado por la madre naturaleza y esta enfocado enseñar a recargar energía durante actividades de aventura con ejercicios de conexión natural.
          `}
          image="guide/matapalo/matapalo.webp"
        />

        <h1 className="mb-0 ml-10 font-display  text-4xl   leading-tight tracking-tight  text-indigo-400   sm:text-4xl   md:text-5xl  ">
          Los maestros de Paz Corcovado
        </h1>

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
          label="Osa Peninsula"
          title="Una inmersión continua en la naturaleza. Segura y comoda "
          description={`El diseño con cientos de iteraciones permite que uno se sienta afuera, disfrutando de los beneficios de acampar, pero estando adentro con comodidad.
          Construido a mano y con amor, obtenemos la energia del sol, el agua de la tierra y estamos en medio de un bosque primario donde todos los animales se sienten protegidos.
          `}
          image="guide/matapalo/matapalo.webp"
        />

        <h1 className="mb-0 ml-10 font-display  text-4xl   leading-tight tracking-tight  text-indigo-400   sm:text-4xl   md:text-5xl  ">
          Las instalaciones
        </h1>

        <ImageSlider
          images={[
            { src: 'house/outside/from_outside.jpeg', width: 320 },
            { src: 'forest/big_trees.jpg', width: 320 },
            { src: 'wildlife/maccaw.webp', width: 320 },
            { src: 'wildlife/perezozo.jpeg', width: 320 },
            { src: 'forest/barrigon_alto.jpeg', width: 320 },
            { src: 'wildlife/titis.webp', width: 320 },
          ]}
        />

        <TextWithImage
          label="Osa Peninsula"
          title="Un paseo lleno de aventura y diversión, pero muy bien pensado para que sea sanador"
          description={`El stress y sus amigos son el resultado de la educación de una cultura colonizadora limitada a lo mental la cual nunca podra conocer las mas poderosas facetas del ser humano.
          En la naturaleza estan todas las respuestas, todos los problemas ya resueltos. Mas importante, esta aun guardado el espacio en la mesa para cuando decidamos regresar.
          `}
          image="guide/matapalo/matapalo.webp"
        />

        <h1 className="mb-0 ml-10 font-display  text-4xl   leading-tight tracking-tight  text-indigo-400   sm:text-4xl   md:text-5xl  ">
          Las actividades
        </h1>

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

        <TextWithImage
          right={true}
          label="Osa Peninsula"
          title="La naturaleza es la autoridad de la vida"
          description={`El stress y sus amigos son el resultado de la educación de una cultura colonizadora limitada a lo mental la cual nunca podra conocer las mas poderosas facetas del ser humano.
          En la naturaleza estan todas las respuestas, todos los problemas ya resueltos. Mas importante, esta aun guardado el espacio en la mesa para cuando decidamos regresar.
          `}
          image="guide/matapalo/matapalo.webp"
        />

        <CallToAction />

        <Pricing />

        <Faqs />
      </main>
      <Footer />
    </>
  )
}
