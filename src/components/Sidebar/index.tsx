import { Chart } from 'components/Icon';
import LanguageButtons from 'components/LanguageButtons';
import { NavLink } from 'react-router-dom';
import styles from './sidebar.module.css';
import { useTranslation } from 'react-i18next';

const Sidebar = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={styles.sidebar}>
      <div className={styles.links}>
        {/* @ts-ignore */}
        <NavLink activeclassname={styles.active} to='/'>
          <Chart className={styles.icon} />
          {t('NAV.DASHBOARD')}
        </NavLink>
      </div>
      <LanguageButtons />
    </div>
  );
};

export default Sidebar;
