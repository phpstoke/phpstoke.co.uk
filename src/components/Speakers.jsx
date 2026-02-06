import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import event from '@/event'
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
import harryMessenger from '@/images/avatars/harry-messenger.jpeg'
import mattDavis from '@/images/avatars/matt-davis.jpg'
import ryanChandler from '@/images/avatars/ryan-chandler.jpg'
import grahamCampbell from '@/images/avatars/graham-campbell.jpg'
import robWells from '@/images/avatars/rob-wells.jpg'
import sunilKumar from '@/images/avatars/sunil-kumar.jpg'
import emmanuelOgbiyoyo from '@/images/avatars/emmanuel-ogbiyoyo.jpeg'
import stuartOtter from '@/images/avatars/stuart-otter.jpeg'
import jamiePeters from '@/images/avatars/jamie-peters.jpg'
import danNewns from '@/images/avatars/dan-newns.jpg'
import ollieReardon from '@/images/avatars/ollie-reardon.jpeg'

import { AcademicCapIcon, BoltIcon, UserIcon } from '@heroicons/react/24/solid'

const days = [
  {
    name: 'PHP Stoke #9',
    date: 'Feb 26th, 2026',
    dateTime: '2026-02-26',
    speakers: [
      {
        name: 'Ollie Reardon',
        role: 'Lead Developer @ DeterTech',
        talk: 'Teams that scale: Personal notes on how to onboard team members',
        image: ollieReardon,
        lightning: false,
        available: false,
      }, {
        name: 'Michael Connelly',
        role: 'Software Engineer at Fabric',
        talk: 'From Nouns to Verbs',
        image: michaelConnelly,
        lightning: false,
        available: false,
      }, {
        lightning: true,
        available: true,
      },
    ],
  },
  {
    name: 'PHP Stoke #8',
    date: 'Jan 16th, 2025',
    dateTime: '2025-01-16',
    speakers: [
      {
        name: 'David Hill',
        role: 'Head of Design at Laravel',
        talk: 'Designing Laravel',
        twitterUrl: 'iamdavidhill',
        lightning: false,
        available: false,
      }, {
        name: 'Dan Newns',
        role: 'Co-Founder at Jump24',
        talk: 'Coding standards as easy as E.C.S',
        image: danNewns,
        twitterUrl: 'danielnewns',
        linkedInUrl: 'https://www.linkedin.com/in/daniel-newns/',
        lightning: true,
        available: false,
      }, {
        name: 'David Hill, James Brooks, Joe Dixon and Ryan Chandler',
        twitterUrl: 'laravelphp',
        role: 'Laravel UK Team',
        talk: 'Laravel Team Q&A',
        lightning: false,
        available: false,
      },
    ],
  },
  {
    name: 'PHP Stoke #7',
    date: 'Oct 17th, 2024',
    dateTime: '2024-10-17',
    speakers: [
      {
        name: 'Jamie Peters',
        role: 'Full Stack Developer at Jump24',
        talk: 'Benefits of and tips for writing cleaner code',
        image: jamiePeters,
        twitterUrl: 'jpeters8889',
        lightning: false,
        available: false,
      }, {
        name: 'Dan Johnson',
        role: 'Head of Engineering at Trybe',
        talk: 'Encoding Explained',
        image: null,
        twitterUrl: 'danjohnsonxyz',
        lightning: false,
        available: false,
      }, {
        name: 'Stuart Otter',
        role: 'Head of Technical at Aware Digital',
        talk: 'Imposter Syndrome: How to keep your head on',
        image: stuartOtter,
        linkedInUrl: 'https://www.linkedin.com/in/stuartotter/',
        lightning: true,
        available: false,
      },
    ],
  },
  {
    name: 'PHP Stoke #6',
    date: 'Jul 18th, 2024',
    dateTime: '2024-07-18',
    speakers: [
      {
        name: 'Sunil Kumar',
        // role: '—',
        talk: 'Are you speaking my language?',
        image: sunilKumar,
        linkedInUrl: 'https://www.linkedin.com/in/sk-jaiswal/',
        lightning: false,
        available: false,
      }, {
        name: 'Emmanuel Ogbiyoyo',
        // role: '—',
        talk: 'The Grand Monolith: Insights into Modularity Principles and Practices',
        image: emmanuelOgbiyoyo,
        webUrl: 'https://app.expitra.com/?ref=phpstoke',
        lightning: false,
        available: false,
      }, {
        name: 'Rob Wells',
        // role: '—',
        talk: 'Creative coding on the web',
        image: robWells,
        twitterUrl: 'fragglebob',
        lightning: true,
        available: false,
      }, {
        available: true,
        lightning: true,
      }
    ],
  },
  {
    name: 'PHP Stoke #5',
    date: 'Apr 11th, 2024',
    dateTime: '2024-04-11',
    speakers: [
      {
        name: 'Matt Davis',
        role: 'CTO at Mumsnet',
        talk: 'Disagree Better',
        image: mattDavis,
        twitterUrl: 'mdavis1982',
        webUrl: 'https://www.mattdavis.co.uk/',
        lightning: false,
        available: false,
      }, {
        name: 'Ryan Chandler',
        role: 'Senior Software Developer',
        talk: 'Running PHP at lightspeed',
        image: ryanChandler,
        twitterUrl: 'ryangjchandler',
        webUrl: 'https://ryangjchandler.co.uk/',
        lightning: false,
        available: false,
      }, {
        name: 'Graham Campbell',
        role: 'Principal Software Architect',
        talk: 'Scaling MySQL in Laravel',
        image: grahamCampbell,
        twitterUrl: 'grahamjcampbell',
        lightning: true,
        available: false,
      }
    ]
  },
  {
    name: 'PHP Stoke #4',
    date: 'Jan 18th, 2024',
    dateTime: '2024-01-18',
    speakers: [
      {
        name: 'Michael Connelly',
        role: 'Software Engineer at Fabric',
        talk: 'Up Up Down Down Left Right Left Right Composer Require Livewire',
        image: michaelConnelly,
        twitterUrl: 'mike_c_dev',
        webUrl: 'https://madebyfabric.uk',
        lightning: false,
        available: false,
      }, {
        name: 'Harry Messenger',
        role: 'Senior Full Stack Developer at Wealth At Work',
        talk: 'The Real Time Web using Laravel',
        image: harryMessenger,
        twitterUrl: 'harrysmessenger',
        webUrl: 'https://hsmess.dev',
        lightning: false,
        available: false,
      }, {
        name: 'Greg Mayes',
        role: 'Software Engineer',
        talk: 'Low Effort PHP Micro-optimisations',
        image: gregMayes,
        twitterUrl: 'gregmayesdev',
        webUrl: 'https://gregmayes.dev',
        lightning: true,
        available: false,
      },
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
        webUrl: 'https://ryan.gd',
        lightning: false,
        available: false,
      }, {
        name: 'Ksenia Zvereva',
        role: 'Developer Community Lead',
        talk: 'Power of Community: How to build your personal brand as a developer',
        image: kseniaZverevaImage,
        twitterUrl: 'frainpan',
        webUrl: 'https://mollie.com',
        lightning: false,
        available: false,
      }, {
        name: 'Rajkumar Sakthivel',
        role: 'Developer @ Dragoonis Technologies',
        talk: 'Minimalism in DevOps',
        image: rajSakthivelImage,
        twitterUrl: 'rajkumarsakthi',
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
        twitterUrl: 'SecondeJ',
        lightning: false,
        available: false,
      }, {
        name: 'Andy Jones',
        role: 'Director @ Aware Digital',
        talk: 'How Hyvä made Magento development quicker',
        image: andyJonesImage,
        twitterUrl: 'awaredigital_uk',
        webUrl: 'https://awaredigital.co.uk',
        lightning: false,
        available: false,
      }, {
        name: 'Ash Allen',
        role: 'Freelance Laravel Web Developer',
        talk: 'Using Database Transactions to Write Safer Laravel Code',
        image: ashleyAllenImage,
        twitterUrl: 'AshAllenDesign',
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
        twitterUrl: 'opdavies',
        webUrl: 'https://www.oliverdavies.uk',
        available: false,
      }, {
        name: 'Luke Browne',
        role: 'Lead Software Developer @ Wealth Wizards',
        talk: 'Clean, concise, collaborative code',
        image: lukeBrowneImage,
        lightning: false,
        twitterUrl: 'lukebrwne',
        webUrl: 'https://www.luke-browne.com',
        available: false,
      }, {
        name: 'Christopher Miller',
        role: 'Developer @ Jump24',
        talk: 'Ship every day, fail every day',
        image: christopherMillerImage,
        lightning: false,
        twitterUrl: 'ccmiller2018',
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
                    'border-primary-300 dark:border-primary-700',
                    'border-primary-400 dark:border-primary-600',
                    'border-primary-300 dark:border-primary-700',
                  ][speakerIndex % 3]
              )}
          />
          <div
              className="absolute inset-0 bg-primary-50 dark:bg-surface-800 grayscale hover:grayscale-0 transition duration-300"
              style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
          >
            <UserIcon className="text-primary-400 dark:text-primary-600 transition duration-300 group-hover:scale-90" />
          </div>
        </div>
        <div className="space-y-2 space-x-4 xl:flex xl:items-center xl:justify-between mt-8">
          <div className="space-y-1 text-lg font-medium leading-6">
            <div>
              <h3 className="text-gray-900 dark:text-white">
                {
                    speaker.lightning ? (
                      <div>
                        <BoltIcon className="text-accent-400 w-6 h-6 inline-block mr-2 -mt-1" />
                        15 minute lightning talk
                      </div>
                    ) : (
                      <span>30 minute talk</span>
                    )
                }
              </h3>
              <p className="mt-1 text-base tracking-tight text-gray-500 dark:text-gray-400">
                Interested? <a className="underline hover:text-primary-600 dark:hover:text-primary-400" href="https://forms.gle/ZjZHE4qzmJR7FnZE8">Submit your { speaker.lightning && 'lightning' } talk</a>.
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
                    'border-primary-300 dark:border-primary-700',
                    'border-primary-400 dark:border-primary-600',
                    'border-primary-300 dark:border-primary-700',
                  ][speakerIndex % 3]
              )}
          />
          <div
              className="absolute inset-0 bg-primary-50 dark:bg-surface-800 grayscale hover:grayscale-0 transition duration-300"
              style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
          >
            <Image
                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                src={speaker.image || `https://unavatar.io/twitter/${encodeURI(speaker.twitterUrl)}`}
                width={1024}
                height={1024}
                alt=""
                priority
                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
        </div>
        <div className="space-y-2 space-x-4 flex xl:items-center xl:justify-between mt-8 flex-row">
          <div className="space-y-1 text-lg font-medium leading-6 grow">
            <h2 className="text-gray-900 dark:text-white">{speaker.name}</h2>
            {
              speaker.talk ? (
                <h3 className="text-primary-600 dark:text-primary-400 tracking-tight text-base">{speaker.talk}</h3>
              ) : null
            }
            {
              speaker.role ? (
                <p className="mt-1 text-sm tracking-tight text-gray-500 dark:text-gray-400 break-all">{speaker.role}</p>
              ) : null
            }
            <div className="text-gray-900 dark:text-white text-sm">
              {
                speaker.lightning ? (
                  <div>
                    <BoltIcon className="text-accent-400 w-4 h-4 inline-block mr-2 -mt-1" />
                    15 Minutes
                  </div>
                ) : (
                  <div>
                    <AcademicCapIcon className="text-primary-600 dark:text-primary-400 w-4 h-4 inline-block mr-2 -mt-1" />
                    30 Minutes
                  </div>
                )
              }
            </div>
          </div>
          <ul role="list" className="flex justify-center gap-x-5 items-center">
            {
              speaker.twitterUrl &&
              <li>
                <a href={`https://x.com/${speaker.twitterUrl}`} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                  <span className="sr-only">X (formerly Twitter)</span>
                  <svg className="size-5" aria-hidden="true" fill="currentColor" viewBox="0 0 300 300">
                    <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"/>
                  </svg>
                </a>
              </li>
            }
            {
              speaker.webUrl &&
              <li>
                <a href={speaker.webUrl} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                  <span className="sr-only">Website</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </a>
              </li>
            }
            {
                speaker.linkedInUrl &&
                <li>
                  <a href={speaker.linkedInUrl} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path
                          d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"/>
                    </svg>
                  </a>
                </li>
            }
          </ul>
        </div>
      </div>
)
}

