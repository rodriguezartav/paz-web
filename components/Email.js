import useSWR from "swr";
import fetcher from "../helpers/fetcher";
import EmailFilter from "../components/EmailFilter";
import numeral from "numeral";

export default function Example() {
  const { data, error } = useSWR("/api/email_stats", fetcher);

  function getColor(rate, average) {
    if (average / rate < 0.9)
      return ["bg-green-100", "text-green-800"].join(" ");
    else if (rate / average < 0.9)
      return ["bg-red-100", "text-red-800"].join(" ");
    else return ["", "text-gray-800"].join(" ");
  }

  function renderRange(item, type) {
    const count = item[type];
    let average = item[type + "_average"];
    if (type == "delivered") average = 98;
    if (type == "unsubscribed") average = 1.5;
    const rate = item[type + "_rate"];
    const pos = (rate * 75) / average;
    const low = average * 0.8;
    const high = average * 1.2;

    let color = "bg-sky-500";
    if (pos <= 55) color = "bg-sky-300";
    else if (pos <= 65) color = "bg-sky-400";
    else if (pos <= 72) color = "bg-sky-600";
    else if (pos <= 80) color = "bg-sky-700";
    else color = "bg-sky-900";

    return (
      <>
        <div
          className={` text-xs text-gray-800 absolute`}
          style={{ left: "55%", top: 5, fontSize: "8px" }}
        >
          {numeral((low / 100) * item.sent).format("0.0a")} -{" "}
          {numeral((high / 100) * item.sent).format("0.0a")}
        </div>

        <div
          className=" bg-gray-300 absolute "
          style={{ left: "10px", right: "10px", height: 20, top: 23 }}
        >
          <div
            className={` absolute  ${color}`}
            style={{ left: "0%", width: pos + "%", height: 20 }}
          ></div>

          <div
            className={` absolute  bg-sky-500 border-l-2 border-r-2 border-sky-300`}
            style={{ left: "69%", right: "18%", height: 20, opacity: 0.5 }}
          ></div>
        </div>
      </>
    );
  }

  function renderTab(item, type, label) {
    let average = item[type + "_average"];

    if (type == "delivered") average = 98;
    else if (type == "unsubscribed") average = 0.01;
    const rate = item[type + "_rate"];
    const pos = rate / average;

    //
    let color = "  ";
    if (rate < average && type != "unsubscribed")
      color = "bg-red-100 text-red-800";
    else if (rate > average && type == "unsubscribed")
      color = "bg-red-100 text-red-800";
    else color = "bg-green-100 text-green-8000";

    return (
      <span
        className={` ml-2 mr-2 px-2.5 py-0.5 rounded-full text-xs font-medium ${color}`}
      >
        {label}
      </span>
    );
  }

  function renderBlock(item, type) {
    const count = item[type];
    let average = item[type + "_average"];

    if (type == "delivered") average = 98;
    else if (type == "unsubscribed") average = 0.01;
    const rate = item[type + "_rate"];
    const pos = rate / average;

    //
    let color = "  ";
    if (pos <= 0.7) color = "border-red-800";
    else if (pos <= 0.95) color = "border-amber-800";
    else if (pos <= 1.01) color = "border-lime-600";
    else color = "border-green-800";

    return (
      <>
        <div className={` text-md border-b-2 text-gray-800 p-5 ${color} `}>
          {rate}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Channel
                    </th>

                    <th
                      scope="col"
                      className="px-6 w-48 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Sent
                    </th>
                    <th
                      scope="col"
                      className="px-6 w-48 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Delivered
                    </th>
                    <th
                      scope="col"
                      className="px-6 w-48 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Open
                    </th>
                    <th
                      scope="col"
                      className="px-6 w-48 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Click
                    </th>
                    <th
                      scope="col"
                      className="px-6 w-48 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Unsubscribe
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {(data || []).map((person, index) => {
                    return (
                      <tr key={person.program}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {person.program}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4  text-sm whitespace-nowrap relative">
                          {person.channel}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap relative">
                          {numeral(person.sent).format("0.0a")}
                        </td>

                        <td
                          className={`px-6 py-4 whitespace-nowrap relative font-bold ${
                            person.delivered_rate < 98
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          {person.delivered_rate}%
                        </td>
                        <td
                          className={`px-6 py-4 whitespace-nowrap relative font-bold ${
                            person.open_rate < person.open_average
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          {person.open_rate}%
                        </td>

                        <td
                          className={`px-6 py-4 whitespace-nowrap relative font-bold ${
                            person.clicked_rate < person.clicked_average
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          {person.clicked_rate}%
                        </td>

                        <td
                          className={`px-6 py-4 whitespace-nowrap relative font-bold ${
                            person.unsubscribed_rate > 0.01
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          {numeral(person.unsubscribed_rate).format("0.0%")}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
