
import  { Link } from 'react-router-dom';
import './propertycard.scss'

export default function PropertyCard ( {property} ) {
    return (
        <div className="card">
          <Link to={`/logement/${property.id}`} title={property.title}>
            <article className="card--article" id={property.id}>
              <img className="card--article__image" src={property.cover} alt={property.title} />
                <h2 className="card--article__title">
                    {property.title}
                </h2>
                  
            </article>
          </Link>
        </div>
    )
}


