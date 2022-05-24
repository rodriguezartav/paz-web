import Link from "next/link";

import { useRouter } from "next/router";

/* This example requires Tailwind CSS v2.0+ */
const navigationES = [
  { name: "Retiro", href: "/retreat" },
  { name: "Precios", href: "/pricing" },
  { name: "Historia", href: "/history" },
  { name: "Libreria", href: "/library" },
];

const navigationEN = [
  { name: "Retreat", href: "/retreat" },
  { name: "Pricing", href: "/pricing" },
  { name: "History", href: "history" },
  { name: "Library", href: "/library" },
];
export default function Example({ locale }) {
  let navigation = locale == "en" ? navigationEN : navigationES;
  const router = useRouter();
  function changeLocale(nextLocale) {
    return () => {
      const { pathname, asPath, query } = router;
      router.push({ pathname, query }, asPath, { locale: nextLocale });
    };
  }

  return (
    <header className="bg-stone-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-1 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <a href="/">
              <img
                className="w-14"
                src="/marketing/logo/png/lila_solo_v2.png"
                alt=""
              />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-indigo-500 hover:text-indigo-400"
                >
                  {link.name}
                </a>
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
  );
}
