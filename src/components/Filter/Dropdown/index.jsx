import AddJobForm from './AddJobForm';
import { GlobalContext } from 'context/GlobalContext';
import styles from './dropdown.module.css';
import { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const Dropdown = ({ handleSelectedJob, jobForm, setJobForm }) => {
  const { t } = useTranslation();
  const { jobs } = useContext(GlobalContext);

  const renderItems = useMemo(() => {
    return jobs.map((job, index) => (
      <div
        className={styles.item}
        key={index}
        onClick={() => handleSelectedJob(job)}
      >
        {job.label}
      </div>
    ));
  }, [handleSelectedJob, jobs]);

  return (
    <div className={styles.dropdown}>
      <div
        className={styles.item}
        onClick={() =>
          handleSelectedJob({ label: t('FORM.JOB.ALL'), value: '' })
        }
      >
        {t('FORM.JOB.ALL')}
      </div>
      {renderItems}
      <AddJobForm jobForm={jobForm} setJobForm={setJobForm} />
    </div>
  );
};

export default Dropdown;
