// REACT
import { useContext, useState } from 'react';

// DEPENDENCIES
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import SaveRoundedIcon from '@material-ui/icons/SaveRounded';

// STYLES
import styles from './details.module.css';

// CONTEXT
import { JobContext } from 'context/JobContext';

const Details = () => {
  const { jobs, setJobs } = useContext(JobContext);
  const [ inputValue, setInputValue ] = useState({
    label: '', value: '',
  });
  const [ dropdown, setDropdown ] = useState(false);
  const [ jobForm, setJobForm ] = useState(false);

  const tabs = [
    { label: 'Babysitting', value: 'babysitting' },
    { label: 'Etsy', value: 'etsy' },
    { label: 'Kleiderverkauf', value: 'kleiderverkauf' },
    { label: 'Tutoring', value: 'tutoring' },
    { label: 'Investitionen', value: 'investitionen' },
    { label: 'Proofreading', value: 'proofreading' },
  ];

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
    setInputValue(input => ({ label: value, value: value }));
  };

  const handleJobSave = event => {
    event.preventDefault();
    console.log('Input saved: ' + inputValue);
    setJobs(inputValue);
    setJobForm(false);
  };

  return (
    <>
    <div className={styles.graph}></div>
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
                <SaveRoundedIcon
                  onClick={handleJobSave}
                />
              </div>
              :
              <div
                className={styles.addItem}
                onClick={() => setJobForm(true)}
              >
                <AddCircleOutlineRoundedIcon />
                <span>Add Job</span>
              </div>
            }
          </div>
        }
      </div>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <div className={styles.details}>
            <div className={styles.job}>Kleiderverkauf</div>
            <div className={styles.source}>eBay</div>
          </div>
          <div className={styles.amount}>
            + 50.00 €
          </div>
        </div>
        <div className={styles.listItem}>
          <div className={styles.details}>
            <div className={styles.job}>Nachhilfe</div>
            <div className={styles.source}>Sofatutor</div>
          </div>
          <div className={styles.amount}>
            + 20.00 €
          </div>
        </div>
        <div className={styles.listItem}>
          <div className={styles.details}>
            <div className={styles.job}>Nachhilfe</div>
            <div className={styles.source}>Sofatutor</div>
          </div>
          <div className={styles.amount}>
            + 20.00 €
          </div>
        </div>
        <div className={styles.listItem}>
          <div className={styles.details}>
            <div className={styles.job}>Nachhilfe</div>
            <div className={styles.source}>Sofatutor</div>
          </div>
          <div className={styles.amount}>
            + 20.00 €
          </div>
        </div>
      </div>
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