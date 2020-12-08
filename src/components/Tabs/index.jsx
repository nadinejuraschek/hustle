// REACT
import { useState } from 'react';

// STYLES
import styles from './tabs.module.css';

const Tabs = ({ tabs, handleClick }) => {
  const [tab, setTab] = useState(0);

  return (
    <div className={styles.tabs}>
      {tabs.map((item, index) => {
        return (
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
        );
      })}
    </div>
  );
};

export default Tabs;
