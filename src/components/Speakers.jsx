import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import oliverDaviesImage from '@/images/avatars/oliver-davies.jpg'
import lukeBrowneImage from '@/images/avatars/luke-browne.jpg'
import christopherMillerImage from '@/images/avatars/christopher-miller.jpg'
import andyJonesImage from '@/images/avatars/andy-jones.jpg'
import jamesSecondeImage from '@/images/avatars/james-seconde.jpg'
import ashleyAllenImage from '@/images/avatars/ashley-allen.jpeg'
import danWattImage from '@/images/avatars/dan-watt.jpeg'
import ryanLeeImage from '@/images/avatars/ryan-lee.jpg'
import kseniaZverevaImage from '@/images/avatars/ksenia-zvereva.jpeg'
import rajSakthivelImage from '@/images/avatars/raj-sakthivel.jpeg'
import gregMayes from '@/images/avatars/greg-mayes.jpg'
import michaelConnelly from '@/images/avatars/michael-connelly.jpg'

import { AcademicCapIcon, BoltIcon, UserIcon } from '@heroicons/react/24/solid'

const days = [
  {
    name: 'PHP Stoke #4',
    date: 'Jan 18th, 2024',
    dateTime: '2024-01-18',
    speakers: [
      {
        name: 'Michael Connelly',
        role: 'Developer at Fabric',
        talk: 'Up Up Down Down Left Right Left Right Composer Require Livewire',
        image: michaelConnelly,
        twitterUrl: 'https://twitter.com/mike_c_dev',
        webUrl: 'http://madebyfabric.uk',
        lightning: false,
        available: false,
      }, {
        lightning: false, 
        available: true, 
      }, {
        name: 'Greg Mayes',
        role: 'Software Engineer',
        talk: 'Low Effort PHP Micro-optimisations',
        image: gregMayes,
        twitterUrl: 'https://twitter.com/gregmayesdev',
        webUrl: 'http://gregmayes.dev',
        lightning: true,
        available: false,
      }, {
        lightning: true, 
        available: true, 
      }
    ]
  },
  {
    name: 'PHP Stoke #3',
    date: 'Aug 3rd, 2023',
    dateTime: '2023-08-03 18:30',
    speakers: [
      {
        name: 'Ryan Lee',
        role: null,
        talk: 'A bref introduction to serverless PHP',
        image: ryanLeeImage,
        webUrl: 'http://ryan.gd',
        lightning: false,
        available: false,
      }, {
        name: 'Ksenia Zvereva',
        role: 'Developer Community Lead',
        talk: 'Power of Community: How to build your personal brand as a developer',
        image: kseniaZverevaImage,
        twitterUrl: 'https://twitter.com/frainpan',
        webUrl: 'http://mollie.com',
        lightning: false,
        available: false,
      }, {
        name: 'Rajkumar Sakthivel',
        role: 'Developer @ Dragoonis Technologies',
        talk: 'Minimalism in DevOps',
        image: rajSakthivelImage,
        twitterUrl: 'https://twitter.com/rajkumarsakthi',
        webUrl: 'https://linktr.ee/rajkumarsakthi',
        lightning: true,
        available: false,
      },
    ],
  },
  {
    name: 'PHP Stoke #2',
    date: 'Apr 27th, 2023',
    dateTime: '2023-04-27',
    speakers: [
      {
        name: 'James Seconde',
        role: 'Developer Advocate @ Vonage',
        talk: 'What is performance-driven development and why aren\'t you doing it?',
        image: jamesSecondeImage,
        twitterUrl: 'https://twitter.com/SecondeJ',
        lightning: false,
        available: false,
      }, {
        name: 'Andy Jones',
        role: 'Director @ Aware Digital',
        talk: 'How Hyvä made Magento development quicker',
        image: andyJonesImage,
        twitterUrl: 'https://twitter.com/awaredigital_uk',
        webUrl: 'https://awaredigital.co.uk',
        lightning: false,
        available: false,
      }, {
        name: 'Ash Allen',
        role: 'Freelance Laravel Web Developer',
        talk: 'Using Database Transactions to Write Safer Laravel Code',
        image: ashleyAllenImage,
        twitterUrl: 'https://twitter.com/AshAllenDesign',
        webUrl: 'https://ashallendesign.co.uk',
        lightning: true,
        available: false,
      }, {
        name: 'Daniel Watt',
        role: 'CTO @ Nutrition Integrated',
        talk: 'Visualising Data: From Excel to JavaScript',
        image: danWattImage,
        twitterUrl: null,
        webUrl: 'https://nutritionintegrated.com',
        lightning: true,
        available: false,
      },
    ],
  },
  {
    name: 'PHP Stoke #1',
    date: 'Jan 12, 2023',
    dateTime: '2023-01-12',
    speakers: [
      {
        name: 'Oliver Davies',
        role: 'Lead Developer @ Transport for Wales',
        talk: 'Things to know about PHP',
        image: oliverDaviesImage,
        lightning: false,
        twitterUrl: 'https://twitter.com/opdavies',
        webUrl: 'https://www.oliverdavies.uk',
        available: false,
      }, {
        name: 'Luke Browne',
        role: 'Lead Software Developer @ Wealth Wizards',
        talk: 'Clean, concise, collaborative code',
        image: lukeBrowneImage,
        lightning: false,
        twitterUrl: 'https://twitter.com/lukebrwne',
        webUrl: 'https://www.luke-browne.com',
        available: false,
      }, {
        name: 'Christopher Miller',
        role: 'Developer @ Jump24',
        talk: 'Ship every day, fail every day',
        image: christopherMillerImage,
        lightning: false,
        twitterUrl: 'https://twitter.com/ccmiller2018',
        available: false,
      },
    ],
  },
]

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

