import styles from '../styles/header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { MenuProps } from '../utils/interfaces'

const links: string[] = [
  'Video',
  'TV',
  'News',
  'Tech',
  'Rec Room'
];

const hideOnScroll = (menu: string) => {
  return menu === "small" ? styles.small : '';
}
const moveOnScroll = (menu: string) => {
  return menu === "small" ? styles.move : '';
}

const Header = ({ menu, displayMenu }: MenuProps) => {

  const handleMenuClick = () => {
    displayMenu((prev) => {
      return !prev;
    })
  };

  const [header, setHeader] = useState<string>("full");

  const listenScrollEvent = () => {
    if (window.scrollY < 170) {
      return setHeader("full");
    } else if (window.scrollY > 70) {
      return setHeader("small");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div className={`${styles.header} ${moveOnScroll(header)}`}>
      <div className={`${styles.top} ${hideOnScroll(header)}`}>
        <div className={styles.left}>
          <Link href="/">
            <a>Sign in</a>
          </Link>
          <Link href="/">
            <a>Create Account</a>
          </Link>
        </div>
        <Link href="/">
          <a className={styles.right}>
            + English
          </a>
        </Link>
      </div>
      <div className={`${styles.main} ${moveOnScroll(header)}`}>
        <div>
          <div onClick={handleMenuClick}>
            {
              menu ?
                <div className={styles.menulink}>
                  <FontAwesomeIcon icon={faTimes} size='lg' />
                </div>
                :
                <div className={styles.menulink}>
                  <FontAwesomeIcon icon={faBars} size='lg' />
                </div>
            }
          </div>
          {
            header === 'full' ?
              <Image
                src="/vice-logo-white.png"
                alt="Vice"
                width={80}
                height={35}
                layout='fixed'
                className={styles.logo}
              /> :
              null
          }
          <div className={`${styles.links} ${hideOnScroll(header)}`}>
            {links.map((link, i) => {
              return (
                <Link href="/" key={`${link}-${i}`}>
                  <a>{link}</a>
                </Link>
              )
            })}
          </div>
        </div>
        {
          header === 'small' ?
            <Image
              src="/vice-logo-white.png"
              alt="Vice"
              width={80}
              height={35}
              layout='fixed'
              className={styles.logo}
            /> :
            null
        }
        <div className={`${styles.icons}`}>
          {
            header === 'full' ?
              <>
                <a>
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
                <a>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </> :
              <>
                <a>
                  <FontAwesomeIcon icon={faUser} />
                </a>
              </>
          }
        </div>
      </div>
    </div>
  )
}

export default Header;