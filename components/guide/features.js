/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const features = [
  {
    name: "Durable",
    description:
      "The leather cover and machined steel disc binding stand up to daily use for years to come.",
  },
  {
    name: "Refillable",
    description:
      "Buy it once and refill as often as you need. Subscribe and save on routine refills.",
  },
  {
    name: "Thoughtfully designed",
    description:
      "The comfortable disc binding allows you to quickly rearrange pages or combine lined, graph, and blank refills.",
  },
  {
    name: "Locally made",
    description:
      "Responsibly and sustainably made real close to wherever you are, somehow.",
  },
];

export default function Example(props) {
  const { features, name, type, description, image, image_alt } = props.item;
  return (
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="relative">
        <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16">
          <img
            src={image}
            alt={image_alt}
            className="h-full w-full object-center object-cover lg:h-full lg:w-full"
          />
        </div>

        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="lg:col-start-2">
            <h2 id="features-heading" className="font-medium text-gray-500">
              {type}
            </h2>
            <p className="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight">
              {name}
            </p>
            <p className="mt-4 text-gray-500">{description}</p>

            <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
