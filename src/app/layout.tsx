import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from '../../redux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Broker in Argentina',
  description: 'Brokear is security and trust',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
      <NavBar/>
        {children}
        <Footer/>
      </Providers>
      </body>
    </html>
  )
}
