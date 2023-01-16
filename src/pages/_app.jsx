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

  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';

  const fullUrl = `${origin}${router.pathname}`;

  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PHP Stoke" />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:image" content="/og.png" />

        <meta property="twitter:site" content="@phpstoke" />
        <meta property="twitter:creator" content="@phpstoke" />
        <meta property="twitter:url" content={fullUrl} />
        <meta property="twitter:title" content="PHP Stoke" />
        <meta property="twitter:image" content="/og.png" />
      </Head>

      <Component previousPathname={previousPathname} {...pageProps} />
    </>
  )
}
