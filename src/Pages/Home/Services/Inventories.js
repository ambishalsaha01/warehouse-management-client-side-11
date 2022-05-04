import React from 'react';
import { Link } from 'react-router-dom';
import GetDbService from '../../../Hooks/GetDbService';
import Inventory from '../Service/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [inventories, setInventories] = GetDbService();
    return (
        <div id='inventories' className='container'>
            <div className="row">
                <h2 className='text-center'>Our Inventories</h2>
                <div className="services-container">
                    {
                        inventories.slice(0, 6).map(inventory => <Inventory
                            key={inventory._id}
                            inventory={inventory}
                        ></Inventory>)
                    }
                </div>
                <div className='more-inventories text-center'>
                    <Link className='inventories-btn' to='/manageinventories'>Manage Inventories</Link>
                </div>
            </div>
        </div>
    );
};

export default Inventories;