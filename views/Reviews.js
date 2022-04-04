import Hero from "../components/marketing/hero";
import Reviews from "../components/reviews/list";
import Features1 from "../components/marketing/features1";
import Features2 from "../components/marketing/features2";
import Header from "../components/marketing/header";
import Cta from "../components/marketing/cta";
import News from "../components/marketing/news";
import Slideover from "../components/marketing/slideover";

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
        </div>
      </main>

      <Reviews />
    </div>
  );
}
