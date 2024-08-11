
import {Link} from "react-router-dom";
import logoHeader from '../../assets/image/logo/h_logo.png';
import Navbar from "../Navbar/Navbar";
import './header.scss'



export default function Header() {

  return (
    <header className="container-header">
      
        <Link to="/">
          <img src= { logoHeader }
          className="logo-header"
          alt="Logo de Kasa"
          />
        </Link>
      <Navbar />
      
    </header>
  );
}

