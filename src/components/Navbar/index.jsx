// REACT
import { useState } from 'react';

// COMPONENTS
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';

// STYLES
import styles from './nav.module.css';

const Navbar = () => {
  const [ openNav, setOpenNav ] = useState(false);

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        {/* <AccountBalanceWalletRoundedIcon className={styles.logo} /> */}
        <div className={styles.logo}>hustle</div>
        <div className={`${styles.menu} ${openNav ? styles.open : ""}`} onClick={() => setOpenNav(true)}>
          <div className={styles.burgerLines}></div>
        </div>
        <Drawer
          open={openNav}
          onClose={() => setOpenNav(false)}
        >
          <div className={styles.sidenav}>
            <NavLink exact to='/' activeClassName={styles.active}>
              Dashboard
            </NavLink>
            <NavLink exact to='/create' activeClassName={styles.active}>
              Add Income Source
            </NavLink>
            <NavLink to='/playground' activeClassName={styles.active}>
              Playground
            </NavLink>
          </div>
        </Drawer>
      </nav>
    </div>
  );
};

export default Navbar;