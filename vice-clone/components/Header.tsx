import styles from '../styles/header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

const links: string[] = [
  'Video',
  'TV',
  'News',
  'Tech',
  'Rec Room'
];

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
      <div className={styles.main}>
        <div>
          <FontAwesomeIcon icon={faBars} size='lg' />
          <Image
            src="/vice-logo-white.png"
            alt="Vice"
            width={80}
            height={35}
            layout='fixed' />
          {links.map((link, i) => {
            return (
              <Link href="/" key={`${link}-${i}`}>
                <a>{link}</a>
              </Link>
            )
          })}
        </div>
        <div className={styles.icons}>
          <a>
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header;