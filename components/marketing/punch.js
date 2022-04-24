import Areas from "./areas";

import Activities from "./activities";

const faqs = [
  {
    id: 1,
    question: "Comfy Jungle House",
    answer:
      "A luxury house with the heart of a camping tent. Feels like being outside, yet you are protected and very comfortable inside. Kitchen, Dinning, Living. Quality. Beds for 8.",
  },
  {
    id: 1,
    question: "Beach Lounge",
    answer:
      "The main attraction. An unique little beach with palm trees, a meditation deck, comfy furniture and hammocks all for yourself 50 steps from the house with the ocean right there.",
  },
  {
    id: 1,
    question: "Feels like a national park",
    answer:
      "Huge elder trees, the song of the forest, wildlife everywhere! Monkeys, Scarlet Maccaws, Toucans, Felines, Coati, Anteaters, Sloths. You'll spend all your day in the wild with real non-feed life like nowhere else in the world. ",
  },
  {
    id: 1,
    question: "Activities & Coaching",
    answer:
      "The activity program at Paz is the result of 20 years of practice. It's spontaneous, non dogmatic, no 'plant medicine', made to fit and it's goal is to help us realize - feel - we are nature.",
  },
  // More questions...
];

const texts = {
  vacations: {
    title: "Be at peace",
    title_2: "Feel the peace",
    text_11:
      "A lovely two bedroom house for 8. Steps away from a beach lounge with palm trees, a meditation deck, comfy furniture and hammocks all for yourself. ",
    text_1:
      "The house is 50 steps from the sand, separated by huge primary forest trees with lot's of wildlife. Extra large screened windows allow you to observe wildlife passing by while protecting you from bugs.",
    text_2:
      "Our purpose is to offer guests the opportunity to feel the peace of being part of nature. We have a catalog of self-serve activities within walking distance with optional coaching by appointment.",
    text_21:
      "Primary forest with miles of pristine beach, huge trees. Abundant wildlife on site, hundreds of birds and animals live here. You'll be able to spend lot's of time with all sorts of wildlife in the property. ",
    text_3:
      "During your trip, the goal will be to find experiences that move you into that space. Nature coaching is provided by resident host @rober. by appointment",
    text_4:
      "Concierge service for Ocean & Jungle activities. Every vacation includes a hicking tour to the waterfall and bonefires.",

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
        <div className="lg:text-left text-gray-500">
          <p className="text-lg mt-3">
            The Osa Peninsula is the most biodiverse place on earth, it has a
            strong spiritual dimension. It's meant to be used as a
            transformational experience. Our goal is that the house, lounge,
            activities - your vacation - become a retreat to learn how to let
            mother nature touch our heart - again.
          </p>

          <p className="text-2xl mt-5 ">
            The only way to connect with nature is to remember you are 🌱
          </p>
          <p className="text-sm mt-0 ">As a feeling, not a believe.</p>
        </div>
      </div>

      <div className="bg-indigo-500 my-20">
        <div className=" max-w-5xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white">All you need</h2>
          <p className="mt-4 text-base text-white max-w-lg">
            We aim at the balance ☯️ between elements to create comfortable
            spaces that keep you in constant interaction with nature.
          </p>
          <div className="mt-6 border-t border-sky-50 border-opacity-25 pt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="text-lg leading-6 font-medium text-sky-200">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-white">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-50 overflow-hidden md:py-12 lg:py-12">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <blockquote className="mt-1">
              <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                <p>
                  &ldquo;Parahamsa Yogananda appeared to me in a dream saying
                  that this forest would teach me how to find peace within
                  myself without having to add or do anything... he said other
                  people will show up to learn about that. I started the next
                  day.&rdquo;
                </p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <img
                      className="mx-auto h-14  rounded-full"
                      src="/images/me.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-medium text-gray-900">
                      @Rober
                    </div>

                    <svg
                      className="hidden md:block mx-1 h-5 w-5 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>

                    <div className="text-base font-medium text-gray-500">
                      Host
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
