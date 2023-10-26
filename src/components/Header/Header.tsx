import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo1.png';

function Header() {
  return (
    <header>
      <div className={styles.navbarWrapper}>
        <a className={styles.logoWrapper} href='/'>
          <img src={logo} alt='ms-sjaj-logo' />
        </a>
        <nav>
          <a href='#pricing-and-services'>Cenovnik i usluge</a>
          <a href='#faq'>Najčešća pitanja</a>
        </nav>
      </div>
      <div className='flex align-items'>
        <a href='tel:+381643937000'>
          <div>Pozovi +381 64 3937000</div>
        </a>
        <a className={styles.sendUsMailBtn} href='#contact-form'>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Pošalji nam mail</span>
          <FontAwesomeIcon icon={faArrowRightLong} />
        </a>
      </div>
    </header>
  );
}

export default Header;
