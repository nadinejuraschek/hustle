import styles from './footer.module.css';

const Footer = (): JSX.Element => (
  <footer className={styles.footer}>
    <span>© {new Date().getFullYear()}</span>
    <a href='https://github.com/nadinejuraschek'>Nadine Pesso</a>
  </footer>
);

export default Footer;
