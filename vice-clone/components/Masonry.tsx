import styles from '../styles/masonry.module.scss';
import Article from './Article/Article';
import ArtInfo from './Article/ArtInfo';
import FirstStory from './FirstStory';

const Masonry = ({ data }: any) => {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <FirstStory mainArticle={data} />
      </div>
      <div className={styles.right}>
        <Article mainArticle={data} />
        <ArtInfo mainArticle={data} />
      </div>
      <div className={styles.bottom}>
        <Article mainArticle={data} />
        <Article mainArticle={data} />
        <Article mainArticle={data} />
      </div>
    </section>
  )
}

export default Masonry;