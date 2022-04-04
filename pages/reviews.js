import Head from "next/head";
import { useRouter } from "next/router";
import { promises as fs } from "fs";
import path from "path";
import Reviews from "../views/Reviews";
import Texts from "../texts";

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "pages/posts");
  const filenames = await fs.readdir(postsDirectory);

  const files = await Promise.all(
    filenames.map(async (filename) => {
      const { meta } = await import("./posts/" + filename);

      return { ...meta, filename: filename };
    })
  );

  const posts = files.map((file) => {
    return {
      path: `/posts/${file.filename.replace(".mdx", "")}`,
      ...file,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function HomeApp({ posts }) {
  return (
    <div>
      <Reviews texts={Texts} posts={posts} />
    </div>
  );
}
