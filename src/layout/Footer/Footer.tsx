import React from 'react';
import { CornerMain } from '../../components/index';
import { CounterMoney } from '../../components/index';

import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <CornerMain position='bottom-left' />
      <CounterMoney className={styles.counter} />
      <CornerMain position='bottom-right' />
    </footer>
  );
};

export default Footer;
