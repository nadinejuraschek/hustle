// STYLES
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        © { new Date().getFullYear() } Nadine Juraschek
      </footer>
    </div>
  );
};

export default Footer;