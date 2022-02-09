import Footer from "./marketing/footer";
import Hero from "./marketing/hero";
import Punch from "./marketing/punch";
import Features1 from "./marketing/features1";
import Features2 from "./marketing/features2";
import Banner from "./marketing/banner";

export default function Example(props) {
  return (
    <div className="bg-stone-100 object-cover ">
      <main className="relative">
        <Banner />

        <Hero />
        <div className="flex">
          <div className=" w-64 h-14 bg-violet-200"></div>
          <div className=" flex-auto  bg-violet-300"></div>
          <div className="flex-auto bg-sky-400"></div>
          <div className="flex-auto bg-sky-300"></div>
          <div className=" w-64 bg-lime-100"></div>
          <div className="flex-auto bg-amber-200"></div>{" "}
          <div className="flex-auto bg-stone-500"></div>
          <div className=" w-64 bg-lime-700"></div>
          <div className="flex-auto bg-amber-900"></div>
          <div className="flex-auto bg-black"></div>
        </div>

        <Punch />
        <Features1 />
        <Features2 />
      </main>

      {/* Footer section */}
      <Footer />
    </div>
  );
}
