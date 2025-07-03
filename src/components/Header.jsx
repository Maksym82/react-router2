import { NavLink } from "react-router-dom"

function Header() {
  return (
    <>
    <h1>Header</h1>
      {/* <a href="http://localhost:5173/about">About</a> */}
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/cart"}>Cart</NavLink>
      <hr />
    </>
  )
}

export default Header
