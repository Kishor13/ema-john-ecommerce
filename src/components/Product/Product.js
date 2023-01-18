import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    return (
        <div className='product'>
            <div>
                <img src={props.product.img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{props.product.name}</h4>
                <br />
                <p><small>By: {props.product.seller}</small></p>
                <br />
                <p>${props.product.price}</p>
                <p><small>Only {props.product.stock} Left in Stock -Hurry Up</small></p>
                <button 
                    className='main-button'
                    onClick= {() => props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
            </div>
        </div>
    );
};

export default Product;