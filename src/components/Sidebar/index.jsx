// TRANSLATION
import { useTranslation } from 'react-i18next';

// COMPONENTS
import { NavLink } from 'react-router-dom';
import LanguageButtons from 'components/LanguageButtons';

// STYLES
import styles from './sidebar.module.css';

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.sidebar}>
      <div className={styles.links}>
        <NavLink
          exact
          to='/'
          activeClassName={styles.active}
        >
          {t('NAV.DASHBOARD')}
        </NavLink>
        {/* <NavLink
          exact
          to='/create'
          activeClassName={styles.active}
        >
          {t('NAV.ADD')}
        </NavLink> */}
        <NavLink
          to='/playground'
          activeClassName={styles.active}
        >
          Playground
        </NavLink>
      </div>
      <LanguageButtons />
    </div>
  );
};

export default Sidebar;