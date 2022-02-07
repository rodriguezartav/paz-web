import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <DefaultSeo
        title="Paz | Cabo Mata Palo | Corcovado | Costa Rica"
        description="Private Beach Lounge | Comfy Jungle House | Natural Wellness"
        canonical="https://paz.co.cr/"
        openGraph={{
          url: "https://paz.co.cr/",
          title: "Paz | Cabo Mata Palo | Corcovado | Costa Rica",
          description:
            "Private Beach Lounge | Comfy Jungle House | Natural Wellness",
          images: [
            {
              url: "https://paz.co.cr/images/templo.jpeg",
              width: 1800,
              height: 1000,
              alt: "Beach Lounge",
              type: "image/jpeg",
            },
          ],
          site_name: "Paz",
        }}
      />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
