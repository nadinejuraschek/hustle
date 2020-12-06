// REACT
import { useState } from 'react';

// DEPENDENCIES


// STYLES
import styles from './details.module.css';

const Details = () => {
  const [tab, setTab] = useState(0);

  const tabs = [
    { label: 'Babysitting', value: 'babysitting' },
    { label: 'Etsy', value: 'etsy' },
    { label: 'Kleiderverkauf', value: 'kleiderverkauf' },
    { label: 'Tutoring', value: 'tutoring' },
    { label: 'Investitionen', value: 'investitionen' },
    { label: 'Proofreading', value: 'proofreading' },
  ];

  return (
    <div className={styles.container}>
      {/* <div className={styles.tabs}>
        {
          tabs.map((item, index) => {
            return (
              <div
                className={`${styles.tab} ${index === tab ? styles.active : ''}`}
                key={index}
                onClick={() => setTab(index)}
              >
                {item.label}
              </div>
            );
          })
        }
      </div> */}

    </div>
  );
};

export default Details;