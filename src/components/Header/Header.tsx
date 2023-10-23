import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
      <div className={styles.navbarWrapper}>
        <a href='/'>Logo</a>
        <nav>
          <a href='/'>Cenovnik i usluge</a>
          <a href='#faq'>Najčešća pitanja</a>
        </nav>
      </div>
      <div className='flex align-items'>
        <a href='tel:+381641196856'>
          <div>Pozovi +381 64 1196856</div>
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
