import Footer from "../../../components/marketing/footer";
import SimpleImage from "../../../components/SimpleImage";

import { Fragment, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  return (
    <div className=" antialiased bg-body text-body font-body ">
      <section
        className="py-16 md:py-24 bg-white"
        style={{
          backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap lg:items-center mb-12 -mx-4">
            <div className=" block md:hidden  mb-10 w-full md:w-1/2 px-4">
              <div className="inline-block py-1 px-3 mb-6 text-xs leading-5 text-indigo-500 font-medium uppercase bg-indigo-100 rounded-full shadow-sm">
                Satsang Blog
              </div>

              <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl leading-tight text-darkCoolGray-600 font-bold tracking-tighter">
                The actualities of life
              </h2>

              <div className="flex items-center -mx-2">
                <div className="w-auto px-2">
                  <img
                    src="/images/me.jpeg"
                    className="h-14 object-fill rounded-lg"
                    alt=""
                  />
                </div>
                <div className="w-auto px-2">
                  <h4 className="text-base md:text-lg font-bold text-coolGray-500">
                    Roberto Rodriguez
                  </h4>
                  <p className="text-base md:text-lg text-coolGray-400">
                    27 May 2022
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 2xl:w-5/12  mb-8 md:mb-0">
              <div className="mx-auto md:ml-0 max-w-max overflow-hidden md:rounded-lg">
                <SimpleImage width={600} src="/raw/art/human-space.jpg" />
              </div>
            </div>
            <div className=" hidden md:block w-full md:w-1/2 px-4">
              <div className="inline-block py-1 px-3 mb-6 text-xs leading-5 text-indigo-500 font-medium uppercase bg-indigo-100 rounded-full shadow-sm">
                Satsang
              </div>

              <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl leading-tight text-darkCoolGray-600 font-bold tracking-tighter">
                The actualities of life
              </h2>

              <div className="flex items-center -mx-2">
                <div className="w-auto px-2">
                  <img
                    src="/images/me.jpeg"
                    className="h-14 object-fill rounded-lg"
                    alt=""
                  />
                </div>
                <div className="w-auto px-2">
                  <h4 className="text-base md:text-lg font-bold text-coolGray-500">
                    Roberto Rodriguez
                  </h4>
                  <p className="text-base md:text-lg text-coolGray-400">
                    27 May 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-5/12 lg:w-4/12 xl:w-3/12 px-4 mb-8">
              <ul className="pb-6 mb-8 border-b border-coolGray-100">
                <li className="mb-2">
                  <a className="inline-block py-2 text-coolGray-800 hover:text-coolGray-500 font-semibold">
                    Chapters
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="inline-block py-2 text-coolGray-400 hover:text-coolGray-500 font-semibold"
                    href="#"
                  >
                    1. Contract of Life
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="inline-block py-2 text-coolGray-400 hover:text-coolGray-500 font-semibold"
                    href="#"
                  >
                    2. The Human Collective
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block py-3 text-coolGray-400 hover:text-coolGray-500 font-semibold"
                    href="#"
                  >
                    3. The Transformation of Humankind
                  </a>
                </li>
              </ul>
              <div className="flex items-center">
                <a
                  onClick={() => {
                    navigator.clipboard
                      .writeText(
                        "https://paz.co.cr/library/the-actualities-of-life"
                      )
                      .then(() => {
                        // Alert the user that the action took place.
                        // Nobody likes hidden stuff being done under the hood!
                        alert("Copied to clipboard");
                      });
                  }}
                  className="inline-flex mr-4 items-center justify-center py-2 px-4 text-coolGray-300 border border-coolGray-200 hover:border-coolGray-300 rounded-md shadow-md transition duration-200"
                >
                  <svg
                    width={20}
                    height={16}
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 13.8333H5C4.33696 13.8333 3.70108 13.5699 3.23224 13.1011C2.76339 12.6323 2.5 11.9964 2.5 11.3333V4.66667C2.5 4.44565 2.41221 4.23369 2.25592 4.07741C2.09964 3.92113 1.88768 3.83333 1.66667 3.83333C1.44566 3.83333 1.23369 3.92113 1.07741 4.07741C0.921133 4.23369 0.833336 4.44565 0.833336 4.66667V11.3333C0.833336 12.4384 1.27232 13.4982 2.05372 14.2796C2.44063 14.6665 2.89996 14.9734 3.40549 15.1828C3.91101 15.3922 4.45283 15.5 5 15.5H15C15.221 15.5 15.433 15.4122 15.5893 15.2559C15.7455 15.0996 15.8333 14.8877 15.8333 14.6667C15.8333 14.4457 15.7455 14.2337 15.5893 14.0774C15.433 13.9211 15.221 13.8333 15 13.8333ZM19.1667 6.28333C19.158 6.20678 19.1412 6.13136 19.1167 6.05833V5.98333C19.0766 5.89765 19.0232 5.81889 18.9583 5.75V5.75L13.9583 0.75C13.8894 0.68518 13.8107 0.631734 13.725 0.591667H13.65L13.3833 0.5H6.66667C6.00363 0.5 5.36774 0.763392 4.8989 1.23223C4.43006 1.70107 4.16667 2.33696 4.16667 3V9.66667C4.16667 10.3297 4.43006 10.9656 4.8989 11.4344C5.36774 11.9033 6.00363 12.1667 6.66667 12.1667H16.6667C17.3297 12.1667 17.9656 11.9033 18.4344 11.4344C18.9033 10.9656 19.1667 10.3297 19.1667 9.66667V6.33333C19.1667 6.33333 19.1667 6.33333 19.1667 6.28333ZM14.1667 3.34167L16.325 5.5H15C14.779 5.5 14.567 5.4122 14.4107 5.25592C14.2545 5.09964 14.1667 4.88768 14.1667 4.66667V3.34167ZM17.5 9.66667C17.5 9.88768 17.4122 10.0996 17.2559 10.2559C17.0996 10.4122 16.8877 10.5 16.6667 10.5H6.66667C6.44565 10.5 6.23369 10.4122 6.07741 10.2559C5.92113 10.0996 5.83334 9.88768 5.83334 9.66667V3C5.83334 2.77899 5.92113 2.56702 6.07741 2.41074C6.23369 2.25446 6.44565 2.16667 6.66667 2.16667H12.5V4.66667C12.5 5.32971 12.7634 5.96559 13.2322 6.43443C13.7011 6.90327 14.337 7.16667 15 7.16667H17.5V9.66667Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="ml-2 text-sm text-coolGray-500 font-medium">
                    Copy Link
                  </span>
                </a>

                <a
                  className="inline-flex mr-2 h-9 w-9 items-center justify-center text-coolGray-500 border border-coolGray-200 hover:border-coolGray-300 rounded-md shadow-md transition duration-200"
                  href="http://twitter.com/rodriguezartav"
                  target={"_blank"}
                >
                  <svg
                    width={18}
                    height={14}
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.3333 1.83339C16.7069 2.10513 16.0445 2.28477 15.3667 2.36672C16.0818 1.93949 16.6177 1.26737 16.875 0.475053C16.203 0.875105 15.4673 1.15697 14.7 1.30839C14.1871 0.752196 13.5041 0.381966 12.7582 0.255762C12.0122 0.129558 11.2455 0.254518 10.5782 0.611044C9.91087 0.96757 9.38078 1.5355 9.07104 2.22575C8.76129 2.916 8.68941 3.68954 8.86667 4.42505C7.50786 4.35632 6.1787 4.00251 4.96555 3.3866C3.75239 2.77069 2.68237 1.90646 1.825 0.850052C1.52428 1.37519 1.36627 1.9699 1.36667 2.57505C1.3656 3.13704 1.50352 3.69057 1.76813 4.18636C2.03275 4.68215 2.41585 5.10481 2.88333 5.41672C2.33998 5.40194 1.80824 5.25613 1.33333 4.99172V5.03339C1.33741 5.82079 1.61333 6.58263 2.11443 7.19002C2.61553 7.79742 3.31105 8.21309 4.08333 8.36672C3.78605 8.45719 3.4774 8.50489 3.16667 8.50839C2.95158 8.50587 2.73702 8.48637 2.525 8.45005C2.74493 9.1274 3.17052 9.71934 3.74256 10.1435C4.31461 10.5677 5.00465 10.803 5.71667 10.8167C4.51434 11.7628 3.0299 12.2791 1.5 12.2834C1.22145 12.2843 0.943114 12.2676 0.666668 12.2334C2.22869 13.2419 4.04901 13.7773 5.90833 13.7751C7.19141 13.7884 8.46428 13.5459 9.6526 13.0618C10.8409 12.5777 11.9209 11.8616 12.8293 10.9555C13.7378 10.0493 14.4566 8.97121 14.9438 7.78414C15.431 6.59707 15.6767 5.32483 15.6667 4.04172C15.6667 3.90005 15.6667 3.75005 15.6667 3.60005C16.3206 3.11239 16.8846 2.51457 17.3333 1.83339V1.83339Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  className="inline-flex h-9 w-9 items-center justify-center text-coolGray-500 border border-coolGray-200 hover:border-coolGray-300 rounded-md shadow-md transition duration-200"
                  target={"_blank"}
                  href="http://instagram.com/pazdemono"
                >
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.45 3.54996C13.2522 3.54996 13.0589 3.60861 12.8944 3.71849C12.73 3.82837 12.6018 3.98455 12.5261 4.16728C12.4504 4.35 12.4306 4.55107 12.4692 4.74505C12.5078 4.93903 12.603 5.11721 12.7429 5.25707C12.8827 5.39692 13.0609 5.49216 13.2549 5.53074C13.4489 5.56933 13.65 5.54953 13.8327 5.47384C14.0154 5.39815 14.1716 5.26998 14.2815 5.10553C14.3913 4.94108 14.45 4.74774 14.45 4.54996C14.45 4.28474 14.3446 4.03039 14.1571 3.84285C13.9696 3.65532 13.7152 3.54996 13.45 3.54996V3.54996ZM17.2833 5.56663C17.2671 4.87521 17.1376 4.19113 16.9 3.54163C16.6881 2.9859 16.3583 2.48269 15.9333 2.06663C15.5207 1.63948 15.0163 1.31177 14.4583 1.10829C13.8105 0.863427 13.1257 0.730968 12.4333 0.716626C11.55 0.666626 11.2667 0.666626 9 0.666626C6.73333 0.666626 6.45 0.666626 5.56666 0.716626C4.87429 0.730968 4.18945 0.863427 3.54166 1.10829C2.98473 1.31383 2.48078 1.64126 2.06666 2.06663C1.63952 2.47927 1.31181 2.98366 1.10833 3.54163C0.863465 4.18941 0.731006 4.87425 0.716664 5.56663C0.666664 6.44996 0.666664 6.73329 0.666664 8.99996C0.666664 11.2666 0.666664 11.55 0.716664 12.4333C0.731006 13.1257 0.863465 13.8105 1.10833 14.4583C1.31181 15.0163 1.63952 15.5206 2.06666 15.9333C2.48078 16.3587 2.98473 16.6861 3.54166 16.8916C4.18945 17.1365 4.87429 17.269 5.56666 17.2833C6.45 17.3333 6.73333 17.3333 9 17.3333C11.2667 17.3333 11.55 17.3333 12.4333 17.2833C13.1257 17.269 13.8105 17.1365 14.4583 16.8916C15.0163 16.6881 15.5207 16.3604 15.9333 15.9333C16.3602 15.5188 16.6903 15.0151 16.9 14.4583C17.1376 13.8088 17.2671 13.1247 17.2833 12.4333C17.2833 11.55 17.3333 11.2666 17.3333 8.99996C17.3333 6.73329 17.3333 6.44996 17.2833 5.56663V5.56663ZM15.7833 12.3333C15.7773 12.8623 15.6815 13.3864 15.5 13.8833C15.3669 14.246 15.1532 14.5736 14.875 14.8416C14.6047 15.117 14.2777 15.3303 13.9167 15.4666C13.4197 15.6481 12.8956 15.7439 12.3667 15.75C11.5333 15.7916 11.225 15.8 9.03333 15.8C6.84166 15.8 6.53333 15.8 5.7 15.75C5.15074 15.7602 4.60383 15.6757 4.08333 15.5C3.73815 15.3567 3.42613 15.1439 3.16666 14.875C2.89007 14.6072 2.67903 14.2793 2.55 13.9166C2.34654 13.4126 2.2337 12.8766 2.21666 12.3333C2.21666 11.5 2.16666 11.1916 2.16666 8.99996C2.16666 6.80829 2.16666 6.49996 2.21666 5.66663C2.2204 5.12584 2.31912 4.58991 2.50833 4.08329C2.65504 3.73155 2.88022 3.41801 3.16666 3.16663C3.41984 2.8801 3.73274 2.65254 4.08333 2.49996C4.59129 2.31666 5.12666 2.22086 5.66666 2.21663C6.5 2.21663 6.80833 2.16663 9 2.16663C11.1917 2.16663 11.5 2.16663 12.3333 2.21663C12.8623 2.22269 13.3864 2.3185 13.8833 2.49996C14.262 2.6405 14.6019 2.869 14.875 3.16663C15.1481 3.42261 15.3615 3.73557 15.5 4.08329C15.6852 4.59074 15.7811 5.12644 15.7833 5.66663C15.825 6.49996 15.8333 6.80829 15.8333 8.99996C15.8333 11.1916 15.825 11.5 15.7833 12.3333ZM9 4.72496C8.15484 4.72661 7.32913 4.97873 6.62721 5.44947C5.92529 5.92022 5.37865 6.58846 5.05636 7.36975C4.73407 8.15105 4.6506 9.01035 4.81649 9.83907C4.98238 10.6678 5.39019 11.4287 5.98839 12.0258C6.58659 12.6228 7.34834 13.0291 8.17738 13.1934C9.00642 13.3577 9.86555 13.2725 10.6462 12.9487C11.4269 12.6249 12.0941 12.077 12.5634 11.3742C13.0328 10.6713 13.2833 9.84512 13.2833 8.99996C13.2844 8.43755 13.1743 7.88047 12.9594 7.36076C12.7444 6.84105 12.4288 6.36897 12.0307 5.97167C11.6326 5.57437 11.16 5.25969 10.6398 5.04573C10.1197 4.83178 9.56241 4.72276 9 4.72496V4.72496ZM9 11.775C8.45115 11.775 7.91464 11.6122 7.45829 11.3073C7.00194 11.0024 6.64627 10.569 6.43623 10.0619C6.2262 9.55484 6.17124 8.99688 6.27832 8.45858C6.38539 7.92029 6.64969 7.42583 7.03778 7.03774C7.42587 6.64965 7.92033 6.38535 8.45862 6.27828C8.99692 6.17121 9.55488 6.22616 10.0619 6.43619C10.569 6.64623 11.0024 7.00191 11.3073 7.45825C11.6122 7.9146 11.775 8.45112 11.775 8.99996C11.775 9.36438 11.7032 9.72523 11.5638 10.0619C11.4243 10.3986 11.2199 10.7045 10.9622 10.9622C10.7045 11.2199 10.3986 11.4243 10.0619 11.5637C9.72527 11.7032 9.36442 11.775 9 11.775V11.775Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full md:flex-1 px-4 max-w-5xl">
              <p className="mb-8 pb-10 text-lg md:text-xl font-medium text-coolGray-500 border-b border-coolGray-100">
                There is nothing we can acquire to solve our vulnerability as
                living beings. No weapon, no wall, no insurance, no amount of
                money, no medicine, no prayer, no knowledge, nothing. In the
                same way, there is nothing we can invent, build or create to
                solve our collective problems because those problems are
                produced by our attempt to be less vulnerable.
              </p>

              <h3 className="mb-4 text-2xl md:text-3xl font-semibold text-coolGray-800">
                The Contract of Life
              </h3>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                Writing about the contract of life makes me feel a hole in my
                stomach because coming to terms with life requires bravery. The
                contract is part of an exercise I invented while dealing with
                loss in my life, or rather by not knowing how to deal with it.
                In it, I <i>conceptually</i> believe we all signed an agreement
                before we were born.
              </p>
              <div className="mb-6 p-6 border-l-2 border-indigo-500">
                <p className="mb-4 text-xl md:text-2xl leading-tight font-medium text-coolGray-800">
                  The contract of life says: After being born, anything can and
                  will happen to you and everyone around you. There are no
                  guarantees, no exceptions, no protections, and the only way
                  out of the contract is to die.
                </p>

                <span className="text-base md:text-lg text-coolGray-400 font-medium">
                  The Contract of Life
                </span>
              </div>
              <p className="mb-6 text-base md:text-lg text-coolGray-500">
                If we are serious about finding out the truth of who we are and
                what life is. Then we must begin by considering our most
                cherished attachments with other things and beings. Our loved
                ones, livelihoods, careers, everything we own, health,
                businesses, projects, and dreams are all part of the contract of
                life, where anything can and will happen to them.
              </p>
              <p className="mb-6 text-base md:text-lg text-coolGray-500">
                So, before moving on, please take a few breaths and allow that
                to sink in.
              </p>
              <div className="mb-4 max-w-max overflow-hidden rounded-md">
                <img
                  src="flex-ui-assets/images/blog-content/content-photo2.jpg"
                  alt=""
                />
              </div>
              <h3 className="mb-4 text-xl md:text-2xl font-semibold text-coolGray-800">
                Following the contract of life to discover the truth of life
              </h3>
              <p className="mb-5 text-base md:text-lg text-coolGray-500">
                From what we have experienced in life, we can't expect its
                actuality to be rainbows in the sky or a childish story of
                heaven and love where we only feel pleasure and joy.
              </p>
              <p className="mb-10 text-base md:text-lg text-coolGray-500">
                So first, we must shake our childish beliefs out of their
                foundations, our comfort zone, which is the mental place where
                we feel safe. Otherwise, we'll just be telling "truth" what to
                be so that we are not afraid of the unknown; instead of finding
                out what it actually is.
              </p>

              <div className="mb-6 p-6 border-l-2 border-indigo-500">
                <p className="mb-4 text-xl md:text-2xl leading-tight font-medium text-coolGray-800">
                  The feeling we are looking for shows up when we genuinely say:
                  <br />
                  <span className="text-indigo-500 pt-2">
                    "Let anything that will happen, happen."
                  </span>
                </p>

                <span className="text-base md:text-lg text-coolGray-400 font-medium">
                  The Contract of Life
                </span>
              </div>

              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                When meant from the heart, while thinking about what we love the
                most, this thought should send us falling into a void. Instead
                of escaping by grabbing on to a belief, stay with it and feel
                all its weight.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-semibold text-coolGray-800">
                Enduring the Journey within
              </h3>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                Allowing the consequence of the hard truths to touch our reality
                creates an uncomfortable feeling in the body and the mind.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                However, we must learn to be present with such feelings and
                thoughts and not run away from them, understanding they are
                gatekeepers for those who are not ready to explore the depths of
                life.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                I came up with this practice while working with my psychiatrist
                when dealing with anxiety and depression. It helped me break
                through the feelings and thoughts that protected me from
                emotional trauma. If that's your case, ask your mental health
                specialist when it's the best time to face these feelings, just
                be sure to do it lovingly and consistently.
              </p>

              <div className="mb-6 p-6 border-l-2 border-indigo-500">
                <p className="mb-4 text-base md:text-lg   font-medium text-indigo-500">
                  If we can accept the contract of life for just a moment. If we
                  don't judge, label, and reshape reality to try and make it fit
                  our ideal, but rather let it be as it is.
                </p>

                <p className="mb-4 text-xl md:text-2xl leading-tight font-medium text-coolGray-800">
                  Then for that moment, an aliveness fills our bodies and minds,
                  and we become one with life. It's that simple.
                </p>
                <span className="text-base md:text-lg text-coolGray-400 font-medium">
                  The Contract of Life
                </span>
              </div>

              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                At first, exposing ourselves to the full spectrum of the
                consequences of life makes our minds and bodies feel vulnerable.
                But this exposure is what connects us with nature. Look at the
                wild animals in the forest and feel what we are searching for in
                their presence.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                We were wild animals in the forest. But at some point, our
                species became conscious that one day we would cease to exist.
                This idea pushed us into an abyss with no protection, grabbing
                on to any belief that kept us from feeling that challenging
                reality, and it has been happening for more than 5000 years.
                These circumstances turned us against the universe, as in trying
                to renegotiate the contract of life. Since that day, almost
                everything we have done has been because of that.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                The fear of death and loss does not feel in a particular way.
                That's why everybody says they are not afraid of dying. But, as
                you have experienced here, it feels like a combination of
                powerful emotions that run in the background.
              </p>

              <div className="mb-6 p-6 border-l-2 border-indigo-500">
                <p className="mb-4 text-xl md:text-2xl leading-tight font-medium text-coolGray-800">
                  Can you relate, and on top of that, can you see that no
                  practice, no technique, no belief, no guru can take us back to
                  not knowing we will die?
                </p>
                <span className="text-base md:text-lg text-coolGray-400 font-medium">
                  The Contract of Life
                </span>
              </div>

              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                At this moment in time, there is nothing more we can do with our
                minds to move us past this paradigm that landed upon us. But, we
                simply can't stay at this stalemate for much longer. Either our
                consciousness takes a leap and shows everyone that there is
                nothing to fear, or most of this world will cease to exist.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                Children and young people can simply enter the bliss of being
                one with life; they don't make any effort and need no training
                to dive into it. But, for adults who have lived much more, it's
                harder to understand that it requires no effort, no degree, and
                it's actually our natural state of mind.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                "Accepting everything" is the price we pay to be truly alive,
                and as we have more experiences - the higher is the price.
              </p>

              <h3 className="mb-4 text-2xl md:text-3xl font-semibold text-coolGray-800">
                The Human Collective
              </h3>

              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                In the previous paragraphs, I have not talked about doing
                anything other than coming to terms with the reality of life,
                which is hard to do. So hard that we spend most of our time and
                energy trying to avoid both the conditions of life.
              </p>

              <div className="mb-6 p-6 border-l-2 border-indigo-500">
                <p className="mb-4 text-xl md:text-2xl leading-tight font-medium text-coolGray-800">
                  Based on the worry of losing what we love, we went on to
                  create a society that's supposed to protect us, but in
                  reality, it's hurting us, and it seems impossible to reverse.
                </p>
                <span className="text-base md:text-lg text-coolGray-400 font-medium">
                  The Human Collective
                </span>
              </div>

              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                When we approach society with a disposition to explore its
                depths, we begin to reveal our own conditionings. It's the same
                approach we took with the contract of life but scaled to every
                human being.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                In reality, the collective, which we call society, does not
                exist. The only real collective that exists is the collective of
                everything, and you can't divide that into parts in the same way
                that you can't divide humanity into parts. Not because it's good
                or bad, politically correct or not, but simply because it's not
                real.
              </p>

              <div className="mb-6 p-6 border-l-2 border-indigo-500">
                <p className="mb-4 text-xl md:text-2xl leading-tight font-medium text-coolGray-800">
                  The borders between cultures and races are like the borders
                  between countries - you'll never be able to find them on the
                  ground. Society is made of paper, like a map that points to
                  things in the past.
                </p>
                <span className="text-base md:text-lg text-coolGray-400 font-medium">
                  The Human Collective
                </span>
              </div>

              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                Living with such imaginary constructs is like putting virtual
                reality goggles in your head and taking a walk in the park.
                After a while, we'll forget we have them on. Then, when falling
                repeatedly, we'll start to blame only the things the goggles
                allow us to see, which increasingly become misaligned with
                what's outside.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                Anything we pursue with the human collective called society is
                like closing our eyes and imagining a target in the sky, then
                throwing an arrow into the air and expecting the arrow to hit
                the target. In reality, the arrows will fly away, and when we
                throw enough of them, sooner or later, they will hit something
                by mistake.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                We as humans, as a society, have been trying to create solutions
                to our problems but have only created more problems for
                ourselves. This issue emerges because we are trying to solve
                problems on the ground that only exist in our minds. That is the
                problem with humankind.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                Realizing this problem is hard to accept because it touches our
                core. Yet, this fact is valid even for the priest and the guru.
                Just listen to Pope Francis talk about his difficulties, which
                are the same as everyone else. Gautama Buddha, the most
                enlightened, consistently claimed to be nothing else but a
                regular man; and Jesus Christ famously said to the sky: "forgive
                them because they don't know what they do."
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                Instead of saying what everyone has been saying for centuries:
                "Yes, it's true, but it's them, not me. "Instead of challenging
                the impairment nature of the universe. Instead of defending the
                creator of society, our mind, let's try something different and
                explore this issue with our actuality, searching with neutrality
                for such moments in our lives.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                When we find them, it will become evident that even if we are
                not the tyrant, thief, or whatever part, we used to think it's
                evil. We can't escape the fact that, just like them, we have
                been aiming at a flag that lives in our minds, our own vision of
                peace and progress, that we believe will solve our fears when
                materialized.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                Try to see that others would not have been able to play their
                part without us doing our part. Then, we can finally recognize
                that we are not the victims. Everything we have been complaining
                about and suffering for centuries is only a product of our
                wrongdoings and not those of others, not of "God in the sky."
              </p>

              <h3 className="mb-4 text-2xl md:text-3xl font-semibold text-coolGray-800">
                The addiction to mind
              </h3>

              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                Everything around us has been enduring the crazy arrows of
                humanity for thousands of years. This craziness includes every
                discovery and invention dating back to the wheel and way past
                that. Everything that makes us proud is a product of this
                separation from life that happened when we realized that we
                would die.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                Since we still can't accept how things are, we weaponized
                society against the universal nature of life. As a result, we
                are and will always be losing a war against infinity.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                We are approaching the critical point where the transformation
                or evolution of humanity is a requirement for survival, and we
                already know this phenomenon starts at the individual level.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                The idea of this transformation that exists in our minds is not
                what it's like. The transformation is one where the mind is no
                longer the captain of the ship of humankind, which is not the
                same as meditating at sunrise. It's a leap where we remain what
                we are but lose what we are not. It's a leap that keeps our
                creative minds and returns the center to our hearts. A leap that
                proves to each of us that we don't die - ending the struggle -
                ending the war, and taking us back to peace and paradise.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                If we want to be part, we need to start by accepting that we
                can't renegotiate the contract of life. Surrender and admit we
                are powerless against the universe, and our lives have become
                unmanageable.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                Open our eyes and look around in nature how everything is alive
                and thrives. Look up to the sky and see the perfect balance in
                the stars. Accept that the harmony and perfection of a power
                greater than ourselves is the only one that can restore our
                sanity.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                Make a decision to turn our will and lives into one with nature,
                the universe, and its creator as we understand him.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                Make a searching and fearless inquiry into ourselves until we
                can clearly distinguish between our conditioned minds and our
                true selves.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                Admit to the universe, ourselves, and other human beings the
                exact nature of our wrongs.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                Become willing to ask God to help us remove our defects of
                character and humbly asked him to remove our shortcomings.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                Make a list of all persons and spaces whe have harmed and became
                willing to make amends to them all wherever possible, except
                when to do so would injure them or others.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                Continued to take personal inventory and promptly admit it when
                we were wrong.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                Seek through prayer and meditation to improve our conscious
                contact with God as we understand Him, praying only for
                knowledge of His will for us and the power to carry that out.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                Having had a spiritual awakening as the result of these Steps,
                we tried to carry this message to other addicts of the mind and
                practice these principles in all our affairs.
              </p>
              <p className="mb-4 text-base md:text-lg text-coolGray-500">
                Hi, my name is roberto an I am an addict of the mind. You just
                read the 12 steps of anpnymous alcholics, with a few change in
                words.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
