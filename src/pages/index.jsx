import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Hosts } from '@/components/Hosts'
import { Newsletter } from '@/components/Newsletter'
import { Speakers } from '@/components/Speakers'
import { PastSponsors, Sponsors } from '@/components/Sponsors'

export async function getStaticProps() {
  return {
    props: {
      fullUrl: process.env.FULL_URL,
    }
  }
}

export default function Home({fullUrl}) {
  return (
    <>
      <Head>
        <title>PHP Stoke - The Stoke-on-Trent PHP meetup.</title>
        <meta
          name="description"
          content="PHP Stoke is a free meetup in Stoke-on-Trent. Meet local developers, learn about PHP and enjoy some food and drink."
        />

        <meta property="og:url" content={fullUrl} key="ogUrl" />
        <meta name="twitter:url" content={fullUrl} key="twitterUrl" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Sponsors />
        <Speakers />
        <Hosts />
        <PastSponsors />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
