import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './InventoryDetails.css'

const InventoryDetails = () => {
    const { inventoryId } = useParams();

    const [inventory, setInventory] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, []);

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
                            <button className='delevered-btn'>Delivered</button>
                        </div>
                    </div>
                </div>
                <div className="inventory-detail-items1 text-center">
                    <h2>Restock The Item</h2>
                    <form className='mt-3'>
                        <input type="text" />
                        <button>Add Quantity</button>
                        <br />
                        <div className='more-inventories text-center'>
                            <Link className='inventories-btn' to='/manageinventories'>Manage Inventories</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetails;