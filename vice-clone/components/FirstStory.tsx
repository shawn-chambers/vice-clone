/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from '../styles/firststory.module.scss';

const FirstStory = () => {
  return (
    <div className={styles.first}>
      <div className={styles.picture}>
        {/* <img
          src="https://source.unsplash.com/random/900x600"
          alt="random pic"
        /> */}
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <Link href='/'>
            <a className={styles.category}>
              Technology
            </a>
          </Link>
          <div className={styles.headline}>
            <Link href='/'>
              <a>
                This is the Thing That We Will Talk About in This Article
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          This is a quote from the article to my left. I am sure you will enjoy it if you take the time to read it. Or don&apos;t, that&apos;s ok, too.
        </div>
      </div>
    </div>
  )
}

export default FirstStory;