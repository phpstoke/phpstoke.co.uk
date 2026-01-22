import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="antialiased" lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Source+Sans+3:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
        <script src="https://getsendstack.com/js/form.js" key="sendstack-js" async></script>
      </Head>
      <body className="bg-surface-50 text-gray-900 transition-colors duration-300 dark:bg-surface-900 dark:text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
