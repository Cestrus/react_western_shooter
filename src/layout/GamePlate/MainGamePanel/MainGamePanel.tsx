import React from 'react';
import { ShooterPanel } from '../../../components';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';

import styles from './MainGamePanel.module.css';
import { IMainGamePlateProps } from './MainGamePanel.prop';
import { RootState } from '../../../store/store';
import { ShootingType, setShotCoord, missTarget } from '../../../store/shootingSlice';
import { SHOT_HEIGHT, SHOT_WIDTH } from '../../../utils/constants';
import { targets } from '../../../utils/targets';

const MainGamePanel: React.FC<IMainGamePlateProps> = () => {
  const shootResult = useSelector((state: RootState) => state.shooting.shootResult);
  const coord = useSelector((state: RootState) => state.shooting.shotCoord);
  const dispatch = useDispatch();

  const shotHandler: React.MouseEventHandler<HTMLDivElement> = (ev) => {
    const coordX = ev.clientX - SHOT_WIDTH / 2;
    const coordY = ev.clientY - SHOT_HEIGHT / 2;

    dispatch(setShotCoord({ top: coordY, left: coordX }));
    dispatch(missTarget());
  };

  const rand = (): number => {
    return Math.floor(1 + Math.random() * 4);
  };

  return (
    <div className={styles.container} onClick={shotHandler}>
      {targets.map((target) => (
        <ShooterPanel target={target} key={target.name} />
      ))}
      {shootResult === ShootingType.HIT && (
        <div className={cn(styles.shot, styles.hit)} style={{ top: coord?.top, left: coord?.left }}></div>
      )}
      {shootResult === ShootingType.MISSING && (
        <div className={cn(styles.shot, styles[`miss_${rand()}`])} style={{ top: coord?.top, left: coord?.left }}></div>
      )}
    </div>
  );
};

export default MainGamePanel;
