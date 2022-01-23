import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { useRouter } from "next/router";

import Home from "../components/Home";
import Texts from "../texts";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";

export default function HomeApp({ posts }) {
  return (
    <div>
      <Home texts={Texts} posts={posts} />
    </div>
  );
}

export const getStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), "pages", "posts");
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((filename) => {
    const { meta } = require("./posts/" + filename);
    return { ...meta, slug: "posts/" + filename };
  });
  return {
    props: {
      posts,
    },
  };
};
