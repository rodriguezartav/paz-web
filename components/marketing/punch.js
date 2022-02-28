const texts = {
  vacations: {
    title:
      "An authentic wildlife adventure with activities to relax, exercise and have fun",
    text_1:
      "Spend your vacation with up to 8 friends in our beach front retreat house while the abundant wildlife casually swings by.",
    text_2:
      "Let us customize your daily activities using our experience running stress healing retreats involving wellness, adventure, nature and tropical ocean activities",
    text_3: "",
    reason_1:
      "The purpose of this service is to share with my guests a deep connection with nature. That is, to fully relax and experience what it feels when we are part of it all.",
  },
  retreats: {
    title: "Nature guided De-Stress retreats",
    text_1:
      "Nature, trees, wildlife, water, fire... contain all we need to release the stress and emotions that are making us uncomfortable... or worst.",
    text_2:
      "Spend beautiful days engaged in activities involing the ocean, wildlife, relaxation, and naturally induced meditation ( like watching the bonefire ) with optional coaching in presence and connection.",
    reason_1:
      "De-Stress retreat are about spending the day enjoying yourself in a truly beautiful magical place. Doing fun, relaxing activities while learning technics that reduce stress and if taken seriously can transform your day to day live.",
  },
  teachers: {
    title: "We are honored to share Paz with female leaders and teachers",
    text_1:
      "The disconection with our feminine side is at the root of our problems in society and our separation from mother nature.",
    text_2:
      "This is a space for women to come togheter again within and among themselfs to restart the healing of humanity.",
    reason_1:
      "At Paz, Women retreats enjoy special conditions (-$ +❤️ +🔥). As a man, in the past, I failed to honor women correctly. I apologize. I am also healing and can honestly say that my heart fills with joy even if standing at a distance from a women circle. Can't explain why, but that's why I do this.",
  },
};

export default function Punch(props) {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="my-5 text-3xl leading-8 font-extrabold tracking-tight text-stone-600 sm:text-4xl">
            {texts[props.selectedView].title}
          </h2>

          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {texts[props.selectedView].text_1}
            <span className="bg-lime-100 p-1">
              {texts[props.selectedView].text_2}
            </span>
            <br /> <br />
            <br />
            <div className="flex text-left ">
              <div className="mr-4 flex-shrink-0  overflow-hidden">
                <img
                  className="h-16 rounded-full   border border-gray-300 bg-white text-gray-300"
                  src="./images/me.jpeg"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-violet-800">
                  <a href="http://instagram.com/rober_en_paz" target="_blank">
                    @rober_en_paz
                  </a>
                </h4>
                <p className="mt-1 bg-stone-100 p-2 text-lg md:text-sm">
                  {texts[props.selectedView].reason_1
                    .split("/n/r")
                    .map((item) => (
                      <p>{item}</p>
                    ))}
                </p>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
