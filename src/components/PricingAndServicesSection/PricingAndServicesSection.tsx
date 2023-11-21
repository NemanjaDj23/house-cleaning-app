import styles from './PricingAndServicesSection.module.scss';
import { useRef, useState } from 'react';
import PricingAndServicesContent from '../PricingAndServicesContent/PricingAndServicesContent';
import useMatchMedia from '../../hooks/useMatchMedia';

const priceAndServicesObj = [
  {
    id: 1,
    text: `MS sjaj pruža usluge čišćenje zgrada, bez ikakvih obaveza stanara prema našim radnicima. Izlazimo na teren sa svom opremom i svim sredstvima potrebnim za čišćenje Vaše stambene zgrade. Usluge koje pružamo mogu da podrazumevaju redovno i generalno čišćenje zgrada.
  Redovno čišćenje zgrada i održavanje zgrada na mesečnom nivou podrazumeva jednom nedeljno (četiri puta u toku meseca), a po Vašim željama može biti i češće, sve je stvar dogovora. \n
  Generalno čišćenje zgrada obuhvata pranje svih dostupnih zajedničkih prostorija unutar zgrade.`,
  },
  {
    id: 2,
    text: `Ukoliko nemate vremena ili imate problema sa pospremanjem apartmana nakon odlaska gostiju, nudimo Vam uslugu generalnog čišćenja apartmana. Nema potrebe da gubite dragoceno vreme na čišćenje vašeg stana. Uradićemo sve što želite za vas. Kao deo naših usluga čišćenja stanova i kuća, nudimo usluge generalnog čišćenja vašeg doma. Cene usluga koje koriste naše materijale postavljaju se nakon pregleda od strane našeg osoblja.`,
  },
  {
    id: 3,
    text: `Da Vaše radno okruženje uvek bude uredno i čisto, mi smo uvek tu za Vas. Od nas možete da očekujete besprekoran kvalitet i profesionalnost, kao i prilagođavanje vašim radnim obavezama.
  Usluge čišćenja poslovnog prostora mogu se vršiti po prethodno ustanovljenom dogovoru: jednokratno, nedeljno, mesečno ili godišnje.\n
  Cene pružanja usluga se kreiraju nakon uvida našeg zaposlenog u veličinu objekta, lokala i/ ili kancelarija.\n
  Redovno čišćenje zgrada na mesečnom nivou (1 x nedeljno) od 300 RSD po stanu.`,
  },
  {
    id: 4,
    text: `Sav nered nastao usled manjih ili većih gradjevinskih radova, renoviranja je naša briga. Poštujemo Vaše vreme i zato nudimo brzu i efikasnu uslugu čišćenja sa visokim kvalitetom rada. Čistimo sve vrste novoizgradjenih, stambenih, poslovnih i ostalih objekata.
  Detaljno čišćenje zgrada nakon završenih građevinskih radova od 150 RSD po m²
  Za investitore i građevinske firme pružamo posebne pogodnosti.
  Za ostale novoizgrađene objekte cenu kreiramo nakon izlaska i uvida našeg zaposlenog.`,
  },
  {
    id: 5,
    text: `Pružamo kvalitetnu uslugu u održavanju vaših dvorišta i zelenih površina. Pored košenja trave, skupljanje lišća, otklanjanja korova, pružamo usluge orezivanja živih ograda i krošnje drveća.\n
  Cene pružanja usluga se kreiraju nakon uvida našeg zaposlenog u veličinu dvorišta i u zavisnosti od vrste uređivanja dvoršta.`,
  },
  {
    id: 6,
    text: `Lokacije od Kragujevca udaljenje vise od 5km naplacuje se 50din po predjenom kilometru.
  Dobinsko pranje stolica od 400rsd\n
  Dubinsko pranje fotelja od 1200rsd\n
  Dubinsko pranke dvoseda od 1600rsd\n
  Dubinsko pranje troseda od 2200rsd\n
  Dubinsko pranje duseka za krevetac od 500rsd\n
  Dubinsko pranje duseka za samac krevet od 1000rsd\n
  Dubinsko pranje duseka za bracni krevet od 1700rsd`,
  },
];

function PricingAndServicesSection() {
  const [selectedItem, setSelectedItem] = useState(-1);
  const contentEl = useRef<HTMLDivElement>(null);
  const isTabletOrMobileResolution = useMatchMedia('(max-width:992px)', true);

  const handleBtnClick = (itemId: number) => {
    setSelectedItem(itemId);
    if (contentEl && contentEl.current && isTabletOrMobileResolution) {
      contentEl.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <section id='pricing-and-services'>
      <h1>Cenovnik i usluge</h1>
      <div className={styles.pricingWrapper}>
        <div className={styles.row}>
          <button
            onClick={() => {
              handleBtnClick(1);
            }}
            className={styles.btn + ' ' + (selectedItem === 1 ? styles.active : '')}
          >
            Čišćenje zgrada
          </button>
          <button
            onClick={() => handleBtnClick(2)}
            className={styles.btn + ' ' + (selectedItem === 2 ? styles.active : '')}
          >
            Čišćenje apartmana kuća i stanova
          </button>
        </div>
        <div className={styles.row}>
          <button
            onClick={() => handleBtnClick(3)}
            className={styles.btn + ' ' + (selectedItem === 3 ? styles.active : '')}
          >
            Čišćenje poslovnih objekata
          </button>
          <button
            onClick={() => handleBtnClick(4)}
            className={styles.btn + ' ' + (selectedItem === 4 ? styles.active : '')}
          >
            Čišćenje nakon građevinskih radova
          </button>
        </div>
        <div className={styles.row}>
          <button
            onClick={() => handleBtnClick(5)}
            className={styles.btn + ' ' + (selectedItem === 5 ? styles.active : '')}
          >
            Održavanje dvorišta
          </button>
          <button
            onClick={() => handleBtnClick(6)}
            className={styles.btn + ' ' + (selectedItem === 6 ? styles.active : '')}
          >
            Dubinsko čišćenje
          </button>
        </div>
      </div>
      <div ref={contentEl}>
        {priceAndServicesObj.map((item) => (
          <PricingAndServicesContent
            key={item.id}
            text={item.text}
            isActive={selectedItem === item.id}
          />
        ))}
      </div>
    </section>
  );
}

export default PricingAndServicesSection;
