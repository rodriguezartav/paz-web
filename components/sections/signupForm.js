import { useState } from "react";
import { useMutate } from "../../helpers/useFetch";

export default function HomeApp({
  title,
  image,
  onComplete,
  color = "indigo-500",
  subtitle,
}) {
  let [email, setEmail] = useState("");
  let [lead, setLead] = useState();
  let { mutate, response, isLoading, error } = useMutate(
    `${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/leads`
  );

  async function onClick() {
    const res = await mutate({ email });
    setLead(res);
    onComplete(res);
  }

  return (
    <section className="py-24 bg-coolGray-100">
      <div className="container px-4 mx-auto">
        <div
          className="relative py-16 md:py-32 px-6 text-center bg-white overflow-hidden rounded-7xl"
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10 mx-auto md:max-w-2xl">
            <h3
              className={` mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter text-${color}`}
            >
              {title}
            </h3>
            <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">
              {subtitle}
            </p>

            {response && (
              <p className="text-center">
                <span className="text-xs font-medium"></span>
                <a className="inline-block text-lg font-medium text-lime-500 ">
                  Listo / Done
                </a>
              </p>
            )}

            {!isLoading && !response && (
              <div className="mx-auto md:max-w-md text-left">
                <div className="flex flex-wrap mb-1">
                  <div className="w-full md:flex-1 mb-3 md:mb-0 md:mr-6">
                    <input
                      value={email}
                      onChange={(e) => {
                        setEmail(e.currentTarget.value);
                      }}
                      className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xsm"
                      type="text"
                      placeholder="Email"
                    />
                    {error && (
                      <p className="text-red-500">Error: {error.message} </p>
                    )}
                  </div>
                  <div className="w-full md:w-auto">
                    <a
                      className="inline-block py-3 px-5 w-full leading-5 text-white bg-indigo-500 hover:bg-indigo-600 font-medium text-center focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm"
                      onClick={() => {
                        onClick();
                      }}
                    >
                      Subscribe
                    </a>
                  </div>
                </div>
                <span className="text-xs text-coolGray-500 font-medium">
                  <span>We care about your data in our</span>
                  <a className="text-indigo-500 hover:text-indigo-600" href="#">
                    privacy policy
                  </a>
                </span>
              </div>
            )}
          </div>

          <img
            className="absolute top-0 left-0 w-28 md:w-auto"
            src="flex-ui-assets/elements/wave2-violet.svg"
            alt=""
          />
          <img
            className="absolute right-6 top-6 w-28 md:w-auto"
            src="flex-ui-assets/elements/dots3-indigo.svg"
            alt=""
          />
          <img
            className="absolute right-0 bottom-0 w-28 md:w-auto"
            src="flex-ui-assets/elements/wave3-violet.svg"
            alt=""
          />
          <img
            className="absolute left-6 bottom-6 w-28 md:w-auto"
            src="flex-ui-assets/elements/dots3-violet.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
