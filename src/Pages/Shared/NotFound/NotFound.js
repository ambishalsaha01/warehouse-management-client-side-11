import React from 'react';
import NotFoundImg from '../../../images/img404.png';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='container error-container'>
            <img src={NotFoundImg} alt="Error 404" />
        </div>
    );
};

export default NotFound;