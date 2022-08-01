/* This example requires Tailwind CSS v2.0+ */

import SimpleImage from '@/components/SimpleImage'

export function SpecsWithImage(props) {
  let feature1 = props.feature1.split(',')
  let feature2 = props.feature2.split(',')
  let feature3 = props.feature3.split(',')
  let feature4 = props.feature4.split(',')

  let images = props.images.split(',')

  return (
    <div className=" not-prose bg-white">
      <div className="mx-auto grid  grid-cols-1 items-center gap-y-16 gap-x-8 py-16      lg:grid-cols-2  ">
        <div>
          <h2 className="not-prose text-3xl  font-normal tracking-tight text-indigo-500 sm:text-4xl">
            {props.title}
          </h2>
          <p className="mt-4 text-gray-500">{props.description}</p>

          <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{feature1[0]}</dt>
              <dd className="mt-2 text-sm text-gray-500">{feature1[1]}</dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{feature2[0]}</dt>
              <dd className="mt-2 text-sm text-gray-500">{feature2[1]}</dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{feature3[0]}</dt>
              <dd className="mt-2 text-sm text-gray-500">{feature3[1]}</dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{feature4[0]}</dt>
              <dd className="mt-2 text-sm text-gray-500">{feature4[1]}</dd>
            </div>
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <SimpleImage
            src={images[0]}
            width={300}
            className="rounded-lg bg-gray-100"
          />
          <SimpleImage
            src={images[1]}
            width={300}
            className="rounded-lg bg-gray-100"
          />
          <SimpleImage
            src={images[2]}
            width={300}
            className="rounded-lg bg-gray-100"
          />
          <SimpleImage
            src={images[3]}
            width={300}
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  )
}
