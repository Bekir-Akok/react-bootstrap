import React from 'react';
import './components.css'
import { Card, } from 'react-bootstrap';

const Cards = (props) => {

  
    return(

        
  <Card>
    <Card.Img variant="top" src={props.src}/>
    <Card.Body>
    <Card.Title>{props.textTitle}</Card.Title>
      <Card.Text>
        {props.textMain}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
 
    )
}

export default Cards;