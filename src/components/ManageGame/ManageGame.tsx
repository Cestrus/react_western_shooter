import React, { MouseEventHandler } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactSVG } from 'react-svg';
import cn from 'classnames';

import play from './play.svg';
import pause from './pause.svg';

import { Button } from '../Button/Button';
import styles from './ManageGame.module.css';
import { IManageGameProps } from './ManageGame.prop';
import { RootState } from '../../store/store';
import { setIsPaused, setPlaying } from '../../store/playerSlice';

export const ManageGame: React.FC<IManageGameProps> = () => {
  const isPaused = useSelector((state: RootState) => state.player.isPaused);
  const dispatch = useDispatch();

  const pausedHandler: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(setIsPaused());
  };
  const playingHandler: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(setPlaying());
  };

  return (
    <div className={styles.container}>
      <>
        {isPaused && (
          <Button className={styles.button} onClick={playingHandler}>
            <ReactSVG src={play} className={styles.svg} />
          </Button>
        )}
        {!isPaused && (
          <Button className={styles.button} onClick={pausedHandler}>
            <ReactSVG src={pause} className={cn(styles.svg, styles.pause)} />
          </Button>
        )}
      </>
    </div>
  );
};
