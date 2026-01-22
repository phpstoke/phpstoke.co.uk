import Image from 'next/image'

import { Container } from '@/components/Container'
import logoDotdigital from '@/images/logos/dotdigital.svg'
import logoJetBrains from '@/images/logos/jetbrains.svg'
import logoSmithfieldWorks from '@/images/logos/smithfield-works.svg'
import logoSendStack from '@/images/logos/sendstack.svg'
import logoKlarna from '@/images/logos/klarna.svg'
import logoPalletOnline from '@/images/logos/palletonline.svg'
import logoMollie from '@/images/logos/mollie.svg'
import jumpTwentyFour from '@/images/logos/jump24.svg'
import laraDir from '@/images/logos/laradir.svg'
import logoCachet from '@/images/logos/cachet.svg'
import logoVoltageSoftware from '@/images/logos/voltagesoftware.svg'
import logoFabric from '@/images/logos/fabric.svg'

const sponsors = [
  { name: 'The Smithfield Works', logo: logoSmithfieldWorks, link: 'https://smithfield-works.com/?ref=phpstoke' },
  { name: 'Cachet', logo: logoCachet, link: 'https://cachethq.io/?ref=phpstoke' },
  { name: 'SendStack', logo: logoSendStack, link: 'https://getsendstack.com/?ref=phpstoke' },
  { name: 'Fabric', logo: logoFabric, link: 'https://madebyfabric.uk/?ref=phpstoke' },
]

const pastSponsors = [
  { name: 'Jump24', logo: jumpTwentyFour, link: 'https://jump24.co.uk/?ref=phpstoke' },
  { name: 'Voltage Software', logo: logoVoltageSoftware, link: 'https://voltagesoftware.co.uk/?ref=phpstoke' },
  { name: 'Laradir', logo: laraDir, link: 'https://laradir.com/?ref=phpstoke' },
  { name: 'Pallet Online', logo: logoPalletOnline, link: 'https://palletonline.co.uk/?ref=phpstoke' },
  { name: 'Mollie', logo: logoMollie, link: 'https://mollie.com/?ref=phpstoke' },
  { name: 'Dotdigital', logo: logoDotdigital, link: 'https://dotdigital.com/?ref=phpstoke' },
  { name: 'JetBrains', logo: logoJetBrains, link: 'https://jetbrains.com/?ref=phpstoke' },
  { name: 'Klarna', logo: logoKlarna, link: 'https://klarna.com/uk/?ref=phpstoke' },
  { name: 'SendStack', logo: logoSendStack, link: 'https://getsendstack.com/?ref=phpstoke' },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors">
      <Container>
        <div className="py-12 sm:py-24">
          <div className="mx-auto max-w-7xl">
            {/* Bento grid layout */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Left column - Text content */}
              <div className="bento-card flex flex-col justify-between lg:row-span-2 !p-8 sm:!p-10">
                <div>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    Sponsors
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    These brilliant sponsors keep the pizza flowing and the venue booked. Fancy joining them?
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="mailto:sponsor@phpstoke.co.uk?subject=Sponsor%20PHP%20Stoke"
                    className="inline-flex justify-center items-center rounded-2xl bg-primary-600 px-5 py-3 text-base font-semibold text-white shadow-warm transition-all hover:bg-primary-500 hover:shadow-warm-lg hover:-translate-y-0.5 dark:bg-primary-500 dark:hover:bg-primary-400"
                  >
                    Sponsor Us
                  </a>
                  <a
                    href="mailto:sponsor@phpstoke.co.uk"
                    className="inline-flex items-center justify-center gap-1 text-sm font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Contact us
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>

              {/* Right column - Sponsor logos in bento cards */}
              {sponsors.map((sponsor) => (
                <a
                  key={sponsor.name}
                  href={sponsor.link}
                  className="bento-card group flex items-center justify-center !p-6 sm:!p-8"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    title={sponsor.name}
                    unoptimized
                    className="max-h-10 w-auto object-contain opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105 dark:brightness-0 dark:invert dark:opacity-60 dark:group-hover:opacity-100 sm:max-h-12"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export function PastSponsors() {
  return (
    <section id="past-sponsors" aria-label="Past Sponsors" className="py-16 sm:py-24 bg-gray-50 dark:bg-surface-800/50">
      <Container>
        <div className="mx-auto text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Past Sponsors
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Thank you to our past sponsors who made PHP Stoke possible.
          </p>
        </div>
        <div className="mx-auto mt-12 flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {pastSponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.link}
              className="group flex h-12 items-center justify-center"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                title={sponsor.name}
                className="h-6 w-auto object-contain opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 dark:invert dark:opacity-50 dark:hover:opacity-100 sm:h-8"
                unoptimized
              />
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function CommunitySponsors() {
  return null
}
