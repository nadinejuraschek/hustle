// TRANSLATION
import i18n from 'i18n';

// STYLES
import styles from './lang.module.css';

// ICONS
import { ReactComponent as DE } from 'assets/icons/de.svg';
import { ReactComponent as EN } from 'assets/icons/en.svg';

const LangBtn = () => {
  const changeLanguage = (lng) => {
    console.log('changeLang ', 'change language');
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.languages}>
      <button onClick={() => changeLanguage('de')}><DE className={styles.lang} /> DE</button>
      <button onClick={() => changeLanguage('en')}><EN className={styles.lang} /> EN</button>
    </div>
  );
};

export default LangBtn;