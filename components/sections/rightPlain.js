import Link from "next/link";

import Image from "../Image";

export default function HomeApp({
  title,
  legend,
  color = "indigo-500",
  images,
  subtitle,
  button,
}) {
  return (
    <section
      className="py-24 md:py-32 bg-white overflow-hidden"
      style={{
        backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
        backgroundPosition: "center",
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap lg:items-center -mx-4">
          <div className=" hidden sm:block w-full md:w-1/2 px-4 mb-16 md:mb-0">
            <div className=" max-h-screen overflow-hidden relative mx-auto md:ml-0 max-w-max">
              <img
                className="absolute z-10 -left-8 -top-8 w-28 md:w-auto text-yellow-400"
                src="flex-ui-assets/elements/circle3-yellow.svg"
                alt=""
              />
              <img
                className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto text-blue-500"
                src="flex-ui-assets/elements/dots3-blue.svg"
                alt=""
              />
              <Image
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABUVJREFUWEd1l21zHDUQhGe0d/7PJkAIkISPl+CEvBFICAUUr+HnsSuJ6u4ZrdZVTpWiPdu3/UzPSBr54w//djez4hqnGOdidirdzviMZ++cF+9WMKwbvmfWreP/3q11s8rhtuVo0zN/Vvg3rbs1c/MEcMfLdwCKFwuAHmA9AABLWUJAHJ+OAGYbxcsOE1AAnAA+4rtWTACECGG64ALBjOjlgABcsVvv+P8IMFxobmtEDlfwc474tj/66SNTcHRAEQ+AyX4CmNIgACUBEHIALzert6JfaX2kwOQAvu0PE8AQXaYgACAMB/hz/L7dXQOzA4Yo0/pbsxWK04Hu5l+//0cOMAXdFkPeJSzx/fnEyAUB/oMDBFBhDfsN4jFsdwB/wwGAr979vddAumAp3Ayigmi28PctVgBekSmIGgBERk/BYltCTJ/xBgGY+YMf/9Iy5OgU5ICoNTtbG8+LAaLRhd2BWIYhjpfD3gphW+SALeMzoOQAZjP/4u2fkQLZjyghLHE81/F5AMQr6IAnQNhK8cWqBwDFlwEBMAyUMveB+9//ESlQdZ86QJqduyAIwGe+1pY+DFQKZgBXZNVDNGcCnZgOeAiATKR/9uZ3OUDhTgEKY+4Qj0Hx4A8IZDy2Q8NLJF6sQZiCmg/PAdFcSfRPX/22OwAICt8SbxtBlo4YqhWCIINyAP/4wiE+CQdAgsDHhr+LUvZ7L38VQFdWlhYADZFvdkrxthEAgyXWa4gDwkI8oi+KuvrZKp/Pwwmkh6XsOk38kxe/cCMlAB2odmoACfFpLn2VC111joxLXAAYEGwQL5M4ngeEAPj3ALh+/vNYBQXCBKi2wAGI15Xz0iC+EqyECwLo1tP+slgDQEZNiCvBBIDqg9XG7/n1sw90gEXYlQJFD4DVlopnCP8niDsB3HqKl7O1Wbxc2eb4mVJzSMH1zXvWAAAKAdKBiL5CFC4IohBgnVKAGlABdjpwtrrMABBPF5QeuKAaKObX376baqBZSYCIHCkgQJUDEFcKMJr5lIJ0oC0hSPuvrE4AdIAASANS8PSHsQ+kA7CZaWD+kQbMRwBCeCzFkg4g/8fokf+NEMc62FfB07cd9mNbQBGiwlmEI/eIPmqARSgHsNEKQAdJR0SRgpF/LsNjCrg8xzIs5veevDk4AIBcAYo88x+rIFKgI2dPgRUsw6gBuOBT5ISA8Nm2sF9nK3bCJ6+PANyAAKF9gPmPyLkM580IDmAnRDsVuyDqQBtQWq4VcACIw4oAn19eaRnGZoR9AA5AiACcAYHnlecaU+Dq6lCEAkAdoLjmnQ/CAtnsRAjM+2FUzO9fXrI7SwCmIA6ghKC4RfTjYI2+ZnJAZ0GcoRAbwgFA/B2Ax/GDy4ujA9gmBgSiRj+Aw4jtxX6yZ1PC9gzRx2GEs5THsKJV1GfbusRVvtiO417w5eW7cAAHks567tYU1oG0vy56ApeJsF9pCA95ymmvVxMSEPCv63gWSLZkaEovz7UTcl9SMwKQbEDUEVU7eYjj1XyGMCDUEhCFu5sajjoJrgDpgNjbtNEVP7w8G4cRILLtQvOpXVviOwS6YvWFPM9mgNHrLVYZqSJeQxxzdslcxOiKHxFAVywCsPuVCMuJ0WpmZ5yDzWncD3lJ1Fsam0604ik2ATT87Hg58ceXm90B3gt2iBTEfASIVAUAXGAKeC/AxSNa8l726Buep3sC74dm/s3lRjUwXbkUsUBm8d2BvCPmBSVvieHAuAvKhTXEc847IlMAAFVypiAd0GXkVCIdAyavZ0iB7hL6lynQtUxXsxC/E8Dsf4h/CVMyrjguAAAAAElFTkSuQmCC"
                placeholder="blur"
                images={images}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-indigo-500 bg-indigo-100 font-medium uppercase rounded-full shadow-sm">
              {legend}
            </span>
            <h1
              className={`mb-8 text-4xl md:text-5xl leading-tight text-indigo-400 font-bold tracking-tighter text-${color}`}
            >
              {title}
            </h1>

            <div className=" block sm:hidden w-full md:w-1/2 px-4 mb-16 md:mb-0">
              <div className=" max-h-screen overflow-hidden relative mx-auto md:ml-0 max-w-max">
                <img
                  className="absolute z-10 -left-8 -top-8 w-28 md:w-auto text-yellow-400"
                  src="flex-ui-assets/elements/circle3-yellow.svg"
                  alt=""
                />
                <img
                  className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto text-blue-500"
                  src="flex-ui-assets/elements/dots3-blue.svg"
                  alt=""
                />
                <Image
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABUVJREFUWEd1l21zHDUQhGe0d/7PJkAIkISPl+CEvBFICAUUr+HnsSuJ6u4ZrdZVTpWiPdu3/UzPSBr54w//djez4hqnGOdidirdzviMZ++cF+9WMKwbvmfWreP/3q11s8rhtuVo0zN/Vvg3rbs1c/MEcMfLdwCKFwuAHmA9AABLWUJAHJ+OAGYbxcsOE1AAnAA+4rtWTACECGG64ALBjOjlgABcsVvv+P8IMFxobmtEDlfwc474tj/66SNTcHRAEQ+AyX4CmNIgACUBEHIALzert6JfaX2kwOQAvu0PE8AQXaYgACAMB/hz/L7dXQOzA4Yo0/pbsxWK04Hu5l+//0cOMAXdFkPeJSzx/fnEyAUB/oMDBFBhDfsN4jFsdwB/wwGAr979vddAumAp3Ayigmi28PctVgBekSmIGgBERk/BYltCTJ/xBgGY+YMf/9Iy5OgU5ICoNTtbG8+LAaLRhd2BWIYhjpfD3gphW+SALeMzoOQAZjP/4u2fkQLZjyghLHE81/F5AMQr6IAnQNhK8cWqBwDFlwEBMAyUMveB+9//ESlQdZ86QJqduyAIwGe+1pY+DFQKZgBXZNVDNGcCnZgOeAiATKR/9uZ3OUDhTgEKY+4Qj0Hx4A8IZDy2Q8NLJF6sQZiCmg/PAdFcSfRPX/22OwAICt8SbxtBlo4YqhWCIINyAP/4wiE+CQdAgsDHhr+LUvZ7L38VQFdWlhYADZFvdkrxthEAgyXWa4gDwkI8oi+KuvrZKp/Pwwmkh6XsOk38kxe/cCMlAB2odmoACfFpLn2VC111joxLXAAYEGwQL5M4ngeEAPj3ALh+/vNYBQXCBKi2wAGI15Xz0iC+EqyECwLo1tP+slgDQEZNiCvBBIDqg9XG7/n1sw90gEXYlQJFD4DVlopnCP8niDsB3HqKl7O1Wbxc2eb4mVJzSMH1zXvWAAAKAdKBiL5CFC4IohBgnVKAGlABdjpwtrrMABBPF5QeuKAaKObX376baqBZSYCIHCkgQJUDEFcKMJr5lIJ0oC0hSPuvrE4AdIAASANS8PSHsQ+kA7CZaWD+kQbMRwBCeCzFkg4g/8fokf+NEMc62FfB07cd9mNbQBGiwlmEI/eIPmqARSgHsNEKQAdJR0SRgpF/LsNjCrg8xzIs5veevDk4AIBcAYo88x+rIFKgI2dPgRUsw6gBuOBT5ISA8Nm2sF9nK3bCJ6+PANyAAKF9gPmPyLkM580IDmAnRDsVuyDqQBtQWq4VcACIw4oAn19eaRnGZoR9AA5AiACcAYHnlecaU+Dq6lCEAkAdoLjmnQ/CAtnsRAjM+2FUzO9fXrI7SwCmIA6ghKC4RfTjYI2+ZnJAZ0GcoRAbwgFA/B2Ax/GDy4ujA9gmBgSiRj+Aw4jtxX6yZ1PC9gzRx2GEs5THsKJV1GfbusRVvtiO417w5eW7cAAHks567tYU1oG0vy56ApeJsF9pCA95ymmvVxMSEPCv63gWSLZkaEovz7UTcl9SMwKQbEDUEVU7eYjj1XyGMCDUEhCFu5sajjoJrgDpgNjbtNEVP7w8G4cRILLtQvOpXVviOwS6YvWFPM9mgNHrLVYZqSJeQxxzdslcxOiKHxFAVywCsPuVCMuJ0WpmZ5yDzWncD3lJ1Fsam0604ik2ATT87Hg58ceXm90B3gt2iBTEfASIVAUAXGAKeC/AxSNa8l726Buep3sC74dm/s3lRjUwXbkUsUBm8d2BvCPmBSVvieHAuAvKhTXEc847IlMAAFVypiAd0GXkVCIdAyavZ0iB7hL6lynQtUxXsxC/E8Dsf4h/CVMyrjguAAAAAElFTkSuQmCC"
                  placeholder="blur"
                  images={images}
                />
              </div>
            </div>
            <p className="mb-6 text-lg md:text-xl text-gray-500 font-medium">
              {subtitle}
            </p>
            {button && (
              <Link href={button.href}>
                <a className="inline-block py-4 px-5 w-full md:w-auto text-base leading-4 text-indigo-50 bg-indigo-500 hover:bg-indigo-600 font-medium text-center focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 rounded-md shadow-sm">
                  {button.text}
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
