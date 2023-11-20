import styles from './OurStandardSection.module.scss';
import cleaningImg from '../../images/ourStandard.png';

function OurStandardsSection() {
  return (
    <section className='bg-grey'>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img src={cleaningImg} alt='cleaning-2' className={styles.innerElement} />
        </div>
        <div className={styles.innerWrapper}>
          <h1>Održavamo visoke standarde u čišćenju vašeg prostora</h1>
          <div>
            <span className={styles.textSpan}>✔</span>
            Koristimo kvalitena i proverena sredstva za čišćenje
          </div>
          <div>
            <span className={styles.textSpan}>✔</span>
            Profesionalno obučeni zaposleni (ne podizvođači)
          </div>
          <div>
            <span className={styles.textSpan}>✔</span>
            Mnoštvo zadovoljnih korisnika
          </div>
          <div>
            <span className={styles.textSpan}>✔</span>
            Uvek donosimo naša sredstva i opremu
          </div>
          <div>
            <span className={styles.textSpan}>✔</span>
            Koristimo eco-friendly sredstva za čišćenju
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStandardsSection;
