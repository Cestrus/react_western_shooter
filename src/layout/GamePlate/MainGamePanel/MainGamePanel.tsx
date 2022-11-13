import React from 'react';

import styles from './MainGamePanel.module.css';
import { IMainGamePlateProps } from './MainGamePanel.prop';

const MainGamePanel: React.FC<IMainGamePlateProps> = () => {
  return <div className={styles.container}></div>;
};

export default MainGamePanel;
