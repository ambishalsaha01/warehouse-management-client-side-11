import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-center my-3'>Blogs</h2>
            <div className="blogs-container">
                <div className="blogs-item">
                    <h2>Difference between javascript and nodejs?</h2>
                    <p>Javascript is a programming language that is used for writing scripts on the website. Javascript can only be run in the browsers. It is basically used on the client-side. NodeJS is a Javascript runtime environment. We can run Javascript outside the browser with the help of NodeJS. It is mostly used on the server-side.</p>
                </div>
                <div className="blogs-item">
                    <h2>When should you use nodejs and when should you use mongodbv?</h2>
                    <p>Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.MongoDB supports multi-document ACID transactions, even across replica sets and sharded clusters. That means if a connection breaks before a transaction is complete, or if any command in the transaction fails, then the database rolls back all of the changes it made in the course of the transaction. </p>
                </div>
                <div className="blogs-item">
                    <h2>Differences between sql and nosql databases?</h2>
                    <p>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).These databases have fixed or static or predefined schema.These databases are not suited for hierarchical data storage.Non-relational or distributed database system.They have dynamic schema.These databases are best suited for hierarchical data storage.</p>
                </div>
                <div className="blogs-item">
                    <h2>What is the purpose of jwt and how does it work?</h2>
                    <p>In short, JWTs are used as a secure way to authenticate users and share information.Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn't been altered after it was signed by the issuer. It is difficult for unauthenticated sources to guess the signing key and attempt to change the claims within the JWT.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;