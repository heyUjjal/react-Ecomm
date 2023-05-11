import React from 'react'
import { Link } from 'react-router-dom';
import FormatPrice from '../Helper/FormatPrice';
import FeatureProduct from './FeatureProduct';

function Product(ele) {
    const {id, name, image, price, category} = ele;

  return (
    <Link to={`/singleProduct/${id}`}>
        <div className="card">
            <figure>
                <img src={image} alt={name}/>
                <figcaption className='caption'>{category}</figcaption>
            </figure>

            <div className="card-data">
                <div className="card-data-flex">
                    <h3>{name}</h3>
                    <p className="card-data--price">
                        {FormatPrice({price})}
                    </p>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default Product