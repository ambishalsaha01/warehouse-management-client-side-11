import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {productName, price, img, description, quantity, suplierName} = service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="service-img" />
            <h4>{productName}</h4>
            <p><small>{description}</small></p>
            <p>Price: <small>{price}</small></p>
            <p>Quantity: <small>{quantity}</small></p>
            <p>SuplierName: <small>{suplierName}</small></p>
            <div className='manage-button'>
                <button className='manage-btn'>Manage Item</button>
            </div>
        </div>
    );
};

export default Service;