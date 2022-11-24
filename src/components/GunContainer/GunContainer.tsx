import React from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import styles from './GunContainer.module.css';
import { RootState } from '../../store/store';
import { IGunContainerProps } from './GunContainer.prop';

export const GunContainer: React.FC<IGunContainerProps> = () => {
  const bullets = useSelector((state: RootState) => state.shooting.bulletsInGun);

  return (
    <div className={styles.container}>
      <div className={cn(styles.gun, styles[`bullet_${bullets}`])}></div>
    </div>
  );
};
