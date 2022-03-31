/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-purple-700 sm:text-4xl">
          <span className="block">Ready to book your vacation?</span>
        </h2>
        <p className="mt-4 max-w-7xl text-lg leading-6 text-stone-700">
          Send me a message via AirBnb after making the reservation and I'll add
          a 10% discount to your booking.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              target="_blank"
              href="https://airbnb.com/h/pazz"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
            >
              Go to Airbnb
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
