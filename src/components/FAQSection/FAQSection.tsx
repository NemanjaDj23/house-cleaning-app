import FAQItem from '../FAQItem/FAQItem';
import styles from './FAQSection.module.scss';

function FAQSection() {
  return (
    <section id='faq'>
      <h1>Najčešća pitanja korisnika</h1>
      <div className={styles.accordionsWrapper}>
        <FAQItem />
        <FAQItem />
        <FAQItem />
        <FAQItem />
        <FAQItem />
        <FAQItem />
        <FAQItem />
      </div>
    </section>
  );
}

export default FAQSection;
