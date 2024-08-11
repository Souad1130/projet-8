
import Banner from "../../components/Banner/Banner";
import img from '../../assets/image/bkg/mountain.jpeg';
import Discoverer from '../../components/Discoverer/Discoverer';
import AboutData from '../../data/about.json';
import '../About/about.scss'

export default function About() {
  console.log('AboutData:', AboutData); // Log pour vérifier les données

    return (
      <main>
      <section className="banner-about">
        <Banner image={img} alt={'banner-about'}/>
      </section>


      <section className="discoverer-section">
      {AboutData.map((about) => (
          <Discoverer
            key={about.id}
            title={about.title}
            content={about.content}
          />
        ))}
      </section>
    
      </main>
    )
}
