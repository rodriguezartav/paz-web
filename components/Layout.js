import Header from "./www/Header";
import Footer from "./www/Footer";
import Head from "next/head";

export default function Doc(props) {
  return (
    <div>
      <Head>
        <title>{props.meta ? props.meta.title : "Mogi.ai"}</title>
      </Head>
      <Header title={props.meta && props.meta.title} />
      <main className="relative ">
        <div className="max-w-screen-xl mx-auto mb-10">
          <div className="bg-white rounded-lg shadow overflow-hidden p-10">
            <div className="prose lg:prose-xl ">{props.children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
