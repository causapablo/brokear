

import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import { TranslationProvider } from '../../context/TranslationContext'
import { Provider } from 'react-redux';
import store from "../../redux/index"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SU BROKER ARGENTINO',
  description: 'Brokear es seguridad y confianza',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <TranslationProvider> */}
      {/* <NavBar/> */}
        {children}
        {/* <Footer/> */}
      {/* </TranslationProvider> */}
      </body>
    </html>
  )
}
