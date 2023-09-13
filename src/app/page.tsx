'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Products from '../../components/products/Products'
import ScheduleCall from '../../components/schedulecall/ScheduleCall'
import Company from '../../components/company/Company'
import Welcome from '../../components/welcome/Welcome'
import SecondWave from '../../components/secondWave/SecondWave'
import Articles from '../../components/articles/articles'
import { TranslationProvider } from '../../context/TranslationContext'


export default function Home() {
  return (
      <TranslationProvider>
    <main className=''>
      <Welcome/>
      <Company/>
      <ScheduleCall/>
      <Products/>
      <SecondWave/>
      <ScheduleCall/>
      <Articles/>
    </main>
      </TranslationProvider>
  )
}
