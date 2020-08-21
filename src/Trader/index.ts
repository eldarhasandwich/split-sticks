
import { Strategy, TimePrice } from '../Strategies/index'

interface Stock {
  symbol: string
  history: TimePrice[]
}

interface TraderConfig {
  stocks: Stock[]
}

const Trader = (config: TraderConfig) => {

  const MakeDecision = (symbol: string, strategy: Strategy) => {
    const stock = config.stocks.find(s => s.symbol === symbol)
    
    if (!stock) {
      return undefined
    }
    return strategy(stock.history)
  }
  
  return {
    MakeDecision
  }
}

export default Trader