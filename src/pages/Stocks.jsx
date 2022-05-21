import stocks from "../models/stocksData"
import { Link } from "react-router-dom"

export default function Stocks() {
  return (
    <table>
      <tr>
        <th>Company</th>
        <th>Price</th>
        <th>Gains/Losses</th>
      </tr>
      {stocks.map(stock => (
        <tr>
          <td><Link to={`/stocks/${stock.name}`}>{stock.name}</Link></td>
          <td>{stock.lastPrice}</td>
          <td>
            {(stock.change * stock.open).toFixed(2)}
            ({stock.change > 0 ? '+': ''}{(stock.change*100).toFixed(1)}%)
            </td>
        </tr>
      ))}
        
    </table>
  )
}