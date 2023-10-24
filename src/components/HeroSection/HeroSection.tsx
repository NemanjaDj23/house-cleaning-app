import cleaningImg from '../../images/cleaning-1.svg';
import styles from './HeroSection.module.scss';

function HeroSection() {
  return (
    <section className='pt-5 pb-5'>
      <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <h1>Tvoja #1 agencija za čišćenje</h1>
          <div>
            <span className={styles.textSpan}>✔</span>
            Visoko obučeni zaposleni sa punim radnim vremenom (ne podizvođači)
          </div>
          <div>
            <span className={styles.textSpan}>✔</span>
            Za svaki posao donosimo naša sredstva za čišćenje i opremu
          </div>
          <div>
            <span className={styles.textSpan}>✔</span>
            Transparentne cene, bez skrivenih naknada
          </div>
        </div>
        <div className={styles.imgWrapper}>
          <img src={cleaningImg} alt='cleaning-1' className={styles.imageHero} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
