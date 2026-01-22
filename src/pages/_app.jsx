import { useEffect, useRef } from 'react'
import Head from 'next/head'

import * as Fathom from 'fathom-client'

import 'focus-visible'
import '@/styles/tailwind.css'

import event from '@/event'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load('ZVDKXCHJ', {
      includedDomains: ['phpstoke.co.uk'],
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={event.metaTitle} />
        <meta property="og:url" key="ogUrl" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:image" content={pageProps.preview} />
        <meta property="og:description" content={event.metaDescription} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@phpstoke" />
        <meta name="twitter:creator" content="@phpstoke" />
        <meta name="twitter:url" key="twitterUrl" />
        <meta name="twitter:title" content={event.metaTitle} />
        <meta name="twitter:image" content={pageProps.preview} />
        <meta name="twitter:description" content={event.metaDescription} />
      </Head>

      <Component previousPathname={previousPathname} {...pageProps} />
    </>
  )
}
