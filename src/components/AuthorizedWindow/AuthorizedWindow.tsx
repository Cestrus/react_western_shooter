import React, { useState } from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import styles from './AuthorizedWindow.module.css';
import { CornerMain } from '../CornerMain/CornerMain';
import { Button } from '../Button/Button';
import { setPlayerName, setIsAuthorized, setNewGame } from '../../store/playerSlice';

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
    dispatch(setNewGame());
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ x: '70vw' }}
      animate={{ x: 0 }}
      exit={{ x: '70vw' }}
      transition={{
        delay: 0.5,
        duration: 0.6,
        type: 'spring',
      }}
    >
      <div className={styles.titleWrap}>
        <h2 className={styles.title}>WESTERN SHOT</h2>
      </div>
      <form className={styles.form} onSubmit={submitHandler}>
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
        <Button type='submit' className={styles.button}>
          SUBMIT
        </Button>
      </form>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.1 }}
        className={cn(styles.shot, styles.shot_1)}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.1 }}
        className={cn(styles.shot, styles.shot_2)}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.1 }}
        className={cn(styles.shot, styles.shot_3)}
      ></motion.div>
      <CornerMain position='top-left' className={styles.corner} />
      <CornerMain position='top-right' className={styles.corner} />
      <CornerMain position='bottom-left' className={styles.corner} />
      <CornerMain position='bottom-right' className={styles.corner} />
    </motion.div>
  );
};
