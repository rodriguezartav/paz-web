import Footer from "./marketing/footer";
import Hero from "./marketing/hero";
import Punch from "./marketing/punch";
import Features1 from "./marketing/features1";
import Features2 from "./marketing/features2";
import Banner from "./marketing/banner";
import Header from "./marketing/header";
import GridList from "./marketing/videos";
import Comment from "./marketing/comment";
import Features3 from "./marketing/features3";
import Images from "./marketing/images";

import Cta from "./marketing/cta";

import News from "./marketing/news";

import Slideover from "./marketing/slideover";

import Blog from "./marketing/blog";

import { useState } from "react";

export default function Example({ setView, posts }) {
  let [selectedView, setSelectedView] = useState("vacations");

  const [sideView, setSideView] = useState("profile");
  const [sideViewOpen, setSideViewOpen] = useState(false);

  return (
    <div className="bg-stone-100 object-cover ">
      <main className="relative">
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

          {selectedView == "vacations" && <Hero selectedView={selectedView} />}

          <div className="flex">
            <div className=" w-64 h-1 bg-violet-200"></div>
            <div className=" flex-auto  bg-violet-300"></div>
            <div className="flex-auto bg-sky-400"></div>
            <div className="flex-auto bg-sky-300"></div>
            <div className=" w-64 bg-lime-100"></div>
            <div className="flex-auto bg-amber-200"></div>{" "}
          </div>

          <Punch selectedView={selectedView} />

          <Features1 selectedView={selectedView} />

          <Features2 selectedView={selectedView} />

          <Cta />

          <Blog posts={posts} />
          <News />
        </div>
      </main>

      <Banner
        onClick={() => {
          setSideView("profile");
          setSideViewOpen(true);
        }}
      />

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
