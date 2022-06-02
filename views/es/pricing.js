import Footer from "../../components/marketing/footer";

import HeaderTop from "../../components/sections/headerTop";

import Pricing from "../../components/sections/pricing";
import Signup from "../../components/sections/signupForm";

import Calendar from "../../components/sections/calendar";
import ThreeFeatures from "../../components/sections/threeFeatures";
import { useState } from "react";
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
        title="Todos los retiros empiezan el segundo jueves de cada mes"
        subtitle={`Precios, Horarios y Detalles`}
      />

      <ThreeFeatures
        t1_title="Comida Saludable"
        t1_description=""
        t2_title="Todas las actividades incluidas"
        t2_description=""
        t3_title="Coaching & Sessiones Privadas"
        t3_description=""
      />

      <Pricing
        legend={"Pricing"}
        title={"Precios para los retiros del 2022/2023"}
        subtitle="Quédese lo que quiere entre 4 y 7 días."
        period="noche"
        prices={[
          {
            title: "Naturaleza y Aventura",
            price: 179,
            subtitle: "Tarifa cuarto doble compartido",
            button: "Reserve hoy con $100",
            list: [
              "3 comidas saludables",
              "Te, Cafe y Estación de Frutas",
              "1 clase de Surf/Paddle por día",
              "Caminatas y Actividades en la Naturaleza",
              "Actividades grupales como fogatas, bbq, etc",
              "1 session privada por día",
            ],
          },
          {
            title: "Naturaleza",
            price: 129,
            subtitle: "Tarifa cuarto doble compartido",
            button: "Reserve hoy con $100",
            list: [
              "3 comidas saludables",
              "Te, Cafe y Estación de Frutas",

              "Caminatas y Actividades en la Naturaleza",
              "Actividades grupales como fogatas, bbq, etc",
              "1 session privada por día",
            ],
          },
          {
            title: "Silencio y Meditación",
            price: 89,
            subtitle: "Tarifa cuarto doble compartido",
            button: "Reserve hoy con $100",
            list: [
              "3 comidas saludables",
              "Te, Cafe y Estación de Frutas",

              "Actividades grupales como fogatas, bbq, etc",
              "1 session privada por día",
            ],
          },
        ]}
      />

      <Calendar
        legend={"Horario del Retiro"}
        title={"Conozca nuestro calendario de ejemplo"}
        subtitle="Escoja el mes que le interesa"
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
