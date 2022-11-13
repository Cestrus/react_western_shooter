import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import styles from './CounterMoney.module.css';
import { ICountMoneyProps } from './CounterMoney.prop';

const CounterMoney: React.FC<ICountMoneyProps> = () => {
  const moneyValue = useSelector((state: RootState) => state.money.moneyValue);

  return (
    <div className={styles.counter}>
      <h2 className={styles.text}>${moneyValue}</h2>
    </div>
  );
};

export default CounterMoney;
