// STYLES
import styles from './graph.module.css';

const Graph = ({ total }) => {
  return (
    <div className={styles.container}>
      <div className={styles.graph}></div>
      <div className={styles.total}>
        <span className={styles.label}>Balance:</span>
        <span>{total}</span>
      </div>
    </div>
  );
};

export default Graph;