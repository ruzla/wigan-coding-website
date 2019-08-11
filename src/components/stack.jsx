import React from 'react';

import stackImage from '../img/stack_logo.png';

const Stack = () => (
    <div className="tech-stack">
      <div className="stack-heading">
        <p>stack heading</p>
      </div>

      <div className="fundamentals-image">
        <p>fundamentals image</p>  
        <img src={ stackImage } alt="stack_image"/>
      </div>
        
      <div className="fundamentals-text">
        <p>fundamentals text</p>
      </div>
    </div> 
)

export default Stack;
