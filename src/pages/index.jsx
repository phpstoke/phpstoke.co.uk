import Head from 'next/head'

import { News } from '@/components/News'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Hosts } from '@/components/Hosts'
import { Newsletter } from '@/components/Newsletter'
import { Speakers } from '@/components/Speakers'
import { PastSponsors, Sponsors } from '@/components/Sponsors'
import {previewlinks} from "@/lib/previewlinks";

export async function getServerSideProps(context) {
    const preview = await previewlinks.downloadImage({
        siteId: 764,
        templateId: 1013,
        fields: {
            'previewlinks:overline': 'The Stoke-on-Trent PHP Meet-Up',
            'previewlinks:title': 'PHP Stoke',
            'previewlinks:subtitle': 'PHP Stoke is a free meet-up in Stoke-on-Trent. Meet local developers, learn about PHP and enjoy some food and drink 🍕🍻🥤.',
            'previewlinks:repository': 'Thursday, 18th July 2024',
            'previewlinks:image': 'https://phpstoke.co.uk/android-chrome-512x512.png',
        },
    }).then((response) => response.data)

    return {
        props: {
            fullUrl: process.env.FULL_URL,
            preview: preview.data.url,
        },
    }
}

export default function Home({fullUrl}) {
  return (
    <>
      <Head>
        <title>PHP Stoke - The Stoke-on-Trent PHP meet-up.</title>
        <meta
          name="description"
          content="PHP Stoke is a free meet-up in Stoke-on-Trent. Meet local developers, learn about PHP and enjoy some food and drink."
        />

        <meta property="og:url" content={fullUrl} key="ogUrl" />
        <meta name="twitter:url" content={fullUrl} key="twitterUrl" />
      </Head>
      {/*<News />*/}
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
