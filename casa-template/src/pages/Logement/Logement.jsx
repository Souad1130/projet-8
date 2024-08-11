
import { useParams } from 'react-router-dom';
import Data from '../../data/logements.json';
import Page404 from '../Page404/Page404';
import Slideshow from '../../components/Slideshow/Slideshow';
import Stars from '../../components/Stars/Stars';
import Discoverer from '../../components/Discoverer/Discoverer';
import './logement.scss'

export default function Logement() {

  const { id } = useParams();
  const logement = Data.find((item) => item.id === id);

  if (!logement) {
    return <Page404 />;
  }

  return (
    <div className="property-details">
      <Slideshow
        title={logement.title}
        pictures={logement.pictures} />

      <div id="details-container">

        <div className="property-titleandlocation">
          <h1 className="property-title">{logement.title}</h1>
          <div className="property-location">{logement.location} </div>

          <div className="property-tags">
            <div className="property-tags--tags">
              {logement.tags.map((tag, index) => (
                <div key={index} className="tag">
                  <p>{tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

          <div className="property-ownerdetails">
            <div className="property-ownerdetailsandnotation">
              <div className="property-ownerdetails__name">
                {logement.host.name}
              </div>
              <img
                className="property-ownerdetails__profilpic"
                src={logement.host.picture}
                alt={logement.host.name}
              ></img>
            </div>
            <div className="property-tags--rating">
              <Stars starRating={logement.rating} />
            </div>
          </div>
      </div>

        <div className="discoverer-container">
          <Discoverer
            key={`discoverer-${logement.id}-description`}
            title="Description"
            content={logement.description}
            className="discoverer-description"
          />

          <Discoverer
            key={`discoverer-${logement.id}-equipments`}
            title="Équipements"
            content={logement.equipments.map((equipment, index) => (
              <span key={index}>{equipment}</span>
            ))}
            className="discoverer-equipments"
          />
        </div>
      </div>
   
  );
}
