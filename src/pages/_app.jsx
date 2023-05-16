import { useEffect, useRef } from 'react'
import Head from 'next/head'

import * as Fathom from 'fathom-client'

import 'focus-visible'
import '@/styles/tailwind.css'

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
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    Fathom.load('ZVDKXCHJ', {
      includedDomains: ['phpstoke.co.uk'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="PHP Stoke" />
        <meta property="og:url" key="ogUrl" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:image" content="https://phpstoke.co.uk/og.png" />
        <meta property="og:description" content="PHP Stoke is a free meet-up in Stoke-on-Trent. Meet local developers, learn about PHP and enjoy some food and drink." />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@phpstoke" />
        <meta name="twitter:creator" content="@phpstoke" />
        <meta name="twitter:url" key="twitterUrl" />
        <meta name="twitter:title" content="PHP Stoke" />
        <meta name="twitter:image" content="https://phpstoke.co.uk/og.png" />
        <meta name="twitter:description" content="PHP Stoke is a free meet-up in Stoke-on-Trent. Meet local developers, learn about PHP and enjoy some food and drink." />
      </Head>

      <Component previousPathname={previousPathname} {...pageProps} />
    </>
  )
}
