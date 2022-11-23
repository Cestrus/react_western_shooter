import React from 'react';

import styles from './ShooterPanel.module.css';
import { IShooterPanelProps } from './ShooterPanel.prop';

export const ShooterPanel: React.FC<IShooterPanelProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.plank}>
        {true && <div className={styles.guns}></div>}
        {false && (
          <div className={styles.paper}>
            <h4 className={styles.title}>WANTED</h4>
            <div className={styles.shooter}>
              <div className={styles.bloodZone}></div>
            </div>
            <h5 className={styles.price}>${100}</h5>
          </div>
        )}
      </div>
    </div>
  );
};
