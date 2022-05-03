import React, { useEffect, useState } from 'react';

const GetDbService = () => {
    const [services, setService] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service/')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return [services, setService]
};

export default GetDbService;