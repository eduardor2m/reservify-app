'use client'

import styles from '@/styles/components/SideBar.module.scss'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { FcCalendar, FcGlobe, FcSettings } from 'react-icons/fc'

export const SideBar = () => {
  const path = usePathname()
  const router = useRouter()

  useEffect(() => {
    console.log(path)
  }, [path])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section className={styles.links}>
          <div
            className={styles.link}
            style={{
              backgroundColor: path === '/home' ? '#039b30' : '',
              color: path === '/home' ? '#FFFFFF' : '',
            }}
            onClick={() => router.push('/home')}
          >
            <FcGlobe className={styles.icon} />
            <span>Home</span>
          </div>
          <div
            className={styles.link}
            style={{
              backgroundColor: path === '/reservations' ? '#039b30' : '',
              color: path === '/reservations' ? '#FFFFFF' : '',
            }}
            onClick={() => router.push('/reservations')}
          >
            <FcCalendar className={styles.icon} />
            <span>Reservations</span>
          </div>
          <div
            className={styles.link}
            style={{
              backgroundColor: path === '/settings' ? '#039b30' : '',
              color: path === '/settings' ? '#FFFFFF' : '',
            }}
            onClick={() => router.push('/settings')}
          >
            <FcSettings className={styles.icon} />
            <span>Settings</span>
          </div>
        </section>
      </div>
    </div>
  )
}