// Calculate stats from the days data
const totalEvents = days.length
const totalTalks = days.reduce((count, day) => {
  return count + day.speakers.filter(speaker => !speaker.available).length
}, 0)

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
            className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Speakers
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {totalTalks} talks across {totalEvents} events. Fancy speaking?{' '}
            <a href="https://forms.gle/ZjZHE4qzmJR7FnZE8" target="_blank" className="font-semibold text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 highlight" rel="noreferrer">Submit your talk</a>.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-primary-200 dark:bg-primary-800 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-dense justify-start gap-x-8 md:gap-x-0 gap-y-10 whitespace-nowrap grid-cols-2 px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) =>
                days.map((day, dayIndex) => (
                  <div key={day.dateTime} className="relative lg:pl-8">
                    <DiamondIcon
                      className={clsx(
                        'absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
                        dayIndex === selectedIndex
                          ? 'fill-primary-600 stroke-primary-600 dark:fill-primary-400 dark:stroke-primary-400'
                          : 'fill-transparent stroke-gray-400 dark:stroke-gray-600'
                      )}
                    />
                    <div className="relative">
                      <div
                        className={clsx(
                          'font-mono text-sm',
                          dayIndex === selectedIndex
                            ? 'text-primary-600 dark:text-primary-400'
                            : 'text-gray-500 dark:text-gray-400'
                        )}
                      >
                        <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                          <span className="absolute inset-0" />
                          {day.name}
                        </Tab>
                      </div>
                      <time
                        dateTime={day.dateTime}
                        className="mt-1.5 block text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
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
