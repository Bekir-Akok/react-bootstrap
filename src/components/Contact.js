import React from 'react';
import { Container } from 'react-bootstrap';


const contact = () => {
    
    
    return(

        <div className="contact-background">
            <div className="contact-container">
                <Container>
                <form>
                    <input type="text" placeholder="Your Name" className="name" />
                    <input type="email" placeholder="Your E-mail" className="email" />
                    <textarea placeholder="Your Message" name="" id="" cols="30" rows="10" className="message"></textarea>
                    <button className="button">SEND</button>
                </form>
                </Container>
            </div>
        </div>
  
    )
}


export default contact ;