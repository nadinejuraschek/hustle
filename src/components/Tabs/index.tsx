import { Tab, TabsProps } from './types';
import styles from './tabs.module.css';
import { useMemo, useState } from 'react';

const Tabs = ({ handleClick, tabs }: TabsProps): JSX.Element => {
  const [tab, setTab] = useState(0);

  const renderTabs = useMemo(() => {
    return tabs.map(
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
    );
  }, [handleClick, tab, tabs]);

  return (
    <div className={styles.tabs}>
      {renderTabs}
    </div>
  );
};

export default Tabs;
