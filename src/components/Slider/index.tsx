import Link from 'next/link'
import Image from 'next/image'

import styles from './styles.module.css'

const Slider = () => {
  return (
    <div className={styles.container}>
      <Link href="">
        <Image src="/slot1/cinza1.jpg" alt="" fill />
      </Link>
      {/* <Link href="">
        <Image src="/slot1/cinza2.jpg" alt="" fill />
      </Link> */}
    </div>
  )
}

export default Slider
