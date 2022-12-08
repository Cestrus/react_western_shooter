import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IShotHoleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  hit: boolean;
}
