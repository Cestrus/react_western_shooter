import React from 'react';
import CornerMain from '../../components/CornerMain/CornerMain';
import CounterMoney from '../../components/CounterMoney/CounterMoney';

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
