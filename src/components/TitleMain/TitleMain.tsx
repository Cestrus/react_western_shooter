import React from 'react';
import { ReactSVG } from 'react-svg';
import cn from 'classnames';

import styles from './TitleMain.module.css';
import gunSvg from '../../assets/gun.svg';
import { ITitleMainProps } from './TitleMain.prop';

const TitleMain: React.FC<ITitleMainProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <ReactSVG src={gunSvg} className={cn(styles.img, styles.imgLeft)} />
      <h1 className={styles.text}>{children}</h1>
      <ReactSVG src={gunSvg} className={styles.img} />
    </div>
  );
};

export default TitleMain;
