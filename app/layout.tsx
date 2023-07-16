import '@styles/globals.css'
import { Chilanka, Jost, Roboto_Mono } from 'next/font/google';

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jost.variable} ${roboto_mono.variable}`}>
      <body className='bg-white-dark'>
        <main className='min-h-screen flex flex-col'>
          {children}
        </main>
      </body>
    </html>
  )
}