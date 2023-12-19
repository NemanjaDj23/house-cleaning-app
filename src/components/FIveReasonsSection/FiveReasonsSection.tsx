import item1 from '../../icons/item-reasone-1.svg';
import item2 from '../../icons/item-reasone-2.svg';
import item3 from '../../icons/item-reasone-3.svg';
import item4 from '../../icons/item-reasone-4.svg';
import item5 from '../../icons/item-reasone-5.svg';
import backImg from '../../images/middleImg.png';
import styles from './FiveReasonesSection.module.scss';

function FiveReasonsSection() {
  return (
    <section className='bg-grey pt-5'>
      <h1>Пет разлога зашто изабрати МС сјај, још данас</h1>
      <div className={styles.wrapper}>
        <div className={styles.itemWrapper}>
          <img className={styles.itemIcon} src={item1} alt='icon-1' />
          <div>Транспарентни уговори, без скривених додатних трошкова</div>
        </div>
        <div className={styles.itemWrapper}>
          <img className={styles.itemIcon} src={item2} alt='icon-2' />
          <div>Увек користимо квалитетна и проверена средства за чишћење као и опрему</div>
        </div>
        <div className={styles.itemWrapper}>
          <img className={styles.itemIcon} src={item3} alt='icon-3' />
          <div>Користимо висококвалитетна, безбедна, али ефикасна решења за чишћење</div>
        </div>
        <div className={styles.itemWrapper}>
          <img className={styles.itemIcon} src={item4} alt='icon-4' />
          <div>Имате могућност избора да користимо ваша средства за чишћење</div>
        </div>
        <div className={styles.itemWrapper}>
          <img className={styles.itemIcon} src={item5} alt='icon-5' />
          <div>100% гарантујемо безбедност ваше имовине приликом чишћење</div>
        </div>
      </div>
      <img className={styles.imageAbs} src={backImg} alt='backgroundImg' />
    </section>
  );
}

export default FiveReasonsSection;
