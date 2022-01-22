import styles from '../styles/header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MenuProps } from '../utils/interfaces'

const links: string[] = [
  'Video',
  'TV',
  'News',
  'Tech',
  'Rec Room'
];


const Header = ({menu, displayMenu} : MenuProps) => {

  const handleMenuClick = () => {
    displayMenu((prev) => {
      return !prev;
    })
  };


  return (
    <div className={styles.header}>
      <div className={styles.top}>
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
      <div className={styles.main}>
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
          <Image
            src="/vice-logo-white.png"
            alt="Vice"
            width={80}
            height={35}
            layout='fixed'
            className={styles.logo}
          />
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