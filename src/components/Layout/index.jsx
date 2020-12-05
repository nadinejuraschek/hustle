// STYLES
import styles from './layout.module.css';

// COMPONENTS
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className='view'>
        { children }
      </div>
      <Footer />
    </div>
  );
};

export default Layout;