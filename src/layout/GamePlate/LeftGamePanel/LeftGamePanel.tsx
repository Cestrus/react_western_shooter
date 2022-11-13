import React from 'react';

import styles from './LeftGamePanel.module.css';
import { ILeftGamePlateProps } from './LeftGamePanel.prop';

const LeftGamePanel: React.FC<ILeftGamePlateProps> = () => {
  return <div className={styles.container}></div>;
};

export default LeftGamePanel;
