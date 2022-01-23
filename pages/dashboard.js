import Head from "next/head";
import { useRouter } from "next/router";

import Header from "../components/Header";
import Settings from "../components/Settings";

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
      <Header />
      <Settings />
    </div>
  );
}
