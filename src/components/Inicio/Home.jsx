import React from 'react'
import productsApi from '../../Products/Products';
import Card from '../Card/Card';

function Home() {
  return (
    <div>
          <div className='products-container'>
          {productsApi.map((product, i) => (
                <Card key={i}
                    name = {product.name}
                    price = {product.price}
                    memory = {product.memory}
                    image = {product.image}
                />
          ))}

          <p>asdasd</p>
      </div>
    </div>
  )
}

export default Home