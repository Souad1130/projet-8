import { Link } from "react-router-dom";

import './page404.scss';

export default function Page404() {
  return (
    <div className="container-notfond">
    <h2>404</h2>
    <p>Oups! La page que vous demandez n'existe pas.</p>
    <Link to={'/'} className="link-to-home">Retourner sur la page d’accueil</Link>
      
    </div>
  )
}
