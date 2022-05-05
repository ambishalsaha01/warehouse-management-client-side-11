import React from 'react';
import { Link } from 'react-router-dom';
import GetDbService from '../../Hooks/GetDbService';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
    const [inventories, setInventories] = GetDbService();
    return (
        <div>
            <div id='inventories' className='container'>
                <div className="row">
                    <div className='text-center mb-4'>
                        <Link className='bg-dark text-white p-2 text-decoration-none rounded' to='/addinventories'>Add Inventories</Link>
                    </div>
                    <h2 className='text-center'>All Inventories</h2>
                    <div className="services-container">
                        {
                            inventories.map(inventory => <ManageInventory
                                key={inventory._id}
                                inventory={inventory}
                            ></ManageInventory>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageInventories;