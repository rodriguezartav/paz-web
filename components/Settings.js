import { Fragment, useState } from "react";
import { Disclosure, Menu, Switch, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  MenuIcon,
  UserCircleIcon,
  ViewGridAddIcon,
  UserGroupIcon,
  XIcon,
} from "@heroicons/react/outline";

import Billing from "./Billing";
import Profile from "./Profile";
import Integrations from "./Integrations";
import Users from "./Users";

const user = {
  name: "Debbie Lewis",
  handle: "deblewis",
  email: "debbielewis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Jobs", href: "#", current: false },
  { name: "Applicants", href: "#", current: false },
  { name: "Company", href: "#", current: false },
];
const subNavigation = [
  { name: "Integrations", href: "#", icon: ViewGridAddIcon, current: false },

  { name: "Users", href: "#", icon: UserGroupIcon, current: true },
  { name: "Billing", href: "#", icon: CreditCardIcon, current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Settings(props) {
  const [availableToHire, setAvailableToHire] = useState(true);
  const [privateAccount, setPrivateAccount] = useState(false);
  const [allowCommenting, setAllowCommenting] = useState(true);
  const [allowMentions, setAllowMentions] = useState(true);

  const [subNavigationItem, setSubNavigation] = useState(subNavigation[0].name);

  function onSubNavigationClick(item) {
    return () => {
      setSubNavigation(item.name);
    };
  }

  return (
    <main className="relative -mt-32">
      <div className="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
            <aside className="py-6 lg:col-span-3">
              <nav className="space-y-1">
                {subNavigation.map((item) => (
                  <a
                    key={item.name}
                    onClick={onSubNavigationClick(item)}
                    className={classNames(
                      subNavigationItem == item.name
                        ? "bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700"
                        : "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                      "group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
                    )}
                    aria-current={
                      subNavigationItem == item.name ? "page" : undefined
                    }
                  >
                    <item.icon
                      className={classNames(
                        subNavigationItem == item.name
                          ? "text-teal-500 group-hover:text-teal-500"
                          : "text-gray-400 group-hover:text-gray-500",
                        "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    <span className="truncate">{item.name}</span>
                  </a>
                ))}
              </nav>
            </aside>
            <div className="divide-y divide-gray-200 lg:col-span-9">
              {subNavigationItem == "Profile" && <Profile />}
              {subNavigationItem == "Integrations" && <Integrations />}
              {subNavigationItem == "Users" && <Users />}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
