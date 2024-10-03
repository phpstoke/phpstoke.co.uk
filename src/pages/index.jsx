import Head from 'next/head'

import { News } from '@/components/News'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Hosts } from '@/components/Hosts'
import { Newsletter } from '@/components/Newsletter'
import { Speakers } from '@/components/Speakers'
import {CommunitySponsors, PastSponsors, Sponsors} from '@/components/Sponsors'
import { previewlinks } from "@/lib/previewlinks";
import event from "@/event";

export async function getServerSideProps(context) {
    const preview = await previewlinks.signedImageUrl({
        siteId: 764,
        templateId: 1013,
        fields: {
            'previewlinks:overline': event.subtitle,
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
        <CommunitySponsors />
        <PastSponsors />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
