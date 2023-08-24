import styles from '@/styles/pages/Home.module.scss'

import { Header } from '@/components/Header'
import { SideBar } from '@/components/SideBar'
import { Navigation } from '@/components/Navigation'
import { DashBoard } from '@/components/DashBoard'

export default function Reservations() {
  return (
    <main className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <div className={styles.divider}>
          <Navigation title="Reservations" subtitle="All" />
          <DashBoard />
        </div>
      </div>
    </main>
  )
}
