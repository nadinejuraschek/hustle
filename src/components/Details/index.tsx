import AddBar from 'components/AddBar';
import Filter from 'components/Filter';
import Graph from 'components/Graph';
import List from 'components/List';
import styles from './details.module.css';
import { useMemo, useState } from 'react';
import { useWindowSize } from 'hooks/useWindowSize';

const Details = (): JSX.Element => {
  const size = useWindowSize();
  const [list, setList] = useState([]);

  const smallView = useMemo(() => (
    <>
      <Graph list={list} />
      <div className={styles.listContainer}>
        <Filter handleList={setList} />
        <List list={list} />
      </div>
    </>
  ), [list]);

  const mediumView = useMemo(() => (
    <div className={styles.desktopGrid}>
      <Graph list={list} />
      <div className={styles.listContainer}>
        <Filter handleList={setList} />
        <List list={list} />
      </div>
    </div>
  ), [list]);

  const largeView = useMemo(() => (
    <div className={styles.largeGrid}>
      <Graph list={list} />
      <div className={styles.listContainer}>
        <Filter handleList={setList} />
        <List list={list} />
      </div>
      <AddBar />
    </div>
  ), [list]);

  const renderContent = useMemo(() => {
    if (size.width < 1024) {
      return smallView;
    }

    if (size.width < 1280) {
      return mediumView;
    }

    return largeView;
  }, [largeView, mediumView, size, smallView]);

  return (
    <>
      {renderContent}
    </>
  );
};

export default Details;
