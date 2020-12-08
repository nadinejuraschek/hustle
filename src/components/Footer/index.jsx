// STYLES
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <span>© { new Date().getFullYear() }</span>
        <a href='https://github.com/nadinejuraschek'>Nadine Juraschek</a>
      </footer>
    </div>
  );
};

export default Footer;