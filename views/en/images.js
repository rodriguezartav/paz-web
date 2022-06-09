import Footer from "../../components/marketing/footer";

import LeftPlain from "../../components/sections/leftPlain";
import RightPlain from "../../components/sections/rightPlain";

import HeaderTop from "../../components/sections/headerTop";

import Pricing from "../../components/sections/pricing";
import Signup from "../../components/sections/signupForm";

import Guide from "../../components/app/Guide";

import Calendar from "../../components/sections/calendar";
import ThreeFeatures from "../../components/sections/threeFeatures";
import { Fragment, useState } from "react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" antialiased bg-body text-body font-body">
      <Guide />

      <Footer />
    </div>
  );
}
