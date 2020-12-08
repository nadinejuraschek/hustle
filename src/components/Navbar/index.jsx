// REACT
import { useState } from 'react';

// TRANSLATION
import { useTranslation } from 'react-i18next';

// COMPONENTS
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import LanguageButtons from 'components/LanguageButtons';

// STYLES
import styles from './nav.module.css';

const Navbar = () => {
  const { t } = useTranslation();
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>hustle</div>
      <div
        className={`${styles.menu} ${openNav ? styles.open : ''}`}
        onClick={() => setOpenNav(true)}
      >
        <div className={styles.burgerLines}></div>
      </div>
      <Drawer open={openNav} onClose={() => setOpenNav(false)}>
        <div className={styles.sidenav}>
          <div className={styles.links}>
            <NavLink
              exact
              to='/'
              activeClassName={styles.active}
              onClick={() => setOpenNav(false)}
            >
              {t('NAV.DASHBOARD')}
            </NavLink>
            {/* <NavLink
              exact
              to='/create'
              activeClassName={styles.active}
              onClick={() => setOpenNav(false)}
            >
              {t('NAV.ADD')}
            </NavLink> */}
            <NavLink
              to='/playground'
              activeClassName={styles.active}
              onClick={() => setOpenNav(false)}
            >
              Playground
            </NavLink>
          </div>
          <LanguageButtons />
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
