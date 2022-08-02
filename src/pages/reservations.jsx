import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'

export default function Register() {
  return (
    <>
      <Head>
        <title>Paz Reservations</title>
      </Head>

      <div className="mx-20 mt-10 flex flex-col">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
        <div className="mt-20">
          <h2 className="text-lg font-semibold text-gray-900">
            We'll be taking reservations very soon
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Please email roberto@paz.co.cr for more information
          </p>
        </div>
      </div>
    </>
  )
}
