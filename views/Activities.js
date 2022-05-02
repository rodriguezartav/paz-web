import Header from "../components/marketing/header";
import Cta from "../components/marketing/cta";
import News from "../components/marketing/news";
import Slideover from "../components/marketing/slideover";

import { useState } from "react";

const posts = [
  {
    title: "En Paz",
    href: "#",
    category: {
      name: "Book - Spanish",
      href: "#",
      color: "bg-indigo-100 text-indigo-800",
    },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Paul York",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "6 min",
  },
  {
    title: "Atardecer",
    href: "#",
    category: { name: "Audio", href: "#", color: "bg-pink-100 text-pink-800" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    author: {
      name: "Dessie Ryan",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "4 min",
  },
  {
    title: "Improve your customer experience",
    href: "#",
    category: {
      name: "Case Study",
      href: "#",
      color: "bg-green-100 text-green-800",
    },
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    author: {
      name: "Easer Collins",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "11 min",
  },
  {
    title: "Improve your customer experience",
    href: "#",
    category: {
      name: "Case Study",
      href: "#",
      color: "bg-green-100 text-green-800",
    },
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    author: {
      name: "Easer Collins",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "11 min",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ setView }) {
  let [selectedView, setSelectedView] = useState("vacations");

  const [sideView, setSideView] = useState("profile");
  const [sideViewOpen, setSideViewOpen] = useState(false);

  return (
    <div className="bg-stone-100  ">
      <main className="">
        <div className="">
          <Header
            selected={selectedView}
            setSelected={setSelectedView}
            open={sideViewOpen}
            setOpen={setSideViewOpen}
            view={sideView}
            setView={setSideView}
            parentView={selectedView}
          />

          <div className="flex">
            <div className=" w-64 h-1 bg-violet-200"></div>
            <div className=" flex-auto  bg-violet-300"></div>
            <div className="flex-auto bg-sky-400"></div>
            <div className="flex-auto bg-sky-300"></div>
            <div className=" w-64 bg-lime-100"></div>
            <div className="flex-auto bg-amber-200"></div>{" "}
          </div>

          <div className="  bg-gray-50 mt-5 pt-1 mb-12">
            <div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 className="mt-10 text-4xl leading-10 font-extrabold tracking-tight text-purple-700 text-center sm:text-5xl sm:leading-none lg:text-6xl">
                Music & Books
              </h1>

              <p className="mt-6 pb-2 max-w-3xl mx-auto text-xl leading-normal text-gray-500 text-center">
                Welcome to the digital gallery of Paz Founder Roberto Rodriguez.
              </p>
              <p className="mt-0 pb-4 max-w-xl mx-auto text-lg  leading-normal text-purple-700  text-center">
                Browser around or register to the newsletter in case you'd like
                to receive updates when new pieces are created.
              </p>

              <div className="   pb-10 ">
                <input
                  type="text"
                  name="email"
                  autoComplete="given-name"
                  placeholder="email"
                  className="py-3  w-full sm:w-96 mx-auto  px-4 block  shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
                <a className="mt-2 mx-auto block w-full sm:w-40  text-center items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">
                  Register
                </a>{" "}
              </div>
            </div>
          </div>

          <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
              <div className="mt-1 grid gap-16 pt-1 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
                {posts.map((post) => (
                  <div key={post.title}>
                    <div>
                      <a href={post.category.href} className="inline-block">
                        <span
                          className={classNames(
                            post.category.color,
                            "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                          )}
                        >
                          {post.category.name}
                        </span>
                      </a>
                    </div>
                    <a href={post.href} className="block mt-4">
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {post.description}
                      </p>
                    </a>
                    <div className="mt-6 flex items-center"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Cta />

          <News />
        </div>
      </main>

      <Slideover
        open={sideViewOpen}
        setOpen={setSideViewOpen}
        view={sideView}
        setView={setSideView}
        parentView={selectedView}
      />
    </div>
  );
}
