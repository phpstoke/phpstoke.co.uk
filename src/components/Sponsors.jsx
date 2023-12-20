import Image from 'next/image'

import { Container } from '@/components/Container'
import logoDotdigital from '@/images/logos/dotdigital.svg'
import logoJetBrains from '@/images/logos/jetbrains.svg'
import logoSmithfieldWorks from '@/images/logos/smithfield-works.svg'
import logoSendStack from '@/images/logos/sendstack.svg'
import logoKlarna from '@/images/logos/klarna.svg'
import logoPalletOnline from '@/images/logos/palletonline.svg'
import logoMollie from '@/images/logos/mollie.svg'

const sponsors = [
  { name: 'Pallet Online', logo: logoPalletOnline, link: 'https://palletonline.co.uk/?ref=phpstoke' },
  { name: 'The Smithfield Works', logo: logoSmithfieldWorks, link: 'https://smithfield-works.com/?ref=phpstoke' },
  { name: 'SendStack', logo: logoSendStack, link: 'https://getsendstack.com/?ref=phpstoke' },
]

const pastSponsors = [
  { name: 'Mollie', logo: logoMollie, link: 'https://mollie.com/?ref=phpstoke' },
  { name: 'Dotdigital', logo: logoDotdigital, link: 'https://dotdigital.com/?ref=phpstoke' },
  { name: 'JetBrains', logo: logoJetBrains, link: 'https://jetbrains.com/?ref=phpstoke' },
  { name: 'Klarna', logo: logoKlarna, link: 'https://klarna.com/uk/?ref=phpstoke' },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="pt-12 sm:pt-24">
      <Container>
        <div className="mx-auto lg:mx-0 text-center">
          <h2
            id="speakers-title"
            className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-indigo-900 sm:text-5xl"
          >
            Sponsors
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-indigo-900">
            Thank you to the sponsors who make our meet-up possible.
          </p>
        </div>
        <div className={`mx-auto mt-10 grid max-w-max grid-cols-1 place-content-center gap-y-2 gap-x-32 md:gap-x-8 lg:gap-x-32 sm:grid-cols-${sponsors.length}`}>
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center rounded-2xl hover:bg-gray-50"
            >
              <a href={sponsor.link} className="flex flex-col items-center grow h-full justify-center text-indigo-900 hover:text-indigo-600 px-8 py-16">
                <Image src={sponsor.logo} alt={sponsor.name} title={sponsor.name} unoptimized />
              </a>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center rounded-2xl">
          <a href="mailto:james@alt-three.com?subject=Sponsor PHP Stoke" className="flex flex-col items-center grow h-full justify-center text-indigo-900 hover:text-indigo-600 px-8 py-16">
            <h2 className="text-2xl font-medium font-display tracking-tighter">Interested in sponsoring?</h2>
            <p className="font-display">Contact us about <span className="highlight">sponsoring</span> our next event.</p>
          </a>
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
        <div className={`mx-auto mt-10 grid max-w-max grid-cols-1 place-content-center gap-y-2 gap-x-32 md:gap-x-8 lg:gap-x-32 sm:grid-cols-${pastSponsors.length % 2 === 0 ? 2 : 3}`}>
          {pastSponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center rounded-2xl hover:bg-gray-50"
            >
              <div className="flex flex-col items-center grow h-full justify-center text-indigo-900 hover:text-indigo-600 px-4 py-8">
                <Image src={sponsor.logo} alt={sponsor.name} title={sponsor.name} className="grayscale hover:grayscale-0 opacity-60 transition-all ease-in-out duration-200" unoptimized />
              </div>
            </div>
          ))}

          <div className="flex items-center justify-center rounded-2xl hover:bg-gray-50">
            <a href="mailto:james@alt-three.com?subject=Sponsor PHP Stoke" className="flex flex-col items-center grow h-full justify-center text-indigo-900 hover:text-indigo-600 px-8 py-16">
              <h2 className="text-2xl font-medium font-display tracking-tighter">Interested in sponsoring?</h2>
              <p className="font-display">Contact us about <span className="highlight">sponsoring</span> our next event.</p>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
