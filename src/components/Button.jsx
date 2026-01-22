import Link from 'next/link'
import clsx from 'clsx'

export function Button({ href, variant = 'primary', className, ...props }) {
  const baseStyles = 'group relative inline-flex justify-center items-center rounded-2xl px-5 py-3 text-base font-semibold whitespace-nowrap transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 overflow-hidden'
  
  const variants = {
    primary: clsx(
      // Base styling
      'bg-gradient-to-r from-primary-600 to-primary-500 text-white',
      // Light mode shadows
      'shadow-[0_2px_8px_rgba(124,58,237,0.25),0_4px_16px_rgba(124,58,237,0.15)]',
      // Hover effects
      'hover:from-primary-500 hover:to-primary-400 hover:-translate-y-0.5',
      'hover:shadow-[0_4px_16px_rgba(124,58,237,0.35),0_8px_32px_rgba(124,58,237,0.2)]',
      // Active state
      'active:translate-y-0 active:shadow-[0_2px_8px_rgba(124,58,237,0.2)]',
      // Focus
      'focus-visible:ring-primary-500',
      // Dark mode with glow
      'dark:from-primary-500 dark:to-primary-400',
      'dark:shadow-[0_0_20px_rgba(139,92,246,0.3),0_4px_16px_rgba(0,0,0,0.3)]',
      'dark:hover:shadow-[0_0_30px_rgba(139,92,246,0.4),0_8px_32px_rgba(0,0,0,0.4)]',
      'dark:focus-visible:ring-offset-surface-900',
    ),
    secondary: clsx(
      'bg-white/80 backdrop-blur-sm text-gray-900 shadow-sm ring-1 ring-gray-900/10',
      'hover:bg-white hover:ring-gray-900/20 hover:-translate-y-0.5',
      'focus-visible:ring-primary-500',
      'dark:bg-surface-800/80 dark:text-white dark:ring-white/10',
      'dark:hover:bg-surface-700 dark:hover:ring-white/20',
      'dark:focus-visible:ring-offset-surface-900',
    ),
    ghost: clsx(
      'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80',
      'focus-visible:ring-primary-500',
      'dark:text-gray-400 dark:hover:text-white dark:hover:bg-surface-800/80',
      'dark:focus-visible:ring-offset-surface-900',
    ),
  }

  className = clsx(baseStyles, variants[variant], className)

  const content = (
    <>
      {/* Shimmer effect on hover */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative">{props.children}</span>
    </>
  )

  return href ? (
    <Link href={href} className={className} {...props}>
      {content}
    </Link>
  ) : (
    <button className={className} {...props}>
      {content}
    </button>
  )
}
