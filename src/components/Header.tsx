import styles from '@/styles/components/Header.module.scss'

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Reservify</h1>
        <input type="text" placeholder="Search" />
        <div className={styles.user} />
      </div>
    </div>
  )
}
