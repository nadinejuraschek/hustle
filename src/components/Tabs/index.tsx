import { Tab, TabsProps } from './types';

import styles from './tabs.module.css';
import { useState } from 'react';

const Tabs = ({ handleClick, tabs }: TabsProps): JSX.Element => {
  const [tab, setTab] = useState(0);

  return (
    <div className={styles.tabs}>
      {tabs.map(
        (item: Tab, index: number): JSX.Element => (
          <div
            className={`${styles.tab} ${index === tab ? styles.active : ''}`}
            key={index}
            onClick={() => {
              setTab(index);
              handleClick(tabs[index]);
            }}
          >
            {item.label}
          </div>
        )
      )}
    </div>
  );
};

export default Tabs;
