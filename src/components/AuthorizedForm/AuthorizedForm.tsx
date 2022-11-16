import React, { useState } from 'react';
import cn from 'classnames';

import styles from './AuthorizedForm.module.css';
import { CornerMain } from '../CornerMain/CornerMain';

export const AuthorizedForm: React.FC = () => {
  const [name, setName] = useState<string>('');

  const changeNameHandler: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
    setName(ev.target.value);
    console.log(ev.target.value);
  };

  const submitHandler: React.FormEventHandler = (ev) => {
    ev.preventDefault();
    console.log(ev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleWrap}>
        <h2 className={styles.title}>WESTERN SHOT</h2>
      </div>
      <form className={styles.form}>
        <label className={styles.label}>ENTER YOUR NAME</label>
        <input
          type='text'
          placeholder='Billy The Kid'
          value={name}
          onChange={changeNameHandler}
          className={styles.input}
        />
        <button type='submit' onSubmit={submitHandler} className={styles.button}>
          SUBMIT
        </button>
      </form>
      <div className={cn(styles.shot, styles.shot_1)}></div>
      <div className={cn(styles.shot, styles.shot_2)}></div>
      <div className={cn(styles.shot, styles.shot_3)}></div>
      .
      <CornerMain position='top-left' className={styles.corner} />
      <CornerMain position='top-right' className={styles.corner} />
      <CornerMain position='bottom-left' className={styles.corner} />
      <CornerMain position='bottom-right' className={styles.corner} />
    </div>
  );
};
