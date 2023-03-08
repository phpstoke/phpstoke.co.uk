import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Hosts } from '@/components/Hosts'
import { Newsletter } from '@/components/Newsletter'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'

export default function Home() {
  return (
    <>
      <Head>
        <title>PHP Stoke - The Stoke-on-Trent PHP meetup.</title>
        <meta
          name="description"
          content="PHP Stoke is a free meetup in Stoke-on-Trent. Meet local developers, learn about PHP and enjoy some food and drink."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Speakers />
        <Hosts />
        <Sponsors />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
