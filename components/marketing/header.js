import Division from "./division";

/* This example requires Tailwind CSS v2.0+ */
const navigation = [{ name: "Paz Villa", href: "/villa" }];

export default function Header({ parentView, view, setView, open, setOpen }) {
  return (
    <div>
      <header className="bg-gradient-to-r from-violet-500 to-pink-200 border-b-2 border-white">
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Top"
        >
          <div className="w-full  flex items-center justify-between border-b border-indigo-500 lg:border-none">
            <div className="flex items-center">
              <a href="/">
                <span className="sr-only">Workflow</span>

                <img
                  className="h-20 w-20 text-white"
                  src="/marketing/logo/svg/blanco_solo.svg"
                />
              </a>
              <div className="hidden ml-10 space-x-8 lg:block">
                {navigation.map((link) => (
                  <a
                    key={link.name}
                    target={
                      link.href && link.href.includes("https") ? "_blank" : ""
                    }
                    href={link.href ? link.href : ""}
                    onClick={(e) => {
                      if (link.href) return true;
                      else {
                        e.preventDefault();
                        e.stopPropagation();
                        setOpen(true);
                        setView(link.view);
                      }
                    }}
                    className="text-base font-medium text-white hover:text-indigo-50"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            {navigation.map((link) => (
              <a
                key={link.name}
                target={
                  link.href && link.href.includes("https") ? "_blank" : ""
                }
                href={link.href ? link.href : ""}
                onClick={() => {
                  if (link.href) return true;
                  else {
                    e.preventDefault();
                    e.stopPropagation();
                    setOpen(true);
                    setView(link.view);
                  }
                }}
                className="text-base font-medium text-white hover:text-indigo-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
      <Division />
    </div>
  );
}
