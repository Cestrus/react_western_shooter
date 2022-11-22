import React from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';

import { IPlayerInfoProp } from './PlayerInfo.prop';

import styles from './PlayerInfo.module.css';

const PlayerInfo: React.FC<IPlayerInfoProp> = ({ player, rating }) => {
  const rand = Math.floor(1 + Math.random() * 4);

  return (
    <motion.li
      initial={{ x: -400 }}
      animate={{ x: 0 }}
      transition={{ duration: rating * 0.2, delay: 1 }}
      className={styles.li}
    >
      <div className={cn(styles.playerWrap, styles.woodPlank, styles[`plank_${rand}`])}>
        <h4 className={styles.text}>{rating}.</h4>
        <h4 className={styles.text}>{player.name}</h4>
        <h4 className={styles.text}>{player.money} $</h4>
      </div>
    </motion.li>
  );
};

export default PlayerInfo;
