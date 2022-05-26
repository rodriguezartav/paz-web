import Footer from "../../components/marketing/footer";
import LeftPlain from "../../components/sections/leftPlain";
import RightPlain from "../../components/sections/rightPlain";

import Cta from "../../components/sections/cta";

import Links from "../../components/sections/links";

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

      <HeaderTop
        logoBefore={true}
        title={`Mar adentro y viendo los colores del cielo le pregunté al atardecer: "como le pongo a este lugar?`}
        subtitle={``}
      />

      <RightPlain
        legend={"Ubicación"}
        title="Paz esta ubicado en el místico cabo Mata Palo en la Peninsula de Osa de Costa Rica"
        subtitle={`Una comunidad de amantes del medio ambiente entre Puerto Jimenez y el Parque Nacional Corcovado. La región mas alejada de Costa Rica que ni siquiera tiene luz electrica ni servicio de agua. `}
        images={[
          {
            src: "/raw/maps/cr.png",
            width: 750,
            height: 1000,
          },
        ]}
      />

      <LeftPlain
        legend={"Primer Paso"}
        title="Todo empezó con una visita al parque nacional Corcovado"
        subtitle={`En el 2001 Roberto, nuestro fundador hizo su primer viaje al Parque Nacional Corcovado y sintió por primera vez a la madre naturaleza. Esa experiencia lo llevó a transformar su vida, y ese sentir es justamente lo que quiere compartir. El creé que la Peninsula de Osa es la mejor universidad espiritual de la madre naturaleza para nosotros sus hijos.`}
        images={[
          {
            src: "/raw/history/corcovado.png",
            width: 750,
            height: 1000,
          },
        ]}
      />

      <LeftPlain
        legend={"Llegada a Osa"}
        title="Hasta que un día de regreso a su casa notó que los regresos eran muy tristes y se dió cuenta que tambien eran innecesarios"
        subtitle={`Muy a su estilo, renunció a su trabajo, cancelo el alquier, vendió su carro y cambio todas su pertencncias por un moto sin saberla manejar y una tienda de campaña sin saber acampar. Asi empezó esta aventura.`}
        images={[
          {
            src: "/raw/history/camping.jpeg",
            width: 750,
            height: 1000,
          },
        ]}
      />

      <RightPlain
        legend="Muchos años despues..."
        title={`La historia dice que Roberto termino de leer el "Diario de un Yogi" de P. Yogananda`}
        subtitle=" y esa misma noche... se le apareció en un sueño y le dio instrucciones especificas de que hacer en este lugar. El día siguiente empezó..."
        t4_description="Viaje al parque en bote el pen-último día"
        images={[
          {
            src: "/raw/history/construccion_0.jpeg",
            transformations: [
              { cropMode: "cm-extract", height: 500, width: 750 },
            ],
          },
          {
            src: "/raw/history/casa_martino.jpeg",
            transformations: [
              { cropMode: "cm-extract", height: 500, width: 750 },
            ],
          },
          {
            src: "/raw/history/construccion_1.jpeg",
            transformations: [
              { cropMode: "cm-extract", height: 500, width: 750 },
            ],
          },
        ]}
      />

      <LeftPlain
        legend={"Ubicación"}
        title="Pero aun no estaba preparado..."
        subtitle={` Desde niño Roberto tuvo mucho interés por su dimensión espiritual, pero creció muy aislado de la sabiduria de la vida en un cultura dedicada a la fiesta. Estaba a un paso ya dentro del alcholismo, fumaba mucha marihuana y no estaba satisfecho con sus relaciones, su trabajo ni con nada. No sabía vivir.  \n 
        Cuando la misma vida le presentó esas pruebas que a todos nos despiertan el mas profundo temor y para las que nadie esta preparado - todo obviamente emperó.\nPero todo eso cambio cuando conoció al Taita Lucho Flores, su primer maestro, quien le presentó a la sagrada planta del Ayahuasca y junto a el conoció el shamanismo. Sobre todo el uso de la melodía como elemento de sanación.\nDespues de reconocer los multiples traumas que su forma de vivir hasta ese momento habian generado, inicio su viaje de regreso.`}
        images={[
          {
            src: "/raw/history/taita.jpeg",
            width: 750,
            height: 1000,
          },
        ]}
      />

      <RightPlain
        legend={"Ubicación"}
        title="El principio del camino"
        subtitle={`Con la ayuda de los maestros y guias que aparecieron para ayudarlo dejo todo licor y toda droga y todo compartimiento auto-destructivo. Busco disciplinamente su paz interior especializandose en Yoga, Vipassana, Qi Gong, caminatas en naturaleza y hasta el surf. Se despertó en el una melodía de sanación muy linda y espontanea que hasta el día de hoy comparte con todo el que pueda.\n Recordo que desde niño hablo con el cielo, o con su interior y este siempre le respondió. En sus oraciones al cielo siempre pidio conocer la verdad de la vida y que se le consediera la posibilidad de ayudar a otras personas que como el sufrian. \n
        Realmente creyo que si rezaba y meditaba al amanercer iba ser feliz y nada malo le volvería a pasar - lo que revelaba que aun habia miedo en su corazón.`}
        images={[
          {
            src: "/raw/history/lake.jpeg",
            transformations: [
              { cropMode: "cm-extract", height: 600, width: 650 },
            ],
          },
          {
            src: "/raw/history/utah.jpeg",
            transformations: [
              { cropMode: "cm-extract", height: 600, width: 650 },
            ],
          },
          {
            src: "/raw/history/flute.jpeg",
            transformations: [
              { cropMode: "cm-extract", height: 600, width: 650 },
            ],
          },
          {
            src: "/raw/history/contrabajo.jpeg",
            transformations: [
              { cropMode: "cm-extract", height: 600, width: 650 },
            ],
          },
        ]}
      />

      <LeftPlain
        legend={"Ubicación"}
        title="El principio del fin"
        subtitle={`Nunca imaginó la forma en que sus peticiones llegarian. Con los buenos resultados de sus mas de 30 ceremonias de Ayahuasca y creyendo que su camino podria encontrarse en el chamanismo atendió una invitación a una ceremonia de Hongos Alucinojenos. \nLa agresividad con que esta experiencia le reveló sus verdades lo destruyó y lo dejo incapacitado con estres post traumatico por dos años. Recurrio a la psiquiatria y tuvo que tomar medicamentos ansioliticos y antidepresivos; era tal el sufrimiento fisico y emocional que se encontró frente a la puerta que parece no tener salida por donde uno se despide de la vida.  \nSobre todo en los primeros 8 meses estuvo en un estado muy afectado por la philosibina y útilizo todas las tecnicas que conocía, pero sobre todo las de exploración interna que le enseño el Ayahuasca para salvar su vida.\n Fue ahí en el momento mas oscuros de su vida donde conoció una luz tan brillante que nunca nadie ni nada podría apagar. Se encontró a si mismo, luz de la vida y con eso regresó.`}
        images={[
          {
            src: "/raw/history/bosque.jpeg",
            width: 850,
          },
        ]}
      />

      <RightPlain
        legend={"Ubicación"}
        title="El final del conocimiento"
        subtitle={`Al regresar encontró las migajas de pan que desde el principio esa luz había dejado en el camino, como si supiera que su mundo se apagaría, y que las necesitaria para atravez esos años a oscuras. \nReconoció que recibió lo que pidió, pues la única forma de realmente saber lo que vive tanta gente - incluso uno mismo, es haciendo ese recorrido y llegar hasta el final de la batalla que en verdad es de nuestro interior contra la atrevida addicción que tiene la mente de llamarse Yo. \n Se encontró con su maestro de Qi Gong, Sifu Rama, quien habia aprendido las técnicas de indagación en el ser con una linea de transmisión directa hasta Ramana Maharishi, y al escucharlas reconoció instantenemente las lecciones que habia aprendido.\n Se encontró con lo que hoy en día es Paz y que llevaba varios años esperandolo.`}
        images={[
          {
            src: "/raw/forest/bosque_brillante.jpeg",
            transformations: [
              { cropMode: "cm-extract", height: 660, width: 750 },
            ],
          },
          {
            src: "/raw/forest/higo_brillante.jpeg",
            transformations: [
              { cropMode: "cm-extract", height: 660, width: 750 },
            ],
          },
          {
            src: "/raw/beach/front_green.jpg",
            transformations: [
              { cropMode: "cm-extract", height: 660, width: 750 },
            ],
          },
          {
            src: "/raw/lounge/drone_300.jpg",
            transformations: [
              { cropMode: "cm-extract", height: 660, width: 750 },
            ],
          },
          {
            src: "/raw/lounge/empty_beach.jpg",
            transformations: [
              { cropMode: "cm-extract", height: 660, width: 750 },
            ],
          },
          {
            src: "/raw/lounge/hammocks.jpg",
            transformations: [
              { cropMode: "cm-extract", height: 660, width: 750 },
            ],
          },
          {
            src: "/raw/house/outside/from_firepit.jpg",
            transformations: [
              { cropMode: "cm-extract", height: 660, width: 750 },
            ],
          },
        ]}
      />

      <HeaderLeft
        legend="Paz es un hogar"
        title="En Paz, todo se hace solo"
        color="lime-700"
        subtitle={`
        
        Nosotros confiamos que este lugar tiene un proposito que traciende lo material. Por eso a la hora de crearlo no nos sentamos a pensar como hacerlo ni contratamos diseño o construcción. Desde esta pagina web, el nombre, el logo; el diseño de las instalaciones, hasta el sistema solar eléctrico es hecho de esa forma, por nosotros y nuestro equipo.

        Hemos intentado que todo aquí sea intuitivo y espontaneo, dejando que las cosas se hagan a travez de uno, sin tener que estar pensando y resolviendo uno solo; culpando a otros si salio mal o sacando pecho si se hizo bien.\n
  
        Habrán lugares mas lindos y mejores paginas, claro. Pero en verdad nosotros no estamos compitiendo, ni tampoco queremos ganar. Esto es simplemente una expresión de lo que sentimos en el corazón. Como un árbol cuando pasa el viento y suena tan lindo. No es el arbol que lo hace, es la vida…
      
        Mas alla del resultado, es tan rico vivir así, no cambiaría ni las lamparas por unas de oro puro. Porque la esencia de toda esta historia esta en ellas, yo se que sí. `}
        images={[
          {
            src: "/raw/house/dinning/dinning_full.JPG",
            transformations: [{ cropMode: "cm-extract", height: 700 }],
          },
          {
            src: "/raw/house/living/master.jpeg",
            transformations: [
              { cropMode: "cm-extract", height: 660, width: 750 },
            ],
          },
          {
            src: "/raw/house/outside/outside_front.jpeg",
            transformations: [
              { cropMode: "cm-extract", height: 660, width: 750 },
            ],
          },
        ]}
      />

      <HeaderLeft
        legend="Paz es un hogar"
        title="Los retiros, tambien"
        color="lime-700"
        subtitle={`
        El proposito de este lugar es que todos experimentos un momento de Paz y en ese momento de libertad tengamos la oportunidad de recordar lo que somos en realidad.\n
        No hay una técnica ni una disciplina que pueda llevarnos hasta alla, no hay nada que conquistar. Pues si no somos ya, entonces quien es el que existe en cada cuerpo?\n
        Confiamos que este lugar tiene un proposito que traciende lo material, que aquí llega quien tiene que llegar y que cuando llegue el momento este lugar y lo que somos adentro - que es lo mismo - sabran que hacer. De nada sirve ponernos a pensar y a planear cuando al final si llueve, lloverá.\n
        Se trata de practicar, dejar que pase lo que tenga que pasar, y cuando estemos frente al mar dejar que sea mar y así llegar a dejar que nuestra nota suene como tiene que sonar.\n
        Así es como suena la Paz...
        `}
        images={[
          {
            src: "/raw/beach/paddle_from_sea.jpeg",
            width: 730,
          },
        ]}
      />

      <Links
        title="Paz en el Mundo"
        subtitle="Hemos publicado, libros, música y contenido inspiracional en redes sociales."
        logo_1={{
          src: "./images/logos/spotify.png",
          href: "https://open.spotify.com/artist/5iR7YvWgvzgv3JIc3b0TvK?si=PUMqBm46SpeDDC6geFCdEA",
        }}
        logo_2={{
          src: "./images/logos/instagram.jpg",
          href: "https://instagram.com/monodepaz",
        }}
        logo_3={{ src: "./images/logos/kindle.png", href: "/1" }}
        logo_4={{
          src: "./images/logos/airbnb.svg",
          href: "https://airbnb.com/h/pazz",
        }}
        images={[
          { src: "/optimized/me/me_flauta.jpg", width: 450, height: 700 },
        ]}
      />

      <HeaderBottom
        button_1={{
          text: "Alquiler Propiedad en AirBnb",
          href: "https://airbnb.com/h/pazz",
        }}
        button_2={{ text: "Participar en un retiro", href: "/retreat" }}
        logoBefore={true}
        title="Como nos quiere visitar?"
        subtitle="Hay dos formas:"
      />

      <Footer />
    </div>
  );
}
