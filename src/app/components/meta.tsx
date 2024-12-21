import { url } from '@/utils/config'

const Meta = () => {
  return (
    <head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={url('/favicon/apple-touch-icon.png')}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={url('/favicon/favicon-32x32.png')}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={url('/favicon/favicon-16x16.png')}
      />
      <link rel="manifest" href={url('/favicon/site.webmanifest')} />
      <link
        rel="mask-icon"
        href={url('/favicon/safari-pinned-tab.svg')}
        color="#5bbad5"
      />
      <link rel="shortcut icon" type="image/x-icon" href={url('/favicon/favicon.ico')} />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="msapplication-config" content={url('/favicon/browserconfig.xml')} />
      <meta name="theme-color" content="#ffffff" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
    </head>
  )
}

export default Meta
