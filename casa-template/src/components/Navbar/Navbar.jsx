import { NavLink } from "react-router-dom"
import './navbar.scss'

export default function Navbar() {

return (
 <nav className="nav-list">
         
          
            <NavLink to="/"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            exact="true">
              Accueil
            </NavLink>
          
            <NavLink to ="/about"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
            À propos
            </NavLink>
          

        </nav>
)

}