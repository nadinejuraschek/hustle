// REACT
import { useContext, useState } from 'react';

// DEPENDENCIES

// COMPONENTS
import { Plus } from 'components/Icon';
import { Save } from 'components/Icon';
import Graph from 'components/Graph';
import List from 'components/List';

// STYLES
import styles from './details.module.css';

// CONTEXT
import { JobContext } from 'context/JobContext';
import { IncomeProvider } from 'context/IncomeContext';

const Details = () => {
  const { jobs, setJobs } = useContext(JobContext);
  const [ inputValue, setInputValue ] = useState('');
  const [ dropdown, setDropdown ] = useState(false);
  const [ jobForm, setJobForm ] = useState(false);

  console.log(jobs);

  const handleDropdown = () => {
    if (dropdown === false) {
      setDropdown(true);
    } else {
      setJobForm(false);
      setDropdown(false);
    };
  };

  const handleInputChange = event => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleJobSave = event => {
    event.preventDefault();
    const data = { label: inputValue, value: inputValue.toLowerCase() };
    setJobs(prevValue => ({
      ...prevValue,
      ...data
    }));
    setJobForm(false);
  };

  return (
    <>
    <Graph />
    <div className={styles.container}>
      <div className={styles.filter}>
        <div
          className={styles.filterBtn}
          onClick={() => handleDropdown()}
        >
          All Jobs
        </div>
        { dropdown &&
          <div className={styles.dropdown}>
            {
              jobs.length > 1 && jobs.map((job, index) => {
                return (
                  <div className={styles.item} kex={index}>
                    Item
                  </div>
                );
              })
            }
            {
              jobForm ?
              <div
                className={styles.formItem}
              >
                <input
                  className={styles.input}
                  placeholder="Neue Tätigkeit"
                  onChange={handleInputChange}
                  value={inputValue.label}
                />
                <Save
                  className={styles.icon}
                  onClick={handleJobSave}
                />
              </div>
              :
              <div
                className={styles.addItem}
                onClick={() => setJobForm(true)}
              >
                <Plus className={styles.icon} />
                <span>Add Job</span>
              </div>
            }
          </div>
        }
      </div>
      <IncomeProvider>
        <List />
      </IncomeProvider>
      {/* <div className={styles.tabs}>
        {
          tabs.map((item, index) => {
            return (
              <div
                className={`${styles.tab} ${index === tab ? styles.active : ''}`}
                key={index}
                onClick={() => setTab(index)}
              >
                {item.label}
              </div>
            );
          })
        }
      </div> */}
    </div>
    </>
  );
};

export default Details;