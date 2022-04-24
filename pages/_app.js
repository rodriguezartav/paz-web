import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import Script from "next/script";
import { MDXProvider } from "@mdx-js/react";

import Document, { Html, Head, Main, NextScript } from "next/document";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const components = {
  a: CustomLink,
};

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <MDXProvider components={components}>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-F5HMX4JSCJ"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag("js", new Date());
          gtag("config", "G-F5HMX4JSCJ");
          gtag('config', 'AW-10878250661');
        `}
      </Script>

      <DefaultSeo
        additionalLinkTags={[
          {
            rel: "icon",
            href: "https://paz.co.cr/images/favicon.png",
          },
        ]}
        additionalMetaTags={[
          {
            property: "facebook-domain-verification",
            content: "46be10golmw8ehrdc2rcx6qn1v92e8",
          },
        ]}
        title="Paz Corcovado | Beachfront Villa in Osa Peninsula | Costa Rica"
        description="Paz ✌ is a beach front villa 🏖️ in the Osa Peninsula. Rent our private retreat to relax, be in nature & play in the pristine beach of real & wild Costa Rica."
        canonical="https://paz.co.cr/"
        facebook-domain-verification="46be10golmw8ehrdc2rcx6qn1v92e8"
        openGraph={{
          url: "https://paz.co.cr/",
          title:
            "Paz Corcovado | Beachfront Villa in Osa Peninsula | Costa Rica",
          description:
            "Paz ✌ is a beach front villa 🏖️ in the Osa Peninsula. Rent our private retreat to relax, be in nature & play in the pristine beach of real & wild Costa Rica.",
          images: [
            {
              url: "https://paz.co.cr/images/hero/house.jpg",
              width: 1800,
              height: 1000,
              alt: "Beach Lodge",
              type: "image/jpeg",
            },
            {
              url: "https://paz.co.cr/images/hero/8.jpg",
              width: 1800,
              height: 1000,
              alt: "Beach View",
              type: "image/jpeg",
            },
          ],
          site_name: "Paz Corcovado",
        }}
      />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
