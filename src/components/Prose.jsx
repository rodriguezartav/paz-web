import clsx from 'clsx'

export function Prose({ as: Component = 'div', className, ...props }) {
  return (
    <Component
      className={clsx(
        className,
        'ndark:prose-invert ndark:text-slate-400 prose prose-slate max-w-none',
        // headings
        'prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]',
        // lead
        'ndark:prose-lead:text-slate-400 prose-lead:text-slate-500',
        // links
        'ndark:prose-a:text-sky-400 prose-a:font-semibold',
        // link underline
        'ndark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.sky.800))] ndark:hover:prose-a:[--tw-prose-underline-size:6px] ndark:[--tw-prose-background:theme(colors.slate.900)] prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.sky.300))] hover:prose-a:[--tw-prose-underline-size:6px]',
        // pre
        'ndark:prose-pre:bg-slate-800/60 ndark:prose-pre:shadow-none ndark:prose-pre:ring-1 ndark:prose-pre:ring-slate-300/10 prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg',
        // hr
        'ndark:prose-hr:border-slate-800'
      )}
      {...props}
    />
  )
}
