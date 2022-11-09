import { useContext, useEffect, useState } from 'react';

import Dropdown from './Dropdown';
import { Filter as FilterIcon } from '../Icon';
import { FilterProps } from './types';
import { GlobalContext } from 'context/GlobalContext';
import { Job } from '../../context/types';
import styles from './filter.module.css';
import { useTranslation } from 'react-i18next';

const Filter = ({ handleList }: FilterProps): JSX.Element => {
  const { t } = useTranslation();
  const { jobs, transactions } = useContext(GlobalContext);

  const noJobsAvailable = !jobs || jobs.length === 0;

  const [jobForm, setJobForm] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [selectedJob, setSelectedJob] = useState({
    color: '',
    label: t('FORM.JOB.ALL'),
    value: '',
    income: 0,
  });

  const handleDropdown = (): void => {
    if (!dropdown) {
      setDropdown(true);
    } else {
      setJobForm(false);
      setDropdown(false);
    }
  };

  const handleSelectedJob = (job: Job): void => {
    setSelectedJob(job);
    setDropdown(false);
  };

  // FILTER TRANSACTIONS logic
  useEffect(() => {
    if (selectedJob.value === '') {
      handleList(transactions);
    } else {
      const filteredList = transactions.filter(
        transaction => transaction.job === selectedJob.value
      );
      handleList(filteredList);
    }
  }, [handleList, transactions, selectedJob]);

  return (
    <div className={styles.filter}>
      {!noJobsAvailable && (
        <div
          className={`${styles.filterBtn} ${
            selectedJob.value !== '' && styles.active
          }`}
          onClick={() => handleDropdown()}
        >
          <FilterIcon className={styles.filterIcon} />
        </div>
      )}
      {dropdown && (
        <Dropdown
          handleSelectedJob={handleSelectedJob}
          jobForm={jobForm}
          setJobForm={setJobForm}
        />
      )}
    </div>
  );
};

export default Filter;
