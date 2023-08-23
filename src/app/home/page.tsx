import styles from '@/styles/pages/Home.module.scss'

import { Header } from '@/components/Header'
import { SideBar } from '@/components/SideBar'
import { Navigation } from '@/components/Navigation'
import { Content } from '@/components/Content'

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <div className={styles.divider}>
          <Navigation />
          <Content />
        </div>
      </div>
    </main>
  )
}
