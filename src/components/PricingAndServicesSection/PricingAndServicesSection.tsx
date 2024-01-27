import styles from './PricingAndServicesSection.module.scss';
import { useRef, useState } from 'react';
import PricingAndServicesContent from '../PricingAndServicesContent/PricingAndServicesContent';
import useMatchMedia from '../../hooks/useMatchMedia';

const priceAndServicesObj = [
  {
    id: 1,
    text: `МС сјај пружа услуге чишћење зграда, без икаквих обавеза станара према нашим радницима. Излазимо на терен са свом опремом и свим средствима потребним за чишћење Ваше стамбене зграде. Услуге које пружамо могу да подразумевају редовно и генерално чишћење зграда.
  Редовно чишћење зграда и одржавање зграда на месечном нивоу подразумева једном недељно (четири пута у току месеца), а по Вашим жељама може бити и чешће, све је ствар договора. \n
  Генерално чишћење зграда обухвата прање свих доступних заједничких просторија унутар зграде.`,
  },
  {
    id: 2,
    text: `Уколико немате времена или имате проблема са поспремањем апартмана након одласка гостију, нудимо Вам услугу генералног чишћења апартмана. Нема потребе да губите драгоцено време на чишћење вашег стана. Урадићемо све што желите за вас. Као део наших услуга чишћења станова и кућа, нудимо услуге генералног чишћења вашег дома. Цене услуга које користе наше материјале постављају се након прегледа од стране нашег особља.`,
  },
  {
    id: 3,
    text: `Да Ваше радно окружење увек буде уредно и чисто, ми смо увек ту за Вас. Од нас можете да очекујете беспрекоран квалитет и професионалност, као и прилагођавање вашим радним обавезама.
  Услуге чишћења пословног простора могу се вршити по претходно установљеном договору: једнократно, недељно, месечно или годишње.\n
  Цене пружања услуга се креирају након увида нашег запосленог у величину објекта, локала и/или канцеларија.\n
  Редовно чишћење зграда на месечном нивоу (1 x недељно) од 300 РСД по стану.`,
  },
  {
    id: 4,
    text: `Сав неред настао услед мањих или већих грађевинских радова, реновирања је наша брига. Поштујемо Ваше време и зато нудимо брзу и ефикасну услугу чишћења са високим квалитетом рада. Чистимо све врсте новоизграђених, стамбених, пословних и осталих објеката.
  Детаљно чишћење зграда након завршених грађевинских радова од 150 РСД по м²
  За инвеститоре и грађевинске фирме пружамо посебне погодности.
  За остале новоизграђене објекте цену креирамо након изласка и увида нашег запосленог.`,
  },
  {
    id: 5,
    text: `Локације од Крагујевца удаљене више од 5км наплаћује се 70 РСД по пређеном километру.
  Добинско прање столица од 800 РСД\n
  Дубинско прање фотеља од 1000-2000 РСД\n
  Дубинско прање двоседа од 1500-2000 РСД\n
  Дубинско прање троседа од 2500-3500 РСД\n
  Дубинско прање душека за креветац од 700-1000 РСД\n
  Дубинско прање душека за самац кревет од 1200-2000 РСД\n
  Дубинско прање душека за брачни кревет од 2000-3500 РСД`,
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
      <h1>Ценовник и услуге</h1>
      <div className={styles.pricingWrapper}>
        <div className={styles.row}>
          <button
            onClick={() => {
              handleBtnClick(1);
            }}
            className={styles.btn + ' ' + (selectedItem === 1 ? styles.active : '')}
          >
            Чишћење зграда
          </button>
          <button
            onClick={() => handleBtnClick(2)}
            className={styles.btn + ' ' + (selectedItem === 2 ? styles.active : '')}
          >
            Чишћење апартмана кућа и станова
          </button>
        </div>
        <div className={styles.row}>
          <button
            onClick={() => handleBtnClick(3)}
            className={styles.btn + ' ' + (selectedItem === 3 ? styles.active : '')}
          >
            Чишћење пословних објеката
          </button>
          <button
            onClick={() => handleBtnClick(4)}
            className={styles.btn + ' ' + (selectedItem === 4 ? styles.active : '')}
          >
            Чишћење након грађевинских радова
          </button>
        </div>
        <div className={styles.rowCenter}>
          <button
            onClick={() => handleBtnClick(5)}
            className={styles.btn + ' ' + (selectedItem === 5 ? styles.active : '')}
          >
            Дубинско чишћење
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
