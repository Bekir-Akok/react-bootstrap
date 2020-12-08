import React from 'react';
import { Container } from 'react-bootstrap';


const footer = () => {
    return(
        <div className="footer-div">
            <Container>
                <div className="footer">
                    <div className="social">
                        <div className="facebook"><i class="fab fa-facebook"></i></div>
                        <div className="twitter"><i class="fab fa-twitter"></i></div>
                        <div className="youtube"><i class="fab fa-youtube"></i></div>
                        <div className="github"><i class="fab fa-github"></i></div>
                    </div>
                    <div className="copy-right"><p>No © 2020 <a href="#">BePin</a> All rights reserved</p></div>
                    <div className="chevron-up"><a href="#"><i class="fas fa-chevron-up"></i></a></div>
                </div>
            </Container>
        </div>
    )
}

export default footer ;