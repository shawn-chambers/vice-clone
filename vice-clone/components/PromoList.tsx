import styles from '../styles/promo.module.scss';
import Promo from './Promo';

const PromoList = () => {
  return (
    <ul className={styles.promoList}>
      <Promo />
      <Promo />
      <Promo />
    </ul>
  )
}

export default PromoList;