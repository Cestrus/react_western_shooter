export enum TargetType {
  'bandit',
  'civilian',
}

export interface ITarget {
  name: string;
  price: number;
  type: TargetType;
  bloodZoneHeight: number;
  bloodZoneWidht: number;
  bloodZoneTop: number;
  bloodZoneLeft: number;
}

export const targets: ITarget[] = [
  {
    name: 'cowboy',
    price: 75,
    type: TargetType.bandit,
    bloodZoneTop: 0.8,
    bloodZoneLeft: 2,
    bloodZoneWidht: 2.2,
    bloodZoneHeight: 4,
  },
  {
    name: 'gunpig',
    price: 100,
    type: TargetType.bandit,
    bloodZoneTop: 1.2,
    bloodZoneLeft: 1.1,
    bloodZoneWidht: 2.2,
    bloodZoneHeight: 3,
  },
  {
    name: 'indian',
    price: 50,
    type: TargetType.bandit,
    bloodZoneTop: 1,
    bloodZoneLeft: 1.5,
    bloodZoneWidht: 2.5,
    bloodZoneHeight: 3.5,
  },
  {
    name: 'pig',
    price: -75,
    type: TargetType.civilian,
    bloodZoneTop: 1.2,
    bloodZoneLeft: 1.6,
    bloodZoneWidht: 2,
    bloodZoneHeight: 3,
  },
  {
    name: 'stich',
    price: -50,
    type: TargetType.civilian,
    bloodZoneTop: 0.7,
    bloodZoneLeft: 1.5,
    bloodZoneWidht: 2.5,
    bloodZoneHeight: 4,
  },
];
