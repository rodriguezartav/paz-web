import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import Script from "next/script";
import { MDXProvider } from "@mdx-js/react";

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
      <SessionProvider session={session}>
        <Script
          dangerouslySetInnerHTML={{
            __html: `window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
  heap.load("1604821807")`,
          }}
        />

        <DefaultSeo
          title="Paz | Cabo Mata Palo | Corcovado | Costa Rica"
          description="Meaningful Wildlife Vacations and Transformational Wellness Retreats"
          canonical="https://paz.co.cr/"
          openGraph={{
            url: "https://paz.co.cr/",
            title: "Paz | Cabo Mata Palo | Corcovado | Costa Rica",
            description:
              "Meaningful Wildlife Vacations and Transformational Wellness Retreats",
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
    </MDXProvider>
  );
}

export default MyApp;
