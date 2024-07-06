import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"
import { BsHouseDoorFill, BsSearch } from "react-icons/bs"

const Navbar = () => {
  return (
    <nav id="nav">
      <Link to="/">ReactGram</Link>
      <form >
        <BsSearch />
        <input type="text" name="" id="" placeholder="Pesquisar" />
      </form>
      <ul id="nav-links">
        <li>
          <NavLink to="/">
            <BsHouseDoorFill />
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">
            Entrar
          </NavLink>
        </li>
        <li>
          <NavLink to="/register">
            Cadastrar
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar