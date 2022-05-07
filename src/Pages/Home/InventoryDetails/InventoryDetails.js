import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './InventoryDetails.css'

const InventoryDetails = () => {
    const { inventoryId } = useParams();

    const [inventory, setInventory] = useState({})
    useEffect(() => {
        const url = `https://cryptic-wildwood-92945.herokuapp.com/inventory/${inventoryId}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [inventory]);

    // handle delivered quantity
    const handleDeliveredQuantity = () => {
        const { quantity } = inventory;
        const oldquantity = parseInt(quantity);
        const totalQuantity = oldquantity - 1;
        const updatedStock = { totalQuantity };
        const url = `https://cryptic-wildwood-92945.herokuapp.com/inventory/${inventoryId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStock)
        })
            .then(res => res.json())
            .then(data => {
                setInventory(data);
            })
    }

    // handle quantity form
    const handleUpdateRestock = event => {
        event.preventDefault();
        const { quantity } = inventory;
        const oldquantity = parseInt(quantity);
        const restockquantity = parseInt(event.target.quantity.value);
        const totalQuantity = oldquantity + restockquantity;
        const updatedStock = { totalQuantity };
        const url = `https://cryptic-wildwood-92945.herokuapp.com/inventory/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStock)
        })
            .then(res => res.json())
            .then(data => {
                setInventory(data);
                event.target.reset();
            })
    }

    return (
        <div className='container'>
            <div className="inventory-detail-container">
                <div className="inventory-detail-items">
                    <div>
                        <img className='w-100' src={inventory.img} alt="service-img" />
                    </div>
                    <div>
                        <h4>{inventory.productName}</h4>
                        <p><small>{inventory.description}</small></p>
                        <p>Price: <small>{inventory.price}</small></p>
                        <p>Quantity: <small>{inventory.quantity}</small></p>
                        <p>SuplierName: <small>{inventory.suplierName}</small></p>
                        <div className='manage-button'>
                            <button onClick={handleDeliveredQuantity} className='delevered-btn'>Delivered</button>
                        </div>
                    </div>
                </div>
                <div className="inventory-detail-items1 text-center">
                    <h2>Restock The Item</h2>
                    <form onSubmit={handleUpdateRestock} className='mt-3 add-form'>
                        <input name='quantity' type="text" />
                        <button type='submit' className='add-btn'>Add Quantity</button>
                        <br />
                    </form>
                    <div className='more-inventories mt-4 text-center'>
                        <Link className='bg-dark text-white p-2 text-decoration-none rounded' to='/manageinventories'>Manage Inventories</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetails;