const texts = {
  vacations: {
    title: "Feel the peace",
    text_1:
      "A lovely two bedroom house for 8. Steps away from a beach lounge with palm trees, a meditation deck, comfy furniture and hammocks all for yourself. ",
    text_2:
      "Primary forest with miles of pristine beach, huge trees. Abundant wildlife on site, this is the most biodiverse place on earth. For real ",
    text_3:
      "Concierge service for Ocean & Jungle activities (some are included). Optional kitchen package may include grocery shopping, cook or chef.",
    text_4:
      "Optional de-stress and natural connection course where @rober.enpaz.cr shares his experience, insights and secret spots where he learned to heal from cronic stress.",
    reason_1:
      "I came here in my 20's following my heart. It took me 10 years to find this land and 6 to build it off the grid./n/r I did it for myself because I need it - now I can share it with you. ",
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
    <div className="py-20 pt-10 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-left">
          <h2 className="my-5 text-3xl leading-8 font-extrabold tracking-tight text-stone-600 sm:text-4xl">
            {texts[props.selectedView].title}
          </h2>

          <div className="mt-4 max-w-2xl  lg:mx-auto text-lg sm:text-xl">
            <p className=" text-gray-500  ">
              {texts[props.selectedView].text_1}
            </p>
            <p className="mt-8 text-gray-500 ">
              {texts[props.selectedView].text_2}
            </p>
            <p className=" mt-8 text-gray-500 ">
              {texts[props.selectedView].text_3}
            </p>
            <p className=" mt-8 text-gray-500 ">
              {texts[props.selectedView].text_4}
            </p>
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
                    @rober.enpaz.cr
                  </a>
                </h4>
                <div className=" bg-stone-100 p-2 pt-0 text-sm ">
                  {texts[props.selectedView].reason_1
                    .split("/n/r")
                    .map((item) => (
                      <p className="text-xs">{item}</p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
