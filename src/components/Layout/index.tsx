import Footer from 'components/Footer';
import { LayoutProps } from './types';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import styles from './layout.module.css';
import { useWindowSize } from 'hooks/useWindowSize';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const size = useWindowSize();

  const smallView = (
    <div className={styles.mobileLayout}>
      <Navbar />
      <div className='view'>{children}</div>
      <Footer />
    </div>
  );

  const largeView = (
    <div className={styles.desktopLayout}>
      <Navbar />
      <Sidebar />
      <div className='view'>{children}</div>
      <Footer />
    </div>
  );

  return <>{size.width < 1024 ? smallView : largeView}</>;
};

export default Layout;
