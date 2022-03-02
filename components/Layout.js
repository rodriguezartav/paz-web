import Header from "./www/Header";
import Footer from "./www/Footer";
import Head from "next/head";
import { ArrowLeftIcon } from "@heroicons/react/solid";

export default function Doc(props) {
  return (
    <div>
      <main className="relative ">
        <div className="max-w-screen-xl mx-auto mb-10">
          <div className="bg-white rounded-lg shadow overflow-hidden p-10">
            <a
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <ArrowLeftIcon
                className="-ml-1 mr-3 h-5 w-5"
                aria-hidden="true"
              />
              Paz.co.cr
            </a>

            <h1 className=" text-3xl mb-5 text-violet-700 mt-10">
              {props.meta.title}
            </h1>
            <h1 className=" text-stone-500 text-xl mb-20 ">
              {props.meta.author}
            </h1>
            <div className="prose lg:prose-xl ">{props.children}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
