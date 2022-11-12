import React from 'react';
import CornerMain from '../../components/CornerMain/CornerMain';

import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <CornerMain position='bottom-left' />

      <CornerMain position='bottom-right' />
    </footer>
  );
};

export default Footer;
