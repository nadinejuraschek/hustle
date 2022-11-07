import AddBar from 'components/AddBar';
import Filter from 'components/Filter';
import Graph from 'components/Graph';
import List from 'components/List';
import styles from './details.module.css';
import { useState } from 'react';
import { useWindowSize } from 'hooks/useWindowSize';

const Details = (): JSX.Element => {
  const size = useWindowSize();
  const [list, setList] = useState([]);

  const smallView = (
    <>
      <Graph list={list} />
      <div className={styles.listContainer}>
        <Filter handleList={setList} />
        <List list={list} />
      </div>
    </>
  );

  const mediumView = (
    <div className={styles.desktopGrid}>
      <Graph list={list} />
      <div className={styles.listContainer}>
        <Filter handleList={setList} />
        <List list={list} />
      </div>
    </div>
  );

  const largeView = (
    <div className={styles.largeGrid}>
      <Graph list={list} />
      <div className={styles.listContainer}>
        <Filter handleList={setList} />
        <List list={list} />
      </div>
      <AddBar />
    </div>
  );

  return (
    <>
      {size.width < 1024
        ? smallView
        : size.width < 1280
        ? mediumView
        : largeView}
    </>
  );
};

export default Details;
