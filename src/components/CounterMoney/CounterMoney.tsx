import React from 'react';

import styles from './CounterMoney.module.css';
import { ICountMoneyProps } from './CounterMoney.prop';

const CounterMoney: React.FC<ICountMoneyProps> = () => {
  const DUMMY_MONEY = 250;

  return (
    <div className={styles.counter}>
      <h3 className={styles.text}>${DUMMY_MONEY}</h3>
    </div>
  );
};

export default CounterMoney;
