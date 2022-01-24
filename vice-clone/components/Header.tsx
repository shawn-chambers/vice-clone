import styles from '../styles/header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { MenuProps } from '../utils/interfaces'
import { links } from '../utils/data'



const hideOnScroll = (header: string) => {
  return header === "small" ? styles.small : '';
}
const moveOnScroll = (header: string) => {
  return header === "small" ? styles.move : '';
}

const Header = ({ menu, displayMenu }: MenuProps) => {

  const handleMenuClick = () => {
    displayMenu((prev) => {
      return !prev;
    })
  };

  const [header, setHeader] = useState<string>("full");

  const listenScrollEvent = () => {
    if (window.scrollY < 200) {
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
      <div className={`${styles.main} ${moveOnScroll(header)}`} style={menu ? {borderBottom: '1px solid black'} : {}}>
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
          {
            !menu ?
            <div className={`${styles.links} ${hideOnScroll(header)}`}>
            {links.map((link, i) => {
              return (
                <Link href="/" key={`${link}-${i}`}>
                  <a>{link}</a>
                </Link>
              )
            })}
          </div> : null
          }
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
            !menu ?
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
              </>  : null
              :
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