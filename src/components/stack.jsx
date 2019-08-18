import React from 'react';

import htmlLogo from '../img/html-logo.jpg';
import cssLogo from '../img/CSS-logo.jpg';
import jsLogo from '../img/JS-logo.jpg';

const Stack = () => (
    <div className="tech-stack">
      <div className="stack-heading">
        <p>stack heading</p>
      </div>

      <div className="fundamentals-image">  
        <img src={ htmlLogo } alt="html-logo"/>
        <img src={ cssLogo } alt="css-logo" />
        <img src={ jsLogo } alt="js-logo"/>
      </div>
        
      <div className="fundamentals-text">
        <p>fundamentals text</p>
      </div>
    </div> 
)

export default Stack;
