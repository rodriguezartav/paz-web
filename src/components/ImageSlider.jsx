import { SimpleImage } from '@/components/SimpleImage'

export function ImageSlider({ images }) {
  return (
    <div className=" w-screen overflow-x-hidden">
      <div className="mt-10 grid grid-cols-1 items-center gap-y-2  sm:gap-y-6 sm:overflow-hidden md:mt-10 lg:grid-cols-12 lg:pt-0">
        <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
          {images.map((item, index) => {
            return (
              <SimpleImage
                key={item.src + index}
                text={
                  !item.text
                    ? null
                    : {
                        overlayText: item.text.label,
                        overlayTextColor: '000000',
                        overlayTextBackground: 'ffffff80',
                        overlayTextPadding: '4',
                        overlayRadius: 5,
                        overlayTextFontSize: '18',
                      }
                }
                className="mx-2 border-2 border-stone-200 object-cover shadow-lg"
                width={item.width}
                src={item.src}
              ></SimpleImage>
            )
          })}
        </div>
      </div>
    </div>
  )
}
