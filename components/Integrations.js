import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
  FireIcon,
  MailIcon,
} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

import useSWR from "swr";
import fetcher from "../helpers/fetcher";
import { useMutate, useFetch } from "../helpers/useFetch";

const actions = [
  {
    title: "Salesforce",
    key: "salesforce",
    href: "#",
    description:
      "The most used CRM in the world. Mogi native integrates with Salesforce pulls information about leads, contacts, accounts and oppotunities and builds a benchmark of your organizations marketing performance profile",
    icon: ClockIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Marketo",
    href: "#",
    key: "marketo",
    icon: BadgeCheckIcon,
    description:
      "Email, Web Forms and landing pages are analized and benchmarked, so that next time you'll know exactly how that new idea performed.",
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Slack",
    href: "#",
    key: "slack",
    description:
      "Slack is the default notification and communication tool among large entreprises and small startups. It's used to send time sentive notifications and newsletters.",
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "Google",
    key: "google",
    href: "#",
    disabled: true,
    description:
      "Soon. Google integration connects marketing data to customer facing web pages and apps. This closes the loop and provides Mogi with 'last-mile' information about the behavior of customers.",
    icon: CashIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const router = useRouter();

  const { data, error } = useSWR("/api/integrations", fetcher);
  const {
    response,
    error: mutateError,
    isLoading,
    mutate,
  } = useMutate("/api/integration/");

  function onConnect(action) {
    return async () => {
      const r = await mutate(
        { name: action.key },
        `/api/integration/${action.key}/start`
      );

      window.open(r.url);
    };
  }

  return (
    <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0
              ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
              : "",
            actionIdx === 1 ? "sm:rounded-tr-lg" : "",
            actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
            actionIdx === actions.length - 1
              ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
              : "",
            "relative group bg-white p-6 "
          )}
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                "rounded-lg inline-flex p-3 ring-4 ring-white"
              )}
            >
              <action.icon className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-medium">
              <a className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                {action.title}
              </a>
            </h3>
            <p className="mt-2 mb-3 text-sm text-gray-500">
              {action.description}
            </p>

            {data &&
            data.filter((item) => item.name == action.key && item.is_connected)
              .length == 0 ? (
              <a
                onClick={onConnect(action)}
                className=" cursor-pointer inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <FireIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                Connect
              </a>
            ) : (
              <>
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  <svg
                    className="-ml-1 mr-1.5 h-2 w-2 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 8 8"
                  >
                    <circle cx={4} cy={4} r={3} />
                  </svg>
                  Connected
                </span>
                <br />
                <a
                  onClick={onConnect(action)}
                  className="cursor-pointer text-xs ml-2 font-medium text-indigo-600 hover:text-indigo-500"
                >
                  reconnect
                </a>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
