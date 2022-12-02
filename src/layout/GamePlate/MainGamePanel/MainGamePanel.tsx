import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';

import { ShooterPanel } from '../../../components';
import styles from './MainGamePanel.module.css';
import { IMainGamePlateProps } from './MainGamePanel.prop';
import { RootState } from '../../../store/store';
import { ShootingType, setShotCoord, missTarget, removeBulletFromGun } from '../../../store/shootingSlice';
import { SHOT_HEIGHT, SHOT_WIDTH } from '../../../utils/constants';
import { getRandomValue } from '../../../utils/utils';

const MainGamePanel: React.FC<IMainGamePlateProps> = () => {
  const shootResult = useSelector((state: RootState) => state.shooting.shootResult);
  const isReloading = useSelector((state: RootState) => state.shooting.isReloading);
  const allTargets = useSelector((state: RootState) => state.targets.allTargets);
  const isPaused = useSelector((state: RootState) => state.player.isPaused);
  const coord = useSelector((state: RootState) => state.shooting.shotCoord);
  const currTarget = useSelector((state: RootState) => state.targets.currTarget);

  const dispatch = useDispatch();

  const shotHandler: React.MouseEventHandler<HTMLDivElement> = (ev) => {
    if (!isReloading && !isPaused) {
      const coordX = ev.clientX - SHOT_WIDTH / 2;
      const coordY = ev.clientY - SHOT_HEIGHT / 2;

      dispatch(setShotCoord({ top: coordY, left: coordX }));
      dispatch(missTarget());
      dispatch(removeBulletFromGun());
    }
  };

  return (
    <div className={styles.container} onClick={shotHandler}>
      {allTargets.map((plate) => (
        <ShooterPanel target={plate.id === currTarget.id ? currTarget : undefined} key={plate.id} />
      ))}
      {shootResult === ShootingType.HIT && (
        <div className={cn(styles.shot, styles.hit)} style={{ top: coord?.top, left: coord?.left }}></div>
      )}
      {shootResult === ShootingType.MISSING && (
        <div
          className={cn(styles.shot, styles[`miss_${getRandomValue(4, 1)}`])}
          style={{ top: coord?.top, left: coord?.left }}
        ></div>
      )}
    </div>
  );
};

export default MainGamePanel;
