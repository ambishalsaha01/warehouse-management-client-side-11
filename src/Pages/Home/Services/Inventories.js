import React from 'react';
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
            </div>
        </div>
    );
};

export default Inventories;