import { Container } from '@/components/Container'
import Image from 'next/image'

import { GlobeAltIcon } from '@/components/GlobeAltIcon'

import jamesImage from '@/images/avatars/james-brooks.jpg'

const people = [
  {
    name: 'James Brooks',
    image: jamesImage,
    twitterUrl: 'https://x.com/jbrooksuk',
    website: 'https://pinkary.com/@jbrooksuk?ref=phpstoke',
    role: 'Engineering Team Lead at Laravel'
  },
]

export function Hosts() {
  return (
    <section
      id="hosts"
      aria-labelledby="hosts-title"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto lg:mx-0">
          <h2
            id="hosts-title"
            className="font-display text-4xl font-medium tracking-tighter text-indigo-600 sm:text-5xl"
          >
            Organised by
          </h2>

          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <p className="mt-4 font-display text-2xl tracking-tight text-indigo-900">
                PHP Stoke is organised by <a className="highlight underline" href="https://pinkary.com/@jbrooksuk/?ref=phpstoke">James Brooks</a>.
              </p>
            </div>
            <ul role="list" className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0  lg:gap-8">
              {people.map((person) => (
                <li key={person.name} className="rounded-xl md:rounded-5xl bg-indigo-50 py-10 px-6 text-center xl:px-10 xl:text-left col-start-1 col-span-3 lg:col-start-2 lg:col-span-1">
                  <div className="space-y-6 xl:space-y-10">
                    <Image className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56" src={person.image} alt="" />
                    <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-indigo-900">{person.name}</h3>
                        <p className="text-indigo-700">{person.role}</p>
                      </div>

                      <ul role="list" className="flex justify-center space-x-5">
                        {
                          person.twitterUrl &&
                          <li>
                            <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-300">
                              <span className="sr-only">Twitter</span>
                              <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                            </a>
                          </li>
                        }
                        {
                          person.website &&
                          <li>
                            <a href={person.website} className="text-gray-400 hover:text-gray-300">
                              <span className="sr-only">Website</span>
                              <GlobeAltIcon className="h-5 w-5" />
                            </a>
                          </li>
                        }
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
