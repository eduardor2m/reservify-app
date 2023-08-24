/* eslint-disable @next/next/no-img-element */
import styles from '@/styles/components/CardRoom.module.scss'

import { BsFillPersonFill } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'

export const CardRoom = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.image}>
          <img
            src={
              'https://r4t2s9v3.stackpathcdn.com/wp-content/uploads/2019/10/quarto-hotel-de-luxo-los-cabos.jpg'
            }
            alt="Quarto hotel de luxo los cabos"
            className={styles.img}
          />
        </div>
        <section className={styles.room_content}>
          <div className={styles.wrapper}>
            <h1>R$ 190,00</h1>
            <div className={styles.persons}>
              <BsFillPersonFill className={styles.icon} />
              <p>2</p>
            </div>
          </div>
          <div className={styles.button}>
            <button>
              <AiOutlineArrowRight size={24} color="#ffffff" />
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