function Speaker({id, speaker, speakerIndex, ...props}) {
  if (speaker.available) {
    return <SpeakerAvailable id={id} speaker={speaker} speakerIndex={speakerIndex} {...props} />
  } else {
    return <SpeakerProfile id={id} speaker={speaker} speakerIndex={speakerIndex} {...props} />
  }
}

function SpeakerAvailable({ id, speaker, speakerIndex, ...props }) {
  return (
      <div>
        <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
          <div
              className={clsx(
                  'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                  [
                    'border-indigo-300',
                    'border-indigo-400',
                    'border-sky-300',
                  ][speakerIndex % 3]
              )}
          />
          <div
              className="absolute inset-0 bg-indigo-50 grayscale hover:grayscale-0 transition duration-300"
              style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
          >
            <UserIcon className="text-indigo-400 transition duration-300 group-hover:scale-90" />
          </div>
        </div>
        <div className="space-y-2 space-x-4 xl:flex xl:items-center xl:justify-between mt-8">
          <div className="space-y-1 text-lg font-medium leading-6">
            <div>
              <h3 className="text-indigo-900">
                {
                    speaker.lightning ? (
                      <div>
                        <BoltIcon className="text-yellow-400 w-6 h-6 inline-block mr-2 -mt-1" />
                        15-minute lightning talk
                      </div>
                    ) : (
                      <span>30-minute talk</span>
                    )
                }
              </h3>
              <p className="mt-1 text-base tracking-tight text-slate-500">
                Interested? <a className="underline hover:text-indigo-600" href="https://forms.gle/ZjZHE4qzmJR7FnZE8">Submit your { speaker.lightning && 'lightning' } talk</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

function SpeakerProfile({id, speaker, speakerIndex, ...props}) {
  return (
      <div>
        <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
          <div
              className={clsx(
                  'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                  [
                    'border-indigo-300',
                    'border-indigo-400',
                    'border-sky-300',
                  ][speakerIndex % 3]
              )}
          />
          <div
              className="absolute inset-0 bg-indigo-50 grayscale hover:grayscale-0 transition duration-300"
              style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
          >
            <Image
                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                src={speaker.image}
                alt=""
                priority
                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
        </div>
        <div className="space-y-2 space-x-4 flex xl:items-center xl:justify-between mt-8 flex-row">
          <div className="space-y-1 text-lg font-medium leading-6 grow">
            <h2 className="text-indigo-900">{speaker.name}</h2>
            {
              speaker.talk ? (
                <h3 className="text-indigo-700 tracking-tight text-base">{speaker.talk}</h3>
              ) : null
            }
            <p className="mt-1 text-sm tracking-tight text-slate-500 break-all">{speaker.role}</p>
            <div className="text-indigo-900 text-sm">
              {
                speaker.lightning ? (
                  <div>
                    <BoltIcon className="text-yellow-400 w-4 h-4 inline-block mr-2 -mt-1" />
                    Lightning talk
                  </div>
                ) : (
                  <div>
                    <AcademicCapIcon className="text-indigo-700 w-4 h-4 inline-block mr-2 -mt-1" />
                    30 Minute Talk
                  </div>
                )
              }
            </div>
          </div>
          <ul role="list" className="flex justify-center gap-x-5 items-center">
            {
              speaker.twitterUrl &&
              <li>
                <a href={speaker.twitterUrl} className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>
            }
            {
              speaker.webUrl &&
              <li>
                <a href={speaker.webUrl} className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Website</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </a>
              </li>
            }
          </ul>
        </div>
      </div>
  )
}

export function Speakers() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-20 lg:py-24 overflow-hidden"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-indigo-600 sm:text-5xl"
          >
            Speakers
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-indigo-900">
            Thank you to all our speakers, past and present. Fancy speaking? <a href="https://forms.gle/ZjZHE4qzmJR7FnZE8" target="_blank" className="underline hover:text-indigo-600 highlight" rel="noreferrer">Submit your talk</a>.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) =>
                days.map((day, dayIndex) => (
                  <div key={day.dateTime} className="relative lg:pl-8">
                    <DiamondIcon
                      className={clsx(
                        'absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
                        dayIndex === selectedIndex
                          ? 'fill-indigo-600 stroke-indigo-600'
                          : 'fill-transparent stroke-slate-400'
                      )}
                    />
                    <div className="relative">
                      <div
                        className={clsx(
                          'font-mono text-sm',
                          dayIndex === selectedIndex
                            ? 'text-indigo-600'
                            : 'text-slate-500'
                        )}
                      >
                        <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                          <span className="absolute inset-0" />
                          {day.name}
                        </Tab>
                      </div>
                      <time
                        dateTime={day.dateTime}
                        className="mt-1.5 block text-2xl font-semibold tracking-tight text-indigo-900"
                      >
                        {day.date}
                      </time>
                    </div>
                  </div>
                ))
              }
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {days.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-2 [&:not(:focus-visible)]:focus:outline-none"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <Speaker key={speakerIndex} speakerIndex={speakerIndex} speaker={speaker} id={id} />
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}
