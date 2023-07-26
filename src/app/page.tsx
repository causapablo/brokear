import Image from 'next/image'
import styles from './page.module.css'
import Footer from '../../components/footer/Footer'
import Products from '../../components/products/Products'
import ScheduleCall from '../../components/schedulecall/ScheduleCall'
import Company from '../../components/company/Company'
import Welcome from '../../components/welcome/Welcome'

export default function Home() {
  return (
    <main className=''>
      <Welcome/>
      <Company/>
      <ScheduleCall/>
      <Products/>
      <Footer/>
    </main>
  )
}
