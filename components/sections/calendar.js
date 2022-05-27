/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

import dayjs from "dayjs";

import getDays from "../../helpers/calendar";

import { meetingsPerDay } from "../../helpers/events";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example(props) {
  let { title, subtitle, legend, color = "indigo-500" } = props;

  let [activityDateIndex, setActivityDateIndex] = useState();
  let [activityDate, setActivityDate] = useState();
  let [initialMonth, setInitialMonth] = useState(dayjs().format("M"));
  let [initialYear, setInitialYear] = useState(dayjs().format("YYYY"));
  let [days, setDays] = useState(getDays(initialYear, initialMonth));

  function nextMonth() {
    setActivityDate(null);
    setActivityDateIndex(null);
    let month = parseInt(initialMonth);
    let year = parseInt(initialYear);
    if (month == 12) {
      month = 0;
      year = year + 1;
    } else month = month + 1;
    setInitialMonth(month);
    setInitialYear(year);
    setDays(getDays(year, month));
  }

  function lastMonth() {
    setActivityDate(null);
    setActivityDateIndex(null);
    let month = parseInt(initialMonth);
    let year = parseInt(initialYear);
    if (month == 0) {
      month = 12;
      year = year - 1;
    } else month = month - 1;
    setInitialMonth(month);
    setInitialYear(year);
    setDays(getDays(year, month));
  }

  function showActivities(day) {
    return () => {
      console.log(day);
      day.activityDay && setActivityDate(day.date);
      day.activityDay && setActivityDateIndex(day.activityDay);
    };
  }

  return (
    <section
      className="py-20 xl:pt-24 xl:pb-28  bg-white"
      style={{
        backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
        backgroundPosition: "center",
      }}
    >
      <div className="container px-4 mx-auto">
        <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-indigo-500 bg-indigo-100 font-medium uppercase rounded-9xl">
          {legend}
        </span>
        <h3
          className={`mb-4 text-3xl md:text-5xl   font-bold tracking-tighter text-${color}`}
        >
          {title}
        </h3>
        <p className="mb-12 text-lg md:text-xl text-coolGray-500 font-medium">
          {subtitle}
        </p>

        <div className=" max-w-5xl mx-auto ">
          <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
            <div className="md:pr-14">
              <div className="flex items-center">
                <h2 className="flex-auto font-semibold text-gray-900">
                  {dayjs(days[10].date).format("MMM YYYY")}
                </h2>
                <button
                  onClick={lastMonth}
                  type="button"
                  className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Previous month</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  onClick={nextMonth}
                  type="button"
                  className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Next month</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
                <div>S</div>
              </div>
              <div className="mt-2 grid grid-cols-7 text-sm">
                {days.map((day, dayIdx) => (
                  <div
                    key={day.date}
                    className={classNames(
                      dayIdx > 6 && "border-t border-gray-200",
                      "py-2"
                    )}
                  >
                    <button
                      type="button"
                      onClick={showActivities(day)}
                      className={classNames(
                        day.isSelected && "text-white",
                        !day.isSelected && day.isToday && "text-indigo-600",
                        !day.isSelected &&
                          !day.isToday &&
                          day.isCurrentMonth &&
                          "text-gray-900",
                        !day.isSelected &&
                          !day.isToday &&
                          !day.isCurrentMonth &&
                          "text-gray-400",
                        day.isSelected && day.isToday && "bg-indigo-600",
                        day.isSelected && !day.isToday && "bg-indigo-600",
                        !day.isSelected && "hover:bg-gray-200",
                        (day.isSelected || day.isToday) && "font-semibold",
                        "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                      )}
                    >
                      <time dateTime={day.date}>{day.dayOfMonth}</time>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <section className="mt-12 md:mt-0 md:pl-14">
              <h2 className="font-semibold text-gray-900">
                {!activityDate && (
                  <span>Select a day to show activity calendar</span>
                )}
                {activityDate && (
                  <span>
                    Schedule for{" "}
                    <time dateTime={activityDate}>{activityDate}</time>
                  </span>
                )}
              </h2>
              {activityDateIndex && (
                <ol className="mt-2 divide-y divide-gray-200 text-sm leading-6 text-gray-500">
                  {meetingsPerDay[activityDateIndex].map((meeting) => (
                    <li className="py-4 sm:flex">
                      <time dateTime="2022-01-17" className=" w-40 flex-none">
                        {meeting.start} - {meeting.end}
                      </time>

                      <p className="mt-2 flex-auto sm:mt-0">{meeting.name}</p>
                    </li>
                  ))}
                </ol>
              )}
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
