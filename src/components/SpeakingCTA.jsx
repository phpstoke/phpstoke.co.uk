import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import event from '@/event'

export function SpeakingCTA() {
  return (
    <section
      id="speak"
      aria-labelledby="speak-title"
      className="relative overflow-hidden py-20 sm:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-surface-900 dark:via-surface-900 dark:to-primary-950" />
      <div className="pattern-dots absolute inset-0" />

      <Container className="relative">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2
              id="speak-title"
              className="font-display text-3xl font-bold tracking-tight sm:text-4xl"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                Thinking about speaking?
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              PHP Stoke is the perfect place to give your first talk. A supportive audience, 
              low pressure, and a community that genuinely wants to see you succeed.
            </p>
          </div>

          {/* Tips grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {event.speakingTips.map((tip, index) => (
              <div
                key={tip.title}
                className="group relative rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-gray-900/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-surface-800/80 dark:ring-white/10 dark:hover:ring-primary-500/20"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 font-display text-sm font-bold text-white shadow-sm transition-transform duration-300 group-hover:scale-110 dark:from-primary-400 dark:to-primary-500">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-gray-900 dark:text-white">
                      {tip.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={event.meetupUrl}>
              Submit a talk idea
            </Button>
            <a
              href={event.organiser.speakingGuide}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Read the full guide
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            Not sure what to talk about? Technical deep-dives, career stories, soft skills, 
            lessons learned—we&apos;d love to hear it all.
          </p>
        </div>
      </Container>
    </section>
  )
}
