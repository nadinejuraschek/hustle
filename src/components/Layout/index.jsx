// STYLES
import styles from './layout.module.css';

// COMPONENTS
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';

// HOOKS
import { useWindowSize } from 'hooks/useWindowSize';

const Layout = ({ children }) => {
  const size = useWindowSize();

  return (
    <>
    {
      size.width < 1024 ?
      <div className={styles.mobileLayout}>
        <Navbar />
        <div className='view'>
          { children }
        </div>
        <Footer />
      </div>
      :
      <div className={styles.desktopLayout}>
        <Navbar />
        <Sidebar />
        <div className='view'>
          { children }
        </div>
        <Footer />
      </div>
    }
    </>
  );
};

export default Layout;