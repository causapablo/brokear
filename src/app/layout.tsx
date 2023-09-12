import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer'
import './globals.css'
import { Inter } from 'next/font/google'


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
        
      <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
