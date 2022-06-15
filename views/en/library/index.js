import { Fragment, useState } from "react";
import Link from "next/link";
import HeaderTop from "../../../components/sections/headerTop";
import SimpleImage from "../../../components/SimpleImage";
import { useRouter } from "next/router";
import Footer from "../../../components/marketing/footer";
import posts from "./posts";

export default function Example() {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  return (
    <div className=" antialiased bg-body text-body font-body">
      <section
        className="py-24 pt-0 bg-white relative min-h-0 md:min-h-screen"
        style={{
          backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left top",
        }}
      >
        <SimpleImage
          width={2000}
          transformations={[
            { cropMode: "cm_extract", height: 350, width: 2000 },
          ]}
          className="w-full mb-10 mx-auto"
          src="/raw/art/human-colors.jpg"
          alt=""
        />

        <div className="container top-0 relative md:absolute md:top-24 px-4 mx-auto">
          <div className="md:max-w-5xl mx-auto mb-12 text-center">
            <div className="inline-block py-1 px-3 mb-6 text-xs leading-5 text-white font-medium uppercase bg-indigo-800 rounded-full shadow-sm">
              Podcasts
            </div>
          </div>
        </div>
        <p className="mb-10 bg-indigo-50 p-4 opacity-90 rounded-lg text-lg md:text-xl text-left font-medium text-coolGray-500 shadow-md">
          At some point, I realized that almost all of my beliefs about myself,
          life, and the world were mistaken. I realized my identity as a thought
          based entity full of conditionings from the past and it's path the
          only straight line I see in life.
          <br /> <br /> Very clearly, I see the society of humankind as a
          virtual reality full of concepts like countries, businesses, and so
          on. But I can't find them on the ground.
        </p>

        <div className="container mt-32 px-4 mx-auto">
          <div className="flex flex-wrap -mx-4 mb-12 md:mb-20">
            {posts.map((item) => {
              return (
                <div className="w-full md:w-1/2 px-4 mb-8 cursor-pointer">
                  <Link locale={locale} href={"/library/" + item.link}>
                    <div>
                      <a className="block mb-6 overflow-hidden rounded-md">
                        <SimpleImage
                          width={300}
                          className="w-full"
                          transformations={[
                            { cropMode: "cm_extract", height: 300, width: 600 },
                          ]}
                          src={item.image}
                        />
                      </a>
                      <div className="mb-4">
                        <a className="inline-block py-1 px-3 text-xs leading-5 text-indigo-500 hover:text-indigo-600 font-medium uppercase bg-indigo-100 hover:bg-indigo-200 rounded-full shadow-sm">
                          Satsang
                        </a>
                      </div>
                      <p className="mb-2 text-coolGray-500 font-medium">
                        {item.author} • {item.date}
                      </p>
                      <a className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline">
                        {item.title}
                      </a>
                      <p className="mb-4 text-base md:text-lg text-coolGray-400 font-medium">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
