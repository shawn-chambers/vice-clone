import styles from '../styles/masonry.module.scss';
import FirstStory from './FirstStory';

const Masonry = () => {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <FirstStory />
      </div>
      <div className={styles.right}>

      </div>
    </section>
  )
}

export default Masonry;