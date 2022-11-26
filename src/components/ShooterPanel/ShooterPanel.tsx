import React from 'react';

import styles from './ShooterPanel.module.css';
import { IShooterPanelProps } from './ShooterPanel.prop';
import { motion } from 'framer-motion';

export const ShooterPanel: React.FC<IShooterPanelProps> = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.plank}
        animate={{ rotateY: [0, 90, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
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
      </motion.div>
    </div>
  );
};

// frontside  backside
