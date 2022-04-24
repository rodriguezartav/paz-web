import Head from "next/head";
import { useRouter } from "next/router";
import { promises as fs } from "fs";
import path from "path";
import Osa from "../views/OsaTravelGuide";
import Texts from "../texts";

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/api/guidedItems`);
  const guideditems = await res.json();

  const resTypes = await fetch(`${process.env.API_URL}/api/guideTypes`);

  const guideTypes = await resTypes.json();

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

  const items = guideditems.map((item) => {
    return item;
  });

  return {
    props: {
      guidedItems: items,
      filters: guideTypes,
      posts,
    },
  };
}

export default function HomeApp({ posts, guidedItems, filters }) {
  return (
    <div>
      <Osa
        texts={Texts}
        filters={filters}
        guidedItems={guidedItems}
        posts={posts}
      />
    </div>
  );
}
