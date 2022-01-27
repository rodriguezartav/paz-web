import matter from "gray-matter";
import Head from "next/head";
import { useRouter } from "next/router";

import Home from "../components/Home";
import Texts from "../texts";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";

export default function HomeApp({}) {
  return (
    <div>
      <Home texts={Texts} posts={{}} />
    </div>
  );
}
