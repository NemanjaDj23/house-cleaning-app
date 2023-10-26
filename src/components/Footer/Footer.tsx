import logo from '../../images/logo1.png';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.scss';
import useMatchMedia from '../../hooks/useMatchMedia';

function Footer() {
  const isDesktopResolution = useMatchMedia('(max-width:600px)', true);
  return (
    <footer>
      <a href='/' className={styles.logoWrapper}>
        <img src={logo} alt='ms-sjaj-logo' />
      </a>
      <div className={styles.navAndSocialWrapper}>
        <div className={styles.navigationWrapper}>
          <nav className={styles.footerNavigation}>
            <a href='#pricing-and-services'>Cenovnik i usluge</a>
            <a href='#faq'>Najčešća pitanja</a>
          </nav>
          <nav className={styles.footerNavigation}>
            <a href='#our-clients'>Naši klijenti</a>
            <a href='#contact-form'>Kontakt forma</a>
          </nav>
        </div>
        <div>
          <ul className={styles.socialWrapper}>
            <li>
              <a href='mailto: 11mssjaj@gmail.com'>
                <FontAwesomeIcon className={styles.socialIcon} icon={faEnvelope} />{' '}
                11mssjaj@gmail.com
              </a>
            </li>
            <li>
              <a href='tel:+381643937000'>
                <FontAwesomeIcon className={styles.socialIcon} icon={faPhone} /> +381 64 3937000
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/'>
                <FontAwesomeIcon className={styles.socialIcon} icon={faInstagram} /> ms_sjaj
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyRightWrapper}>
        {isDesktopResolution ? (
          <span>© 2023, 11MSsjaj All rights reserved.</span>
        ) : (
          <span>Copyright © 2023 Kragujevac Serbia, 11MSsjaj All rights reserved.</span>
        )}
        <span>
          Powered by <a href='mailto: nemanja.djurovic1991@gmail.com'>Nemanja Djurovic</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
