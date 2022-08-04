import Head from "next/head";
import { useRouter } from "next/router";

import ES from "../../views/es/library";
import EN from "../../views/en/library";

import Header from "../../components/Header";

export default function HomeApp({ posts }) {
  const router = useRouter();

  return (
    <div className="antialiased bg-body text-body font-body">
      <Header locale={router.locale} />
      <EN />
    </div>
  );
}
