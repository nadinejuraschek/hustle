// REACT
import { useState } from 'react';

// DEPENDENCIES


// STYLES
import styles from './filter.module.css';

const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(0);

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
      Choose Job...
      <div className={styles.dropdown}>

      </div>
    </div>
  );
};

export default Dropdown;