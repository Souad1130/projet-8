import './banner.scss'

export default function Banner({ image, alt, title}) {
  return (
    <div className='container-banner'>
    
      <img className="banner--image" src={ image } alt={ alt } />
      <h1 className="banner--text"> { title }</h1>
    
    </div>
 );
}
