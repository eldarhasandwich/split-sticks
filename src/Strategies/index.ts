
export enum Decision {
  Sell,
  Hold,
  Buy
}

export interface TimePrice {
  time: Date
  price: number
}

export type Strategy = (history: TimePrice[]) => Decision