/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";

const people = [
  {
    name: "Beach Lounge",
    title: "Hammocks, Palm Trees, Yoga Deck, Chairs",
    role: "Admin",
    email: "janecooper@example.com",
    icons: [<BedIcon />, <BedIcon />, <BedIcon />, <BedIcon />],
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Surfing & Paddle",
    title: "Equipment & Classes Available",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    icons: [<BedIcon />, <BedIcon />, <BedIcon />, <BedIcon />],
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Natural Mediation",
    title: "An effortless technic created in Paz",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    icons: [<BedIcon />, <BedIcon />, <BedIcon />, <BedIcon />],
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Presence in Nature",
    title: "Practice being here and now in the elements",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    icons: [<BedIcon />, <BedIcon />, <BedIcon />, <BedIcon />],
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Hicking",
    title: "Local and Regional trails",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    icons: [<BedIcon />, <BedIcon />, <BedIcon />, <BedIcon />],
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Beach Walking",
    title:
      "Take a walk mid-tide on the pristine sombrero beach with hardly anyone around.",
    role: "Admin",
    email: "janecooper@example.com",
    icons: [<BedIcon />, <BedIcon />, <BedIcon />, <BedIcon />],
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Waterfall Hike",
    title: "Guided 1 hour hike to magical carbonera waterfall.",
    role: "Admin",
    email: "janecooper@example.com",
    icons: [<BedIcon />, <BedIcon />, <BedIcon />, <BedIcon />],
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Swimming and Floating",
    title:
      "Walk a perfect stop where can can float and swim in the ocean undisturbed",
    role: "Admin",
    email: "janecooper@example.com",
    icons: [<BedIcon />, <BedIcon />, <BedIcon />, <BedIcon />],
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Native Music",
    title: "Light a fire on the pit, listen to the drums and native flute",
    role: "Admin",
    email: "janecooper@example.com",
    icons: [<BedIcon />, <BedIcon />, <BedIcon />, <BedIcon />],
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];

export default function Example() {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 ">
              <div className="flex items-center space-x-3">
                <h3 className="text-gray-900 text-sm font-medium truncate">
                  {person.name}
                </h3>
              </div>
              <p className="mt-1 text-gray-500 text-sm ">{person.title}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function BedIcon() {
  return (
    <svg
      width="512px"
      height="512px"
      className="h-6 w-6"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>ionicons-v5-g</title>
      <path
        d="M384,240H96V136a40.12,40.12,0,0,1,40-40H376a40.12,40.12,0,0,1,40,40V240Z"
        style={{
          fill: "none",
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 32,
        }}
      />
      <path
        d="M48,416V304a64.19,64.19,0,0,1,64-64H400a64.19,64.19,0,0,1,64,64V416"
        style={{
          fill: "none",
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 32,
        }}
      />
      <path
        d="M48,416v-8a24.07,24.07,0,0,1,24-24H440a24.07,24.07,0,0,1,24,24v8"
        style={{
          fill: "none",
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 32,
        }}
      />
      <path
        d="M112,240V224a32.09,32.09,0,0,1,32-32h80a32.09,32.09,0,0,1,32,32v16"
        style={{
          fill: "none",
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 32,
        }}
      />
      <path
        d="M256,240V224a32.09,32.09,0,0,1,32-32h80a32.09,32.09,0,0,1,32,32v16"
        style={{
          fill: "none",
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 32,
        }}
      />
    </svg>
  );
}
