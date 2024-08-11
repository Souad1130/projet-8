import { useState } from 'react';
import ArrowForward from "../../assets/image/arrow/arrow_forward.png";
import ArrowBack from "../../assets/image/arrow/arrow_back.png";
import './slideshow.scss'


export default function Slideshow({ pictures, title }) {
    const pictureLength = pictures.length;

    const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

    const pictureCounter = `${currentPictureIndex + 1} / ${pictureLength}`;

    const previousPicture = () => {
        setCurrentPictureIndex(currentPictureIndex > 0 ? currentPictureIndex - 1 : pictures.length - 1);
    }

    const nextPicture = () => {
       /* if (currentPictureIndex< pictures.length-1){
            setCurrentPictureIndex(currentPictureIndex + 1)
        } else {
            setCurrentPictureIndex(0)
        }*/
       
        setCurrentPictureIndex(currentPictureIndex< pictures.length-1 ? currentPictureIndex + 1 :0)
    }

    const currentPicture = pictures[currentPictureIndex];
    if (pictureLength === 1) {
        return (
            <section className='slideshow'>
                <img
                    src={currentPicture}
                    alt={title}
                    className='slideshow-picture-alone' />
            </section>
        );
    }

    return (
        <section className="slideshow">
            <img src={currentPicture} alt={title} className="slideshowPicture" />
            <img src={ArrowBack} alt="Flèche gauche " onClick={previousPicture} className="slideshowArrow slideshowArrowLeft "></img>
            <img src={ArrowForward} alt='Flèche droite' onClick={nextPicture} className="slideshowArrow slideshowArrowRight"></img>
            <div className="slideshowCounter"> {pictureCounter}</div>
        </section>
    );
}
