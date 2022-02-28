/* This example requires Tailwind CSS v2.0+ */
const steps = [
  {
    id: "Friends & Family",
    name: "Vacations",
    href: "#",
    code: "vacations",
    status: "complete",
  },
  {
    id: "For Me",
    code: "retreats",
    name: "De-stress Retreats",
    href: "#",
    status: "other",
  },
  {
    id: "For Women",
    code: "teachers",
    name: "Healing Retreats",
    href: "#",
    status: "upcoming",
  },
];

export default function Header(props) {
  let { selected, onSelect } = props;

  return (
    <nav aria-label="Progress">
      <ol role="list" className="  flex  space-x-8 md:mx-2 md:mb-5 ">
        {steps.map((step) => (
          <li
            onClick={() => {
              props.setSelected(step.code);
            }}
            key={step.name}
            className="flex-1 md:px-2"
          >
            {selected === step.code ? (
              <a className="group pl-4 py-2 flex flex-col border-l-4 border-violet-600 hover:border-violet-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-b-4">
                <span className="text-xs text-violet-600 font-semibold tracking-wide uppercase group-hover:text-violet-800">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </a>
            ) : selected === step.code ? (
              <a
                className="pl-4 py-2 flex flex-col border-l-4 border-violet-600 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-b-4"
                aria-current="step"
              >
                <span className="text-xs text-violet-600 font-semibold tracking-wide uppercase">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </a>
            ) : (
              <a className="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-b-4">
                <span className="text-xs text-gray-500 font-semibold tracking-wide uppercase group-hover:text-gray-700">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
