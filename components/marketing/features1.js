/* This example requires Tailwind CSS v2.0+ */
import { MoonIcon, SparklesIcon } from "@heroicons/react/outline";
import { PlusIcon } from "@heroicons/react/solid";
import Features from "./features";

const texts = {
  vacations: {
    left: {
      images: [
        "/images/lounge/final/4.jpeg",
        "/images/lounge/final/5.jpeg",
        "/images/lounge/final/3.jpeg",
        "/images/lounge/final/6.jpeg",
      ],
      title: "The Beach Lounge",
      paragraphs: [
        `This is your opportunity to enjoy a little secluded beach all to yourself.
        Paz is located in a small gulf where it's hard to see someone walking down the beach. 
        \n\rRight in front of the house (50 steps) you'll find a little sandy inlet, under the shadow of palm trees that we outfitted with hammocs and comfy furniture where you'll want to spend day and night.\n\r
        
        Discover why it's a favorite among scarlet maccaws and the 4 species of monkeys. Catch a wave, go paddle boarding or take a dip in the pacific ocean's turquioise and emmerald waters. 
       `,
      ],
      caption: "",
    },
    right: {
      images: [
        "/images/house/final/12.jpeg",
        "/images/house/final/16.jpeg",
        "/images/house/final/19.jpeg",
        "/images/house/final/21.jpeg",
        "/images/house/final/5.jpeg",
      ],
      title: "Comfy Jungle House",
      paragraphs: [
        `Floor to cealing screened windows to watch all the wildlife as
    they flow by the house. Big Ass Fans for superb
    ventilation in two extra large bedroms with 4 individual or 2 king resort grade beds each.\n\r Split the rooms for boys
    and girls, parents and kids and add a fun camping vibe to your
    adventure!\n\rFull kitchen with condiments and supplies. Bring your food - or
    - send us your shopping list and it will be sorted when you
    arrive - or request a typical costarican cook: the friendliness
    and love of our culture is the main condiment in our gastronomy.
  `,
        `Ask us for a free upgrade and we'll setup big glaming tents
    right on the sand for the best posible experience in Costa Rica.`,
      ],

      caption: "",
    },
  },
  retreats: {
    left: {
      images: ["/images/jungle.jpg", "/images/house.jpg"],
      title: "Nature is our guide",
      paragraphs: [
        `Some people are beautiful, but meeting someone who is amazing makes an impact. With nature, when we are able to go pass seeing and into connecting
        at a deeper level that impact heals us.\n\rStress is the result of not being present in this moment. Being in the mind thinking and solving problems. 
        It's how modern humans live. Practicing being present in nature can be fun and effortless. It also creates a positive feedback loop (healing) that you can then bring to your everyday activities, even when you are not in nature. `,
      ],
      caption:
        "Activities include surfing & paddleboarding, hiking, bonefires, snorkeling, sitting or walking alone in a pristine beach, swimming in sunsets, laying in a hammock under a palm tree, star gazing, bathing in creaks and mud baths - under the optional coaching of Paz resident guide @rober_en_paz",
    },
    right: {
      images: ["/images/house.jpg", "/images/house.jpg"],
      title: "Comfy Jungle House with good food",
      paragraphs: [
        `Retreats are based in our beach house, a comfortable space with floor to cealing screened windows designed to mantain constant presence in nature.
        The two bedrooms with space for 4 people each have all the amenities of a hotel room. The lounge is the place to chill while wildlife literally swing by the house.\n\rLocal women share their wisdom, culture and local food 
        ( including leassons ) using the kitchen as medicine to produce three healty meels a day, juices and drinks with lot's of in between surprises.`,
        `Full kitchen with condiments and supplies. Bring your food - or
    - send us your shopping list and it will be sorted when you
    arrive - or request a typical costarican cook: the friendliness
    and love of our culture is the main condiment in our gastronomy.
  `,
        `Ask us for a free upgrade and we'll setup big glaming tents
    right on the sand for the best posible experience in Costa Rica.`,
      ],

      caption:
        "Rooms, single beds and food diets are made to match each retreat. In mixed retreats, rooms are divided by gender. Food is as organic as possible both vegetarian and omnivore friendly. ",
    },
  },
  teachers: {
    left: {
      images: ["/images/beach.jpg", "/images/house.jpg"],
      title: "The Beach Lounge",
      paragraphs: [
        ` The retreat will have the company of countless animals, birds and butterflies. The song of nature will play from start to end.\n\r In general Paz is inspired by mother nature and all recomended activities are meant to take advantage of the pure and undisturbed presence of the 4 elements of life. \n\rThe lounge will be arranged according to each retreat with options for meditation, satsang, yoga, music, writting, bonefires, Qi Gong, or anything else.\n\r This location is pristine, everything is as it must be, we - the caretakers here, do our best to honor the spirit of life with lovely actions and behaviors towards ourselfs and others every day.`,
      ],
      caption:
        "Activities include surfing & paddleboarding, hiking, bonefires, snorkeling, sitting or walking alone in a pristine beach, swimming in sunsets, laying in a hammock under a palm tree, star gazing, bathing in creaks, mud baths and more.",
    },
    right: {
      images: ["/images/house.jpg", "/images/house.jpg"],
      title: "Comfy Jungle House",
      paragraphs: [
        `Floor to cealing screened windows to watch all the wildlife as
    they flow by the house. Big Ass Fans for superb
    ventilation and 8 resort grade individual beds split into two large bedrooms with their own bathrooms with hot water. \n\r
    Full range of kitchen arrangments where you can bring your own chef, use our local cooks, or work with us on the menu and selecting specialized staff.\n\r
        Ask us for a free upgrade and we'll setup big glaming tents
    right on the sand for advanced exersices and the best posible experience in Costa Rica.\n\r Me an my staff will be on call for anything you might need, from cleaning to lighting the bonefire, carring stuff or the creation of a private protected perimeter during intimate activities.`,
      ],

      caption: "",
    },
  },
};

export default function Features1(props) {
  return (
    <Features
      left={texts[props.selectedView].left}
      right={texts[props.selectedView].right}
    />
  );
}
