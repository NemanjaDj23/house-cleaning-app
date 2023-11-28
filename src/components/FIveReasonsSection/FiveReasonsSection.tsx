import item1 from '../../icons/item-reasone-1.svg';
import item2 from '../../icons/item-reasone-2.svg';
import item3 from '../../icons/item-reasone-3.svg';
import item4 from '../../icons/item-reasone-4.svg';
import item5 from '../../icons/item-reasone-5.svg';
import img1 from '../../images/1.png';
import styles from './FiveReasonesSection.module.scss';

function FiveReasonsSection() {
  return (
    <section className='bg-grey pt-5'>
      <h1>Pet razloga zašto izabrati MS sjaj, još danas</h1>
      <div className={styles.wrapper}>
        <div className={styles.itemWrapper}>
          <img className={styles.itemIcon} src={item1} alt='icon-1' />
          <div>Transparentni ugovori, bez skrivenih dodatnih troškova</div>
        </div>
        <div className={styles.itemWrapper}>
          <img className={styles.itemIcon} src={item2} alt='icon-2' />
          <div>Uvek koristimo kvalitetna i proverena sredstva za čišćenje kao i opremu</div>
        </div>
        <div className={styles.itemWrapper}>
          <img className={styles.itemIcon} src={item3} alt='icon-3' />
          <div>Koristimo visokokvalitetna, bezbedna, ali efikasna rešenja za čišćenje</div>
        </div>
        <div className={styles.itemWrapper}>
          <img className={styles.itemIcon} src={item4} alt='icon-4' />
          <div>Imate mogućnost izbora da koristimo vaša sredstva za čišćenje</div>
        </div>
        <div className={styles.itemWrapper}>
          <img className={styles.itemIcon} src={item5} alt='icon-5' />
          <div>100% garantujemo bezbednost vaše imovine prilikom čišćenje</div>
        </div>
      </div>
      <img className={styles.imageAbs} src={img1} alt='chage' />
    </section>
  );
}

export default FiveReasonsSection;
