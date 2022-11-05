import React from 'react'
import './Card.css';

export const Card = ({name, price, memory, image}) => {
    return(
        <div>
          <div className='card-container'>
            <h3>{name}</h3>
                <img alt={`{Samsung ${name}}`} src={image} className='img'/>
                <p>{`U$D ${price}`}</p>
                <p>{`${memory} GB`}</p>  

                <a href='#'>Ver Mas</a>
                <button>+</button>
          </div>

         
        </div>
    )
}

export default Card;