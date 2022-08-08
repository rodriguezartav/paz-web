import { Callout } from '@/components/Callout'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'
import { PageHero } from '@/components/PageHero'
import { ImageForMd } from '@/components/ImagesForMd'
import { SpecsWithImage } from '@/components/SpecsWithImage'

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },

  image: {
    selfClosing: true,
    render: ImageForMd,
    attributes: {
      right: { type: String },
      title: { type: String },
      description: { type: String },
      href: { type: String },
    },
  },

  specsWithImage: {
    selfClosing: true,
    render: SpecsWithImage,
    attributes: {
      title: { type: String },
      description: { type: String },
      feature1: { type: String },
      feature2: { type: String },
      feature3: { type: String },
      feature4: { type: String },
      images: { type: String },
    },
  },

  'quick-links': {
    render: QuickLinks,
  },

  'quick-link': {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },

  podcast: {
    selfClosing: true,
    render: Podcast,
    attributes: {
      url: { type: String },
    },
  },
}

export default tags

function Podcast({ url }) {
  const script = `<div id="buzzsprout-player-11097332" ></div><script src="${url}?container_id=buzzsprout-player-11097332&player=small" type="text/javascript" charset="utf-8"></script>`

  return <div dangerouslySetInnerHTML={{ __html: script }}></div>
}
