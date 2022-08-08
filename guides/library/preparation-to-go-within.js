import Head from "next/head";
import { useRouter } from "next/router";

import EN from "../../views/en/library/preparation-to-go-within";

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
