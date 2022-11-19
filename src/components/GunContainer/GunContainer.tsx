import React from 'react';
import { useSelector } from 'react-redux';
import { ReactSVG } from 'react-svg';

import styles from './GunContainer.module.css';
import { RootState } from '../../store/store';
import { IGunContainerProps } from './GunContainer.prop';

export const GunContainer: React.FC<IGunContainerProps> = () => {
  const bullets = useSelector((state: RootState) => state.shooting.bulletsInGun);

  return (
    <div className={styles.container}>
      <ReactSVG src={`./images/bullet_in_gun/gun_${bullets}.svg`} className={styles.gun} />
    </div>
  );
};
