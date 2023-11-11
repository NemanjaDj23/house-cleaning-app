import cleaningImg from '../../images/cleaning-1.svg';
import styles from './HeroSection.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Tilt from 'react-parallax-tilt';

function HeroSection() {
  return (
    <section className='heroSection'>
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
          <Tilt
            className='tiltImg'
            tiltMaxAngleX={35}
            tiltMaxAngleY={35}
            perspective={900}
            scale={1.1}
            transitionSpeed={2000}
            gyroscope={true}
          >
            <img src={cleaningImg} alt='cleaning-2' className={styles.innerElement} />
          </Tilt>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
