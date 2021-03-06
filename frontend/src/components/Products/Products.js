import React from 'react';
import { Rating } from './Rating';
import { Link } from 'react-router-dom';

export const Products = (props) => {
    const { product } = props;
    return (
        <div key={product._id} className="card item-card">
        <Link to = {`/apps/${product._id}`}>
            <img className="medium" src={product.image} alt={product.name} />
        </Link>
        <div className="card-body">
       
        <h2>{product.name}</h2>
        
        <Rating rating={product.rating} numReviews={product.numReviews} />
        
    </div>
    </div>
    )
}