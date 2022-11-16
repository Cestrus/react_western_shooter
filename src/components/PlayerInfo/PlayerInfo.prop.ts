import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { IPlayerInfo } from '../../utils/dummy_data';

export interface IPlayerInfoProp extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  player?: IPlayerInfo;
  rating?: number;
  children?: ReactNode;
}
