// REACT
import { useState } from 'react';

// DEPENDENCIES

// COMPONENTS
import Graph from 'components/Graph';
import Filter from 'components/Filter';
import List from 'components/List';

// STYLES
import styles from './details.module.css';

// HOOKS
import { useWindowSize } from 'hooks/useWindowSize';

const Details = () => {
  const size = useWindowSize();
  const [ list, setList ] = useState([]);

  return (
    <>
    <Graph list={list} />
    <div className={styles.container}>
      <Filter handleList={setList} />
      <List list={list} />
    </div>
    </>
  );
};

export default Details;