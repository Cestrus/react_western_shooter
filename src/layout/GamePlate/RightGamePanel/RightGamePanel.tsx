import React from 'react';

import styles from './RightGamePanel.module.css';
import { IRightGamePlateProps } from './RightGamePanel.prop';

const RightGamePanel: React.FC<IRightGamePlateProps> = () => {
  return <div className={styles.container}></div>;
};

export default RightGamePanel;
