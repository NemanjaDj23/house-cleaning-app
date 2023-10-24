import FAQItem from '../FAQItem/FAQItem';
import styles from './FAQSection.module.scss';

const faqText = [
  {
    id: 'accordion-1',
    title: 'Koliko košta vaša usluga čišćenja zgrada?',
    content:
      'Cena varira u zavisnosti od veličine objekta i opsega usluge. Naš cilj je pružiti najbolji odnos cene i kvaliteta, te ćemo vam pružiti detaljnu ponudu nakon besplatne procene.',
  },
  {
    id: 'accordion-2',
    title: 'Koje vrste čišćenja nude vaša agencija?',
    content:
      'Naša agencija pruža usluge redovnog održavanja zgrada i specijalizovane usluge poput čišćenja nakon građevinskih radova.',
  },
  {
    id: 'accordion-3',
    title: 'Kako birate i obučavate svoje osoblje za čišćenje?',
    content:
      'Svi naši zaposleni prolaze rigorozan proces selekcije i obuke. Imamo visoke standarde za profesionalnost i efikasnost.',
  },
  {
    id: 'accordion-4',
    title: 'Kako se planira raspored čišćenja i koliko često dolazite?',
    content:
      'Raspored čišćenja se prilagođava potrebama svakog klijenta. Možemo pružiti usluge dnevno, nedeljno, mesečno ili prema dogovoru.  Naša ekipa će s vama dogovoriti frekvenciju čišćenja i najpogodnije vreme dolaska kako bismo se prilagodili vašem radnom rasporedu i preferencijama.',
  },
  {
    id: 'accordion-5',
    title: 'Da li nudite mogućnost prilagođavanja usluge prema specifičnim potrebama klijenata?',
    content:
      'Da, svaka usluga se prilagođava specifičnim zahtevima klijenata. Spremni smo da udovoljimo posebnim zahtevima kako bismo ispunili očekivanja svakog klijenta.',
  },
  {
    id: 'accordion-6',
    title: 'Koji hemijski sredstva i opremu koristite za čišćenje?',
    content:
      'Koristimo ekološki prihvatljive deterdžente i visokokvalitetnu opremu kako bismo postigli izvanredne rezultate čišćenja uz minimalan uticaj na okolinu.',
  },
  {
    id: 'accordion-7',
    title: 'Kako garantujete kvalitet i bezbednost vaših usluga čišćenja zgrada?',
    content:
      'Naša agencija se ponosi visokim standardima kvaliteta i bezbednosti. Svi naši radnici su obučeni za pravilno rukovanje opremom i hemijskim sredstvima. Takođe, redovno vršimo internu proveru kvaliteta i primenjujemo najnovije tehnike kako bismo osigurali doslednost i zadovoljstvo klijenata. Naša posvećenost kvalitetu i bezbednosti je od suštinskog značaja za nas.',
  },
];

function FAQSection() {
  return (
    <section id='faq'>
      <h1>Najčešća pitanja korisnika</h1>
      <div className={styles.accordionsWrapper}>
        {faqText.map((item) => (
          <FAQItem key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
