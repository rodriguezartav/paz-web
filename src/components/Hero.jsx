import { Container } from '@/components/Container'

import { CheckIcon } from '@heroicons/react/outline'

export function Hero() {
  return (
    <Container className="pt-16 pb-6 text-center text-indigo-500 lg:pt-28">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight  sm:text-7xl">
        Reuniones{' '}
        <span className="relative whitespace-nowrap ">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">de conexión </span>
        </span>{' '}
        con la naturaleza
        <br />
      </h1>

      <div className="mx-auto  mt-5 max-w-xl">
        <div className=" pt-5 text-left text-lg font-medium text-slate-600 transition-all sm:my-0 md:ml-14 md:text-xl">
          <div className="text-left">Un paseo para recordar...</div>
          <ul className="">
            <li className="flex py-4 pt-8 md:mt-4 md:py-0 md:pb-4">
              <CheckIcon
                className="h-6 w-6 flex-shrink-0 text-green-500"
                aria-hidden="true"
              />
              <span className="ml-3 text-base text-gray-500">
                descanse comodamente frente al mar
              </span>
            </li>
            <li className="flex py-4 md:py-0 md:pb-4">
              <CheckIcon
                className="h-6 w-6 flex-shrink-0 text-green-500"
                aria-hidden="true"
              />
              <span className="ml-3 text-base text-gray-500">
                {' '}
                diviertase en aventuras autenticas en rios, playas y cascadas
              </span>
            </li>
            <li className="flex py-4 md:py-0 md:pb-4">
              <CheckIcon
                className="h-6 w-6 flex-shrink-0 text-green-500"
                aria-hidden="true"
              />
              <span className="ml-3 text-base text-gray-500">
                {' '}
                descargue stress y agotamiento mental en el spa natural
              </span>
            </li>

            <li className="flex py-4 md:py-0 md:pb-4">
              <CheckIcon
                className="h-6 w-6 flex-shrink-0 text-green-500"
                aria-hidden="true"
              />
              <span className="ml-3 text-base text-gray-500">
                {' '}
                aprenda a recargar energía con ejercicios de conexión natural
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto  max-w-xl">
        <div className="mb-8 py-5 text-left text-lg font-medium text-slate-600 transition-all sm:my-0 md:ml-14 md:text-xl">
          <div className="text-left">Que incluye:</div>
          <ul className="">
            <li className="flex py-4 md:py-0 md:pb-4">
              <CheckIcon
                className="h-6 w-6 flex-shrink-0 text-green-500"
                aria-hidden="true"
              />
              <span className="ml-3 text-base text-gray-500">
                Hospedaje de alta calidad
              </span>
            </li>

            <li className="flex py-4 md:py-0 md:pb-4">
              <CheckIcon
                className="h-6 w-6 flex-shrink-0 text-green-500"
                aria-hidden="true"
              />
              <span className="ml-3 text-base text-gray-500">
                Todas las actividades guiadas por el fundador de Paz
              </span>
            </li>

            <li className="flex py-4 md:py-0 md:pb-4">
              <CheckIcon
                className="h-6 w-6 flex-shrink-0 text-green-500"
                aria-hidden="true"
              />
              <span className="ml-3 text-base text-gray-500">
                Comida saludable a la leña, noches de fogatas, BBQ y Pizza
              </span>
            </li>
            <li className="flex py-4 md:py-0 md:pb-4">
              <CheckIcon
                className="h-6 w-6 flex-shrink-0 text-green-500"
                aria-hidden="true"
              />
              <span className="ml-3 text-base text-gray-500">
                Charlas motivacionales de ciencia, psicología y espiritualidad
              </span>
            </li>
            <li className="flex py-4 md:py-0 md:pb-4">
              <CheckIcon
                className="h-6 w-6 flex-shrink-0 text-green-500"
                aria-hidden="true"
              />
              <span className="ml-3 text-base text-gray-500">
                Opcional: Clases de Surf, Paddleboard y tours a Corcovado
              </span>
            </li>
          </ul>

          <br />
          <span className="mt-10 block">
            Disponible en retiros mensuales o grupos privados de{' '}
            <span className="font-bold text-indigo-500">
              familias, amigos y empresas
            </span>{' '}
          </span>
        </div>
      </div>
    </Container>
  )
}
