import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="h-full bg-gray-100" lang="en">
        <Head>
          <title>Paz</title>
          <meta property="og:title" content="Paz" key="title" />

          <meta description="" />
          <link rel="icon" href="/vercel.svg" />
        </Head>
        <body className="h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
