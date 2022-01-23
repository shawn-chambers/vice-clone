import styles from '../styles/promo.module.scss';
import Promo from './Promo';

const PromoList = () => {
  return (
    <section>
      <ul className={styles.promoList}>
        <Promo />
        <Promo />
        <Promo />
      </ul>
    </section>
  )
}

export default PromoList;