// REACT
import { useContext, useEffect, useState } from 'react';

// STYLES
import styles from './filter.module.css';

// CONTEXT
import { GlobalContext } from 'context/GlobalContext';

// ICONS
import { Plus } from 'components/Icon';
import { Save } from 'components/Icon';
import { ReactComponent as ChevronDown } from 'assets/icons/chevron-down.svg';

const Filter = ({ handleList }) => {
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
  useEffect(() => {
    if (selectedJob.value === '') {
      handleList(transactions);
    } else {
      const filteredList = transactions.filter(transaction => transaction.job === selectedJob.value);
      handleList(filteredList);
    };
  }, [transactions, selectedJob]);

  return (
    <div className={styles.filter}>
      <div className={styles.filterBtn} onClick={() => handleDropdown()}>
        {selectedJob.label}
        <ChevronDown className={styles.down} />
      </div>
      {dropdown && (
        <div className={styles.dropdown}>
          <div
            className={styles.item}
            onClick={() => handleSelectedJob({ label: 'All Jobs', value: '' })}
          >
            All Jobs
          </div>
          {jobs.length > 1 &&
            jobs.map((job, index) => {
              return (
                <div
                  className={styles.item}
                  key={index}
                  onClick={() => handleSelectedJob(job)}
                >
                  {job.label}
                </div>
              );
            })}
          {jobForm ? (
            <div className={styles.formItem}>
              <input
                className={styles.input}
                placeholder='Neue Tätigkeit'
                onChange={handleInputChange}
                value={inputValue.label}
              />
              <Save className={styles.icon} onClick={handleJobSave} />
            </div>
          ) : (
            <div className={styles.addItem} onClick={() => setJobForm(true)}>
              <Plus className={styles.icon} />
              <span>Add Job</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Filter;
