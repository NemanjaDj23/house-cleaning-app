import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './PricingAndServicesSection.module.scss';

function PricingAndServicesSection() {
  return (
    <section id='pricing-and-services'>
      <h1>Cenovnik i usluge</h1>
      <div className={styles.pricingWrapper}>
        <h3>Cene pružanja usluga čišćenja nakon gradjevinskih radova, renoviranja i adaptacija:</h3>
        <ul>
          <li>
            <FontAwesomeIcon className={styles.iconBefore} icon={faAnglesRight} />
            <span>Detaljno</span> čišćenje nakon završenih građevinskih radova
            <span className='float'> od 150.oo rsd/ m²</span>
          </li>
          <li>
            <FontAwesomeIcon className={styles.iconBefore} icon={faAnglesRight} />
            Za investitore i građevinske firme pružamo posebne pogodnosti.
          </li>
          <li>
            <FontAwesomeIcon className={styles.iconBefore} icon={faAnglesRight} />
            Za ostale novoizgrađene objekte cenu konfigurišemo nakon izlaska i uvida našeg
            zaposlenog.
          </li>
        </ul>
        <h3>Cene pružanja usluga čišćenja zgrada</h3>
        <ul>
          <li>
            <FontAwesomeIcon className={styles.iconBefore} icon={faAnglesRight} />
            <span>Redovno</span> čišćenje zgrada cena na mesečnom nivou (1 x nedeljno) počinje
            <span className='float'> od 250.oo rsd/ stanu</span>
          </li>
          <li>
            <FontAwesomeIcon className={styles.iconBefore} icon={faAnglesRight} />
            <span>Generalno</span> čišćenje zgrada cena sa uključenim materijalom
            <span className='float'> 600.oo rsd/ stanu</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default PricingAndServicesSection;
