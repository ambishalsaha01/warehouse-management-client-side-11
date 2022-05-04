import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const {inventoryId} = useParams();

    const [inventory, setInventory] = useState({})
    useEffect(()=>{
        const url = `http://localhost:5000/inventory/${inventoryId}`
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => setInventory(data))
    }, []);
    
    return (
        <div>
           <h2>get service: {inventory.price}</h2>
        </div>
    );
};

export default InventoryDetails;