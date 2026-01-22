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
import { previewlinks } from '@/lib/previewlinks'
import event from '@/event'

export async function getServerSideProps(context) {
  const preview = await previewlinks.signedImageUrl({
    siteId: 764,
    templateId: 1013,
    fields: {
      'previewlinks:overline': event.tagline,
      'previewlinks:title': event.title,
      'previewlinks:subtitle': event.description,
      'previewlinks:repository': event.event,
      'previewlinks:image': 'https://phpstoke.co.uk/android-chrome-512x512.png',
    },
  })

  return {
    props: {
      preview,
      fullUrl: process.env.FULL_URL,
    },
  }
}

export default function Home({ fullUrl }) {
  return (
    <>
      <Head>
        <title>{event.metaTitle}</title>
        <meta name="description" content={event.metaDescription} />

        <meta property="og:url" content={fullUrl} key="ogUrl" />
        <meta name="twitter:url" content={fullUrl} key="twitterUrl" />
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
