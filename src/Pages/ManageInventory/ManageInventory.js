import React from 'react';
import './ManageInventory.css'

const ManageInventory = ({ inventory, ui }) => {
    const { _id, productName, price, img, description, quantity, suplierName } = inventory;
    const { inventories, setInventories } = ui;

    const handleDeleteInventory = id => {
        const confirmDelete = window.confirm('Are you sure?')
        if (confirmDelete) {
            const url = `http://localhost:5000/inventory/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaing = inventories.filter(inventory => inventory._id !== id );
                    setInventories(remaing)
                })
        }
    }

    return (
        <div className='service'>
            <img className='w-100' src={img} alt="service-img" />
            <h4>{productName}</h4>
            <p><small>{description}</small></p>
            <p>Price: <small>{price}</small></p>
            <p>Quantity: <small>{quantity}</small></p>
            <p>SuplierName: <small>{suplierName}</small></p>
            <div className='delete-button'>
                <button onClick={() => handleDeleteInventory(_id)} className='delete-btn'>Delete Item</button>
            </div>
        </div>
    );
};

export default ManageInventory;