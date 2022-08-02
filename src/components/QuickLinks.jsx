import Link from 'next/link'

import { Icon } from '@/components/Icon'
import SimpleImage from '@/components/SimpleImage'

export function QuickLinks({ children }) {
  return (
    <div className="not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {children}
    </div>
  )
}

export function QuickLink({ title, description, href, icon, image }) {
  return (
    <div className="group relative rounded-xl border border-slate-200">
      <div className="ndark:[--quick-links-hover-bg:theme(colors.slate.800)] absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100" />
      <div className="relative overflow-hidden rounded-xl p-6">
        {icon && <Icon icon={icon} className="h-8 w-8" />}
        {image && (
          <SimpleImage
            className="w-full rounded-xl"
            width={100}
            src={image}
            alt={`${image} Image`}
          ></SimpleImage>
        )}
        <h2 className="mt-4 font-display text-base text-slate-900">
          <Link href={href}>
            <span className="absolute -inset-px rounded-xl" />
            {title}
          </Link>
        </h2>
        <p className="mt-1 text-sm text-slate-700 ">{description}</p>
      </div>
    </div>
  )
}
