function Content1() {
  return (
    <div className="relative  bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="/images/beach.jpeg"
            alt=""
          />
        </div>
      </div>
      <div className="relative  px-4  sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="text-base mb-28 max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <h3 className="text-2xl font-extrabold text-stone-500 tracking-tight sm:text-3xl">
              Se trata de practicar o aprender a estar presente en la naturaleza
            </h3>

            <p className="text-lg mt-5 text-gray-500 leading-7">
              Un templo natural es un momento donde la belleza, la paz y la
              alegría se manifiestan en un lugar. Todos los hemos vivido.
            </p>

            <p className="text-lg mt-5 text-gray-500 leading-7">
              Sin embargo hay algo en nosotros, algo que activamos con el
              pensamiento, con las historias que nos contamos y con nuestras
              creencias que nos separa y{" "}
              <span className="bg-red-300 px-1">no</span> nos permite
              experimentar la belleza.
            </p>

            <h2 className="text-2xl text-stone-500 leading-7 mt-5">
              Cómo se llama el curso, que religión es, cuál es el horario?
            </h2>

            <p className="text-lg mt-5 text-gray-500 leading-7">
              No hay una autoridad para la paz, la belleza, el amor y la
              alegria. El universo no tiene un horario, todo pasa cuando pasa.
            </p>

            <p className="text-lg mt-5 text-gray-500 leading-7">
              No hay manual, ni un carnet para pertenecer, ni nada que aprender.
              No hay nada que alcanzar, como un árbol, ya existimos.
            </p>

            <p className="text-lg  mt-5 p-2  bg-violet-200 text-center text-gray-800 rounded-md leading-7">
              Aquí lo que hacemos es buscar lugares y momentos mágicos en la
              naturaleza, en un lugar que esta lleno de ellos.
            </p>

            <p className="text-lg mt-5 text-gray-500 leading-7">
              Nos entregamos con total presencia al momento para estar lo más
              cerca posible de ese existir y lo más largo de lo que nos separa
              de el.
            </p>

            <p className="text-lg mt-5 text-gray-500 leading-7">
              Hay ideas, consejos, somos amigos y al final del día nos sentamos
              en la fogata, a conversar como compañeros de viaje que somos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Top() {
  /* This example requires Tailwind CSS v2.0+ */

  return (
    <div className=" bg-gray-50 w-screen">
      <div className="object-fill">
        <img src="./images/templo.png" alt="" />
      </div>
    </div>
  );
}

/* This example requires Tailwind CSS v2.0+ */
function Test() {
  return (
    <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <blockquote className="mt-10">
            <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
              <p>
                &ldquo; Llegué a la península hace más de 15 años, y me quedé,
                sin saber porqué. No sabía que buscaba paz, ni tampoco como
                encontrarla. <br />
                Pero algo aquí me la mostró.&rdquo;
              </p>

              <p className="text-lg mt-8 text-gray-500 mb-8">
                Con el tiempo, la vida se convirtió en un gran reto y esta
                búsqueda se convirtió en algo necesario para sobrevivir. Mi
                mantra personal es "estas en buenas manos" y con el he
                atravezado las noches más oscuras sólo para darme cuenta al
                amanecer que siempre tuve todo lo que necesité, preparado por
                algo mucho más grande que yo, desde antes del anochecer.
              </p>

              <p>
                Este lugar es parte de eso, y lo que realmente quiero es
                compartirlo con otros que también valoren o necesiten la paz.
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <img
                    className="mx-auto h-14 w-18 rounded-full"
                    src="./images/me.jpeg"
                    alt=""
                  />
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">
                    Rober
                  </div>

                  <svg
                    className="hidden md:block mx-1 h-5 w-5 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-gray-500">
                    Cuidador
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* This example requires Tailwind CSS v2.0+ */

const features = [
  {
    name: "Casa de Alquiler",
    description:
      "Frente al mar, con una playa 'privada' en el bosque primario con visitas diarias de toda la vida del Parque Nacional Corcovado. 2 Habitaciones para 4 personas cada una, cocina equipada y condimentada, sala y comedor amplios.",
    icon: GlobeAltIcon,
  },
  {
    name: "Actividades Incluidas",
    description:
      "Surf para niños y adultos princiante, paseos en kayak, paddleboard, pesca, caminatas, meditaciones, temazcal, fogatas, baños de barro en el mar, 'grounding', 'forest-bathing' y otras tecnicas anti-stress",
    icon: ScaleIcon,
  },
  {
    name: "Detox de Stress y Pantallas",
    description:
      "Programa para profesionales, ejecutivos y empresas. Cupo para 20 personas con alimentación, actividades fisicas, emocionales no invasivas y espirituales no dogmaticas. Incluye Temazcal ( Sauna Detox ).",
    icon: LightningBoltIcon,
  },
  {
    name: "Retreats Individuales",
    description:
      "Glampings en una playa privada, aislada, en la arena. Para quien busque un espacio para produnfizar luego de un retreat de Vipassna, Yoga, Meditación y Ayuno - o para una transición importante en la vida. ",
    icon: AnnotationIcon,
  },
];

function Feature() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-lime-800 font-semibold tracking-wide uppercase">
            Conectado al Parque Nacional Corcovado*
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-stone-600 sm:text-4xl">
            Un lugar para encontrarse
          </p>
          <p className="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
            Paz es nuestro hogar, es de donde venimos, lo que somos cuando no
            hacemos nada. Llegue aquí persiguiendo la paz y en estos templos
            naturales entendí que me venia persiguiendo a mi y todo lo que tenia
            que hacer era parar.
            <br /> <strong>@fui_rober</strong>
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-lime-700 text-stone-200">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function Hospedaje() {
  return (
    <div className="mt-12 bg-stone-200 py-20">
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 ">
          <div>
            <h2 className="text-2xl mb-3 text-lime-800 leading-7 mt-5">
              Hospedaje
            </h2>

            <p className="text-lg text-gray-500 leading-7">
              Con + de 15 años viviendo aqui, sin electricidad, agua, ni nada
              "civilizado" hemos encontrado un balance constructivo.
            </p>
            <div className="mt-6">
              <p className="text-lg text-gray-500 leading-7">
                Nos gusta dormir bien, con buenos abanicos, camas y sin
                mosquitos. Nos gusta el arte, la buena comida, los espacios
                abiertos, techos altos, y hacemos nuestros propios muebles para
                estar comodos en calor y humedad. Rustico cuando debe de serlo y
                moderno cuando hace falta.
              </p>

              <p className="text-lg mt-5  text-gray-500 leading-7">
                El hospedaje es muy versatil con espacio para 18 personas entre
                los glampings y la casa. Todo se puede reservar por separado, o
                la propiedad entera.
              </p>

              <h2 className="text-2xl mb-3 text-lime-800 leading-7 mt-5">
                Ubicación
              </h2>

              <p className="text-lg text-gray-500 leading-7">
                Cabo Mata Palo en la Peninsula de Osa es mágico, no hace falta
                agregarle nada. En nuestra propiedad viven las 4 especies de
                monos, pizotes, lapas, tucanes, tortugas, arboles abuelos,
                flores, plantas, mariposas, noches estrelladas, playas virgenes
                solas, y entre todos, unidos, somos la vida.
              </p>
            </div>

            <p className="text-md leading-7"></p>
            <div className="mt-6">
              <h2 className="text-2xl mb-3 text-lime-800 leading-7 mt-5">
                Actividades Externas
              </h2>

              <p className="text-lg text-gray-500 leading-7">
                Dicen los sabios que el secreto de la vida es el balance entre
                lo interno y externo. El cuerpo y la mente necesitan movimiento
                diario, y aquí nos encanta disfrutar la vida. A parte de
                espacios para hacer yoga, chi kung y meditacion contamos con
                equipo de surf para adultos y niños principiantes, paddle-board,
                kayak, pesca y en el area hay mucha caminatas a cascadas, rios y
                montañas incluida una de las joyas espirituales y naturales de
                Costa Rica la caminata a Sirena en el PN Corcovado.
              </p>

              <h2 className="text-lg text-lime-800 mb-3 leading-7 mt-5">
                Para veteranos
              </h2>

              <p className="text-lg text-gray-500 leading-7">
                Este lugar es tambien ideal para personas que quieran
                profundizar su practica de forma privada y asilada. Realizar un
                ayuno, silencio, un retiro auto-dirigido de Yoga, Meditación,
                Chi Kung. Apoyamos, asistimos, aconsejamos y hasta organizamos
                para grupos de amigos y familias con la posibilidad de agregar
                Satsang al atardecer.
              </p>
            </div>
          </div>
          <div className="mt-12  gap-0.5 lg:mt-0">
            <div className="">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {stats2.map((stat) => (
                  <div key={stat.label} className=" border-gray-100 pt-6">
                    <dt className="text-md font-medium text-amber-900">
                      {stat.label}
                    </dt>
                    <dd className="text-xl  tracking-tight text-lime-800">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* This example requires Tailwind CSS v2.0+ */

function Example21() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <InboxIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  The Beach Lounge
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                  bibendum malesuada faucibus lacinia porttitor. Pulvinar
                  laoreet sagittis viverra duis. In venenatis sem arcu pretium
                  pharetra at. Lectus viverra dui tellus ornare pharetra.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed
                    diam. Sit orci risus aenean curabitur donec aliquet. Mi
                    venenatis in euismod ut.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">
                      Marcia Hill, Digital Marketing Manager
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <SparklesIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  The House
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                  bibendum malesuada faucibus lacinia porttitor. Pulvinar
                  laoreet sagittis viverra duis. In venenatis sem arcu pretium
                  pharetra at. Lectus viverra dui tellus ornare pharetra.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
