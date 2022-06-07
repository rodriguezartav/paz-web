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
    onComplete && onComplete(res);
  }

  return (
    <div className="container my-20 max-w-6xl px-4 mx-auto">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-10 md:mb-0">
          <p className="text-lg md:text-xl text-coolGray-500 font-medium">
            {title}
          </p>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="mx-auto md:mr-0 md:max-w-md">
            <div className="flex flex-wrap mb-1">
              <div className="w-full md:flex-1 mb-3 md:mb-0 md:mr-6">
                {!isLoading && !response && (
                  <>
                    <input
                      value={email}
                      onChange={(e) => {
                        setEmail(e.currentTarget.value);
                      }}
                      className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xsm"
                      type="text"
                      placeholder="Email"
                    />
                    {error && (
                      <p className="text-red-500">Error: {error.message} </p>
                    )}
                  </>
                )}
              </div>

              {response && (
                <p className="text-center">
                  <span className="text-xs font-medium"></span>
                  <a className="inline-block text-lg font-medium text-lime-500 ">
                    Listo / Done
                  </a>
                </p>
              )}

              {!response && (
                <div className="w-full md:w-auto">
                  <a
                    onClick={() => {
                      onClick();
                    }}
                    className="inline-block py-3 px-5 w-full leading-5 text-white bg-green-500 hover:bg-green-600 font-medium text-center focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm"
                  >
                    Subscribe
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
