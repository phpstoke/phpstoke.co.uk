import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
        {/*<Image
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />*/}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-indigo-600 sm:text-7xl">
            PHP Stoke
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-indigo-900">
            <p>
              The Stoke-on-Trent PHP meetup, hosted at <a href="https://smithfield-works.com/?ref=phpstoke" className="underline hover:text-indigo-600">Gener8 Smithfield Works in Hanley</a>.
            </p>
            <p>
              PHP Stoke is a <strong className="highlight">free</strong> meetup in Stoke-on-Trent. Meet local developers, learn about PHP and enjoy some food and drink 🍕🍻🥤.
            </p>
          </div>
          <Button href="https://php-stoke.eventbrite.com/?ref=phpstoke" className="mt-10 w-full sm:hidden">
            Get your FREE ticket
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-8 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Talks', '3'],
              ['Attendees', '40+'],
              ['Venue', 'Genr8 Smithfield Works'],
              ['Location', 'Hanley, ST1 4UE'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-indigo-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tighter text-indigo-900">
                  {value}
                </dd>
              </div>
            ))}
            <div>
              <dt className="font-mono text-sm text-indigo-600">Twitter</dt>
              <dd className="mt-0.5 text-2xl font-semibold tracking-tighter text-indigo-900">
                <a href="https://twitter.com/phpstoke" className="underline hover:text-indigo-600" target="_blank" rel="noreferrer">@phpstoke</a>
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </div>
  )
}
