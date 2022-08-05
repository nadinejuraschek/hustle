import { Chart } from '../Icon';
import LanguageButtons from 'components/LanguageButtons';
// COMPONENTS
import { NavLink } from 'react-router-dom';
// STYLES
import styles from './sidebar.module.css';
// TRANSLATION
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.sidebar}>
      <div className={styles.links}>
        <NavLink exact to='/' activeClassName={styles.active}>
          <Chart className={styles.icon} />
          {t('NAV.DASHBOARD')}
        </NavLink>
        {/* <NavLink
          exact
          to='/create'
          activeClassName={styles.active}
        >
          {t('NAV.ADD')}
        </NavLink> */}
      </div>
      <LanguageButtons />
    </div>
  );
};

export default Sidebar;
