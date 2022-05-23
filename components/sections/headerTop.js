import Link from "next/link";

import Image from "../Image";

export default function HomeApp({
  title,
  line1,
  color = "indigo-500",
  line2,
  line3,
  button_1,
  button_2,
  images,
  legend,
  button,
  logoAfter,
  logoBefore,
  subtitle,
}) {
  return (
    <section className="relative mb-20 ">
      <div className="relative  bg-white opacity-90 overflow-hidden">
        <div className={` pb-6 sm:pb-0  `}>
          <div className="container px-4 mx-auto">
            <div className="mx-auto text-center max-w-4xl">
              {legend && (
                <span className="inline-block py-px px-2 mb-6 text-xs leading-5 text-white bg-green-500 uppercase rounded-9xl">
                  {legend}
                </span>
              )}
              <h1
                className={`mb-6 text-indigo-500 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tighter text-${color}`}
              >
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {images && images[0] && (
        <div className="container px-4 py-20 md:pb-12 mx-auto -mt-20 sm:mt-4 ">
          <div className="relative mx-auto max-w-max">
            <img
              className="absolute z-20 -left-8 -top-8 w-28 md:w-auto"
              src="flex-ui-assets/elements/wave-green.svg"
              alt=""
            />
            <img
              className="absolute -right-8 -bottom-8 w-28 md:w-auto"
              src="flex-ui-assets/elements/wave-yellow.svg"
              alt=""
            />
            <svg
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer text-green-500 hover:text-green-600"
              width={64}
              height={64}
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx={32} cy={32} r={32} fill="currentColor" />
              <path
                className="text-white"
                d="M40.5 31.13L26.5 23.05C26.348 22.9622 26.1755 22.916 26 22.916C25.8245 22.916 25.652 22.9622 25.5 23.05C25.3474 23.1381 25.2208 23.265 25.133 23.4177C25.0452 23.5705 24.9993 23.7438 25 23.92V40.08C24.9993 40.2562 25.0452 40.4295 25.133 40.5822C25.2208 40.735 25.3474 40.8619 25.5 40.95C25.652 41.0378 25.8245 41.084 26 41.084C26.1755 41.084 26.348 41.0378 26.5 40.95L40.5 32.87C40.6539 32.7828 40.7819 32.6563 40.871 32.5035C40.96 32.3506 41.007 32.1769 41.007 32C41.007 31.8231 40.96 31.6494 40.871 31.4965C40.7819 31.3437 40.6539 31.2172 40.5 31.13ZM27 38.35V25.65L38 32L27 38.35Z"
                fill="currentColor"
              />
            </svg>
            <div className="relative overflow-hidden rounded-7xl">
              <Image
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABUVJREFUWEd1l21zHDUQhGe0d/7PJkAIkISPl+CEvBFICAUUr+HnsSuJ6u4ZrdZVTpWiPdu3/UzPSBr54w//djez4hqnGOdidirdzviMZ++cF+9WMKwbvmfWreP/3q11s8rhtuVo0zN/Vvg3rbs1c/MEcMfLdwCKFwuAHmA9AABLWUJAHJ+OAGYbxcsOE1AAnAA+4rtWTACECGG64ALBjOjlgABcsVvv+P8IMFxobmtEDlfwc474tj/66SNTcHRAEQ+AyX4CmNIgACUBEHIALzert6JfaX2kwOQAvu0PE8AQXaYgACAMB/hz/L7dXQOzA4Yo0/pbsxWK04Hu5l+//0cOMAXdFkPeJSzx/fnEyAUB/oMDBFBhDfsN4jFsdwB/wwGAr979vddAumAp3Ayigmi28PctVgBekSmIGgBERk/BYltCTJ/xBgGY+YMf/9Iy5OgU5ICoNTtbG8+LAaLRhd2BWIYhjpfD3gphW+SALeMzoOQAZjP/4u2fkQLZjyghLHE81/F5AMQr6IAnQNhK8cWqBwDFlwEBMAyUMveB+9//ESlQdZ86QJqduyAIwGe+1pY+DFQKZgBXZNVDNGcCnZgOeAiATKR/9uZ3OUDhTgEKY+4Qj0Hx4A8IZDy2Q8NLJF6sQZiCmg/PAdFcSfRPX/22OwAICt8SbxtBlo4YqhWCIINyAP/4wiE+CQdAgsDHhr+LUvZ7L38VQFdWlhYADZFvdkrxthEAgyXWa4gDwkI8oi+KuvrZKp/Pwwmkh6XsOk38kxe/cCMlAB2odmoACfFpLn2VC111joxLXAAYEGwQL5M4ngeEAPj3ALh+/vNYBQXCBKi2wAGI15Xz0iC+EqyECwLo1tP+slgDQEZNiCvBBIDqg9XG7/n1sw90gEXYlQJFD4DVlopnCP8niDsB3HqKl7O1Wbxc2eb4mVJzSMH1zXvWAAAKAdKBiL5CFC4IohBgnVKAGlABdjpwtrrMABBPF5QeuKAaKObX376baqBZSYCIHCkgQJUDEFcKMJr5lIJ0oC0hSPuvrE4AdIAASANS8PSHsQ+kA7CZaWD+kQbMRwBCeCzFkg4g/8fokf+NEMc62FfB07cd9mNbQBGiwlmEI/eIPmqARSgHsNEKQAdJR0SRgpF/LsNjCrg8xzIs5veevDk4AIBcAYo88x+rIFKgI2dPgRUsw6gBuOBT5ISA8Nm2sF9nK3bCJ6+PANyAAKF9gPmPyLkM580IDmAnRDsVuyDqQBtQWq4VcACIw4oAn19eaRnGZoR9AA5AiACcAYHnlecaU+Dq6lCEAkAdoLjmnQ/CAtnsRAjM+2FUzO9fXrI7SwCmIA6ghKC4RfTjYI2+ZnJAZ0GcoRAbwgFA/B2Ax/GDy4ujA9gmBgSiRj+Aw4jtxX6yZ1PC9gzRx2GEs5THsKJV1GfbusRVvtiO417w5eW7cAAHks567tYU1oG0vy56ApeJsF9pCA95ymmvVxMSEPCv63gWSLZkaEovz7UTcl9SMwKQbEDUEVU7eYjj1XyGMCDUEhCFu5sajjoJrgDpgNjbtNEVP7w8G4cRILLtQvOpXVviOwS6YvWFPM9mgNHrLVYZqSJeQxxzdslcxOiKHxFAVywCsPuVCMuJ0WpmZ5yDzWncD3lJ1Fsam0604ik2ATT87Hg58ceXm90B3gt2iBTEfASIVAUAXGAKeC/AxSNa8l726Buep3sC74dm/s3lRjUwXbkUsUBm8d2BvCPmBSVvieHAuAvKhTXEc847IlMAAFVypiAd0GXkVCIdAyavZ0iB7hL6lynQtUxXsxC/E8Dsf4h/CVMyrjguAAAAAElFTkSuQmCC"
                priority
                placeholder="blur"
                images={images}
              />
              <video
                className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 min-h-full min-w-full max-w-none"
                poster="flex-ui-assets/images/testimonials/video-frame.jpeg"
                muted
              >
                <source
                  src="https://static.shuffle.dev/files/video-placeholder.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      )}
      <p className="mb-8 text-center mx-auto text-lg md:text-xl text-coolGray-500 font-medium max-w-xl">
        {subtitle}
      </p>
      <div className="flex flex-wrap justify-center mx-5 mx-auto">
        {button_1 && (
          <div className="w-full md:w-auto py-1 md:py-0 md:mr-6">
            <Link href={button_1.href}>
              <a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-indigo-50 font-medium text-center bg-indigo-600 hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 border border-indigo-500 rounded-md shadow-sm">
                {button_1.text}
              </a>
            </Link>
          </div>
        )}
        {button_2 && (
          <div className="w-full md:w-auto py-1 md:py-0">
            <Link href={button_2.href}>
              <a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-indigo-50 font-medium text-center bg-violet-500 hover:bg-violet-700 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm">
                {button_2.text}
              </a>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
