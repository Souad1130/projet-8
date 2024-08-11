import Banner from "../../components/Banner/Banner";
import img from '../../assets/image/bkg/falaise.jpeg'
import data from '../../data/logements.json';
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import './home.scss';


export default function Home() {
  
  return (
  <>
<main>
<section className="banner-home">
      <Banner image={img} alt={'banner-home'} title={'Chez vous, partout et ailleurs'}/>    
</section>
<section className="container-card">
        {
          //pour aficher le tablaeu
          data.map(logement=>(<PropertyCard property={logement} key={logement.id}/>))
        }

</section>
</main>
</>
)
}

