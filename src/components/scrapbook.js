import React from 'react';
import './scrapbook.css';
import kitty from './images/cat-image.jpeg';

export default props => {
    return(
        <div className="scrapbook-container"> 
        <img src={kitty}/>
        </div>
    )
}


