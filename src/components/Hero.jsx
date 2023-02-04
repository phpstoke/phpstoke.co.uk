import Image from 'next/image'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

import image2 from '@/images/events/phpstoke2.jpg'
import image3 from '@/images/events/phpstoke3.jpg'
import image4 from '@/images/events/phpstoke4.jpg'
import image5 from '@/images/events/phpstoke5.jpg'

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

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
              The Stoke-on-Trent PHP meetup, hosted at <a href="https://smithfield-works.com/?ref=phpstoke" className="underline hover:text-indigo-600">The Smithfield Works in Hanley</a>.
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
              ['Venue', 'The Smithfield Works'],
              ['What3Words', '///melon.prices.soil'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-indigo-600">{name}</dt>
                <dd className="mt-0.5 text-2xl sm:text-xl font-semibold tracking-tighter text-indigo-900 break-words">
                  {value}
                </dd>
              </div>
            ))}
            <div>
              <dt className="font-mono text-sm text-indigo-600">Twitter</dt>
              <dd className="mt-0.5 text-2xl sm:text-xl font-semibold tracking-tighter text-indigo-900">
                <a href="https://twitter.com/phpstoke" className="underline hover:text-indigo-600" target="_blank" rel="noreferrer">@phpstoke</a>
              </dd>
            </div>
          </dl>
        </div>
      </Container>
      <Photos />
    </div>
  )
}
