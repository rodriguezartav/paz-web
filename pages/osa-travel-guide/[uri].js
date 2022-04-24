import Head from "next/head";
import Home from "../../views/Osa";
import Texts from "../../texts";
import GuideItem from "../../views/GuideItem";

import GuidedItems from "../../data/guide";

export async function getStaticPaths() {
  // Return a list of possible value for id

  const res = await fetch("http://localhost:3000/api/guidedItems");
  const guideditems = await res.json();

  const ids = guideditems.map((item) => {
    return { params: { uri: item.uri || encodeURIComponent(item.name) } };
  });

  return {
    paths: ids,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch("http://localhost:3000/api/guidedItems");
  const guideditems = await res.json();

  return {
    props: {
      relatedProducts: guideditems,
      item: guideditems.filter((item) => item.uri == params.uri)[0],
    },
  };
}

export default function HomeApp(props) {
  return <GuideItem {...props} />;
}
