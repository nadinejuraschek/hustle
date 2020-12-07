// REACT
import { useEffect, useState } from 'react';

// STYLES
import styles from './graph.module.css';

const Graph = ({ list }) => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    let total = 0;
    list.map(transaction => {
      return total = total + parseInt(transaction.amount);
    });
    setBalance(total);
  }, [list]);

  return (
    <div className={styles.container}>
      <div className={styles.graph}></div>
      <div className={styles.total}>
        <span className={styles.label}>Balance:</span>
        <span>{balance} €</span>
      </div>
    </div>
  );
};

export default Graph;