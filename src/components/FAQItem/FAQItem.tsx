import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import styles from './FAQItem.module.scss';
import { useRef, useState } from 'react';

function FAQItem() {
  const [isActive, setIsActive] = useState(false);
  const contentEl = useRef<HTMLDivElement>(null);
  return (
    <div className={styles.faqAccordion}>
      <div onClick={() => setIsActive(!isActive)} className={styles.faqItemTrigger}>
        <h3>Hsdjagdagd sadasd asdasd sdfsdf ssd?</h3>
        <FontAwesomeIcon
          style={{
            transform: isActive ? 'rotateX(180deg)' : 'rotateX(0deg)',
            transition: 'all 0.4s ease',
          }}
          icon={faAngleDown}
        />
      </div>
      <div
        ref={contentEl}
        style={
          isActive
            ? { height: contentEl.current ? contentEl.current.scrollHeight : '' }
            : { height: '0px' }
        }
        className={styles.faqItemContent}
      >
        <p>
          Hsfgds fs dhfgsjdf ghjsg dfhsdfjgdsf hsdf ghjsg dfh sfhsgdjfgsfgsf hsdf jgsfhgs f sf sdfsf
          fhsfkhjs dfjkshfd jshf jkshdf jshdf jhs fjh sfdjhsjh sklfh fhljsaf hjkf dgdfgdf sd fsjhf
          jdfkhjs dfhs dfj sjdfh sjhf jsdfjsfj sjdf sjdhf jshdf jshd fjhs fj jskdfh sjhdf jshdf hsd
          fh sfhksjhf sjhf jshf shf sjhf sdfjh sfjh sdfj
        </p>
      </div>
    </div>
  );
}

export default FAQItem;
