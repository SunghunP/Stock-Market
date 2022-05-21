export default function Price({ stock }) {
  return stock && (
    <div>
      <h1>{stock.name} ({stock.symbol})</h1>
      <h2>Stock Price: {stock.lastPrice}</h2>
      <h2>Change: {stock.change > 0 ? '+' : ''}{stock.change.toFixed(2)}%</h2>
      <h2>Open: {stock.open}</h2>
      <h2>High: {stock.high}</h2>
      <h2>Low: {stock.low}</h2>
    </div>
  )
}