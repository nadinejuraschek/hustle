// REACT
import { useContext, useEffect, useState } from 'react';

// DEPENDENCIES

// COMPONENTS
import { Plus } from 'components/Icon';
import { Save } from 'components/Icon';
import Graph from 'components/Graph';
import List from 'components/List';

// STYLES
import styles from './details.module.css';

// CONTEXT
import { GlobalContext } from 'context/GlobalContext';

const Details = () => {
  const { jobs, transactions, addJob } = useContext(GlobalContext);

  // Dropdown logic
  const [ dropdown, setDropdown ] = useState(false);
  const [ selectedJob, setSelectedJob ] = useState({ label: "All Jobs", value: '' });

  const handleDropdown = () => {
    if (dropdown === false) {
      setDropdown(true);
    } else {
      setJobForm(false);
      setDropdown(false);
    };
  };

  const handleSelectedJob = (label) => {
    setSelectedJob(label);
    setDropdown(false);
  };

  // ADD JOB logic
  const [ inputValue, setInputValue ] = useState('');
  const [ jobForm, setJobForm ] = useState(false);

  const handleInputChange = event => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleJobSave = event => {
    event.preventDefault();
    const data = { label: inputValue, value: inputValue.toLowerCase() };
    addJob(data);
    setJobForm(false);
  };

  // FILTER TRANSACTIONS logic
  const [ list, setList ] = useState([]);
  useEffect(() => {
    if (selectedJob.value === '') {
      setList(transactions);
    } else {
      const filteredList = transactions.filter(transaction => transaction.job === selectedJob.value);
      setList(filteredList);
    };
  }, [transactions, selectedJob]);

  return (
    <>
    <Graph list={list} />
    <div className={styles.container}>
      <div className={styles.filter}>
        <div
          className={styles.filterBtn}
          onClick={() => handleDropdown()}
        >
          {selectedJob.label}
        </div>
        { dropdown &&
          <div className={styles.dropdown}>
            <div className={styles.item} onClick={() => handleSelectedJob({ label: "All Jobs", value: '' })}>
              All Jobs
            </div>
            {
              jobs.length > 1 && jobs.map((job, index) => {
                return (
                  <div className={styles.item} key={index} onClick={() => handleSelectedJob(job)}>
                    {job.label}
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
      <List list={list} />
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