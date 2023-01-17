import Image from 'next/image'

import { Container } from '@/components/Container'
import logoDotdigital from '@/images/logos/dotdigital.svg'
import logoJetBrains from '@/images/logos/jetbrains.svg'

const sponsors = [
  { name: 'Dotdigital', logo: logoDotdigital, link: 'https://dotdigital.com/?ref=phpstoke' },
  { name: 'JetBrains', logo: logoJetBrains, link: 'https://jetbrains.com/?ref=phpstoke' },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-12 sm:py-20">
      <Container>
        <div className="mx-auto lg:mx-0 text-center">
          <h2
            id="speakers-title"
            className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-indigo-900 sm:text-5xl"
          >
            Sponsors
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-indigo-900">
            Thank you to the sponsors who make our meetup possible.
          </p>
        </div>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-y-2 gap-x-32 sm:grid-cols-3 md:gap-x-8 lg:gap-x-32">
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

          <div className="flex items-center justify-center rounded-2xl hover:bg-gray-50">
            <a href="mailto:james@alt-three.com?subject=Sponsor PHP Stoke" className="flex flex-col items-center grow h-full justify-center text-indigo-900 hover:text-indigo-600 px-8 py-16">
              <h2 className="text-2xl font-medium font-display tracking-tighter">Sponsor PHP Stoke</h2>
              <p className="font-display tracking-tight">Contact us about sponsoring our next event.</p>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
