import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ITarget } from '../../utils/targets';

export interface IShooterPanelProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  target: ITarget;
}
