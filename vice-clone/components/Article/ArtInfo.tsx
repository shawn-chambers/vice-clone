import { MainArticleProps } from "../../utils/interfaces";
import styles from '../../styles/article.module.scss';
import Link from "next/link";

const ArtInfo = ({ mainArticle }: MainArticleProps) => {
  const {
    category,
    teaser,
    author,
    date
  } = mainArticle;

  return (
    <div className={styles.info}>
      <Link href="/">
        <a className={styles.category}>{category}</a>
      </Link>
      <Link href="/">
        <a className={styles.teaser}>{teaser}</a>
      </Link>
      <div className={styles.author}>{author}</div>
      <div className={styles.date}>{date}</div>
    </div>
  )
}

export default ArtInfo;