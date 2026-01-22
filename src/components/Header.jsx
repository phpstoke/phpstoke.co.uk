import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Icon } from '@/components/Icon'
import { ThemeToggle } from '@/components/ThemeToggle'

import event from '@/event'
import Link from 'next/link'

const navLinks = [
  { label: 'What to Expect', href: '#what-to-expect' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Want to Speak?', href: '#speak' },
  { label: 'Sponsors', href: '#sponsors' },
]

export function Header() {
  return (
    <header className="relative z-50 pb-8 pt-4 lg:pb-11 lg:pt-11">
      <Container>
        {/* Event info bar - mobile/tablet only */}
        <div className="-mx-4 border-b border-primary-600/10 py-4 font-mono text-xs text-primary-600 dark:border-primary-400/10 dark:text-primary-400 sm:-mx-6 sm:text-sm lg:hidden">
          <div className="flex flex-col items-center gap-1 px-4 text-center sm:flex-row sm:justify-center sm:gap-4">
            <p>
              <time dateTime={event.date}>{event.event}</time>
            </p>
            <DiamondIcon className="hidden h-1.5 w-1.5 overflow-visible fill-current stroke-current sm:block" />
            <p>{event.location}</p>
          </div>
        </div>
        
        {/* Main header row */}
        <div className="mt-6 flex items-center justify-between gap-4 lg:mt-0">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Icon className="h-12 w-auto text-primary-600 dark:text-primary-400 lg:h-12" />
          </Link>
          
          {/* Navigation links - desktop only */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group relative text-sm font-medium text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                  >
                    {link.label}
                    {/* Animated underline */}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle />
            <Button href={event.meetupUrl} className="hidden sm:inline-flex">
              Save Your Spot — Free
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
