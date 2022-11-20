import React from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import { IShooterPanelProps } from './ShooterPanel.prop';
import styles from './ShooterPanel.module.css';
import { hitTarget, setShotCoord } from '../../store/shootingSlice';
import { addMoneyValue } from '../../store/moneySlice';
import { SHOT_WINDOW_WIDTH, SHOT_WINDOW_HEIGHT } from '../../utils/constants';

export const ShooterPanel: React.FC<IShooterPanelProps> = ({ target }) => {
  const dispatch = useDispatch();

  const shootHandler: React.MouseEventHandler<HTMLDivElement> = (ev) => {
    ev.stopPropagation();

    const coordX = ev.clientX - SHOT_WINDOW_WIDTH / 2;
    const coordY = ev.clientY - SHOT_WINDOW_HEIGHT / 2;

    dispatch(setShotCoord({ top: coordY, left: coordX }));
    dispatch(hitTarget());
    dispatch(addMoneyValue(target.price));
  };

  return (
    <div className={styles.container}>
      <div className={styles.plank}>
        <div className={styles.paper}>
          <h4 className={styles.title}>WANTED</h4>
          <div className={cn(styles.shooter, styles[`target_${target.name}`])}>
            <div
              className={styles.bloodZone}
              style={{
                width: `${target.bloodZoneWidht}rem`,
                height: `${target.bloodZoneHeight}rem`,
                top: `${target.bloodZoneTop}rem`,
                left: `${target.bloodZoneLeft}rem`,
              }}
              onClick={shootHandler}
            ></div>
          </div>
          <h5 className={styles.price}>${target?.price}</h5>
        </div>
      </div>
    </div>
  );
};

//    bloodZoneTop: 1.2,
// bloodZoneLeft: 1.1,
// bloodZoneWidht: 2.2,
// bloodZoneHeight: 3,
