import Link from "next/link";

import { useRouter } from "next/router";

/* This example requires Tailwind CSS v2.0+ */
const navigationES = [
  { name: "Paz Online", href: "/library" },
  { name: "Retiro", href: "/retreat" },
  { name: "Precios", href: "/pricing" },
  { name: "Historia", href: "/history" },
];

const navigationEN = [
  { name: "Paz Online", href: "/library" },
  { name: "Retreat", href: "/retreat" },
  { name: "Pricing", href: "/pricing" },
  { name: "History", href: "history" },
];
export default function Example({ locale }) {
  let navigation = locale == "en" ? navigationEN : navigationES;
  const router = useRouter();
  const { pathname, asPath, query } = router;
  function changeLocale(nextLocale) {
    return () => {
      router.push({ pathname, query }, asPath, { locale: nextLocale });
    };
  }

  return (
    <div>
      <nav className="relative px-6 py-6 flex justify-between items-center z-10">
        <a className="text-3xl font-bold leading-none" href="#">
          <img
            className="h-20"
            src="/marketing/logo/png/paz_lila_tronco_color_v2.png"
            alt=""
            width="auto"
          />
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-gray-400 p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
              Online Journey
            </a>
          </li>
          <li className="text-gray-800">
            <svg
              className="w-4 h-4 current-fill"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a className="text-sm text-indigo-600 font-bold" href="#">
              In-Person Retreat
            </a>
          </li>
          <li className="text-gray-800">
            <svg
              className="w-4 h-4 current-fill"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
              Pricing
            </a>
          </li>
          <li className="text-gray-800">
            <svg
              className="w-4 h-4 current-fill"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
              History
            </a>
          </li>
        </ul>
        <a
          className="hidden lg:block py-2 px-6 bg-white hover:bg-gray-50 text-sm text-indigo-500 font-bold rounded-l-xl rounded-t-xl transition duration-200"
          href="#"
        >
          Español
        </a>
      </nav>
      <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        <nav className="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <img
                className="h-10"
                src="atis-assets/logo/atis/atis-color-black.svg"
                alt=""
                width="auto"
              />
            </a>
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
                  href="#"
                >
                  Start
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
                  href="#"
                >
                  Platform
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
                  href="#"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
                href="#"
              >
                Sign In
              </a>
              <a
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-purple-600 hover:bg-purple-700 rounded-l-xl rounded-t-xl"
                href="#"
              >
                Sign Up
              </a>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>© 2020 All rights reserved.</span>
            </p>
            <div className="text-center">
              <a className="inline-block px-1" href="#">
                <img src="atis-assets/social/facebook-purple.svg" alt="" />
              </a>
              <a className="inline-block px-1" href="#">
                <img src="atis-assets/social/twitter-purple.svg" alt="" />
              </a>
              <a className="inline-block px-1" href="#">
                <img src="atis-assets/social/instagram-purple.svg" alt="" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

/*

<header className="bg-stone-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-1 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link locale={locale} href="/">
              <a>
                <img
                  className="w-14"
                  src="/marketing/logo/png/lila_solo_v2.png"
                  alt=""
                />
              </a>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <Link locale={locale} key={link.name} href={link.href}>
                  <a className="text-base font-medium text-indigo-500 hover:text-indigo-400">
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <a
              onClick={changeLocale("es")}
              className="inline-block bg-white py-2 px-4 border border-indigo-200 rounded-md text-base font-medium text-indigo-500 hover:bg-opacity-75"
            >
              Español
            </a>

            <a
              onClick={changeLocale("en")}
              className="inline-block bg-white py-2 px-4 border border-indigo-200 rounded-md text-base font-medium text-indigo-500 hover:bg-indigo-50"
            >
              English
            </a>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-indigo-500 hover:text-indigo-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>

*/
