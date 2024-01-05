//Dependencies
import React from 'react';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
//Internals
import PRODUCTS from '../../Data';

const AllItems = () => (
  <div className="items">
    {map(PRODUCTS, (product)=> (
      <div key={product.id} className="item">
        <Link to={`/products/${product.id}`}>
        <div className="product-img">
          <img alt={product.name} src={product.img} />
        </div>
        <div className="product-details">
          <h1 id="product-name">{product.name}</h1>
          <h4 id="product-description">{product.description}</h4>
        </div>
        </Link>
      </div>
    ))}
  </div>
)

export default AllItems;
