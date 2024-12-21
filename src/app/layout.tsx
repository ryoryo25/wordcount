import type { Metadata } from 'next'
import Meta from './components/meta';
import { DESCRIPTION, GA_MEASUREMENT_ID, OG_IMAGE_URL, TITLE } from '@/lib/constants'
import { GoogleAnalytics } from '@next/third-parties/google'
import { notojp, roboto } from '@/utils/font'

import './globals.css'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    title: TITLE,
    description: DESCRIPTION,
    siteName: TITLE,
    images: {
      url: OG_IMAGE_URL
    }
  }
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="ja">
      <Meta />
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      <body
        className={`${roboto.variable} ${notojp.variable} antialiased font-sans text-base-color`}
      >
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout
