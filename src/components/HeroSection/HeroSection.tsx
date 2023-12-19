import cleaningImg from '../../images/heroSection.jpeg';
import styles from './HeroSection.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function HeroSection() {
  return (
    <section className='heroSection'>
      <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <h1>Твоја број један агенција за чишћење</h1>
          <div>
            <span className={styles.textSpan}>✔</span>
            Високо обучени запослени са пуним радним временом
          </div>
          <div>
            <span className={styles.textSpan}>✔</span>
            За сваки посао доносимо наша средства за чишћење и опрему
          </div>
          <div>
            <span className={styles.textSpan}>✔</span>
            Транспарентне цене, без скривених накнада
          </div>
          <div>
            <span className={styles.textSpan}>✔</span>
            Користимо eco-friendly средства за чишћењу
          </div>

          <a className='sendUsMailBtn sendUsMailBtn__mb-80 top-50' href='#contact-form'>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Пошаљи нам маил</span>
            <FontAwesomeIcon icon={faArrowRightLong} />
          </a>
        </div>
        <div className={styles.imgWrapper}>
          <img src={cleaningImg} alt='cleaning-2' className={styles.innerElement} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
