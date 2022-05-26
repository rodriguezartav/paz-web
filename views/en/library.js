import Header from "../../components/Header";
import Footer from "../../components/marketing/footer";
import Hero from "../../components/sections/hero";
import Left from "../../components/sections/left";
import LeftPlain from "../../components/sections/leftPlain";
import RightPlain from "../../components/sections/rightPlain";
import How from "../../components/sections/how";
import Cta from "../../components/sections/cta";
import Application from "../../components/sections/application";
import Links from "../../components/sections/links";
import ThreeFeatures from "../../components/sections/threeFeatures";

import FeaturesCenter from "../../components/sections/featuresCenter";

import HeaderTop from "../../components/sections/headerTop";
import HeaderBottom from "../../components/sections/headerBottom";
import HeaderLeft from "../../components/sections/headerLeft";

import RightWithBullets from "../../components/sections/rightWithBullets";
import LeftWithBullets from "../../components/sections/leftWithBullets";

import { Fragment, useState } from "react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" antialiased bg-body text-body font-body">
      <Link href="/">
        <img
          className="mt-10 mx-auto relative w-44 h-44"
          src="/marketing/logo/png/paz_lila_tronco_color_v2.png"
          alt=""
        />
      </Link>
    </div>
  );
}
