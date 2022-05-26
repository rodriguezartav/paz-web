import Head from "next/head";
import { useRouter } from "next/router";
import { promises as fs } from "fs";
import path from "path";
import Home from "../views/Home";
import Texts from "../texts";
import Header from "../components/marketing/header";

export async function getStaticProps() {
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

  return {
    props: {
      posts,
    },
  };
}

export default function HomeApp({ posts }) {
  return (
    <div className="antialiased bg-body text-body font-body">
      <Header />
      <div>
        <section
          data-section-id={21}
          data-category="features-white-pattern"
          data-component-id="79798086_06_awz"
          className="py-24 md:pb-28 bg-white overflow-hidden"
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
            backgroundPosition: "center",
          }}
          data-config-id="auto-img-2"
        >
          <div className="container px-4 mx-auto">
            <div className="md:max-w-4xl mx-auto mb-16 md:mb-20 text-center">
              <span
                className="inline-block py-px px-2 mb-4 text-xs leading-5 text-violet-500 bg-violet-100 font-medium uppercase rounded-full shadow-sm"
                data-config-id="auto-txt-1-6"
              >
                Welcome
              </span>
              <h1
                className="mb-4 text-3xl md:text-4xl leading-tight text-coolGray-900 font-bold tracking-tighter"
                data-config-id="auto-txt-2-6"
              >
                The purpose of this place is that everyone here experiences a
                moment of peace today. Now!
              </h1>
              <p
                className="text-lg md:text-xl text-coolGray-500 font-medium"
                data-config-id="auto-txt-3-6"
              >
                Whether you rent Paz in AirBnB or attend one of our retreats;
                the spirit, magic and intention of Paz will be with us.
              </p>
            </div>
            <div className="relative mb-8 md:mb-24 mx-auto max-w-max">
              <img
                className="absolute z-10 -left-8 -top-8 w-28 md:w-auto text-yellow-400"
                src="flex-ui-assets/elements/circle3-green.svg"
                alt=""
                data-config-id="auto-img-3-6"
              />
              <img
                className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto text-blue-500"
                src="flex-ui-assets/elements/dots3-yellow.svg"
                alt=""
                data-config-id="auto-img-4-6"
              />
              <img
                src="https://static.shuffle.dev/uploads/files/47/47a5d7c9e0a1afcd5e28bd429f90aa16df48bec4/lounge-1.jpg"
                alt=""
                data-config-id="auto-img-1-6"
                className="max-w-6xl"
              />
            </div>
            <div className="flex flex-wrap justify-center -mx-4">
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                  <div className="inline-flex h-16 w-16 mb-7 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      data-config-id="auto-svg-1-6"
                      data-config-type
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                  </div>
                  <h3
                    className="mb-4 text-xl md:text-2xl leading-tight font-bold"
                    data-config-id="auto-txt-4-6"
                  >
                    Whole Property Rental
                  </h3>
                  <p
                    className="text-coolGray-500 font-medium"
                    data-config-id="auto-txt-5-6"
                  >
                    Visit us with your friends and family and have the whole
                    property, beach and ocean for yourself.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                  <div className="inline-flex h-16 w-16 mb-7 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg">
                    <svg
                      width={22}
                      height={12}
                      viewBox="0 0 22 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-config-id="auto-svg-2-6"
                    >
                      <path
                        d="M20.71 1.29C20.617 1.19627 20.5064 1.12188 20.3846 1.07111C20.2627 1.02034 20.132 0.994202 20 0.994202C19.868 0.994202 19.7373 1.02034 19.6154 1.07111C19.4936 1.12188 19.383 1.19627 19.29 1.29L13 7.59L8.71 3.29C8.61704 3.19627 8.50644 3.12188 8.38458 3.07111C8.26272 3.02034 8.13201 2.9942 8 2.9942C7.86799 2.9942 7.73728 3.02034 7.61542 3.07111C7.49356 3.12188 7.38296 3.19627 7.29 3.29L1.29 9.29C1.19627 9.38296 1.12188 9.49356 1.07111 9.61542C1.02034 9.73728 0.994202 9.86799 0.994202 10C0.994202 10.132 1.02034 10.2627 1.07111 10.3846C1.12188 10.5064 1.19627 10.617 1.29 10.71C1.38296 10.8037 1.49356 10.8781 1.61542 10.9289C1.73728 10.9797 1.86799 11.0058 2 11.0058C2.13201 11.0058 2.26272 10.9797 2.38458 10.9289C2.50644 10.8781 2.61704 10.8037 2.71 10.71L8 5.41L12.29 9.71C12.383 9.80373 12.4936 9.87812 12.6154 9.92889C12.7373 9.97966 12.868 10.0058 13 10.0058C13.132 10.0058 13.2627 9.97966 13.3846 9.92889C13.5064 9.87812 13.617 9.80373 13.71 9.71L20.71 2.71C20.8037 2.61704 20.8781 2.50644 20.9289 2.38458C20.9797 2.26272 21.0058 2.13201 21.0058 2C21.0058 1.86799 20.9797 1.73728 20.9289 1.61542C20.8781 1.49356 20.8037 1.38296 20.71 1.29Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h3
                    className="mb-4 text-xl md:text-2xl leading-tight font-bold"
                    data-config-id="auto-txt-6-6"
                  >
                    Paz Retreats
                  </h3>
                  <p
                    className="text-coolGray-500 font-medium"
                    data-config-id="auto-txt-7-6"
                  >
                    Come and enjoy a retreat the costarrican way, with 100%
                    local ownership and staff.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                  <div className="inline-flex h-16 w-16 mb-7 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg">
                    <svg
                      width={22}
                      height={18}
                      viewBox="0 0 22 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-config-id="auto-svg-3-6"
                    >
                      <path
                        d="M11.3 9.22C11.8336 8.75813 12.2616 8.18688 12.5549 7.54502C12.8482 6.90316 13 6.20571 13 5.5C13 4.17392 12.4732 2.90215 11.5355 1.96447C10.5979 1.02678 9.32608 0.5 8 0.5C6.67392 0.5 5.40215 1.02678 4.46447 1.96447C3.52678 2.90215 3 4.17392 3 5.5C2.99999 6.20571 3.1518 6.90316 3.44513 7.54502C3.73845 8.18688 4.16642 8.75813 4.7 9.22C3.30014 9.85388 2.11247 10.8775 1.27898 12.1685C0.445495 13.4596 0.00147185 14.9633 0 16.5C0 16.7652 0.105357 17.0196 0.292893 17.2071C0.48043 17.3946 0.734784 17.5 1 17.5C1.26522 17.5 1.51957 17.3946 1.70711 17.2071C1.89464 17.0196 2 16.7652 2 16.5C2 14.9087 2.63214 13.3826 3.75736 12.2574C4.88258 11.1321 6.4087 10.5 8 10.5C9.5913 10.5 11.1174 11.1321 12.2426 12.2574C13.3679 13.3826 14 14.9087 14 16.5C14 16.7652 14.1054 17.0196 14.2929 17.2071C14.4804 17.3946 14.7348 17.5 15 17.5C15.2652 17.5 15.5196 17.3946 15.7071 17.2071C15.8946 17.0196 16 16.7652 16 16.5C15.9985 14.9633 15.5545 13.4596 14.721 12.1685C13.8875 10.8775 12.6999 9.85388 11.3 9.22ZM8 8.5C7.40666 8.5 6.82664 8.32405 6.33329 7.99441C5.83994 7.66476 5.45542 7.19623 5.22836 6.64805C5.0013 6.09987 4.94189 5.49667 5.05764 4.91473C5.1734 4.33279 5.45912 3.79824 5.87868 3.37868C6.29824 2.95912 6.83279 2.6734 7.41473 2.55764C7.99667 2.44189 8.59987 2.5013 9.14805 2.72836C9.69623 2.95542 10.1648 3.33994 10.4944 3.83329C10.8241 4.32664 11 4.90666 11 5.5C11 6.29565 10.6839 7.05871 10.1213 7.62132C9.55871 8.18393 8.79565 8.5 8 8.5ZM17.74 8.82C18.38 8.09933 18.798 7.20905 18.9438 6.25634C19.0896 5.30362 18.9569 4.32907 18.5618 3.45C18.1666 2.57093 17.5258 1.8248 16.7165 1.30142C15.9071 0.77805 14.9638 0.499742 14 0.5C13.7348 0.5 13.4804 0.605357 13.2929 0.792893C13.1054 0.98043 13 1.23478 13 1.5C13 1.76522 13.1054 2.01957 13.2929 2.20711C13.4804 2.39464 13.7348 2.5 14 2.5C14.7956 2.5 15.5587 2.81607 16.1213 3.37868C16.6839 3.94129 17 4.70435 17 5.5C16.9986 6.02524 16.8593 6.5409 16.5961 6.99542C16.3328 7.44994 15.9549 7.82738 15.5 8.09C15.3517 8.17552 15.2279 8.29766 15.1404 8.44474C15.0528 8.59182 15.0045 8.7589 15 8.93C14.9958 9.09976 15.0349 9.2678 15.1137 9.41826C15.1924 9.56872 15.3081 9.69665 15.45 9.79L15.84 10.05L15.97 10.12C17.1754 10.6917 18.1923 11.596 18.901 12.7263C19.6096 13.8566 19.9805 15.1659 19.97 16.5C19.97 16.7652 20.0754 17.0196 20.2629 17.2071C20.4504 17.3946 20.7048 17.5 20.97 17.5C21.2352 17.5 21.4896 17.3946 21.6771 17.2071C21.8646 17.0196 21.97 16.7652 21.97 16.5C21.9782 14.9654 21.5938 13.4543 20.8535 12.1101C20.1131 10.7659 19.0413 9.63331 17.74 8.82Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h3
                    className="mb-4 text-xl md:text-2xl leading-tight font-bold"
                    data-config-id="auto-txt-8-6"
                  >
                    Instructor Retreats
                  </h3>
                  <p
                    className="text-coolGray-500 font-medium"
                    data-config-id="auto-txt-9-6"
                  >
                    We have met lot's of great teachers along the way and invite
                    them to hold their retreats here at Paz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          data-section-id={3}
          data-category="headers-white-pattern"
          data-component-id="6114cd58_01_awz"
          data-custom-component-id={160483}
          className="relative bg-white overflow-hidden"
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
            backgroundPosition: "center",
          }}
        >
          <div className="bg-tarnsparent">
            <div className="navbar-menu hidden fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50">
              <div className="fixed top-0 left-0 bottom-0 w-full w-4/6 max-w-xs bg-white">
                <a className="navbar-close absolute top-5 p-4 right-3" href="#">
                  <svg
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.94004 6L11.14 1.80667C11.2656 1.68113 11.3361 1.51087 11.3361 1.33333C11.3361 1.1558 11.2656 0.985537 11.14 0.860002C11.0145 0.734466 10.8442 0.66394 10.6667 0.66394C10.4892 0.66394 10.3189 0.734466 10.1934 0.860002L6.00004 5.06L1.80671 0.860002C1.68117 0.734466 1.51091 0.663941 1.33337 0.663941C1.15584 0.663941 0.985576 0.734466 0.860041 0.860002C0.734505 0.985537 0.66398 1.1558 0.66398 1.33333C0.66398 1.51087 0.734505 1.68113 0.860041 1.80667L5.06004 6L0.860041 10.1933C0.797555 10.2553 0.747959 10.329 0.714113 10.4103C0.680267 10.4915 0.662842 10.5787 0.662842 10.6667C0.662842 10.7547 0.680267 10.8418 0.714113 10.9231C0.747959 11.0043 0.797555 11.078 0.860041 11.14C0.922016 11.2025 0.99575 11.2521 1.07699 11.2859C1.15823 11.3198 1.24537 11.3372 1.33337 11.3372C1.42138 11.3372 1.50852 11.3198 1.58976 11.2859C1.671 11.2521 1.74473 11.2025 1.80671 11.14L6.00004 6.94L10.1934 11.14C10.2554 11.2025 10.3291 11.2521 10.4103 11.2859C10.4916 11.3198 10.5787 11.3372 10.6667 11.3372C10.7547 11.3372 10.8419 11.3198 10.9231 11.2859C11.0043 11.2521 11.0781 11.2025 11.14 11.14C11.2025 11.078 11.2521 11.0043 11.286 10.9231C11.3198 10.8418 11.3372 10.7547 11.3372 10.6667C11.3372 10.5787 11.3198 10.4915 11.286 10.4103C11.2521 10.329 11.2025 10.2553 11.14 10.1933L6.94004 6Z"
                      fill="#556987"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="py-20 md:py-28">
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap xl:items-center -mx-4">
                <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                  <span className="inline-block px-2 mb-4 text-xs leading-5 text-white bg-violet-500 uppercase rounded-9xl pt-1 px-3 pb-1">
                    Paz in the Osa Peninsula of Costa Rica
                  </span>
                  <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
                    Feels like being in a National Park
                  </h1>
                  <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">
                    We created an experience that feels like camping on the
                    beach by the jungle in paradise. With the protection and
                    comfort of a traditional Villa.
                  </p>
                  <div className="flex flex-wrap" data-removed="true">
                    <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                      <a
                        className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-violet-50 font-medium text-center bg-violet-500 hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 border border-violet-500 rounded-md shadow-sm"
                        href="https://airbnb.com/h/pazz"
                      >
                        Book in AirBnB
                      </a>
                    </div>
                    <div className="w-full md:w-auto py-1 md:py-0"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <div className="relative mx-auto md:mr-0 max-w-max">
                    <img
                      className="absolute z-10 -left-14 -top-12 w-28 md:w-auto"
                      src="flex-ui-assets/elements/circle3-green.svg"
                      alt=""
                    />
                    <img
                      className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto"
                      src="flex-ui-assets/elements/dots3-yellow.svg"
                      alt=""
                    />
                    <img
                      className="relative rounded-7xl"
                      src="https://static.shuffle.dev/uploads/files/47/47a5d7c9e0a1afcd5e28bd429f90aa16df48bec4/house.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          data-section-id={22}
          data-category="features-white-pattern"
          data-component-id="79798086_08_awz"
          className="py-24 md:py-32 bg-white overflow-hidden"
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
            backgroundPosition: "center",
          }}
          data-config-id="auto-img-2"
        >
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap lg:items-center -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                <div className="relative mx-auto md:ml-0 max-w-max">
                  <img
                    className="absolute z-10 -left-8 -top-8 w-28 md:w-auto text-yellow-400"
                    src="flex-ui-assets/elements/circle3-green.svg"
                    alt=""
                    data-config-id="auto-img-3-8"
                  />
                  <img
                    className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto text-blue-500"
                    src="flex-ui-assets/elements/dots3-yellow.svg"
                    alt=""
                    data-config-id="auto-img-4-8"
                  />
                  <img
                    src="https://static.shuffle.dev/uploads/files/47/47a5d7c9e0a1afcd5e28bd429f90aa16df48bec4/jungle.jpg"
                    alt=""
                    data-config-id="auto-img-1-8"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <span
                  className="inline-block py-px px-2 mb-4 text-xs leading-5 text-violet-500 bg-violet-100 font-medium uppercase rounded-full shadow-sm"
                  data-config-id="auto-txt-1-8"
                >
                  Features
                </span>
                <h1
                  className="mb-8 text-4xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter"
                  data-config-id="auto-txt-2-8"
                >
                  Experience nature like nowhere else in the world
                </h1>
                <p
                  className="mb-6 text-lg md:text-xl text-coolGray-500 font-medium"
                  data-config-id="auto-txt-3-8"
                >
                  There are plenty of adventures and tours to keep you busy for
                  days. But the more time you spend getting intimate with the
                  ocean &amp;amp; the jungle - just being here all day - the
                  more you'll start to feel an aliveness and a connection with
                  everything.
                </p>
                <a
                  className="inline-block py-4 px-5 w-full md:w-auto text-base leading-4 text-violet-50 bg-violet-500 hover:bg-violet-600 font-medium text-center focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 rounded-md shadow-sm"
                  href="#"
                  data-config-id="auto-txt-4-8"
                >
                  (soon) Learn about nature
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          data-section-id={2}
          data-category="features-white-pattern"
          data-component-id="79798086_05_awz"
          data-custom-component-id={160445}
          className="py-24 bg-white overflow-hidden"
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
            backgroundPosition: "center",
          }}
        >
          <div className="container px-4 mx-auto">
            <div className="md:max-w-4xl mb-16 md:mb-20">
              <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-violet-500 bg-violet-100 font-medium uppercase rounded-full shadow-sm">
                History
              </span>
              <h1 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
                The Property
              </h1>
              <p className="text-lg md:text-xl text-coolGray-500 font-medium">
                The story goes that Paz Founder finished reading Parahamsa
                Yogananda's: "Diary of a Yogi" and felt a very strong
                connection. That night the spiritual teacher appeared in his
                dream and gave him specific instructions about buying and using
                this property.
              </p>
            </div>
            <div className="flex flex-wrap lg:items-center -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                <div className="relative mx-auto md:ml-0 max-w-max">
                  <img
                    className="absolute z-10 -left-8 -top-8 w-28 md:w-auto text-yellow-400"
                    src="flex-ui-assets/elements/circle3-green.svg"
                    alt=""
                  />
                  <img
                    className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto text-blue-500"
                    src="flex-ui-assets/elements/dots3-yellow.svg"
                    alt=""
                  />
                  <img
                    src="https://static.shuffle.dev/uploads/files/47/47a5d7c9e0a1afcd5e28bd429f90aa16df48bec4/wellness.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="flex flex-wrap p-8 text-center md:text-left hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                  <div className="w-full md:w-auto mb-6 md:mb-0 md:pr-6">
                    <div className="inline-flex h-14 w-14 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full md:flex-1 md:pt-3">
                    <h3 className="mb-4 text-xl md:text-2xl leading-tight text-coolGray-900 font-bold">
                      A natural temple
                    </h3>
                    <p className="text-coolGray-500 font-medium">
                      The property is 2.5 acres with 85% jungle coverage. It's a
                      real living forest where all of the magic of mother nature
                      can be appreciated.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap p-8 text-center md:text-left hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                  <div className="w-full md:w-auto mb-6 md:mb-0 md:pr-6">
                    <div className="inline-flex h-14 w-14 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"
                          className="h-6 w-6"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full md:flex-1 md:pt-3">
                    <h3 className="mb-4 text-xl md:text-2xl leading-tight text-coolGray-900 font-bold">
                      100% off-the-grid
                    </h3>
                    <p className="text-coolGray-500 font-medium">
                      Our water comes from the earth and our power comes from
                      the sun. In action we choose to be connected, as aligned
                      with life as an animal that sleeps in comfy beds with fans
                      can be...
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap p-8 text-center md:text-left hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                  <div className="w-full md:w-auto mb-6 md:mb-0 md:pr-6">
                    <div className="inline-flex h-14 w-14 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full md:flex-1 md:pt-3">
                    <h3 className="mb-4 text-xl md:text-2xl leading-tight text-coolGray-900 font-bold">
                      Build with respect, intuition &amp; love
                    </h3>
                    <p className="text-coolGray-500 font-medium">
                      Everything from solar, to water, roofs and doors was
                      designed, built and created by hand with love by founder
                      and team. It took us 6 years of iterations to open up for
                      guests!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          data-section-id={8}
          data-category="testimonials-white-pattern"
          data-component-id="22eb0260_03_awz"
          data-custom-component-id={160447}
          className="py-24 md:pb-28 bg-white"
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
            backgroundPosition: "center",
          }}
        >
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center justify-center lg:justify-between -mx-4">
              <div className="w-auto px-4 order-last lg:order-first">
                <button className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-coolGray-50 hover:bg-coolGray-100">
                  <svg
                    width={12}
                    height={14}
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9999 6H3.4099L6.7099 2.71C6.8982 2.5217 7.00399 2.2663 7.00399 2C7.00399 1.7337 6.8982 1.47831 6.7099 1.29C6.52159 1.1017 6.2662 0.995911 5.9999 0.995911C5.73359 0.995911 5.4782 1.1017 5.2899 1.29L0.289896 6.29C0.198856 6.38511 0.127491 6.49725 0.0798963 6.62C-0.0201217 6.86346 -0.0201217 7.13654 0.0798963 7.38C0.127491 7.50275 0.198856 7.6149 0.289896 7.71L5.2899 12.71C5.38286 12.8037 5.49346 12.8781 5.61532 12.9289C5.73718 12.9797 5.86788 13.0058 5.9999 13.0058C6.13191 13.0058 6.26261 12.9797 6.38447 12.9289C6.50633 12.8781 6.61693 12.8037 6.7099 12.71C6.80363 12.617 6.87802 12.5064 6.92879 12.3846C6.97956 12.2627 7.00569 12.132 7.00569 12C7.00569 11.868 6.97956 11.7373 6.92879 11.6154C6.87802 11.4936 6.80363 11.383 6.7099 11.29L3.4099 8H10.9999C11.2651 8 11.5195 7.89465 11.707 7.70711C11.8945 7.51957 11.9999 7.26522 11.9999 7C11.9999 6.73479 11.8945 6.48043 11.707 6.2929C11.5195 6.10536 11.2651 6 10.9999 6Z"
                      fill="#404F65"
                    />
                  </svg>
                </button>
              </div>
              <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
                <div className="flex items-center">
                  <img
                    className="w-20 md:w-24 h-20 md:h-24 mr-6 rounded-full"
                    src="https://static.shuffle.dev/uploads/files/47/47a5d7c9e0a1afcd5e28bd429f90aa16df48bec4/jason.webp"
                    alt=""
                  />
                  <div>
                    <h3 className="mb-2 text-xl md:text-2xl font-semibold">
                      Jason Sanchez
                    </h3>
                    <span className="text-lg text-coolGray-500 font-medium">
                      Guest
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 mb-12 lg:mb-0 lg:w-3/6">
                <div className="relative pt-12 pb-6 sm:p-6">
                  <img
                    className="absolute top-0 left-0"
                    src="flex-ui-assets/elements/testimonials/quote-top-violet.svg"
                    alt=""
                  />
                  <img
                    className="absolute bottom-0 right-0"
                    src="flex-ui-assets/elements/testimonials/quote-down-violet.svg"
                    alt=""
                  />
                  <div className="relative">
                    <h2 className="tracking-tighter">
                      Paz is an incredibly unique and special place. Unlike
                      anywhere my family and I have stayed. Located in lush
                      wilderness teeming with wildlife, steps away from a
                      beautiful private beach, Paz offers an experience that is
                      more than the sum of its parts. The house, location, and
                      even the rugged drive there from Puerto Jimenez all
                      possess their own magic and every element is further
                      elevated by the property's host Roberto. He is kind,
                      generous, insightful, and is a big part of why Paz has
                      continued to resonate with us ever since we left. We will
                      most certainly return as soon as we can. Don't miss it.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="w-auto px-4 order-last">
                <button className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-coolGray-50 hover:bg-coolGray-100">
                  <svg
                    width={12}
                    height={14}
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.92 6.62C11.8724 6.49725 11.801 6.38511 11.71 6.29L6.71 1.29C6.61676 1.19676 6.50607 1.1228 6.38425 1.07234C6.26243 1.02188 6.13186 0.995911 6 0.995911C5.7337 0.995911 5.4783 1.1017 5.29 1.29C5.19676 1.38324 5.1228 1.49393 5.07234 1.61575C5.02188 1.73758 4.99591 1.86814 4.99591 2C4.99591 2.2663 5.1017 2.5217 5.29 2.71L8.59 6H1C0.734784 6 0.48043 6.10536 0.292893 6.2929C0.105357 6.48043 0 6.73479 0 7C0 7.26522 0.105357 7.51957 0.292893 7.70711C0.48043 7.89465 0.734784 8 1 8H8.59L5.29 11.29C5.19627 11.383 5.12188 11.4936 5.07111 11.6154C5.02034 11.7373 4.9942 11.868 4.9942 12C4.9942 12.132 5.02034 12.2627 5.07111 12.3846C5.12188 12.5064 5.19627 12.617 5.29 12.71C5.38296 12.8037 5.49356 12.8781 5.61542 12.9289C5.73728 12.9797 5.86799 13.0058 6 13.0058C6.13201 13.0058 6.26272 12.9797 6.38458 12.9289C6.50644 12.8781 6.61704 12.8037 6.71 12.71L11.71 7.71C11.801 7.6149 11.8724 7.50275 11.92 7.38C12.02 7.13654 12.02 6.86346 11.92 6.62Z"
                      fill="#404F65"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section
          data-section-id={20}
          data-category="applications-white-pattern"
          data-component-id="b686074d_03_awz"
          className="relative py-24 bg-white"
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
            backgroundPosition: "center",
          }}
          data-config-id="auto-img-3"
        >
          <div className="md:absolute md:top-28 lg:top-1/2 md:-left-96 xl:-left-80 md:-ml-56 lg:-ml-20 xl:-ml-0 md:transform lg:-translate-y-1/2 px-4 mb-16 md:mb-0">
            <div className="relative max-w-max">
              <img
                className="absolute p-7 -mt-1 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 z-20"
                src="https://static.shuffle.dev/uploads/files/47/47a5d7c9e0a1afcd5e28bd429f90aa16df48bec4/21.jpeg"
                alt=""
                data-config-id="auto-img-1-3"
              />
              <img
                className="relative z-10"
                src="flex-ui-assets/elements/applications/macbook.png"
                alt=""
                data-config-id="auto-img-2-3"
              />
              <img
                className="absolute -top-24 left-0 md:mt-px md:left-96 md:ml-52 lg:ml-16 xl:-ml-20 w-28 md:w-auto text-blue-500"
                src="flex-ui-assets/elements/dots2-yellow.svg"
                data-config-id="auto-img-4-3"
              />
              <img
                className="absolute -bottom-24 right-0 md:mt-px md:left-96 md:ml-52 lg:ml-16 xl:-ml-20 w-28 md:w-auto text-red-500"
                src="flex-ui-assets/elements/dots2-red.svg"
                data-config-id="auto-img-5-3"
              />
              <img
                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-28 md:w-auto text-yellow-400"
                src="flex-ui-assets/elements/circle2-green.svg"
                data-config-id="auto-img-6-3"
              />
            </div>
          </div>
          <div className="container px-4 mx-auto">
            <div className="md:w-1/2 md:ml-auto pl-4">
              <span
                className="inline-block py-px px-2 mb-4 text-xs leading-5 text-violet-500 bg-violet-100 font-medium rounded-full shadow-sm"
                data-config-id="auto-txt-1-3"
              >
                Application
              </span>
              <h3
                className="mb-6 text-4xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter"
                data-config-id="auto-txt-2-3"
              >
                The Main House
              </h3>
              <p
                className="mb-12 text-lg md:text-xl text-coolGray-500 font-medium"
                data-config-id="auto-txt-3-3"
              >
                From the Villa's huge screened windows you can see the fours
                species of monkeys, morpho butterflies, scarlet maccaws, hawks,
                tucans, pavones, pizotes, ant eaters even the Tapir and Ocelot.
              </p>
              <div className="flex flex-wrap mb-10 text-center md:text-left">
                <div className="w-full md:w-auto mb-6 md:mb-0 md:pr-6">
                  <div className="inline-flex h-14 w-14 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg">
                    <svg
                      width={21}
                      height={21}
                      viewBox="0 0 24 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-config-id="auto-svg-1-3"
                    >
                      <path
                        d="M17 18.63H5C4.20435 18.63 3.44129 18.3139 2.87868 17.7513C2.31607 17.1887 2 16.4257 2 15.63V7.63C2 7.36479 1.89464 7.11043 1.70711 6.9229C1.51957 6.73536 1.26522 6.63 1 6.63C0.734784 6.63 0.48043 6.73536 0.292893 6.9229C0.105357 7.11043 0 7.36479 0 7.63L0 15.63C0 16.9561 0.526784 18.2279 1.46447 19.1655C2.40215 20.1032 3.67392 20.63 5 20.63H17C17.2652 20.63 17.5196 20.5246 17.7071 20.3371C17.8946 20.1496 18 19.8952 18 19.63C18 19.3648 17.8946 19.1104 17.7071 18.9229C17.5196 18.7354 17.2652 18.63 17 18.63ZM21 0.630005H7C6.20435 0.630005 5.44129 0.946075 4.87868 1.50868C4.31607 2.07129 4 2.83436 4 3.63V13.63C4 14.4257 4.31607 15.1887 4.87868 15.7513C5.44129 16.3139 6.20435 16.63 7 16.63H21C21.7956 16.63 22.5587 16.3139 23.1213 15.7513C23.6839 15.1887 24 14.4257 24 13.63V3.63C24 2.83436 23.6839 2.07129 23.1213 1.50868C22.5587 0.946075 21.7956 0.630005 21 0.630005ZM20.59 2.63L14.71 8.51C14.617 8.60373 14.5064 8.67813 14.3846 8.7289C14.2627 8.77966 14.132 8.8058 14 8.8058C13.868 8.8058 13.7373 8.77966 13.6154 8.7289C13.4936 8.67813 13.383 8.60373 13.29 8.51L7.41 2.63H20.59ZM22 13.63C22 13.8952 21.8946 14.1496 21.7071 14.3371C21.5196 14.5246 21.2652 14.63 21 14.63H7C6.73478 14.63 6.48043 14.5246 6.29289 14.3371C6.10536 14.1496 6 13.8952 6 13.63V4L11.88 9.88C12.4425 10.4418 13.205 10.7574 14 10.7574C14.795 10.7574 15.5575 10.4418 16.12 9.88L22 4V13.63Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-full md:flex-1 md:pt-3">
                  <div className="md:max-w-sm">
                    <h3
                      className="mb-4 text-xl md:text-2xl leading-tight text-coolGray-900 font-bold"
                      data-config-id="auto-txt-4-3"
                    >
                      2 Bedrooms with 4 Beds each
                    </h3>
                    <p
                      className="text-coolGray-500 font-medium"
                      data-config-id="auto-txt-5-3"
                    >
                      Stay connected with your team and make quick decisions
                      wherever you are.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap mb-10 text-center md:text-left">
                <div className="w-full md:w-auto mb-6 md:mb-0 md:pr-6">
                  <div className="inline-flex h-14 w-14 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg">
                    <svg
                      width={21}
                      height={21}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-config-id="auto-svg-2-3"
                    >
                      <path
                        d="M5 18H9.24C9.37161 18.0008 9.50207 17.9755 9.62391 17.9258C9.74574 17.876 9.85656 17.8027 9.95 17.71L16.87 10.78L19.71 8C19.8037 7.90704 19.8781 7.79644 19.9289 7.67458C19.9797 7.55272 20.0058 7.42201 20.0058 7.29C20.0058 7.15799 19.9797 7.02728 19.9289 6.90542C19.8781 6.78356 19.8037 6.67296 19.71 6.58L15.47 2.29C15.377 2.19627 15.2664 2.12188 15.1446 2.07111C15.0227 2.02034 14.892 1.9942 14.76 1.9942C14.628 1.9942 14.4973 2.02034 14.3754 2.07111C14.2536 2.12188 14.143 2.19627 14.05 2.29L11.23 5.12L4.29 12.05C4.19732 12.1434 4.12399 12.2543 4.07423 12.3761C4.02446 12.4979 3.99924 12.6284 4 12.76V17C4 17.2652 4.10536 17.5196 4.29289 17.7071C4.48043 17.8946 4.73478 18 5 18ZM14.76 4.41L17.59 7.24L16.17 8.66L13.34 5.83L14.76 4.41ZM6 13.17L11.93 7.24L14.76 10.07L8.83 16H6V13.17ZM21 20H3C2.73478 20 2.48043 20.1054 2.29289 20.2929C2.10536 20.4804 2 20.7348 2 21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21C22 20.7348 21.8946 20.4804 21.7071 20.2929C21.5196 20.1054 21.2652 20 21 20Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-full md:flex-1 md:pt-3">
                  <div className="md:max-w-sm">
                    <h3
                      className="mb-4 text-xl md:text-2xl leading-tight text-coolGray-900 font-bold"
                      data-config-id="auto-txt-6-3"
                    >
                      Full Kitchen, Living &amp; Dinning
                    </h3>
                    <p
                      className="text-coolGray-500 font-medium"
                      data-config-id="auto-txt-7-3"
                    >
                      A tool that lets you build a dream website even if you
                      know nothing about web design or programming.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap text-center md:text-left">
                <div className="w-full md:w-auto mb-6 md:mb-0 md:pr-6">
                  <div className="inline-flex h-14 w-14 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg">
                    <svg
                      width={21}
                      height={21}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-config-id="auto-svg-3-3"
                    >
                      <path
                        d="M10 13H3C2.73478 13 2.48043 13.1054 2.29289 13.2929C2.10536 13.4804 2 13.7348 2 14V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H10C10.2652 22 10.5196 21.8946 10.7071 21.7071C10.8946 21.5196 11 21.2652 11 21V14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13ZM9 20H4V15H9V20ZM21 2H14C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11H21C21.2652 11 21.5196 10.8946 21.7071 10.7071C21.8946 10.5196 22 10.2652 22 10V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2V2ZM20 9H15V4H20V9ZM21 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14V21C13 21.2652 13.1054 21.5196 13.2929 21.7071C13.4804 21.8946 13.7348 22 14 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V14C22 13.7348 21.8946 13.4804 21.7071 13.2929C21.5196 13.1054 21.2652 13 21 13ZM20 20H15V15H20V20ZM10 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2V2ZM9 9H4V4H9V9Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-full md:flex-1 md:pt-3">
                  <div className="md:max-w-sm">
                    <h3
                      className="mb-4 text-xl md:text-2xl leading-tight text-coolGray-900 font-bold"
                      data-config-id="auto-txt-8-3"
                    >
                      50 Steps from the Sand
                    </h3>
                    <p
                      className="text-coolGray-500 font-medium"
                      data-config-id="auto-txt-9-3"
                    >
                      The first business platform to bring together all of your
                      products from one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          data-section-id={13}
          data-category="features-white-pattern"
          data-component-id="79798086_07_awz"
          className="py-24 md:py-32 bg-white overflow-hidden"
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
            backgroundPosition: "center",
          }}
          data-config-id="auto-img-2"
        >
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap lg:items-center -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                <span
                  className="inline-block py-px px-2 mb-4 text-xs leading-5 text-violet-500 bg-violet-100 font-medium rounded-full shadow-sm text-lg capitalize"
                  data-config-id="auto-txt-1-7"
                >
                  Relaxation Activities
                </span>
                <h1
                  className="mb-8 text-4xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter"
                  data-config-id="auto-txt-2-7"
                >
                  The beach lounge
                </h1>
                <p
                  className="mb-6 text-lg md:text-xl text-coolGray-500 font-medium"
                  data-config-id="auto-txt-3-7"
                >
                  A opportunity to be on a pristine beach all for yourself under
                  the shadow of palm trees, hammocks, comfy furniture and a
                  feeling we just can't describe but sounds like "ahhhhhh"
                </p>
                <a
                  className="inline-block py-4 px-5 w-full md:w-auto text-base leading-4 text-violet-50 bg-violet-500 hover:bg-violet-600 font-medium text-center focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 rounded-md shadow-sm"
                  href="#"
                  data-config-id="auto-txt-4-7"
                >
                  (soon) Learn more about our lounges
                </a>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="relative mx-auto md:mr-0 max-w-max">
                  <img
                    className="absolute z-10 -left-8 -top-8 w-28 md:w-auto text-yellow-400"
                    src="flex-ui-assets/elements/circle3-green.svg"
                    alt=""
                    data-config-id="auto-img-3-7"
                  />
                  <img
                    className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto text-blue-500"
                    src="flex-ui-assets/elements/dots3-yellow.svg"
                    alt=""
                    data-config-id="auto-img-4-7"
                  />
                  <img
                    src="https://static.shuffle.dev/uploads/files/47/47a5d7c9e0a1afcd5e28bd429f90aa16df48bec4/10.jpg"
                    alt=""
                    data-config-id="auto-img-1-7"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          data-section-id={12}
          data-category="features-white-pattern"
          data-component-id="79798086_08_awz"
          className="py-24 md:py-32 bg-white overflow-hidden"
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
            backgroundPosition: "center",
          }}
          data-config-id="auto-img-2"
        >
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap lg:items-center -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                <div className="relative mx-auto md:ml-0 max-w-max">
                  <img
                    className="absolute z-10 -left-8 -top-8 w-28 md:w-auto text-yellow-400"
                    src="flex-ui-assets/elements/circle3-green.svg"
                    alt=""
                    data-config-id="auto-img-3-8"
                  />
                  <img
                    className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto text-blue-500"
                    src="flex-ui-assets/elements/dots3-yellow.svg"
                    alt=""
                    data-config-id="auto-img-4-8"
                  />
                  <img
                    src="https://static.shuffle.dev/uploads/files/47/47a5d7c9e0a1afcd5e28bd429f90aa16df48bec4/video-bkg.jpg"
                    alt=""
                    data-config-id="auto-img-1-8"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <span
                  className="inline-block py-px px-2 mb-4 text-xs leading-5 text-violet-500 bg-violet-100 font-medium uppercase rounded-full shadow-sm text-lg"
                  data-config-id="auto-txt-1-8"
                >
                  ADVENTURE ACTIVITIES
                </span>
                <h1
                  className="mb-8 text-4xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter"
                  data-config-id="auto-txt-2-8"
                >
                  The Surf Spot and the bay
                </h1>
                <p
                  className="mb-6 text-lg md:text-xl text-coolGray-500 font-medium"
                  data-config-id="auto-txt-3-8"
                >
                  It's not a dream, it's true. There is a very private surf spot
                  right in front of the beach lounge with sections for beginners
                  and intermediates. Take a paddle board and cruise the bay
                  seeing turtles and manta rays. Or simply swim and float in the
                  emerald warm waters.{" "}
                </p>
                <a
                  className="inline-block py-4 px-5 w-full md:w-auto text-base leading-4 text-violet-50 bg-violet-500 hover:bg-violet-600 font-medium text-center focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 rounded-md shadow-sm"
                  href="#"
                  data-config-id="auto-txt-4-8"
                >
                  (soon) Learn about our surf spot
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          data-section-id={11}
          data-category="features-white-pattern"
          data-component-id="79798086_03_awz"
          className="py-24 bg-white"
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
            backgroundPosition: "center",
          }}
          data-config-id="auto-img-2"
        >
          <div className="container px-4 mx-auto">
            <div className="xl:max-w-4xl mb-12 mx-auto text-center">
              <span
                className="inline-block py-px px-2 mb-4 leading-5 text-violet-500 bg-violet-100 font-medium uppercase rounded-full shadow-sm text-lg"
                data-config-id="auto-txt-1-3"
              >
                Wellness Activities
              </span>
              <h1
                className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter"
                data-config-id="auto-txt-2-3"
              >
                The Mindfulness Dimension
              </h1>
              <p
                className="text-lg md:text-xl text-coolGray-500 font-medium mx-auto max-w-5xl"
                data-config-id="auto-txt-3-3"
              >
                Join Roberto, ex-silicon valley engineer, recovered PTSD patient
                and the founder of Paz, for a chat, walk, bone-fire, paddle,
                swim or surf session where he shares what he has learned while
                being blessed living here 15+ years while learning from
                accomplished teachers in Vipassana Meditation, Ayahuasca, Qi
                Gong and Holistic Psychology.
              </p>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 lg:mb-6 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                  <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg bg-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      data-config-id="auto-svg-1-3"
                      data-config-type
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3
                    className="mb-4 text-xl md:text-2xl leading-tight font-bold"
                    data-config-id="auto-txt-4-3"
                  >
                    Be Connected
                  </h3>
                  <p
                    className="text-coolGray-500 font-medium"
                    data-config-id="auto-txt-5-3"
                  >
                    Existence is the only fact of life. That which exist. What's
                    real. Wind, water, light. Every animal and every plant.
                    Everything that exists is interconnected. As we are. Let's
                    find a way to feel that in the best place in the world to do
                    it.
                  </p>
                </div>
                <div className="p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                  <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg bg-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      data-config-id="auto-svg-2-3"
                      data-config-type
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3
                    className="mb-4 text-xl md:text-2xl leading-tight font-bold"
                    data-config-id="auto-txt-6-3"
                  >
                    Be Timeless
                  </h3>
                  <p
                    className="text-coolGray-500 font-medium"
                    data-config-id="auto-txt-7-3"
                  >
                    Time binds us to joy and pain. Let's be free from it for
                    this moment. Free from all past and worries. From futures
                    and desires. Let's set a time to meet and not look back at
                    it for a while.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                <img
                  className="mx-auto"
                  src="https://static.shuffle.dev/uploads/files/47/47a5d7c9e0a1afcd5e28bd429f90aa16df48bec4/templo2.jpg"
                  alt=""
                  data-config-id="auto-img-1-3"
                />
              </div>
              <div className="w-full lg:w-1/3 px-4">
                <div className="p-8 lg:mb-6 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                  <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      data-config-id="auto-svg-3-3"
                      data-config-type
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      />
                    </svg>
                  </div>
                  <h3
                    className="mb-4 text-xl md:text-2xl leading-tight font-bold"
                    data-config-id="auto-txt-8-3"
                  >
                    Be Effortless
                  </h3>
                  <p
                    className="text-coolGray-500 font-medium"
                    data-config-id="auto-txt-9-3"
                  >
                    Meditation is the opposite of acting. Let's ask mother
                    nature to provides us with a perfect setting so we can STOP
                    and let things be for a moment.
                  </p>
                </div>
                <div className="p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                  <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      data-config-id="auto-svg-4-3"
                      data-config-type
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h3
                    className="mb-4 text-xl md:text-2xl leading-tight font-bold"
                    data-config-id="auto-txt-10-3"
                  >
                    Be Spontaneous
                  </h3>
                  <p
                    className="text-coolGray-500 font-medium"
                    data-config-id="auto-txt-11-3"
                  >
                    We are - in fact - asking nature to teach us about freedom.
                    Freedom from self, from stress and its roots. How can we
                    approach that with a plan? Let's feel our bodies, our
                    emotions and our surroundings and we'll go from there.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          data-section-id={16}
          data-category="logo-clouds-white-pattern"
          data-component-id="e923fa01_05_awz"
          className="py-20 xl:pt-24 bg-white"
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
            backgroundPosition: "center",
          }}
          data-config-id="auto-img-6"
        >
          <div className="container px-4 mx-auto">
            <div className="mb-8 text-center">
              <span
                className="inline-block py-px px-2 mb-4 text-xs leading-5 text-violet-500 bg-violet-100 font-medium uppercase rounded-9xl"
                data-config-id="auto-txt-1-5"
              >
                Our Clients
              </span>
              <h3
                className="mb-4 text-4xl md:text-5xl text-coolGray-900 font-bold tracking-tighter"
                data-config-id="auto-txt-2-5"
              >
                8-day Retreats coming soon!
              </h3>
              <p
                className="text-lg md:text-xl text-coolGray-500 font-medium"
                data-config-id="auto-txt-3-5"
              >
                We are creating friendships with Mindfulness, Yoga, Surf and
                Nature instructors to create 8 day retreats here at Paz.
              </p>
            </div>
            <div className="flex flex-wrap justify-center -mx-4 hidden">
              <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
                <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md">
                  <img
                    className="mx-auto"
                    src="flex-ui-assets/brands/logo-clouds/jiggle-logo.svg"
                    alt=""
                    data-config-id="auto-img-1-5"
                  />
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
                <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md">
                  <img
                    className="mx-auto"
                    src="flex-ui-assets/brands/logo-clouds/symtric-logo.svg"
                    alt=""
                    data-config-id="auto-img-2-5"
                  />
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
                <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md">
                  <img
                    className="mx-auto"
                    src="flex-ui-assets/brands/logo-clouds/wishelp-logo.svg"
                    alt=""
                    data-config-id="auto-img-3-5"
                  />
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 md:mb-0">
                <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md">
                  <img
                    className="mx-auto"
                    src="flex-ui-assets/brands/logo-clouds/resecurb-logo.svg"
                    alt=""
                    data-config-id="auto-img-4-5"
                  />
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4">
                <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md">
                  <img
                    className="mx-auto"
                    src="flex-ui-assets/brands/logo-clouds/welytics-logo.svg"
                    alt=""
                    data-config-id="auto-img-5-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          data-section-id={14}
          data-category="blog-white-pattern"
          data-component-id="3c85f5c3_07_awz"
          className="py-16 md:py-24 lg:pb-52 bg-white"
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
          }}
          data-config-id="auto-img-7"
        >
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center mb-16">
              <div className="w-full md:w-3/4 mb-8 md:mb-0">
                <span
                  className="inline-block py-px px-2 mb-4 text-xs leading-5 text-violet-500 bg-violet-100 font-medium uppercase rounded-full shadow-sm"
                  data-config-id="auto-txt-1-7"
                >
                  Blog
                </span>
                <h3
                  className="mb-4 text-4xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter"
                  data-config-id="auto-txt-2-7"
                >
                  Social posts
                </h3>
                <p
                  className="text-lg md:text-xl text-coolGray-500 font-medium"
                  data-config-id="auto-txt-3-7"
                >
                  Our founder and residentes are constantly producing content to
                  share what we are up to and what it's like living here, now.
                </p>
              </div>
              <div className="w-full md:w-1/4">
                <a
                  className="flex items-center justify-center py-2 px-4 ml-auto text-sm leading-5 text-violet-50 font-medium bg-violet-500 hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 md:max-w-max rounded-md"
                  href="#"
                  data-config-id="auto-txt-4-7"
                ></a>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <a className="block mb-6 overflow-hidden rounded-md" href="#">
                  <img
                    className="w-full"
                    src="https://static.shuffle.dev/uploads/files/47/47a5d7c9e0a1afcd5e28bd429f90aa16df48bec4/libro.png"
                    alt=""
                    data-config-id="auto-img-1-7"
                  />
                </a>
                <p
                  className="mb-2 text-coolGray-500 font-medium"
                  data-config-id="auto-txt-5-7"
                >
                  Roberto Rodriguez - Abril 2022
                </p>
                <a
                  className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline"
                  href="#"
                  data-config-id="auto-txt-6-7"
                >
                  We published our first book!
                </a>
                <p
                  className="mb-4 text-base md:text-lg text-coolGray-400 font-medium"
                  data-config-id="auto-txt-7-7"
                >
                  En Paz is available on Amazon Kindle and Paperback [ in
                  Spanish being translated into English ]. It's a poetic book
                  that represents the journey of the last 10 years of Paz
                  Founder Roberto Rodriguez.
                </p>
                <a
                  className="inline-block py-1 px-3 text-xs leading-5 text-violet-500 hover:text-violet-600 font-medium uppercase bg-violet-100 hover:bg-violet-200 rounded-full shadow-sm"
                  href="#"
                  data-config-id="auto-txt-8-7"
                >
                  Book
                </a>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <a className="block mb-6 overflow-hidden rounded-md" href="#">
                  <img
                    className="w-full"
                    src="https://static.shuffle.dev/uploads/files/47/47a5d7c9e0a1afcd5e28bd429f90aa16df48bec4/me-flauta.jpg"
                    alt=""
                    data-config-id="auto-img-2-7"
                  />
                </a>
                <p
                  className="mb-2 text-coolGray-500 font-medium"
                  data-config-id="auto-txt-9-7"
                >
                  Roberto Rodriguez - Abril 2022
                </p>
                <a
                  className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline"
                  href="#"
                  data-config-id="auto-txt-10-7"
                >
                  Una Tranquila
                </a>
                <p
                  className="mb-4 text-base md:text-lg text-coolGray-400 font-medium"
                  data-config-id="auto-txt-11-7"
                >
                  Our first single published in Spotify. This spontaneous melody
                  is a prayer to ask for help - from within- reducing stress and
                  anxiety that we create by the way we live.
                </p>
                <a
                  className="inline-block py-1 px-3 text-xs leading-5 text-violet-500 hover:text-violet-600 font-medium uppercase bg-violet-100 hover:bg-violet-200 rounded-full shadow-sm"
                  href="#"
                  data-config-id="auto-txt-12-7"
                >
                  Music
                </a>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <a className="block mb-6 overflow-hidden rounded-md" href="#">
                  <img
                    className="w-full"
                    src="https://static.shuffle.dev/uploads/files/47/47a5d7c9e0a1afcd5e28bd429f90aa16df48bec4/lounge-1.jpg"
                    alt=""
                    data-config-id="auto-img-3-7"
                  />
                </a>
                <p
                  className="mb-2 text-coolGray-500 font-medium"
                  data-config-id="auto-txt-13-7"
                >
                  Roberto Rodriguez - Abril 2022
                </p>
                <a
                  className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline"
                  href="#"
                  data-config-id="auto-txt-14-7"
                >
                  Amanecer
                </a>
                <p
                  className="mb-4 text-base md:text-lg text-coolGray-400 font-medium"
                  data-config-id="auto-txt-15-7"
                >
                  Our second single on very productive month. Listen on Spotify
                </p>
                <a
                  className="inline-block py-1 px-3 text-xs leading-5 text-violet-500 hover:text-violet-600 font-medium uppercase bg-violet-100 hover:bg-violet-200 rounded-full shadow-sm"
                  href="#"
                  data-config-id="auto-txt-16-7"
                >
                  Music
                </a>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
                <a className="block mb-6 overflow-hidden rounded-md" href="#">
                  <img
                    className="max-h-56 object-cover w-full"
                    src="https://static.shuffle.dev/uploads/files/47/47a5d7c9e0a1afcd5e28bd429f90aa16df48bec4/sunset.jpeg"
                    alt=""
                    data-config-id="auto-img-4-7"
                  />
                </a>
                <p
                  className="mb-2 text-coolGray-500 font-medium"
                  data-config-id="auto-txt-17-7"
                >
                  Roberto Rodriguez - Abril 2022
                </p>
                <a
                  className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline"
                  href="#"
                  data-config-id="auto-txt-18-7"
                >
                  Atardecer
                </a>
                <p
                  className="mb-4 text-base md:text-lg text-coolGray-400 font-medium"
                  data-config-id="auto-txt-19-7"
                >
                  Our third single this month, this time we included a recording
                  of the live session.
                </p>
                <a
                  className="inline-block py-1 px-3 text-xs leading-5 text-violet-500 hover:text-violet-600 font-medium uppercase bg-violet-100 hover:bg-violet-200 rounded-full shadow-sm"
                  href="#"
                  data-config-id="auto-txt-20-7"
                >
                  Music
                </a>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mb-0">
                <a className="block mb-6 overflow-hidden rounded-md" href="#">
                  <img
                    className="w-full"
                    src="https://static.shuffle.dev/uploads/files/47/47a5d7c9e0a1afcd5e28bd429f90aa16df48bec4/esperanza.jpg"
                    alt=""
                    data-config-id="auto-img-5-7"
                  />
                </a>
                <p
                  className="mb-2 text-coolGray-500 font-medium"
                  data-config-id="auto-txt-21-7"
                >
                  Roberto Rodriguez - Mayo 2022
                </p>
                <a
                  className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline"
                  href="#"
                  data-config-id="auto-txt-22-7"
                >
                  Esperanza
                </a>
                <p
                  className="mb-4 text-base md:text-lg text-coolGray-400 font-medium"
                  data-config-id="auto-txt-23-7"
                >
                  A small video recording of a flute session.
                </p>
                <a
                  className="inline-block py-1 px-3 text-xs leading-5 text-violet-500 hover:text-violet-600 font-medium uppercase bg-violet-100 hover:bg-violet-200 rounded-full shadow-sm"
                  href="#"
                  data-config-id="auto-txt-24-7"
                >
                  Music
                </a>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 hidden">
                <a className="block mb-6 overflow-hidden rounded-md" href="#">
                  <img
                    className="w-full"
                    src="flex-ui-assets/images/blog/work5.jpg"
                    alt=""
                    data-config-id="auto-img-6-7"
                  />
                </a>
                <p
                  className="mb-2 text-coolGray-500 font-medium"
                  data-config-id="auto-txt-25-7"
                >
                  John Doe • 19 Jan 2022
                </p>
                <a
                  className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline"
                  href="#"
                  data-config-id="auto-txt-26-7"
                >
                  A small business is only as good as its tools and it is
                  totally true.
                </a>
                <p
                  className="mb-4 text-base md:text-lg text-coolGray-400 font-medium"
                  data-config-id="auto-txt-27-7"
                >
                  We've all experienced the chaos of multiple spreadsheets,
                  tracking and insight tools...
                </p>
                <a
                  className="inline-block py-1 px-3 text-xs leading-5 text-violet-500 hover:text-violet-600 font-medium uppercase bg-violet-100 hover:bg-violet-200 rounded-full shadow-sm"
                  href="#"
                  data-config-id="auto-txt-28-7"
                >
                  Technology
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          data-section-id={18}
          data-category="newsletter-dark-mix"
          data-component-id="b8d36442_01_awz"
          className="wave-top wave-bottom bg-white"
        >
          <div className="wave wave-top w-full text-coolGray-900">
            <svg
              viewBox="0 0 1440 116"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-config-id="auto-svg-1-1"
            >
              <path
                d="M1440 64.5909H1090.08C833.336 64.5909 580.229 -7.62939e-06 360 -7.62939e-06C139.771 -7.62939e-06 0 64.5909 0 64.5909V116H1440V64.5909Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div
            className="relative py-24 bg-coolGray-900"
            style={{
              backgroundImage:
                'url("flex-ui-assets/elements/pattern-dark.svg")',
              backgroundPosition: "center",
            }}
            data-config-id="auto-img-1"
          >
            <img
              className="absolute top-6 left-6 w-24 md:w-auto"
              src="flex-ui-assets/elements/dots3-violet.svg"
              data-config-id="auto-img-2-1"
            />
            <img
              className="absolute bottom-6 right-6 w-24 md:w-auto"
              src="flex-ui-assets/elements/dots3-yellow.svg"
              data-config-id="auto-img-3-1"
            />
            <div className="container relative z-10 px-4 mx-auto">
              <div className="mx-auto max-w-xl text-center">
                <h3
                  className="mb-4 text-3xl md:text-4xl leading-tight text-white font-bold tracking-tighter"
                  data-config-id="auto-txt-1-1"
                >
                  Sign up for our newsletter
                </h3>
                <p
                  className="mb-8 text-lg md:text-xl text-coolGray-400 font-medium"
                  data-config-id="auto-txt-2-1"
                >
                  Stay in the loop with everything you need to know.
                </p>
                <div className="mx-auto md:max-w-md text-left">
                  <div className="flex flex-wrap mb-1">
                    <div className="w-full md:flex-1 mb-3 md:mb-0 md:mr-6">
                      <input
                        className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xsm"
                        type="text"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="w-full md:w-auto">
                      <a
                        className="inline-block py-3 px-5 w-full leading-5 text-white bg-violet-500 hover:bg-violet-600 font-medium text-center focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm"
                        href="#"
                        data-config-id="auto-txt-3-1"
                      >
                        Subscribe
                      </a>
                    </div>
                  </div>
                  <span className="text-xs text-coolGray-500 font-medium">
                    <span data-config-id="auto-txt-4-1">
                      We care about your data in our
                    </span>
                    <a
                      className="text-violet-500 hover:text-violet-600"
                      href="#"
                      data-config-id="auto-txt-5-1"
                    >
                      privacy policy
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="wave wave-bottom w-full text-coolGray-900">
            <svg
              viewBox="0 0 1440 116"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-config-id="auto-svg-2-1"
            >
              <path
                d="M0 51.4091H349.922C606.664 51.4091 859.771 116 1080 116C1300.23 116 1440 51.4091 1440 51.4091V0H0V51.4091Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </section>
      </div>
    </div>
  );
}
