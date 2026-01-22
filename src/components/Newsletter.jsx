import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

function ArrowRightIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Newsletter() {
  return (
    <section id="newsletter" aria-label="Newsletter" className="py-12 sm:py-20">
      <Container>
        <div className="relative -mx-4 overflow-hidden rounded-none bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-4xl md:px-16 xl:px-24 xl:py-36 dark:from-surface-800 dark:via-surface-800 dark:to-primary-950">
          {/* Subtle pattern overlay */}
          <div className="pattern-dots absolute inset-0 opacity-50" />
          
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                {"Don't miss the next one"}
              </p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                {"Event announcements and speaker reveals. No spam, unsubscribe anytime."}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                Sign up to our newsletter <span aria-hidden="true">👇</span>
              </h3>
              <form
                data-sendstack-form
                action="https://getsendstack.com/forms/bf582096-4686-4024-a1a3-4b0bce796fa5/subscribers"
                method="post"
              >
                <span data-element="success" style={{ display: 'none' }} className="text-primary-600 dark:text-primary-400">
                  Success! Please verify your email address to confirm your subscription.
                </span>

                <span data-element="already-subscribed" style={{ display: 'none' }} className="text-primary-600 dark:text-primary-400">
                  {"You're already subscribed to the PHP Stoke newsletter."}
                </span>

                <ul data-element="errors" className="text-red-500 dark:text-red-400" style={{ display: 'none' }}></ul>

                <div className="mt-5 flex rounded-2xl bg-white py-2 pr-2 shadow-warm ring-1 ring-gray-900/5 focus-within:ring-2 focus-within:ring-primary-600 dark:bg-surface-900 dark:ring-white/10 dark:focus-within:ring-primary-400">
                  <input
                    type="email"
                    placeholder="Email address"
                    aria-label="Email address"
                    className="-my-2 flex-auto bg-transparent pl-5 pr-2.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none dark:text-white dark:placeholder:text-gray-500"
                    name="email"
                  />
                  <Button type="submit">
                    <span className="sr-only sm:not-sr-only">Sign up</span>
                    <span className="sm:hidden">
                      <ArrowRightIcon className="h-6 w-6" />
                    </span>
                  </Button>
                </div>

                <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                  Powered by{' '}
                  <a href="https://getsendstack.com/?ref=phpstoke" className="font-medium text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
                    SendStack
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
