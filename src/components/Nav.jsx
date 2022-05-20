import { Link } from "react-router-dom"

export default function Nav() {
  return(
    <div>
      <Link to='/'>HOME</Link>
      <Link to='/Stocks'>STOCKS</Link>
      <Link to='/About'>ABOUT</Link>
    </div>
  )
}