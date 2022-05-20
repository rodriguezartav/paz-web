import Link from "next/link";

import Image from "next/image";

export default function HomeApp({
  title,
  legend,
  image,
  subtitle,
  color = "indigo-500",
  t1_description,
  t1_title,
  t2_description,
  t2_title,
  t3_description,
  t3_title,
  t4_description,
  t4_title,
}) {
  return (
    <section
      className="py-24 bg-white overflow-hidden"
      style={{
        backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
        backgroundPosition: "center",
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-gray-500 bg-gray-100 font-medium uppercase rounded-full shadow-sm">
              {legend}
            </span>
            <h2
              className={` text-indigo-500 text-4xl md:text-5xl leading-tight font-bold tracking-tighter text-${color}`}
            >
              {title}
            </h2>
            {subtitle && (
              <p className="mb-8  text-lg md:text-3xl text-coolGray-500 text-left font-medium max-w-xl">
                {subtitle}
              </p>
            )}

            <div className="flex flex-wrap -mx-4 text-center md:text-left">
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-indigo-500 font-semibold rounded-full">
                  1
                </div>
                <h3 className="mb-2 text-xl font-bold">{t1_title}</h3>
                <p className="font-medium text-gray-500">{t1_description}</p>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-indigo-500 font-semibold rounded-full">
                  2
                </div>
                <h3 className="mb-2 text-xl font-bold">{t2_title}</h3>
                <p className="font-medium text-gray-500">{t2_description}</p>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-indigo-500 font-semibold rounded-full">
                  3
                </div>
                <h3 className="mb-2 text-xl font-bold">{t3_title}</h3>
                <p className="font-medium text-gray-500">{t3_description}</p>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-indigo-500 font-semibold rounded-full">
                  4
                </div>
                <h3 className="mb-2 text-xl font-bold">{t4_title}</h3>
                <p className="font-medium text-gray-500">{t4_description}</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
            <div className="relative mx-auto md:ml-0 max-w-max">
              <img
                className="absolute z-10 -right-8 -top-8 w-28 md:w-auto"
                src="flex-ui-assets/elements/circle3-yellow.svg"
                alt=""
              />
              <img
                className="absolute z-10 -left-10 -bottom-8 w-28 md:w-auto"
                src="flex-ui-assets/elements/dots3-blue.svg"
                alt=""
              />
              <Image
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABUVJREFUWEd1l21zHDUQhGe0d/7PJkAIkISPl+CEvBFICAUUr+HnsSuJ6u4ZrdZVTpWiPdu3/UzPSBr54w//djez4hqnGOdidirdzviMZ++cF+9WMKwbvmfWreP/3q11s8rhtuVo0zN/Vvg3rbs1c/MEcMfLdwCKFwuAHmA9AABLWUJAHJ+OAGYbxcsOE1AAnAA+4rtWTACECGG64ALBjOjlgABcsVvv+P8IMFxobmtEDlfwc474tj/66SNTcHRAEQ+AyX4CmNIgACUBEHIALzert6JfaX2kwOQAvu0PE8AQXaYgACAMB/hz/L7dXQOzA4Yo0/pbsxWK04Hu5l+//0cOMAXdFkPeJSzx/fnEyAUB/oMDBFBhDfsN4jFsdwB/wwGAr979vddAumAp3Ayigmi28PctVgBekSmIGgBERk/BYltCTJ/xBgGY+YMf/9Iy5OgU5ICoNTtbG8+LAaLRhd2BWIYhjpfD3gphW+SALeMzoOQAZjP/4u2fkQLZjyghLHE81/F5AMQr6IAnQNhK8cWqBwDFlwEBMAyUMveB+9//ESlQdZ86QJqduyAIwGe+1pY+DFQKZgBXZNVDNGcCnZgOeAiATKR/9uZ3OUDhTgEKY+4Qj0Hx4A8IZDy2Q8NLJF6sQZiCmg/PAdFcSfRPX/22OwAICt8SbxtBlo4YqhWCIINyAP/4wiE+CQdAgsDHhr+LUvZ7L38VQFdWlhYADZFvdkrxthEAgyXWa4gDwkI8oi+KuvrZKp/Pwwmkh6XsOk38kxe/cCMlAB2odmoACfFpLn2VC111joxLXAAYEGwQL5M4ngeEAPj3ALh+/vNYBQXCBKi2wAGI15Xz0iC+EqyECwLo1tP+slgDQEZNiCvBBIDqg9XG7/n1sw90gEXYlQJFD4DVlopnCP8niDsB3HqKl7O1Wbxc2eb4mVJzSMH1zXvWAAAKAdKBiL5CFC4IohBgnVKAGlABdjpwtrrMABBPF5QeuKAaKObX376baqBZSYCIHCkgQJUDEFcKMJr5lIJ0oC0hSPuvrE4AdIAASANS8PSHsQ+kA7CZaWD+kQbMRwBCeCzFkg4g/8fokf+NEMc62FfB07cd9mNbQBGiwlmEI/eIPmqARSgHsNEKQAdJR0SRgpF/LsNjCrg8xzIs5veevDk4AIBcAYo88x+rIFKgI2dPgRUsw6gBuOBT5ISA8Nm2sF9nK3bCJ6+PANyAAKF9gPmPyLkM580IDmAnRDsVuyDqQBtQWq4VcACIw4oAn19eaRnGZoR9AA5AiACcAYHnlecaU+Dq6lCEAkAdoLjmnQ/CAtnsRAjM+2FUzO9fXrI7SwCmIA6ghKC4RfTjYI2+ZnJAZ0GcoRAbwgFA/B2Ax/GDy4ujA9gmBgSiRj+Aw4jtxX6yZ1PC9gzRx2GEs5THsKJV1GfbusRVvtiO417w5eW7cAAHks567tYU1oG0vy56ApeJsF9pCA95ymmvVxMSEPCv63gWSLZkaEovz7UTcl9SMwKQbEDUEVU7eYjj1XyGMCDUEhCFu5sajjoJrgDpgNjbtNEVP7w8G4cRILLtQvOpXVviOwS6YvWFPM9mgNHrLVYZqSJeQxxzdslcxOiKHxFAVywCsPuVCMuJ0WpmZ5yDzWncD3lJ1Fsam0604ik2ATT87Hg58ceXm90B3gt2iBTEfASIVAUAXGAKeC/AxSNa8l726Buep3sC74dm/s3lRjUwXbkUsUBm8d2BvCPmBSVvieHAuAvKhTXEc847IlMAAFVypiAd0GXkVCIdAyavZ0iB7hL6lynQtUxXsxC/E8Dsf4h/CVMyrjguAAAAAElFTkSuQmCC"
                placeholder="blur"
                width={image.width}
                height={image.height}
                src={image.src}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
