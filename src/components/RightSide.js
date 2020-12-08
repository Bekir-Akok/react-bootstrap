import React from 'react';
import { Jumbotron, Button,Container,Row,Col,Image } from 'react-bootstrap';
import slide3 from './img/ilya-pavlov-OqtafYT5kTw-unsplash.jpg';
const rightSide= () => {
    
    return(

        <Jumbotron fluid>
            <Container>
            <Row>
                <Col sm={8}>
                    <h1>Fluid jumbotron</h1>
                    <p>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Col>
                <Col sm={4}>
                    <Image src={slide3} thumbnail />
                </Col>
            </Row>   
            </Container>          
        </Jumbotron>

    )
}

export default rightSide ;