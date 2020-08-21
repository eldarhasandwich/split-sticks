import Trader from './Trader/index'

import { BuyAndHold } from './Strategies/BuyAndHold'

const config = {
  stocks: [
    {
      symbol: 'lmao',
      history: []
    }
  ]
}

const t = Trader(config)

console.log({
  lol: t.MakeDecision('lmao', BuyAndHold)
})