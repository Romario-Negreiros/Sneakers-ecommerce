import { Cart, Slider } from '../components'
import Link from 'next/link'

import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.fullHeight}>
        <div className={styles.banner}>
          <div className={styles.sliderContainer}>
            <Slider />
          </div>
          <div className={styles.bannerTexts}>
            <p className={styles.itemText}>
              For sale now - <span>30% OFF!</span>
            </p>
            <Link href="">
              <Cart />
              <span>Add to cart</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
