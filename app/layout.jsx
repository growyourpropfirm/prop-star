import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prop-Star | Trade Risk-Free. Prove Your Skills.',
  description:
    'Experience Prop-Star’s risk-free trader evaluation program with transparent rules, instant feedback, and fast funding opportunities.',
  icons: {
    icon: '/assets/icons/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>

        {/* Google Tag Manager */}
        <Script id="gtm-body" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PDZCD9V6');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PDZCD9V6"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End GTM noscript */}

        {children}
      </body>
    </html>
  )
}