import { ChevronRightIcon } from "@heroicons/react/solid";
import {
  CalendarIcon,
  SpeakerphoneIcon,
  TerminalIcon,
  MailIcon,
} from "@heroicons/react/outline";

export default function VerifyRequestPage(props) {
  const { url, theme } = props;

  return <Example />;
}

function Example() {
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <img
                className="mx-auto h-12 w-auto"
                src="/images/logo.jpg"
                alt="Workflow"
              />
            </div>

            <Box />
          </div>
        </div>
      </div>
    </>
  );
}

const items = [
  {
    name: "Check your email",
    description: "A sign in link has been sent to your email address.",
    href: "#",
    iconColor: "bg-blue-500",
    icon: MailIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Box() {
  return (
    <div className="mt-10 max-w-lg mx-auto">
      <ul
        role="list"
        className="mt-6 border-t border-b border-gray-200 divide-y divide-gray-200"
      >
        {items.map((item, itemIdx) => (
          <li key={itemIdx}>
            <div className="relative group py-4 flex items-start space-x-3">
              <div className="flex-shrink-0">
                <span
                  className={classNames(
                    item.iconColor,
                    "inline-flex items-center justify-center h-10 w-10 rounded-lg"
                  )}
                >
                  <item.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium text-gray-900">
                  <a>
                    <span className="absolute inset-0" aria-hidden="true" />
                    {item.name}
                  </a>
                </div>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              <div className="flex-shrink-0 self-center">
                <ChevronRightIcon
                  className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex">
        <a
          href="/auth/signin"
          className="text-sm font-medium text-yellow-600 hover:text-red-500"
        >
          if you have problems remember to check your spam, or request an email
          again
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  );
}
