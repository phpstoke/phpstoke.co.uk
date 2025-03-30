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
    <section id="sponsors" aria-label="Sponsors" className="pt-12 sm:pt-24">
      <Container>
        <div className="py-12 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
              <div className="mx-auto w-full max-w-xl lg:mx-0">
                <h2 className="font-display text-4xl font-medium tracking-tighter text-indigo-600 sm:text-5xl">Sponsors</h2>
                <div className="mt-4 font-display text-2xl tracking-tight text-indigo-900">
                  <p>Thank you to the sponsors who continue to make our meet-up possible.</p>
                </div>
                <div className="mt-8 flex items-center gap-x-6">
                  <a href="mailto:sponsor@phpstoke.co.uk?subject=Sponsor%20PHP%20Stoke"
                     className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sponsor Us</a>
                  <a href="mailto:sponsor@phpstoke.co.uk" className="text-sm font-semibold text-gray-900">Contact us <span
                      aria-hidden="true">&rarr;</span></a>
                </div>
              </div>
              <div
                  className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-2 lg:mx-0 lg:max-w-none lg:pl-8">
                {sponsors.map((sponsor) => (
                  <div
                      key={sponsor.name}
                      className="flex items-center justify-center rounded-2xl hover:bg-gray-50"
                  >
                    <a href={sponsor.link}
                       key={sponsor.name}
                       className="px-8 py-8">
                      <Image src={sponsor.logo} alt={sponsor.name} title={sponsor.name} unoptimized className="max-h-12 w-full object-contain object-left" width="104" height="48" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export function PastSponsors() {
  return (
      <section id="past-sponsors" aria-label="Past Sponsors" className="py-12 sm:py-20">
        <Container>
          <div className="mx-auto lg:mx-0 text-center">
            <h2
                id="speakers-title"
                className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-indigo-900 sm:text-5xl"
            >
              Past Sponsors
            </h2>
            <p className="mt-4 font-display text-2xl tracking-tight text-indigo-900">
              Thank you to our past sponsors who made PHP Stoke possible.
            </p>
          </div>
          <div
              className={`mx-auto mt-10 grid max-w-max grid-cols-1 place-content-center gap-y-2 gap-x-32 md:gap-x-8 lg:gap-x-32 sm:grid-cols-${pastSponsors.length % 1 === 0 ? 3 : 2}`}>
            {pastSponsors.map((sponsor) => (
                <div
                    key={sponsor.name}
                    className="flex items-center justify-center rounded-2xl hover:bg-gray-50"
                >
                  <div
                      className="flex flex-col items-center grow h-full justify-center text-indigo-900 hover:text-indigo-600 px-4 py-8">
                    <Image src={sponsor.logo} alt={sponsor.name} title={sponsor.name}
                           className="grayscale hover:grayscale-0 opacity-60 transition-all ease-in-out duration-200"
                           unoptimized/>
                  </div>
                </div>
            ))}
          </div>
        </Container>
      </section>
  )
}
