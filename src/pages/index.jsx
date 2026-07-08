import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Hosts } from '@/components/Hosts'
import { Newsletter } from '@/components/Newsletter'
import { Speakers } from '@/components/Speakers'
import { SpeakingCTA } from '@/components/SpeakingCTA'
import { PastSponsors, Sponsors } from '@/components/Sponsors'
import { WhatToExpect } from '@/components/WhatToExpect'
import event from '@/event'

export async function getStaticProps() {
  return {
    props: {
      fullUrl: process.env.FULL_URL ?? null,
    },
  }
}

export default function Home({ fullUrl }) {
  const pageUrl = fullUrl ?? 'https://phpstoke.co.uk'
  const eventStartDate = `${event.date}T18:15:00+00:00`
  const eventEndDate = `${event.date}T21:15:00+00:00`

  const locationAddress = {
    '@type': 'PostalAddress',
    addressLocality: event.venue.locality,
    addressRegion: event.venue.region,
    addressCountry: event.venue.country,
  }

  const locationPlace = {
    '@type': 'Place',
    name: event.venue.name,
    address: locationAddress,
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'CommunityOrganization',
    '@id': `${pageUrl}#organization`,
    name: event.title,
    url: pageUrl,
    description: event.metaDescription,
    location: locationPlace,
    areaServed: {
      '@type': 'City',
      name: event.venue.locality,
    },
    sameAs: [event.meetupUrl, 'https://x.com/phpstoke'],
  }

  const nextEventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': `${pageUrl}#next-event`,
    name: `${event.title} Meetup`,
    description: event.description,
    image: `${pageUrl}/android-chrome-512x512.png`,
    startDate: eventStartDate,
    endDate: eventEndDate,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: locationPlace,
    performer: {
      '@type': 'Organization',
      name: event.title,
      url: pageUrl,
    },
    organizer: {
      '@id': `${pageUrl}#organization`,
    },
    offers: {
      '@type': 'Offer',
      url: event.meetupUrl,
      price: '0',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
      validFrom: eventStartDate,
    },
  }

  return (
    <>
      <Head>
        <title>{event.metaTitle}</title>
        <meta name="description" content={event.metaDescription} />
        <link rel="canonical" href={pageUrl} />

        <meta name="geo.placename" content={event.venue.locality} />
        <meta name="geo.region" content={event.venue.country} />

        <meta property="og:url" content={pageUrl} key="ogUrl" />
        <meta name="twitter:url" content={pageUrl} key="twitterUrl" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(nextEventSchema),
          }}
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <WhatToExpect />
        <Speakers />
        <SpeakingCTA />
        <Sponsors />
        <PastSponsors />
        <Hosts />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
