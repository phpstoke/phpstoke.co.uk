import { Container } from '@/components/Container'
import { Icon } from '@/components/Icon'
import event from '@/event'

export function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 py-12 dark:border-surface-800 sm:mt-24 sm:py-16">
      <Container className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <div className="flex items-center gap-3">
            <Icon className="h-8 w-auto" />
            <span className="font-display text-lg font-bold text-gray-900 dark:text-white">PHP Stoke</span>
          </div>
          <div className="hidden h-6 w-px bg-gray-200 dark:bg-surface-800 md:block" />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:gap-6 md:text-right">
          <a
            href={`https://x.com/${event.organiser.twitter}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 300 300">
              <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"/>
            </svg>
            @{event.organiser.twitter}
          </a>
          <a
            href={event.organiser.website}
            className="text-sm font-medium text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
          >
            {event.organiser.name}
          </a>
        </div>
      </Container>
    </footer>
  )
}
