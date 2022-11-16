import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IPlayerInfo } from '../../utils/dummy_data';

export interface IRecordsListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  playersList: IPlayerInfo[];
}
