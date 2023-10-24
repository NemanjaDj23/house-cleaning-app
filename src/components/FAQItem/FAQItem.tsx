import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import styles from './FAQItem.module.scss';
import { useRef, useState } from 'react';

type FAQItemProps = {
  title: string;
  content: string;
};

function FAQItem({ title, content }: FAQItemProps) {
  const [isActive, setIsActive] = useState(false);
  const contentEl = useRef<HTMLDivElement>(null);
  return (
    <div className={styles.faqAccordion}>
      <div onClick={() => setIsActive(!isActive)} className={styles.faqItemTrigger}>
        <h3>{title}</h3>
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
        <p>{content}</p>
      </div>
    </div>
  );
}

export default FAQItem;
