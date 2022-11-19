import React from 'react';
import { ShooterPanel } from '../../../components';

import styles from './MainGamePanel.module.css';
import { IMainGamePlateProps } from './MainGamePanel.prop';

const MainGamePanel: React.FC<IMainGamePlateProps> = () => {
  return (
    <div className={styles.container}>
      <ShooterPanel />
      <ShooterPanel />
      <ShooterPanel />
      <ShooterPanel />
      <ShooterPanel />
      <ShooterPanel />
      <ShooterPanel />
      <ShooterPanel />
      <ShooterPanel />
      <ShooterPanel />
      <ShooterPanel />
      <ShooterPanel />
      <ShooterPanel />
      <ShooterPanel />
      <ShooterPanel />
    </div>
  );
};

export default MainGamePanel;
