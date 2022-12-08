import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSound } from 'use-sound';

import styles from './MainGamePanel.module.css';
import { IMainGamePlateProps } from './MainGamePanel.prop';
import { RootState } from '../../../store/store';
import { ShootingType, setShotCoord, missTarget, removeBulletFromGun, setSilence } from '../../../store/shootingSlice';
import { SHOT_HEIGHT, SHOT_WIDTH } from '../../../utils/constants';
import { ShotHole, TargetsPlate } from '../../../components';

const MainGamePanel: React.FC<IMainGamePlateProps> = () => {
  const isReloading = useSelector((state: RootState) => state.shooting.isReloading);
  const shootResult = useSelector((state: RootState) => state.shooting.shootResult);
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
    setTimeout(() => {
      dispatch(setSilence());
    }, 800);
  };

  return (
    <div className={styles.container} onClick={shotHandler}>
      {shootResult === ShootingType.HIT && <ShotHole hit={true} />}
      {shootResult === ShootingType.MISSING && <ShotHole hit={false} />}
      <TargetsPlate />
    </div>
  );
};

export default MainGamePanel;
