import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import cn from 'classnames';

import { IShooterPanelProps } from './ShooterPanel.prop';
import styles from './ShooterPanel.module.css';
import { hitTarget, setShotCoord } from '../../store/shootingSlice';
import { addMoneyValue } from '../../store/moneySlice';
import { SHOT_WIDTH, SHOT_HEIGHT } from '../../utils/constants';
import { RootState } from '../../store/store';

export const ShooterPanel: React.FC<IShooterPanelProps> = ({ target }) => {
  const isReloading = useSelector((state: RootState) => state.shooting.isReloading);
  const dispatch = useDispatch();

  const shootHandler: React.MouseEventHandler<HTMLDivElement> = (ev) => {
    ev.stopPropagation();

    if (!isReloading) {
      const coordX = ev.clientX - SHOT_WIDTH / 2;
      const coordY = ev.clientY - SHOT_HEIGHT / 2;

      dispatch(setShotCoord({ top: coordY, left: coordX }));
      dispatch(hitTarget());
      dispatch(addMoneyValue(target.price));
    }
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.plank}
        animate={{ rotateY: [0, 88, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        {true && <div className={styles.guns}></div>}
        {false && (
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
        )}
      </motion.div>
    </div>
  );
};
