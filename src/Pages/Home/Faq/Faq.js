import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Faq.css'

const Faq = () => {
    return (
        <div className='container' id='faq'>
            <h2 className='text-center mb-3'>FAQ</h2>
            <div className="faq-container">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Why Chose us?</Accordion.Header>
                        <Accordion.Body>
                            Our committed to helping its clients reach their goals, to personalising their event experiences, to providing an innovative environment, and to making a difference.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Which services do we offer?</Accordion.Header>
                        <Accordion.Body>
                            As guides through the maze of digital change, we help our clients deliver the amazing digital customer experiences that their clients demand. Different services are necessary for each case.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What is pure service?</Accordion.Header>
                        <Accordion.Body>
                            A pure service business is one in which the service is the primary entity that is sold. That distinction is important because everyone in every type of business sells some element of service.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Faq;