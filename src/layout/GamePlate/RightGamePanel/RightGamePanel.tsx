import React from 'react';
import { BulletsContainer } from '../../../components';

import styles from './RightGamePanel.module.css';
import { IRightGamePlateProps } from './RightGamePanel.prop';

const RightGamePanel: React.FC<IRightGamePlateProps> = () => {
  return (
    <div className={styles.container}>
      <BulletsContainer />
    </div>
  );
};

export default RightGamePanel;
