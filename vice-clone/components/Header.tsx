import styles from '../styles/header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.top}>
        <div className={styles.left}>
          <span>Sign in</span>
          <span>Create Account</span>
        </div>
        <div className={styles.right}>
          + English
        </div>
      </div>
      <div className="main">

      </div>
    </div>
  )
}

export default Header;