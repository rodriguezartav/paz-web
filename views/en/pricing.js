import Footer from "../../components/marketing/footer";

import LeftPlain from "../../components/sections/leftPlain";
import RightPlain from "../../components/sections/rightPlain";

import HeaderTop from "../../components/sections/headerTop";

import Pricing from "../../components/sections/pricing";
import Signup from "../../components/sections/signupForm";

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
      <Link href="/">
        <img
          className="mt-28 mx-auto relative w-44 h-44 mb-10"
          src="/marketing/logo/png/blanco_fondo color_v2.png"
          alt=""
        />
      </Link>
      <HeaderTop
        logoBefore={true}
        title="All retreats start the second thursday of each month"
        subtitle={`Price, Schedule and Details`}
      />

      <ThreeFeatures
        t1_title="Healthy Meals"
        t1_description=""
        t2_title="Activities included"
        t2_description=""
        t3_title="Coaching & Private Session"
        t3_description=""
      />

      <Pricing
        legend={"Pricing"}
        title={"2022/2023 Prices for Paz Retreats"}
        subtitle="Stay as much as you like from 4 to 7 days"
        period="night"
        prices={[
          {
            title: "Nature & Adventure",
            price: 200,
            subtitle: "Rate for Shared Double Room",
            button: "Book today with $100",
            list: [
              "3 health meals",
              "Te, Coffe nd Fruit station",
              "1 surf/paddle class each día",
              "Hikes and workgroups in nature",
              "All group activities (bonefire, bbq, etc)",
              "1 Private session per day",
            ],
          },
          {
            title: "Nature",
            price: 159,
            subtitle: "Rate for Shared Double Room",
            button: "Book today with $100",
            list: [
              "3 health meals",
              "Te, Coffe nd Fruit station",

              "Hikes and workgroups in nature",
              "All group activities (bonefire, bbq, etc)",
              "1 Private session per day",
            ],
          },
          {
            title: "Silence and Meditation",
            price: 99,
            subtitle: "Rate for Shared Double Room",
            button: "Book today with $100",
            list: [
              "3 health meals",
              "Te, Coffe nd Fruit station",

              "All group activities (bonefire, bbq, etc)",
              "1 Private session per day",
            ],
          },
        ]}
      />

      <Calendar
        legend={"Retreat Schedule"}
        title={"Check out sample calendar of events"}
        subtitle="Select the month you are interested in"
      />

      <Signup
        onComplete={(e) => console.log(e)}
        title="Reciba precios, ofertas y detalles sobre nuestros retiros"
        subtitle="Estamos alistándonos para lanzar los primeros retiros con precios muy accesibles. Regístrese aquí para enterarse primero."
        image={{ src: "/images/jungle.jpg", width: 1000, height: 700 }}
        button={{ text: "Si, quiero ir", onClick: () => {} }}
      />
      <Footer />
    </div>
  );
}
