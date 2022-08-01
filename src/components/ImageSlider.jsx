import { SimpleImage } from '@/components/SimpleImage'

export function ImageSlider({ images }) {
  return (
    <div className="max-w-screen w-screen overflow-hidden ">
      <div className=" bg-gradient-to-rpy-10 mb-20 flex justify-around ">
        {images.map((item) => {
          return (
            <SimpleImage
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
              className="mx-2 border-4 border-indigo-400 object-cover"
              width={item.width}
              src={item.src}
            ></SimpleImage>
          )
        })}
      </div>
    </div>
  )
}
