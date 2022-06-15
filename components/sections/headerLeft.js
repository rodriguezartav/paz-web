import Link from "next/link";

import Image from "../Image";

export default function HomeApp({
  title,
  line1,
  color = "indigo-500",
  line2,
  line3,
  images,
  legend,
  button,
  logoAfter,
  logoBefore,
  subtitle,
}) {
  return (
    <section
      data-section-id={3}
      data-category="headers-white-pattern"
      data-component-id="6114cd58_01_awz"
      data-custom-component-id={160483}
      className="relative bg-white overflow-hidden"
      style={{
        backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
        backgroundPosition: "center",
      }}
    >
      <div className="bg-tarnsparent">
        <div className="navbar-menu hidden fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50">
          <div className="fixed top-0 left-0 bottom-0 w-full w-4/6 max-w-xs bg-white">
            <a className="navbar-close absolute top-5 p-4 right-3" href="#">
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.94004 6L11.14 1.80667C11.2656 1.68113 11.3361 1.51087 11.3361 1.33333C11.3361 1.1558 11.2656 0.985537 11.14 0.860002C11.0145 0.734466 10.8442 0.66394 10.6667 0.66394C10.4892 0.66394 10.3189 0.734466 10.1934 0.860002L6.00004 5.06L1.80671 0.860002C1.68117 0.734466 1.51091 0.663941 1.33337 0.663941C1.15584 0.663941 0.985576 0.734466 0.860041 0.860002C0.734505 0.985537 0.66398 1.1558 0.66398 1.33333C0.66398 1.51087 0.734505 1.68113 0.860041 1.80667L5.06004 6L0.860041 10.1933C0.797555 10.2553 0.747959 10.329 0.714113 10.4103C0.680267 10.4915 0.662842 10.5787 0.662842 10.6667C0.662842 10.7547 0.680267 10.8418 0.714113 10.9231C0.747959 11.0043 0.797555 11.078 0.860041 11.14C0.922016 11.2025 0.99575 11.2521 1.07699 11.2859C1.15823 11.3198 1.24537 11.3372 1.33337 11.3372C1.42138 11.3372 1.50852 11.3198 1.58976 11.2859C1.671 11.2521 1.74473 11.2025 1.80671 11.14L6.00004 6.94L10.1934 11.14C10.2554 11.2025 10.3291 11.2521 10.4103 11.2859C10.4916 11.3198 10.5787 11.3372 10.6667 11.3372C10.7547 11.3372 10.8419 11.3198 10.9231 11.2859C11.0043 11.2521 11.0781 11.2025 11.14 11.14C11.2025 11.078 11.2521 11.0043 11.286 10.9231C11.3198 10.8418 11.3372 10.7547 11.3372 10.6667C11.3372 10.5787 11.3198 10.4915 11.286 10.4103C11.2521 10.329 11.2025 10.2553 11.14 10.1933L6.94004 6Z"
                  fill="#556987"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="py-20 md:py-28">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap xl:items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
              <span
                className={`inline-block mb-4 text-xs leading-5 text-white bg-${color} uppercase rounded-9xl pt-1 px-3 pb-1`}
              >
                {legend}
              </span>
              <h1
                className={`mb-6 dm text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight text-${color}`}
              >
                {title}
              </h1>

              {subtitle.split("\n").map((item) => (
                <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">
                  {item}
                </p>
              ))}
              <div className="flex flex-wrap" data-removed="true">
                {button && (
                  <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                    <Link href={button.href}>
                      <a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-violet-50 font-medium text-center bg-violet-500 hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 border border-violet-500 rounded-md shadow-sm">
                        {button.text}
                      </a>
                    </Link>
                  </div>
                )}
                <div className="w-full md:w-auto py-1 md:py-0"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="relative mx-auto md:mr-0 max-w-max">
                <img
                  className="absolute z-10 -left-14 -top-12 w-28 md:w-auto"
                  src="flex-ui-assets/elements/circle3-green.svg"
                  alt=""
                />
                <img
                  className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto"
                  src="flex-ui-assets/elements/dots3-yellow.svg"
                  alt=""
                />

                <Image
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABUVJREFUWEd1l21zHDUQhGe0d/7PJkAIkISPl+CEvBFICAUUr+HnsSuJ6u4ZrdZVTpWiPdu3/UzPSBr54w//djez4hqnGOdidirdzviMZ++cF+9WMKwbvmfWreP/3q11s8rhtuVo0zN/Vvg3rbs1c/MEcMfLdwCKFwuAHmA9AABLWUJAHJ+OAGYbxcsOE1AAnAA+4rtWTACECGG64ALBjOjlgABcsVvv+P8IMFxobmtEDlfwc474tj/66SNTcHRAEQ+AyX4CmNIgACUBEHIALzert6JfaX2kwOQAvu0PE8AQXaYgACAMB/hz/L7dXQOzA4Yo0/pbsxWK04Hu5l+//0cOMAXdFkPeJSzx/fnEyAUB/oMDBFBhDfsN4jFsdwB/wwGAr979vddAumAp3Ayigmi28PctVgBekSmIGgBERk/BYltCTJ/xBgGY+YMf/9Iy5OgU5ICoNTtbG8+LAaLRhd2BWIYhjpfD3gphW+SALeMzoOQAZjP/4u2fkQLZjyghLHE81/F5AMQr6IAnQNhK8cWqBwDFlwEBMAyUMveB+9//ESlQdZ86QJqduyAIwGe+1pY+DFQKZgBXZNVDNGcCnZgOeAiATKR/9uZ3OUDhTgEKY+4Qj0Hx4A8IZDy2Q8NLJF6sQZiCmg/PAdFcSfRPX/22OwAICt8SbxtBlo4YqhWCIINyAP/4wiE+CQdAgsDHhr+LUvZ7L38VQFdWlhYADZFvdkrxthEAgyXWa4gDwkI8oi+KuvrZKp/Pwwmkh6XsOk38kxe/cCMlAB2odmoACfFpLn2VC111joxLXAAYEGwQL5M4ngeEAPj3ALh+/vNYBQXCBKi2wAGI15Xz0iC+EqyECwLo1tP+slgDQEZNiCvBBIDqg9XG7/n1sw90gEXYlQJFD4DVlopnCP8niDsB3HqKl7O1Wbxc2eb4mVJzSMH1zXvWAAAKAdKBiL5CFC4IohBgnVKAGlABdjpwtrrMABBPF5QeuKAaKObX376baqBZSYCIHCkgQJUDEFcKMJr5lIJ0oC0hSPuvrE4AdIAASANS8PSHsQ+kA7CZaWD+kQbMRwBCeCzFkg4g/8fokf+NEMc62FfB07cd9mNbQBGiwlmEI/eIPmqARSgHsNEKQAdJR0SRgpF/LsNjCrg8xzIs5veevDk4AIBcAYo88x+rIFKgI2dPgRUsw6gBuOBT5ISA8Nm2sF9nK3bCJ6+PANyAAKF9gPmPyLkM580IDmAnRDsVuyDqQBtQWq4VcACIw4oAn19eaRnGZoR9AA5AiACcAYHnlecaU+Dq6lCEAkAdoLjmnQ/CAtnsRAjM+2FUzO9fXrI7SwCmIA6ghKC4RfTjYI2+ZnJAZ0GcoRAbwgFA/B2Ax/GDy4ujA9gmBgSiRj+Aw4jtxX6yZ1PC9gzRx2GEs5THsKJV1GfbusRVvtiO417w5eW7cAAHks567tYU1oG0vy56ApeJsF9pCA95ymmvVxMSEPCv63gWSLZkaEovz7UTcl9SMwKQbEDUEVU7eYjj1XyGMCDUEhCFu5sajjoJrgDpgNjbtNEVP7w8G4cRILLtQvOpXVviOwS6YvWFPM9mgNHrLVYZqSJeQxxzdslcxOiKHxFAVywCsPuVCMuJ0WpmZ5yDzWncD3lJ1Fsam0604ik2ATT87Hg58ceXm90B3gt2iBTEfASIVAUAXGAKeC/AxSNa8l726Buep3sC74dm/s3lRjUwXbkUsUBm8d2BvCPmBSVvieHAuAvKhTXEc847IlMAAFVypiAd0GXkVCIdAyavZ0iB7hL6lynQtUxXsxC/E8Dsf4h/CVMyrjguAAAAAElFTkSuQmCC"
                  placeholder="blur"
                  images={images}
                  className="relative rounded-7xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
