import React, { useState } from 'react';
import Arrow from '../../assets/image/arrow/arrow_back.png';
import '../Discoverer/discoverer.scss';

export default function Discoverer({ title, content }) {
  const [isContentVisible, setContentVisible] = useState(false);

  const toggleContent = () => {
    setContentVisible(!isContentVisible);
  };

  return (
    <div className="discoverer">
      <button className="discoverer-header" onClick={toggleContent}>
        {title}
        <img
          src={Arrow}
          className={`arrow-icon ${isContentVisible ? 'open' : ''}`}
          alt="Icône"
        />
      </button>

      {isContentVisible && (
        <div className="discoverer-content">
          {content}
        </div>
      )}
    </div>
  );
}


