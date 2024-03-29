import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  DocumentReportIcon,
  ChartBarIcon,
  RefreshIcon,
  CheckCircleIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

export const wellnessMap = [
  {
    name: 'Temazcal & Cold Tubs',
    href: '/experience/wellness#temazcal',
    description:
      'Legend says the condor and the eagle meet here in Costa Rica to share knowledge, we fulfill this vision with North American Temazcal, Andean therapies',
    icon: InformationCircleIcon,
  },
  {
    name: 'Intuitive Detox Workouts',
    href: '/experience/wellness#yoga',
    description:
      'Movement is key to the body and the mind. Therefore, we may try exercises from arts such as qi gong, tai chi, yoga, and functional training.',
    icon: BriefcaseIcon,
  },
  {
    name: 'Natural Meditations',
    href: '/experience/wellness#meditation',
    description:
      'The Spa and Workouts help us relax and cleanse. Nature and its elements help us reach our natural state of awareness from where we recharge and heal.',
    icon: OfficeBuildingIcon,
  },

  {
    name: 'Self Realization',
    href: '/experience/wellness#realization',
    description:
      'We are much more than body and minds, and we are more than the idea of a soul. Meditation + Self Inquiry can help us realize what we are.',
    icon: NewspaperIcon,
  },
]

export const activityMap = [
  {
    parent: 'Wellness',
    name: 'Wellness',
    href: '/experience/adventure#surf',
    image: '/house/living/master.jpeg',
    description:
      'Learn or improve your surfing in front of our house with ISA certified instructors and surfboards with enhanced safety for begginers',
    icon: UserGroupIcon,
  },
  {
    parent: 'Wellness',
    name: 'Adventure',
    image: '/house/living/master.jpeg',
    href: '/experience/adventure#wildlife',
    description:
      '800 species of tress, 400 specifes birds, 90 species of mammals and the most amazing insects in a very small protected area is a show to be seen.',
    icon: GlobeAltIcon,
  },
  {
    parent: 'Food',
    name: 'Wellness',
    image: '/house/living/master.jpeg',
    href: '/experience/adventure#beach',
    description:
      'The feeling of walking alone on a pristine beach with huge primary trees, jumping on tide pools and swimming on its warm seas... you have to feel it',
    icon: GlobeAltIcon,
  },
]

export const adventureMap = [
  {
    name: 'Soul Surfing School',
    href: '/experience/adventure#surf',
    description:
      'Our surf spot in front is called Chill, which is perfect for practicing soul surfing. The meditative and healing branch of surfing looks for a connection with the wave of life.',
    icon: UserGroupIcon,
  },
  {
    name: 'Wildlife Inspiration',
    href: '/experience/adventure#wildlife',
    description:
      'At Paz, we look at nature as our guide to a happier life. They live in the natural state of awareness we look up to, and our approach is that of the student asking the master how it is done. ',
    icon: GlobeAltIcon,
  },
  {
    name: 'Pristine Beach Exploration',
    href: '/experience/adventure#beach',
    description:
      'We call it free meditation, such a beautiful beach with the forest and so many little secret spots to swim, float or lay on the beach. It is tough not to be present at the moment.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Bonefire & BBQ',
    href: '/experience/adventure#whales',
    description:
      'We love bonfires, BBQs, and cooking beans and rice on wood stoves in Costa Rica. If we were always on vacation, we would do them every day. That is why we decided to do them every day in Paz since our guests are on vacation!',
    icon: BookmarkAltIcon,
  },
]

export const mealMap = [
  {
    id: 1,
    name: 'Traditional Wood Stove, BBQ and Oven ',
    href: '/experience/food/meals#drinks',
    icon: ChartBarIcon,
    description: '',
    image:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'Healthy Meals, Drinks and Snaks',
    href: '/experience/food/meals#food',
    icon: ChartBarIcon,
    description: '',
    image:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
  },
]

export const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'View All Products', href: '#', icon: CheckCircleIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]

export const propertyMap = [
  {
    name: 'Beach House & Cabinas',
    description:
      'The house is 50 steps from the sand, surrounded by primary forest, and designed with huge screened windows to observe and be in nature all day.',
    href: '/property/beach-house',
    image: '/house/living/master.jpeg',
    icon: ChartBarIcon,
  },
  {
    name: 'Beach Club',
    description:
      'Imagine the clasical beach club with hammocks, beach chairs and comfy decks with one key difference. It is all for yourself in a pristine beach',
    href: '/property/beach-club',
    image: '/lounge/master.jpg',
    icon: CursorClickIcon,
  },
  {
    name: 'Self-Healing Ceremonial Spa',
    description: `Paz ancestral Spa goes beyond the physical into the emotional and energetic cleansing. Our version of the Temazcal, mixed with cold water, sound and shamanic meditations as one holistic therapy that will empty your internal luggage`,
    href: '/property/spa-shamanic',
    image: '/spa/temazcal/master.jpg',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Temple of Human Sciences ',
    description:
      'Thinking about Science is excellent, but it does not compare with living it. So let us search together for the intersection between Science, health, and meditation while upgrading our knowledge about the universe, nature, and quantum physics, all in a spiritual setting in the jungle.',
    href: '/property/practice-temple',
    image: '/temple/master.jpg',
    icon: ViewGridIcon,
  },
]
export const resources = [
  {
    name: 'The Osa Peninsula',
    description:
      'Get all of your questions answered in our forums or contact support.',
    image: '/guide/matapalo/master.webp',
    href: '/guides/osa-peninsula',
  },
  {
    name: 'Visitors Guide to Paz',
    image: '/house/outside/from_outside.jpeg',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '/guides/visitors-guide',
  },
  {
    name: 'Self Realization for Entreprenuers',
    image: '/art/human-heart.jpg',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '/guides/self-realization-entrepreneurs',
  },
]

export const FooterData = {
  property: [
    { name: 'Accomodations', href: '/property/beach-house' },
    { name: 'Spa Shamanic', href: '/property/spa-shamanic' },
    { name: 'Beach Club', href: '/property/beach-club' },
    { name: 'Practice Temple', href: '/property/practice-temple' },
  ],
  experience: [
    { name: 'Wellness', href: '/experience/wellness' },
    { name: 'Adventure', href: '/experience/adventure' },
    { name: 'Food & Medicine', href: '/experience/food' },
  ],
  guides: [
    { name: 'The Osa Peninsula', href: '/guides/osa-peninsula' },
    { name: 'Paz Visitors Guide', href: '/guides/visitors' },
    { name: 'Self Realization for Entre...', href: '/guides/self-realization' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Dribbble',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}
