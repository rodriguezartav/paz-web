import { useCallback, useEffect, useState } from 'react'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { Header } from '@/components/Header'
import { Navigation } from '@/components/Navigation'
import { Prose } from '@/components/Prose'
import { PageHero } from '../PageHero'

const navigation = [
  {
    title: 'Introduction',
    links: [
      { title: 'Need to Know', href: '/guides/osa-peninsula/need-to-know' },
      { title: 'Top Highlights', href: '/guides/osa-peninsula/highlights' },
      { title: 'Month by Month', href: '/guides/osa-peninsula/month-by-month' },
      { title: 'Travel with Children', href: '/guides/osa-peninsula/children' }
    ],
  },
  {
    title: 'Regions at a Glance',
    links: [
      { title: 'Mata Palo', href: '/docs/understanding-caching' },
      {
        title: 'Corcovado National Park',
        href: '/docs/predicting-user-behavior',
      },
      {
        title: 'Drake Bay & Isla del Caño',
        href: '/docs/basics-of-time-travel',
      },
      {
        title: 'Rincon and La Palma',
        href: '/docs/introduction-to-string-theory',
      },
      { title: 'Carate', href: '/docs/the-butterfly-effect' },
      {
        title: 'Golfito, Pavones and Beyond',
        href: '/docs/the-butterfly-effect',
      },
    ],
  },
  {
    title: 'Tours',
    links: [
      { title: 'Jungle & Forest Tours', href: '/docs/writing-plugins' },
      { title: 'Adventure Tours', href: '/docs/neuralink-integration' },
      { title: 'Wellness Activities', href: '/docs/temporal-paradoxes' },
      { title: 'Ocean Adventures', href: '/docs/testing' },
      {
        title: 'Cultural and Agricultural',
        href: '/docs/compile-time-caching',
      },
    ],
  },
  {
    title: 'Services',
    links: [
      { title: 'Taxi', href: '/docs/writing-plugins' },
      { title: 'Tour Operators', href: '/docs/neuralink-integration' },
      
    ],
  },
]

function useTableOfContents(tableOfContents) {
  let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.id)

  let getHeadings = useCallback((tableOfContents) => {
    return tableOfContents
      .flatMap((node) => [node.id, ...node.children.map((child) => child.id)])
      .map((id) => {
        let el = document.getElementById(id)
        if (!el) return

        let style = window.getComputedStyle(el)
        let scrollMt = parseFloat(style.scrollMarginTop)

        let top = window.scrollY + el.getBoundingClientRect().top - scrollMt
        return { id, top }
      })
  }, [])

  useEffect(() => {
    if (tableOfContents.length === 0) return
    let headings = getHeadings(tableOfContents)
    function onScroll() {
      let top = window.scrollY
      let current = headings[0].id
      for (let heading of headings) {
        if (top >= heading.top) {
          current = heading.id
        } else {
          break
        }
      }
      setCurrentSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true })
    }
  }, [getHeadings, tableOfContents])

  return currentSection
}

