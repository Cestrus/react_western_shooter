import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store/store';
import styles from './BulletsContainer.module.css';
import { IBulletsContainerProps } from './BulletsContainer.prop';
import { BULLETS_VALUE, BULLETS_IN_GUN } from '../../utils/constants';
import { setGameIsOver } from '../../store/playerSlice';

export const BulletsContainer: React.FC<IBulletsContainerProps> = () => {
  const isGunEmpty = useSelector((state: RootState) => state.bullets.isGunEmpty);
  const dispatch = useDispatch();
  const [bullets, setBullets] = useState<number>(BULLETS_VALUE - BULLETS_IN_GUN);

  const tanksBulletsArr = new Array(bullets / BULLETS_IN_GUN).fill(<></>);

  useEffect(() => {
    if (!isGunEmpty) {
      return;
    }
    const bulletsRemain = bullets - BULLETS_IN_GUN;
    bulletsRemain >= 0 ? setBullets(bulletsRemain) : dispatch(setGameIsOver);
  }, [isGunEmpty]);

  const renderBulletsTank = (idxTank: number): JSX.Element => {
    const bulletsArr = new Array(BULLETS_IN_GUN).fill(<></>);
    return (
      <div key={idxTank} className={styles.bulletsTank}>
        {bulletsArr.map((el, idx) => (
          <div className={styles.bullet} key={`${idxTank}_${idx}`}></div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {tanksBulletsArr.map((bull, idxTank): JSX.Element => renderBulletsTank(idxTank))}
    </div>
  );
};
