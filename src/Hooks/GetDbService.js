import React, { useEffect, useState } from 'react';

const GetDbService = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(()=>{
        fetch('https://cryptic-wildwood-92945.herokuapp.com/inventory/')
        .then(res => res.json())
        .then(data => setInventories(data))
    }, [])
    return [inventories, setInventories]
};

export default GetDbService;