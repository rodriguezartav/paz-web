import Link from "next/link";

import Image from "next/image";

export default function HomeApp({
  title,
  legend,
  image,
  color = "indigo-500",
  subtitle,
  button,
  onClick,
}) {
  return (
    <section
      className="relative   py-24 md:pb-32 bg-white overflow-hidden"
      style={{
        backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
        backgroundPosition: "center",
      }}
    >
      <div className="relative container px-4 mx-auto">
        <div className="xl:max-w-4xl mb-18 md:mb-16 mx-auto text-center">
          <img
            className="h-40 w-40 mx-auto text-white"
            src="/marketing/logo/svg/lila_solo.svg"
          />

          <h1
            className={`mb-4 text-3xl text-indigo-400 md:text-4xl leading-tight font-heading font-bold text-${color}`}
          >
            {title}
          </h1>
          <p className="mb-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-500 font-heading">
            {subtitle}
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <img
            className="absolute top-0 left-0 -mt-6 lg:-mt-12 -ml-6 lg:-ml-12 w-20 lg:w-auto z-10"
            src="flex-ui-assets/elements/circle3-yellow.svg"
            alt=""
          />
          <img
            className="z-50 absolute bottom-0 right-0 -mb-6 lg:-mb-10-mr-6 lg:-mr-12 w-20 lg:w-auto"
            src="flex-ui-assets/elements/dots3-blue.svg"
            alt=""
          />
          <Image
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABUVJREFUWEd1l21zHDUQhGe0d/7PJkAIkISPl+CEvBFICAUUr+HnsSuJ6u4ZrdZVTpWiPdu3/UzPSBr54w//djez4hqnGOdidirdzviMZ++cF+9WMKwbvmfWreP/3q11s8rhtuVo0zN/Vvg3rbs1c/MEcMfLdwCKFwuAHmA9AABLWUJAHJ+OAGYbxcsOE1AAnAA+4rtWTACECGG64ALBjOjlgABcsVvv+P8IMFxobmtEDlfwc474tj/66SNTcHRAEQ+AyX4CmNIgACUBEHIALzert6JfaX2kwOQAvu0PE8AQXaYgACAMB/hz/L7dXQOzA4Yo0/pbsxWK04Hu5l+//0cOMAXdFkPeJSzx/fnEyAUB/oMDBFBhDfsN4jFsdwB/wwGAr979vddAumAp3Ayigmi28PctVgBekSmIGgBERk/BYltCTJ/xBgGY+YMf/9Iy5OgU5ICoNTtbG8+LAaLRhd2BWIYhjpfD3gphW+SALeMzoOQAZjP/4u2fkQLZjyghLHE81/F5AMQr6IAnQNhK8cWqBwDFlwEBMAyUMveB+9//ESlQdZ86QJqduyAIwGe+1pY+DFQKZgBXZNVDNGcCnZgOeAiATKR/9uZ3OUDhTgEKY+4Qj0Hx4A8IZDy2Q8NLJF6sQZiCmg/PAdFcSfRPX/22OwAICt8SbxtBlo4YqhWCIINyAP/4wiE+CQdAgsDHhr+LUvZ7L38VQFdWlhYADZFvdkrxthEAgyXWa4gDwkI8oi+KuvrZKp/Pwwmkh6XsOk38kxe/cCMlAB2odmoACfFpLn2VC111joxLXAAYEGwQL5M4ngeEAPj3ALh+/vNYBQXCBKi2wAGI15Xz0iC+EqyECwLo1tP+slgDQEZNiCvBBIDqg9XG7/n1sw90gEXYlQJFD4DVlopnCP8niDsB3HqKl7O1Wbxc2eb4mVJzSMH1zXvWAAAKAdKBiL5CFC4IohBgnVKAGlABdjpwtrrMABBPF5QeuKAaKObX376baqBZSYCIHCkgQJUDEFcKMJr5lIJ0oC0hSPuvrE4AdIAASANS8PSHsQ+kA7CZaWD+kQbMRwBCeCzFkg4g/8fokf+NEMc62FfB07cd9mNbQBGiwlmEI/eIPmqARSgHsNEKQAdJR0SRgpF/LsNjCrg8xzIs5veevDk4AIBcAYo88x+rIFKgI2dPgRUsw6gBuOBT5ISA8Nm2sF9nK3bCJ6+PANyAAKF9gPmPyLkM580IDmAnRDsVuyDqQBtQWq4VcACIw4oAn19eaRnGZoR9AA5AiACcAYHnlecaU+Dq6lCEAkAdoLjmnQ/CAtnsRAjM+2FUzO9fXrI7SwCmIA6ghKC4RfTjYI2+ZnJAZ0GcoRAbwgFA/B2Ax/GDy4ujA9gmBgSiRj+Aw4jtxX6yZ1PC9gzRx2GEs5THsKJV1GfbusRVvtiO417w5eW7cAAHks567tYU1oG0vy56ApeJsF9pCA95ymmvVxMSEPCv63gWSLZkaEovz7UTcl9SMwKQbEDUEVU7eYjj1XyGMCDUEhCFu5sajjoJrgDpgNjbtNEVP7w8G4cRILLtQvOpXVviOwS6YvWFPM9mgNHrLVYZqSJeQxxzdslcxOiKHxFAVywCsPuVCMuJ0WpmZ5yDzWncD3lJ1Fsam0604ik2ATT87Hg58ceXm90B3gt2iBTEfASIVAUAXGAKeC/AxSNa8l726Buep3sC74dm/s3lRjUwXbkUsUBm8d2BvCPmBSVvieHAuAvKhTXEc847IlMAAFVypiAd0GXkVCIdAyavZ0iB7hL6lynQtUxXsxC/E8Dsf4h/CVMyrjguAAAAAElFTkSuQmCC"
            placeholder="blur"
            width={image.width}
            height={image.height}
            src={image.src}
            className="relative z-50 "
          />
        </div>
      </div>
    </section>
  );
}
