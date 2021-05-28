import React from 'react'
import './style.scss';
import { Row, Col } from 'react-bootstrap'

const ContactMap = () => {
    return (
        <>
            <div className="ContactMap">
                <Row>
                    <Col >
                        <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="London Eye, London, United Kingdom" aria-label="London Eye, London, United Kingdom"></iframe>
                    </Col>
                </Row>
            </div>
        </>
    )

}
export default ContactMap;