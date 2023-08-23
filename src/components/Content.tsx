import styles from '@/styles/components/Content.module.scss'
import { CardRoom } from './CardRoom'

export const Content = () => {
  const rooms = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section className={styles.rooms}>
          {rooms.map((room) => (
            <CardRoom key={room} />
          ))}
        </section>
      </div>
    </div>
  )
}
