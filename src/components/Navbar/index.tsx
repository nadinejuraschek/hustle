import { Chart } from 'components/Icon';
import Drawer from '@material-ui/core/Drawer';
import LanguageButtons from 'components/LanguageButtons';
import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = (): JSX.Element => {
  const { t } = useTranslation();
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>hustle</div>
      <div
        className={`${styles.menu} ${openNav ? styles.open : ''}`}
        onClick={() => setOpenNav(!openNav)}
      >
        <div className={styles.burgerLines}></div>
      </div>
      <Drawer open={openNav} onClose={() => setOpenNav(false)}>
        <div className={styles.sidenav}>
          <div className={styles.links}>
            <NavLink
              // @ts-ignore
              activeclassname={styles.active}
              onClick={() => setOpenNav(false)}
              to='/'
            >
              <>
                <Chart className={styles.icon} />
                {t('NAV.DASHBOARD')}
              </>
            </NavLink>
          </div>
          <LanguageButtons />
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
