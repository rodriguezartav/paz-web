/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";

const people = [
  {
    name: "Bedroom 1",
    title: "4 twin or 2 King beds",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    icons: [<BedIcon />, <BedIcon />, <BedIcon />, <BedIcon />],
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Bedroom 2",
    title: "4 twin or 2 King beds",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    icons: [<BedIcon />, <BedIcon />, <BedIcon />, <BedIcon />],
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Kitchen",
    title: "Fully stocked kitchen + condiments",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    icons: [<BedIcon />, <BedIcon />, <BedIcon />, <BedIcon />],
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Living Room",
    title: "Large and cumfy, area with jungle view",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    icons: [<BedIcon />, <BedIcon />, <BedIcon />, <BedIcon />],
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Dinning Room",
    title: "Large wood table for 8",
    role: "Admin",
    email: "janecooper@example.com",
    icons: [<BedIcon />, <BedIcon />, <BedIcon />, <BedIcon />],
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Star Gazing Fire Pit",
    title: "Bonefire by the house with sofa & chairs",

    icons: [<BedIcon />, <BedIcon />, <BedIcon />, <BedIcon />],
  },
];

export default function Example({ activities = [] }) {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10"
    >
      {activities.map((person) => (
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
