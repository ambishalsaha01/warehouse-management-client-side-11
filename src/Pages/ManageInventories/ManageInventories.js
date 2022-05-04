import React from 'react';
import { Link } from 'react-router-dom';
import GetDbService from '../../Hooks/GetDbService';
import Inventory from '../Home/Service/Inventory';

const ManageInventories = () => {
    const [inventories, setInventories] = GetDbService();
    return (
        <div>
            <div id='inventories' className='container'>
                <div className="row">
                    <Link className='add-inventories' to='/addinventories'>Add Inventories</Link>
                    <h2 className='text-center'>All Inventories</h2>
                    <div className="services-container">
                        {
                            inventories.map(inventory => <Inventory
                                key={inventory._id}
                                inventory={inventory}
                            ></Inventory>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageInventories;