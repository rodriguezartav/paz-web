import Head from "next/head";
import { useRouter } from "next/router";

import ES from "../views/es/general";
import EN from "../views/en/general";

import Header from "../components/Header";

export default function HomeApp({ posts }) {
  const router = useRouter();

  return (
    <div className="antialiased bg-body text-body font-body">
      <Header locale={router.locale} />
      {router.locale == "en" ? <EN /> : <ES />}
    </div>
  );
}
