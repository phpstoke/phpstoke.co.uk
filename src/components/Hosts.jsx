import { Container } from '@/components/Container'
import Image from 'next/image'

import { GlobeAltIcon } from '@/components/GlobeAltIcon'

import jamesImage from '@/images/avatars/james-brooks.jpg'
import event from '@/event'

export function Hosts() {
  return (
    <section
      id="hosts"
      aria-labelledby="hosts-title"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-4xl">
          <h2
            id="hosts-title"
            className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Organised by
          </h2>

          {/* Manifesto section */}
          <div className="mt-8 grid gap-8 lg:grid-cols-5 lg:gap-12">
            {/* Photo */}
            <div className="lg:col-span-2">
              <div className="bento-card !p-0 overflow-hidden">
                <Image
                  className="aspect-square w-full object-cover"
                  src={jamesImage}
                  alt={event.organiser.name}
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <blockquote className="relative">
                <div className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 space-y-4">
                  {event.manifesto.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <footer className="mt-8">
                  <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-primary-200 to-transparent dark:from-primary-800" />
                    <div className="text-right">
                      <p className="font-display text-lg font-semibold text-gray-900 dark:text-white">
                        {event.organiser.name}
                      </p>
                      <p className="text-sm text-primary-600 dark:text-primary-400">
                        {event.organiser.role}
                      </p>
                    </div>
                  </div>
                </footer>
              </blockquote>

              {/* Social links */}
              <div className="mt-8 flex items-center justify-end gap-4">
                <a
                  href={`https://x.com/${event.organiser.twitter}`}
                  className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-surface-800 dark:text-gray-300 dark:hover:bg-surface-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 300 300">
                    <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"/>
                  </svg>
                  @{event.organiser.twitter}
                </a>
                <a
                  href={event.organiser.website}
                  className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-surface-800 dark:text-gray-300 dark:hover:bg-surface-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GlobeAltIcon className="h-4 w-4" />
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
