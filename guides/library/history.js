import Head from 'next/head'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import EN from '../views/en/history'

import Header from '../components/Header'

export default function HomeApp({ posts }) {
  const router = useRouter()

  return (
    <>
      <NextSeo
        title="The history of Paz de Mono | Osa Peninsula | Costa Rica"
        description="Mar adentro y viendo los colores del cielo le pregunté al atardecer: como le pongo a este lugar?. Conozca mas sobre la historia de Paz"
        canonical="https://paz.co.cr/history"
        facebook-domain-verification="46be10golmw8ehrdc2rcx6qn1v92e8"
        openGraph={{
          url: 'https://paz.co.cr/history',
          title: 'Paz Corcovado | History | Osa Peninsula | Costa Rica',
          description:
            'Mar adentro y viendo los colores del cielo le pregunté al atardecer: como le pongo a este lugar?',
          images: [
            {
              url: 'https://ik.imagekit.io/paz/tr:w-1800/images/history/corcovado.png?ik-sdk-version=react-1.1.0',
              width: 1800,
              height: 1000,
              alt: 'Corcovado National Park',
              type: 'image/jpeg',
            },
          ],
        }}
      />
      <div className="bg-body text-body font-body antialiased">
        <Header locale={router.locale} />
        <EN />
      </div>
    </>
  )
}
