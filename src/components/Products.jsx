import React from 'react'
import Productbox from './Productbox'
import pimage1 from '../images/Ogbono-new.png';
import pimage2 from '../images/noodles.png';
import pimage3 from '../images/semo-new.png';




function Products() {
  return (
    <div id='products'>
        <h1>CHOOSE & ENJOY</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='a-container'>
        <Productbox image={pimage1} title='Ogbono' />
        <Productbox image={pimage2} title='Stir-fry Noodles' />
        <Productbox image={pimage3} title='Semo-special' />
        </div>
    </div>
  )
}

export default Products