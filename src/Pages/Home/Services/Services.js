import React from 'react';
import GetDbService from '../../../Hooks/GetDbService';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = GetDbService();
    return (
        <div id='services' className='container'>
            <div className="row">
                <h2 className='text-center'>Our Services</h2>
                <div className="services-container">
                    {
                        services.slice(0, 6).map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;