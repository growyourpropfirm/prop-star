import { Inter } from 'next/font/google'
import './globals.css'
import favicon from "../public/assets/icons/favicon.png"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prop-Star | Trade Risk-Free. Prove Your Skills.',
  description:
    'Experience Prop-Star’s risk-free trader evaluation program with transparent rules, instant feedback, and fast funding opportunities.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <head>
        <link rel="icon" href={favicon} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

