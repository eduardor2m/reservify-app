import styles from '@/styles/components/SideBar.module.scss'

import { FcCalendar, FcGlobe, FcSettings, FcCloth } from 'react-icons/fc'

export const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section className={styles.links}>
          <div
            className={styles.link}
            style={{
              backgroundColor: '#039b30',
              color: '#FFFFFF',
            }}
          >
            <FcGlobe className={styles.icon} />
            <span>Home</span>
          </div>
          <div className={styles.link}>
            <FcCloth className={styles.icon} />
            <span>Rooms</span>
          </div>
          <div className={styles.link}>
            <FcCalendar className={styles.icon} />
            <span>Reservations</span>
          </div>
          <div className={styles.link}>
            <FcSettings className={styles.icon} />
            <span>Settings</span>
          </div>
        </section>
      </div>
    </div>
  )
}
