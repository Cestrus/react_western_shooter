import React from 'react';
import { CornerMain } from '../../components/index';
import { ManageGame } from '../../components/ManageGame/ManageGame';

import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <CornerMain position='bottom-left' />
      <ManageGame />
      <CornerMain position='bottom-right' />
    </footer>
  );
};

export default Footer;
