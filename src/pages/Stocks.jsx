import stocks from "../models/stocksData"
import { Link } from "react-router-dom"

export default function Stocks({setStock}) {
  function handleClick(id) {
    setStock(stocks[id])
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Price</th>
          <th>Gains/Losses</th>
        </tr>
      </thead>

      <tbody>
        {stocks.map((stock, id) => (
          <tr key={id}>
            <td onClick = {() => handleClick(id)}><Link key={id} to={`/stocks/${stock.name}`}>{stock.name}</Link></td>
            <td>{stock.lastPrice}</td>
            <td>
              ({stock.change > 0 ? '+': ''}{stock.change.toFixed(2)}%)
            </td>
          </tr>
        ))}
      </tbody>

        
    </table>
  )
}