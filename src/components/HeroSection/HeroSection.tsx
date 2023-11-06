import cleaningImg from '../../images/cleaning-1.svg';
import cover from '../../images/heroSectionCover.jpg';
// import animation1 from '../../images/cleaning.gif';
import styles from './HeroSection.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function HeroSection() {
  return (
    <section className='heroSection'>
      <div>
        <img src={cover} alt='cover' />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <h1>Tvoja broj 1 agencija za čišćenje</h1>
          <div>
            <span className={styles.textSpan}>✔</span>
            Visoko obučeni zaposleni sa punim radnim vremenom
          </div>
          <div>
            <span className={styles.textSpan}>✔</span>
            Za svaki posao donosimo naša sredstva za čišćenje i opremu
          </div>
          <div>
            <span className={styles.textSpan}>✔</span>
            Transparentne cene, bez skrivenih naknada
          </div>
          <div>
            <span className={styles.textSpan}>✔</span>
            Koristimo eco-friendly sredstva za čišćenju
          </div>

          <a className='sendUsMailBtn sendUsMailBtn__mb-80 top-50' href='#contact-form'>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Pošalji nam mail</span>
            <FontAwesomeIcon icon={faArrowRightLong} />
            {/*<img className='animation1' src={animation1} alt='clining-animation1' />*/}
          </a>
        </div>
        <div className={styles.imgWrapper}>
          <img src={cleaningImg} alt='cleaning-1' className={styles.imageHero} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
