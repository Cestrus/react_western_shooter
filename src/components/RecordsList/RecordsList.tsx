import React from 'react';
import PlayerInfo from '../PlayerInfo/PlayerInfo';

import styles from './RecordsList.module.css';
import { IRecordsListProps } from './RecordsList.prop';

const RecordsList: React.FC<IRecordsListProps> = ({ playersList }) => {
  return (
    <>
      <PlayerInfo>Top Gunners:</PlayerInfo>
      <ul className={styles.list}>
        {playersList.map((player, idx) => (
          <PlayerInfo player={player} key={player.id} rating={idx + 1} />
        ))}
      </ul>
    </>
  );
};

export default RecordsList;
