import React from 'react';
import slide1 from './components/img/arian-darvishi-wh-RPfR_3_M-unsplash.jpg';
import slide2 from './components/img/emile-perron-xrVDYZRGdw4-unsplash.jpg';
import slide3 from './components/img/ilya-pavlov-OqtafYT5kTw-unsplash.jpg';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Cards from './components/Cards';
import { CardDeck,  } from 'react-bootstrap';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import Contact from './components/Contact';
import Footer from './components/Footer';



const App = () => {
    
    return(
        <div>
            <Navbar />
            <Carousel />
            <LeftSide/>
            <CardDeck>
            <Cards
            textTitle= "Prop Text Title I"
            textMain= "This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.Props I"
            lastMinute="Last updated 3 mins ago"
            src={slide1}/>
            <Cards
            textTitle= "Prop Text Title II"
            textMain= "This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.Props II"
            lastMinute="Last updated 4 mins ago"
            src={slide2}/>
            <Cards
            textTitle= "Prop Text Title III"
            textMain= "This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.Props III"
            lastMinute="Last updated 5 mins ago"
            src={slide3}/>
            </CardDeck>
            <RightSide/>
            <Contact/>
            <Footer/>
        </div>
            
        )
}
    
export default App;