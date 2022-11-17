import React, { useState } from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

import styles from './AuthorizedWindow.module.css';
import { CornerMain } from '../CornerMain/CornerMain';
import { Button } from '../Button/Button';
import { setPlayerName, setIsAuthorized } from '../../store/playerSlice';

export const AuthorizedWindow: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [isEmptyName, setIsEmptyName] = useState<boolean>(false);
  const dispatch = useDispatch();

  const changeNameHandler: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
    setName(ev.target.value);
  };

  const submitHandler: React.FormEventHandler = (ev) => {
    ev.preventDefault();
    if (!name.trim()) {
      setIsEmptyName(true);
      return;
    }

    setIsEmptyName(false);
    dispatch(setPlayerName(name));
    dispatch(setIsAuthorized(true));
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
          className={cn(styles.input, {
            [styles.error]: isEmptyName,
          })}
        />
        <Button type='submit' onClick={submitHandler} className={styles.button}>
          SUBMIT
        </Button>
      </form>
      <div className={cn(styles.shot, styles.shot_1)}></div>
      <div className={cn(styles.shot, styles.shot_2)}></div>
      <div className={cn(styles.shot, styles.shot_3)}></div>
      <CornerMain position='top-left' className={styles.corner} />
      <CornerMain position='top-right' className={styles.corner} />
      <CornerMain position='bottom-left' className={styles.corner} />
      <CornerMain position='bottom-right' className={styles.corner} />
    </div>
  );
};
