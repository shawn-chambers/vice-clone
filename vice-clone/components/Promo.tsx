/* eslint-disable @next/next/no-img-element */
/* needed for unsplace src */
import Link from 'next/link';
import styles from '../styles/promo.module.scss';

const Promo = () => {
  return (
    <li className={styles.container}>
      <Link href='/'>
        <a>
          <div className={styles.promo}>
            <div className={styles.image}>
              <img
                src="https://source.unsplash.com/random/120x120"
                alt="random pic"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                Buy and/or do something
              </div>
              <div className={styles.subtitle}>
                Because we said to
              </div>
            </div>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default Promo;