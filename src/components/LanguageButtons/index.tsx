import { ReactComponent as DE } from 'assets/icons/de.svg';
import { ReactComponent as EN } from 'assets/icons/en.svg';
import styles from './lang.module.css';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

const LangBtn = (): JSX.Element => {
  const { i18n } = useTranslation();

  const changeLanguage = useCallback((lng: string): void => {
    i18n.changeLanguage(lng);
  }, [i18n]);

  return (
    <div className={styles.languages}>
      <button onClick={() => changeLanguage('de')}>
        <DE className={styles.lang} /> DE
      </button>
      <button onClick={() => changeLanguage('en')}>
        <EN className={styles.lang} /> EN
      </button>
    </div>
  );
};

export default LangBtn;
