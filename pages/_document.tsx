import { Html, Head, Main, NextScript } from 'next/document'
import { GA_MEASUREMENT_ID } from '../lib/gtag'
import GoogleAnalytics from '../components/googleAnalytics'

export default function Document() {
  return (
    <Html lang="ja-JP">
      <Head>
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
