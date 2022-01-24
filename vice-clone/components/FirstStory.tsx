/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from '../styles/firststory.module.scss';
import { MainArticleProps } from '../utils/interfaces';

const FirstStory = ({ mainArticle }: MainArticleProps) => {
  const {
    category,
    teaser,
    quote,
    author,
    url,
  } = mainArticle;

  return (
    <div className={styles.first}>
      <div className={styles.picture}>
        <img
          src="https://video-images.vice.com/articles/61e7194338835100961c3922/lede/1642694933752-photo935class010.jpeg?crop=1xw:0.8733239237826393xh;center,center&resize=2134:*"
          alt="random pic"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <Link href={url}>
            <a className={styles.category}>
              {category}
            </a>
          </Link>
          <div className={styles.headline}>
            <Link href={url}>
              <a>
                {teaser}
              </a>
            </Link>
          </div>
          <div className={styles.author}>
            {author}
          </div>
        </div>
        <div className={styles.right}>
          {quote}
        </div>
      </div>
    </div>
  )
}

export default FirstStory;