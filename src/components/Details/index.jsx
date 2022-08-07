import AddBar from 'components/AddBar';
import Filter from 'components/Filter';
import Graph from 'components/Graph';
import List from 'components/List';
import styles from './details.module.css';
import { useState } from 'react';
import { useWindowSize } from 'hooks/useWindowSize';

const Details = () => {
  const size = useWindowSize();
  const [list, setList] = useState([]);

  return (
    <>
      {size.width < 1024 ? (
        <>
          <Graph list={list} />
          <div className={styles.listContainer}>
            <Filter handleList={setList} />
            <List list={list} />
          </div>
        </>
      ) : size.width < 1280 ? (
        <div className={styles.desktopGrid}>
          <Graph list={list} />
          <div className={styles.listContainer}>
            <Filter handleList={setList} />
            <List list={list} />
          </div>
        </div>
      ) : (
        <div className={styles.largeGrid}>
          <Graph list={list} />
          <div className={styles.listContainer}>
            <Filter handleList={setList} />
            <List list={list} />
          </div>
          <AddBar />
        </div>
      )}
    </>
  );
};

export default Details;
