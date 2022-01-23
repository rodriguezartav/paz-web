import Head from "next/head";
import { useRouter } from "next/router";

import Header from "../components/Header";
import Email from "../components/Email";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";

export default function HomeApp() {
  const router = useRouter();

  const { status, data } = useSession({
    required: true,
    onUnauthenticated() {
      signIn("email");
    },
  });

  if (status === "loading") {
    return "Loading or not authenticated...";
  }

  return (
    <div>
      <Head>
        <title>Mogi.ai</title>
        <meta name="description" content="Mogi.ai" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header small={true}>
        <header className="relative py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white">
              {data.user.customer_name} Email Analytics
            </h1>
          </div>
        </header>
      </Header>

      <Email />
    </div>
  );
}
