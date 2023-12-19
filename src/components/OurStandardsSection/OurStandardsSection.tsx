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
          <h1>Одржавамо високе стандарде у чишћењу вашег простора</h1>
          <div>
            <span className={styles.textSpan}>✔</span>
            Користимо квалитена и проверена средства за чишћење
          </div>
          <div>
            <span className={styles.textSpan}>✔</span>
            Професионално обучени запослени (не подизвођачи)
          </div>
          <div>
            <span className={styles.textSpan}>✔</span>
            Мноштво задовољних корисника
          </div>
          <div>
            <span className={styles.textSpan}>✔</span>
            Увек доносимо наша средства и опрему
          </div>
          <div>
            <span className={styles.textSpan}>✔</span>
            Користимо eco-friendly средства за чишћењу
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStandardsSection;
