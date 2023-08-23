import styles from '@/styles/components/Navigation.module.scss'

import { AiOutlineArrowLeft } from 'react-icons/ai'

export const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section className={styles.link}>
          <AiOutlineArrowLeft className={styles.icon} />
          <section className={styles.wrapper}>
            <span>All</span>
            <h1>Home</h1>
          </section>
        </section>
      </div>
    </div>
  )
}
