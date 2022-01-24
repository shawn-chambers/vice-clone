import styles from '../styles/menu.module.scss';
import { sideList, mainList, menuLinks } from '../utils/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebookSquare, faRedditAlien, faTumblr, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons';

import Link from 'next/link';
import SearchBar from './SearchBar';
import VGLogo from './ViceGroupLogo';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <section className={styles.main}>
        <div className={styles.sideList}>
          {
            sideList.map((listItem, i) => {
              return (
                <Link href="/" key={`sideList-${listItem}-${i}`}>
                  <a>
                    {listItem}
                  </a>
                </Link>
              )
            })
          }
          <div className={styles.searchbar}>
            <SearchBar />
          </div>
          <ul className={styles.mediaLinks}>
            <li>
              <a>
                <FontAwesomeIcon icon={faFacebookSquare} size="xs" />
              </a>
            </li>
            <li>
              <a>
                <FontAwesomeIcon icon={faInstagram} size="xs" />
              </a>
            </li>
            <li>
              <a>
                <FontAwesomeIcon icon={faTwitter} size="xs" />
              </a>
            </li>
            <li>
              <a>
                <FontAwesomeIcon icon={faRedditAlien} size="xs" />
              </a>
            </li>
            <li>
              <a>
                <FontAwesomeIcon icon={faTumblr} size="xs" />
              </a>
            </li>
            <li>
              <a>
                <FontAwesomeIcon icon={faYoutube} size="xs" />
              </a>
            </li>
            <li>
              <a>
                <FontAwesomeIcon icon={faPinterest} size="xs" />
              </a>
            </li>
          </ul>
        </div>
        <ul className={styles.mainList}>
          {
            mainList.map((listItem, i) => {
              return (
                <li key={`mainList-${listItem}-${i}`}>
                  <Link href="/">
                    <a>
                      {listItem}
                    </a>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </section>
      <section className={styles.footer}>
        <VGLogo />
        <ul className={styles.footerLinks}>
          {
            menuLinks.map((link, i) => (
              <li key={`menufooter-${link}-${i}`}>
                <Link href='/'>
                  <a>{link}</a>
                </Link>
              </li>
            ))
          }
        </ul>
        <div className={styles.copyright}>© 2022 SHAWN MEDIA GROUP</div>
      </section>
    </div>
  )
}

export default Menu;
