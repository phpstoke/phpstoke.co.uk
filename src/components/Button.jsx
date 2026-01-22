import Link from 'next/link'
import clsx from 'clsx'

export function Button({ href, variant = 'primary', className, ...props }) {
  const baseStyles = 'inline-flex justify-center items-center rounded-2xl px-5 py-3 text-base font-semibold whitespace-nowrap transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
  
  const variants = {
    primary: 'bg-primary-600 text-white shadow-warm hover:bg-primary-500 hover:shadow-warm-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-warm focus-visible:ring-primary-500 dark:bg-primary-500 dark:hover:bg-primary-400 dark:focus-visible:ring-offset-surface-900',
    secondary: 'bg-white text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:bg-gray-50 hover:ring-gray-900/20 focus-visible:ring-primary-500 dark:bg-surface-800 dark:text-white dark:ring-white/10 dark:hover:bg-surface-700 dark:hover:ring-white/20 dark:focus-visible:ring-offset-surface-900',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus-visible:ring-primary-500 dark:text-gray-400 dark:hover:text-white dark:hover:bg-surface-800 dark:focus-visible:ring-offset-surface-900',
  }

  className = clsx(baseStyles, variants[variant], className)

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
