export interface Details {
  validAmount?: number;
  date?: Date;
  status: state;
  fund: string;
}
type state = { name: 'OUTOFSTOCK', code: 2 } | { name: 'INSTOCK', code: 1 } | { name: 'LOWSTOCK', code: 0 } | { name: 'FREE', code: -1 }