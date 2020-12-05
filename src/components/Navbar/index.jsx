// REACT
import { useState } from 'react';

// COMPONENTS
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';

// ICONS
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

// STYLES
import styles from './nav.module.css';

const Navbar = () => {
  const [ openNav, setOpenNav ] = useState(false);

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo} />
        <div className={styles.links}>
          <NavLink exact to='/' activeClassName={styles.active}>Dashboard</NavLink>
          <NavLink to='/create' activeClassName={styles.active}>Playground</NavLink>
        </div>
        <MenuRoundedIcon className={styles.menuBtn} onClick={() => setOpenNav(true)} />
        <Drawer
          open={openNav}
          onClose={() => setOpenNav(false)}
        >
          <div className={styles.sidenav}>
            <NavLink exact to='/' activeClassName={styles.active}>Dashboard</NavLink>
            <NavLink to='/create' activeClassName={styles.active}>Playground</NavLink>
          </div>
        </Drawer>
      </nav>
    </div>
  );
};

export default Navbar;