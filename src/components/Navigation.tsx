'use client'

import styles from '@/styles/components/Navigation.module.scss'
import { useRouter } from 'next/navigation'

import { AiOutlineArrowLeft } from 'react-icons/ai'

type INavigationProps = {
  title: string
  subtitle: string
}

export const Navigation = ({ title, subtitle }: INavigationProps) => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section className={styles.link} onClick={() => router.push('/home')}>
          <AiOutlineArrowLeft className={styles.icon} />
          <section className={styles.wrapper}>
            <span>{subtitle}</span>
            <h1>{title}</h1>
          </section>
        </section>
      </div>
    </div>
  )
}
