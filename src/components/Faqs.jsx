import Image from 'next/future/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'How is Paz an AirBnb?',
      answer:
        'We started and continue to partner with AirBnb to offer our services because their new concept of renting superb exclusive locations that innovates in design fits very well with our vision.',
    },
    {
      question: 'How is Paz a resort?',
      answer:
        'Our amenities, activities and healthy meal options can turn your trip into an all inclusive private resort vacation like you have never seen.',
    },
    {
      question: 'How is Paz a wellness retreat center?',
      answer:
        "We, personally, spend our live dedicated to the inner arts of Maharisi's Self Realization, Vipassana and Natural Meditation, Shaoling Qi gong and Bahkti and Jhana Yoga. Working for Paz and it's vision - which is above us personally - comes naturally. We enjoy meeting people, sharing experiences and wisdom.",
    },
  ],
  [
    {
      question: 'Are the activities and other services optional?',
      answer:
        "Yes, you can choose exactly what you need and in the days you need it. Even if you don't pick any of out services our concierge service will help you book and enjoy activities on your own. ",
    },
    {
      question: 'Can I organize my retreat at Paz',
      answer:
        'Yes, you can use our infrastructure to host your retreat, pricing is straigforward. Simply rent the property. We ask first time teachers and coaches to arrive 2 days in advance for training and alignment with our standards.',
    },
  ],
  [],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
