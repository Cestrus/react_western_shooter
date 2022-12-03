import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import cn from 'classnames';
import useSound from 'use-sound';

import { TURN_SPEED } from '../../utils/constants';

import { IShooterPanelProps } from './ShooterPanel.prop';
import styles from './ShooterPanel.module.css';
import { hitTarget, removeBulletFromGun, setShotCoord } from '../../store/shootingSlice';
import { SHOT_WIDTH, SHOT_HEIGHT } from '../../utils/constants';
import { RootState } from '../../store/store';
import { addMoneyValue } from '../../store/playerSlice';

export const ShooterPanel: React.FC<IShooterPanelProps> = ({ target }) => {
  const isReloading = useSelector((state: RootState) => state.shooting.isReloading);
  const isPaused = useSelector((state: RootState) => state.player.isPaused);
  const dispatch = useDispatch();

  const [shot] = useSound('./audio/sounds/shot.wav');

  const shootHandler: React.MouseEventHandler<HTMLDivElement> = (ev) => {
    ev.stopPropagation();

    if (!isReloading && target && !isPaused) {
      shot();
      const coordX = ev.clientX - SHOT_WIDTH / 2;
      const coordY = ev.clientY - SHOT_HEIGHT / 2;

      dispatch(setShotCoord({ top: coordY, left: coordX }));
      dispatch(hitTarget());
      dispatch(removeBulletFromGun());
      dispatch(addMoneyValue(target.wanted!.price));
    }
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.plank}
        animate={!isPaused && target && { rotateY: [0, 88, 0, 88, 0] }}
        transition={{ duration: TURN_SPEED, repeat: 0 }}
      >
        {/* {!target && <div className={styles.guns}></div>} */}
        {target && (
          <motion.div
            className={styles.paper}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: TURN_SPEED / 4, duration: TURN_SPEED / 2 }}
          >
            <h4 className={styles.title}>WANTED</h4>
            <div className={cn(styles.shooter, styles[`target_${target.wanted!.name}`])}>
              <div
                className={styles.bloodZone}
                style={{
                  width: `${target.wanted!.bloodZoneWidht}rem`,
                  height: `${target.wanted!.bloodZoneHeight}rem`,
                  top: `${target.wanted!.bloodZoneTop}rem`,
                  left: `${target.wanted!.bloodZoneLeft}rem`,
                }}
                onClick={shootHandler}
              ></div>
            </div>
            <h5 className={styles.price}>${target?.wanted!.price}</h5>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
