import Head from "next/head";
import Home from "../../views/Osa";
import Texts from "../../texts";
import GuideItem from "../../views/GuideItem";

import GuidedItems from "../../data/guide";

export async function getStaticPaths() {
  // Return a list of possible value for id

  const res = await fetch(`${process.env.API_URL}/api/guidedItems`);
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
  const res = await fetch(
    `${process.env.API_URL}/api/guidedItem/${params.uri}`
  );
  const guideditem = await res.json();

  console.log(guideditem.all);

  return {
    props: {
      relatedProducts: guideditem.all || [],
      item: guideditem.one,
    },
  };
}

export default function HomeApp(props) {
  return <GuideItem {...props} />;
}
