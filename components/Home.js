import Footer from "./marketing/footer";
import Hero from "./marketing/hero";
import Punch from "./marketing/punch";
import Features1 from "./marketing/features1";
import Features2 from "./marketing/features2";

export default function Example(props) {
  return (
    <div className="bg-stone-100 object-cover ">
      <main className="relative">
        <Hero />
        <Punch />
        <Features1 />
        <Features2 />
      </main>

      {/* Footer section */}
      <Footer />
    </div>
  );
}
