import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png';
import useMatchMedia from '../../hooks/useMatchMedia';
import { useState } from 'react';

function Header() {
  const isTabletResolution = useMatchMedia('(max-width:992px)', true);
  const isMobileResolution = useMatchMedia('(max-width:768px)', true);
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);

  return (
    <>
      <header>
        <div className={styles.navbarWrapper}>
          <a className={styles.logoWrapper} href='/'>
            <img src={logo} alt='ms-sjaj-logo' />
            {/*<img className={styles.santaCap} src={santaCap} alt='santa-cap' />*/}
          </a>
          {!isTabletResolution && (
            <nav>
              <a href='#pricing-and-services'>Ценовник и услуге</a>
              <a href='#faq'>Најчешћа питања</a>
            </nav>
          )}
        </div>
        <div className='flex align-items'>
          {!isTabletResolution && (
            <a href='tel:+381643937000'>
              <div>Позови +381 64 3937000</div>
            </a>
          )}
          {!isMobileResolution && (
            <a
              className={'sendUsMailBtn' + (isTabletResolution ? ' sendUsMailBtn__mr-80' : '')}
              href='#contact-form'
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Пошаљи нам поруку</span>
              <FontAwesomeIcon icon={faArrowRightLong} />
            </a>
          )}
          {isTabletResolution && (
            <button
              onClick={() => setMobileNavigationOpen(!mobileNavigationOpen)}
              className={styles.navigationButton}
            >
              <div
                className={
                  styles.navButtonIcon +
                  ' ' +
                  (mobileNavigationOpen ? styles.navButtonIconOpen : '')
                }
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          )}
        </div>
      </header>
      <nav
        className={styles.navigation + ' ' + (mobileNavigationOpen ? styles.navigationActive : '')}
        role='navigation'
      >
        <ul>
          <li role='presentation'>
            <a href='#faq' onClick={() => setMobileNavigationOpen(!mobileNavigationOpen)}>
              Најчешћа питања
            </a>
          </li>
          <li role='presentation'>
            <a
              href='#pricing-and-services'
              onClick={() => setMobileNavigationOpen(!mobileNavigationOpen)}
            >
              Ценовник и услуге
            </a>
          </li>
          <li role='presentation'>
            <a onClick={() => setMobileNavigationOpen(!mobileNavigationOpen)} href='#our-clients'>
              Наши клијенти
            </a>
          </li>
          <li role='presentation'>
            <a onClick={() => setMobileNavigationOpen(!mobileNavigationOpen)} href='#contact-form'>
              Контакт форма
            </a>
          </li>
          <li role='presentation'>
            <a href='tel:+381643937000'>
              <div>Позови +381 64 3937000</div>
            </a>
          </li>
        </ul>
        <a
          onClick={() => setMobileNavigationOpen(!mobileNavigationOpen)}
          className='sendUsMailBtn sendUsMailBtn__mobile'
          href='#contact-form'
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Пошаљи нам поруку</span>
          <FontAwesomeIcon icon={faArrowRightLong} />
        </a>
      </nav>
    </>
  );
}

export default Header;
