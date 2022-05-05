import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageInventory.css'

const Inventory = ({inventory}) => {
    const {_id, productName, price, img, description, quantity, suplierName} = inventory;
    const navigate = useNavigate();

    const navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div className='service'>
            <img className='w-100' src={img} alt="service-img" />
            <h4>{productName}</h4>
            <p><small>{description}</small></p>
            <p>Price: <small>{price}</small></p>
            <p>Quantity: <small>{quantity}</small></p>
            <p>SuplierName: <small>{suplierName}</small></p>
            <div className='manage-button'>
                <button onClick={()=> navigateToInventoryDetail(_id)} className='manage-btn'>Manage Item</button>
            </div>
            <div className='delete-button'>
                <button className='delete-btn'>Delete Item</button>
            </div>
        </div>
    );
};

export default Inventory;