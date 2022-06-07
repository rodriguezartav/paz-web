import { Fragment, useState } from "react";
import Link from "next/link";
import HeaderTop from "../../../components/sections/headerTop";
import SimpleImage from "../../../components/SimpleImage";
import { useRouter } from "next/router";
import Footer from "../../../components/marketing/footer";

export default function Example() {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const posts = [
    {
      id: 1,
      title: "0. Preparation to go within",
      date: "5 Jun 2022",
      author: "Roberto Rodriguez",
      description:
        "A motivational text that gives advice on how to reach an open state of mind compatible with learning.",
      image: "/raw/art/mind-learn.jpg",
      link: "preparation-to-go-within",
    },
    {
      id: 2,
      title: "How to know if it's the mind",
      date: "2 Jun 2022",
      author: "Roberto Rodriguez",
      description:
        "Some call this background the unconscious, the ego, the self, and no matter its name - it's out of reach to any external element because it exists before the devices that are mindful of the exterior.",
      image: "/raw/art/human-background.jpg",
      link: "how-to-know-it-is-the-mind",
    },
    {
      id: 3,
      title: "The contract of life",
      date: "22 May 2022",
      author: "Roberto Rodriguez",
      description:
        " A strong text with an exercise that helped me reconcile with the vulnerability of life. An invitation to shift how we see life and engage with society in a way that can transform our lives",
      image: "/raw/art/human-space.jpg",
      link: "the-contract-of-life",
    },

    {
      id: 5,
      title: "Listen to the heart, and then do that",
      date: "6 Jun 2022",
      author: "Roberto Rodriguez",
      description:
        "The heart plays a central role in the transformation or evolution of humankind. Internal arts, devotions, and religions direct us to discover the heart's energy field. I write this article right after a transformational retreat at Montaña Azul, and it's my humble attempt at writing a painting of the mechanism of life by pointing to it rather than describing it.",
      image: "/raw/art/real-human-heart.jpg",
      link: "listen-to-the-heart",
      next: "under-the-hood",
    },

    {
      id: 5,
      title: "How to look under the hood of consciousness",
      date: "7 Jun 2022",
      author: "Roberto Rodriguez",
      description:
        "Awareness is the key to the mind, but it's just a word here. We need to find the key, not the word or its meaning. To open the mind's door, we need the actual thing, the actual key. Let's find that out.",
      image: "/raw/art/particle.jpg",
      link: "under-the-hood",
    },

    {
      id: 6,
      title: "They key to unlock the mind",
      date: "7 Jun 2022",
      author: "Roberto Rodriguez",
      description:
        "Unfortunately, as adults, our attention becomes stuck in the one dimension of the mind - let's overcome that.",
      image: "/raw/art/human-heart.jpg",
      link: "the-key-the-mind",
    },
  ];

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
          height={1000}
          className="w-full mb-10 mx-auto"
          src="/raw/art/human-colors.jpg"
          alt=""
        />

        <div className="container top-0 relative md:absolute md:top-72 px-4 mx-auto">
          <div className="md:max-w-5xl mx-auto mb-12 text-center">
            <div className="inline-block py-1 px-3 mb-6 text-xs leading-5 text-white font-medium uppercase bg-indigo-800 rounded-full shadow-sm">
              The Human Blog
            </div>

            <p className="mb-10 bg-indigo-50 p-4 opacity-90 rounded-lg text-lg md:text-xl text-left font-medium text-coolGray-500 shadow-md">
              At some point, I realized that almost all of my beliefs about
              myself, life, and the world were mistaken. I realized my identity
              as a thought based entity full of conditionings from the past and
              it's path the only straight line I see in life.
              <br /> <br /> Very clearly, I see the society of humankind as a
              virtual reality full of concepts like countries, businesses, and
              so on. But I can't find them on the ground.
            </p>
          </div>
        </div>

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
