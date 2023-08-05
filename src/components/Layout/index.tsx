import Footer from 'components/Footer';
import { LayoutProps } from './types';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import styles from './layout.module.css';
import { useWindowSize } from 'hooks/useWindowSize';
import { useMemo } from 'react';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const size = useWindowSize();

  const smallView = useMemo(() => (
    <div className={styles.mobileLayout}>
      <Navbar />
      <div className='view'>{children}</div>
      <Footer />
    </div>
  ), [children]);

  const largeView = useMemo(() => (
    <div className={styles.desktopLayout}>
      <Navbar />
      <Sidebar />
      <div className='view'>{children}</div>
      <Footer />
    </div>
  ), [children]);

  const renderView = useMemo(() => {
    if (size.width < 1024) return smallView;
    return largeView;
  }, [largeView, size, smallView]);

  return <>{renderView}</>;
};

export default Layout;
