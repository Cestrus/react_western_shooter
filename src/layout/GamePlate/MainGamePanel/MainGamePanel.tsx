import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';
import { useSound } from 'use-sound';
import { motion } from 'framer-motion';

import styles from './MainGamePanel.module.css';
import { IMainGamePlateProps } from './MainGamePanel.prop';
import { RootState } from '../../../store/store';
import { ShootingType, setShotCoord, missTarget, removeBulletFromGun } from '../../../store/shootingSlice';
import { SHOT_HEIGHT, SHOT_WIDTH } from '../../../utils/constants';
import { getRandomValue } from '../../../utils/utils';
import { TargetsPlate } from '../../../components';

const MainGamePanel: React.FC<IMainGamePlateProps> = () => {
  const shootResult = useSelector((state: RootState) => state.shooting.shootResult);
  const isReloading = useSelector((state: RootState) => state.shooting.isReloading);
  const coord = useSelector((state: RootState) => state.shooting.shotCoord);
  const isPaused = useSelector((state: RootState) => state.player.isPaused);

  const [shot] = useSound('./audio/sounds/shot.wav');

  const dispatch = useDispatch();

  const shotHandler: React.MouseEventHandler<HTMLDivElement> = (ev) => {
    if (!isReloading && !isPaused) {
      shot();
      const coordX = ev.clientX - SHOT_WIDTH / 2;
      const coordY = ev.clientY - SHOT_HEIGHT / 2;

      dispatch(setShotCoord({ top: coordY, left: coordX }));
      dispatch(missTarget());
      dispatch(removeBulletFromGun());
    }
  };

  const renderShot: React.FC<boolean> = (isHit: boolean) => {
    const shotStyle = isHit ? styles.hit : styles[`miss_${getRandomValue(4, 1)}`];

    return (
      <motion.div
        className={cn(styles.shot, shotStyle)}
        style={{ top: coord?.top, left: coord?.left }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1 }}
      ></motion.div>
    );
  };

  return (
    <div className={styles.container} onClick={shotHandler}>
      {shootResult === ShootingType.HIT && renderShot(true)}
      {shootResult === ShootingType.MISSING && renderShot(false)}
      <TargetsPlate />
    </div>
  );
};

export default MainGamePanel;
