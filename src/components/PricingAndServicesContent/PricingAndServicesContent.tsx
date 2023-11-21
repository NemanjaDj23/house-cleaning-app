import styles from '../PricingAndServicesContent/PricingAndServicesContent.module.scss';
import { useRef } from 'react';

type PricingAndServicesContentProps = {
  text: string;
  isActive: boolean;
};

function PricingAndServicesContent({ text, isActive }: PricingAndServicesContentProps) {
  const selectedItemContent = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={selectedItemContent}
      style={
        isActive
          ? {
              height: selectedItemContent.current ? selectedItemContent.current.scrollHeight : '',
              opacity: 1,
              transform: 'scale(1)',
            }
          : {
              height: '0px',
              opacity: 0,
              transform: 'scale(0)',
            }
      }
      className={styles.selectedContent}
    >
      <p>
        {text.split('\n').map((str) => (
          <p>{str}</p>
        ))}
      </p>
    </div>
  );
}

export default PricingAndServicesContent;