export default function Guide({
  children,
  title,
  tableOfContents,
  description,
  image,
  parent,
}) {
  let router = useRouter()
  let isHomePage = router.pathname === '/'
  let allLinks = navigation.flatMap((section) => section.links)
  let linkIndex = allLinks.findIndex((link) => link.href === router.pathname)
  let previousPage = allLinks[linkIndex - 1]
  let nextPage = allLinks[linkIndex + 1]
  let section = navigation.find((section) =>
    section.links.find((link) => link.href === router.pathname)
  )
  let currentSection = useTableOfContents(tableOfContents)

  function isActive(section) {
    if (section.id === currentSection) {
      return true
    }
    if (!section.children) {
      return false
    }
    return section.children.findIndex(isActive) > -1
  }

  let MobileMenu = (
    <div className="   ">
      <nav aria-labelledby="on-this-page-title" className="w-full">
        {tableOfContents.length > 0 && (
          <>
            <h2
              id="on-this-page-title"
              className="font-display text-sm font-medium text-slate-900"
            >
              On this page
            </h2>
            <ol role="list" className="mt-4 space-y-3 text-sm">
              {tableOfContents.map((section) => (
                <li key={section.id}>
                  <h3>
                    <Link
                      href={`#${section.id}`}
                      className={clsx(
                        isActive(section)
                          ? 'text-sky-500'
                          : 'font-normal text-slate-500 hover:text-slate-700'
                      )}
                    >
                      {section.title}
                    </Link>
                  </h3>
                  {section.children.length > 0 && (
                    <ol
                      role="list"
                      className="nndark:text-slate-400 mt-2 space-y-3 pl-5 text-slate-500"
                    >
                      {section.children.map((subSection) => (
                        <li key={subSection.id}>
                          <Link
                            href={`#${subSection.id}`}
                            className={
                              isActive(subSection)
                                ? 'text-sky-500'
                                : 'nndark:hover:text-slate-300 hover:text-slate-600'
                            }
                          >
                            {subSection.title}
                          </Link>
                        </li>
                      ))}
                    </ol>
                  )}
                </li>
              ))}
            </ol>
          </>
        )}
      </nav>
    </div>
  )

  return (
    <>
      <Header />

      <div className="max-w-8xl relative mx-auto flex justify-center border-t-2 sm:px-2 lg:px-8 xl:px-12">
        <div className="hidden lg:relative lg:block lg:flex-none">
          <div className="nndark:hidden absolute inset-y-0 right-0 w-[50vw] bg-slate-50" />
          <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-16 pl-0.5">
            <div className="nndark:block absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800" />
            <div className="nndark:block absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800" />
            <Navigation
              navigation={navigation}
              className="w-64 pr-8 xl:w-72 xl:pr-16"
            />
          </div>
        </div>
        <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 sm:pt-0 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
          <article>
            <PageHero
              parent={parent}
              image={image}
              title={title}
              description={description}
            />
            <Prose>{children}</Prose>
          </article>
          <dl className="nndark:border-slate-800 mt-12 flex border-t border-slate-200 pt-6">
            {previousPage && (
              <div>
                <dt className="nndark:text-white font-display text-sm font-medium text-slate-900">
                  Previous
                </dt>
                <dd className="mt-1">
                  <Link
                    href={previousPage.href}
                    className="nndark:text-slate-400 nndark:hover:text-slate-300 text-base font-semibold text-slate-500 hover:text-slate-600"
                  >
                    <span aria-hidden="true">&larr;</span> {previousPage.title}
                  </Link>
                </dd>
              </div>
            )}
            {nextPage && (
              <div className="ml-auto text-right">
                <dt className="nndark:text-white font-display text-sm font-medium text-slate-900">
                  Next
                </dt>
                <dd className="mt-1">
                  <Link
                    href={nextPage.href}
                    className="nndark:text-slate-400 nndark:hover:text-slate-300 text-base font-semibold text-slate-500 hover:text-slate-600"
                  >
                    {nextPage.title} <span aria-hidden="true">&rarr;</span>
                  </Link>
                </dd>
              </div>
            )}
          </dl>

          <div className="ml-10 mt-7 block border-t-2 pt-7 text-center md:hidden">
            <Navigation navigation={navigation} className="w-fill pr-8 " />
          </div>

          <div className="mt-10">
            <Footer />
          </div>
        </div>
        <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
          <nav aria-labelledby="on-this-page-title" className="w-56">
            {tableOfContents.length > 0 && (
              <>
                <h2
                  id="on-this-page-title"
                  className="nndark:text-white font-display text-sm font-medium text-slate-900"
                >
                  On this page
                </h2>
                <ol role="list" className="mt-4 space-y-3 text-sm">
                  {tableOfContents.map((section) => (
                    <li key={section.id}>
                      <h3>
                        <Link
                          href={`#${section.id}`}
                          className={clsx(
                            isActive(section)
                              ? 'text-sky-500'
                              : 'nndark:text-slate-400 nndark:hover:text-slate-300 font-normal text-slate-500 hover:text-slate-700'
                          )}
                        >
                          {section.title}
                        </Link>
                      </h3>
                      {section.children.length > 0 && (
                        <ol
                          role="list"
                          className="nndark:text-slate-400 mt-2 space-y-3 pl-5 text-slate-500"
                        >
                          {section.children.map((subSection) => (
                            <li key={subSection.id}>
                              <Link
                                href={`#${subSection.id}`}
                                className={
                                  isActive(subSection)
                                    ? 'text-sky-500'
                                    : 'nndark:hover:text-slate-300 hover:text-slate-600'
                                }
                              >
                                {subSection.title}
                              </Link>
                            </li>
                          ))}
                        </ol>
                      )}
                    </li>
                  ))}
                </ol>
              </>
            )}
          </nav>
        </div>
      </div>
    </>
  )
}
