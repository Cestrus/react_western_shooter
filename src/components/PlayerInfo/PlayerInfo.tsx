import React from 'react';
import cn from 'classnames';

import { IPlayerInfoProp } from './PlayerInfo.prop';

import styles from './PlayerInfo.module.css';

const PlayerInfo: React.FC<IPlayerInfoProp> = ({ children, player, rating }) => {
  const rand = Math.floor(1 + Math.random() * 4);

  return (
    <li className={styles.li}>
      <div className={cn(styles.playerWrap, styles.woodPlank, styles[`plank_${rand}`])}>
        {children ? (
          <h4 className={cn(styles.text, styles.title)}>{children}</h4>
        ) : (
          <>
            <h4 className={styles.text}>{rating}.</h4>
            <h4 className={styles.text}>{player!.name}</h4>
            <h4 className={styles.text}>{player!.money} $</h4>
          </>
        )}
      </div>
    </li>
  );
};

export default PlayerInfo;
