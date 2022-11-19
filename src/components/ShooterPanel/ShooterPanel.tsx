import React from 'react';

import styles from './ShooterPanel.module.css';
import { IShooterPanelProps } from './ShooterPanel.prop';
import { useDispatch } from 'react-redux';
import { hitTarget, setShotCoord } from '../../store/shootingSlice';
import { SHOT_WINDOW_WIDTH, SHOT_WINDOW_HEIGHT } from '../../utils/constants';

export const ShooterPanel: React.FC<IShooterPanelProps> = () => {
  const dispatch = useDispatch();

  const shootHandler: React.MouseEventHandler<HTMLDivElement> = (ev) => {
    ev.stopPropagation();

    const coordX = ev.clientX - SHOT_WINDOW_WIDTH / 2;
    const coordY = ev.clientY - SHOT_WINDOW_HEIGHT / 2;
    console.log('hit', coordX, coordY);

    dispatch(setShotCoord({ top: coordY, left: coordX }));
    dispatch(hitTarget());
  };

  return (
    <div className={styles.container}>
      <div className={styles.plank}>
        <div className={styles.paper}>
          <h4 className={styles.title}>WANTED</h4>
          <div className={styles.shooter}>
            <div className={styles.bloodZone} onClick={shootHandler}></div>
          </div>
          <h5 className={styles.price}>${100}</h5>
        </div>
      </div>
    </div>
  );
};
