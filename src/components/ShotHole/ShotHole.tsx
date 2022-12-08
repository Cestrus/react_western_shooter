import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import cn from 'classnames';

import styles from './ShotHole.module.css';
import { getRandomValue } from '../../utils/utils';
import { RootState } from '../../store/store';
import { IShotHoleProps } from './ShotHole.prop';

export const ShotHole: React.FC<IShotHoleProps> = ({ hit }) => {
  const coord = useSelector((state: RootState) => state.shooting.shotCoord);
  const shotStyle = hit ? styles.hit : styles[`miss_${getRandomValue(4, 1)}`];

  return (
    <motion.div
      className={cn(styles.shot, shotStyle)}
      style={{ top: coord?.top, left: coord?.left }}
      // initial={{ opacity: 1 }}
      // animate={{ opacity: 0 }}
      // transition={{ duration: 1 }}
    ></motion.div>
  );
};
