import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Slider from "react-slick";
import { Button } from 'react-bootstrap';

import './index.css';

class Home1 extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      jamCode: '',
      
    }

    this.onChangeJamCode = this.onChangeJamCode.bind(this)
    this.jam = this.jam.bind(this);
  }

  onChangeJamCode(event){
    this.setState({jamCode: event.target.value})
  }

  jam(){
    console.log('Jam requested');
  }
  render() {
    const settings = {
      dots: false,
      arrows: false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      centerPadding: '0px',
    };
    return (

      <div className="home">


        <div className="home-top">

          <div className="home-top-title">
            <h2><span>Jam</span> together with your guests</h2>
            <p>And make things easier for everybody</p>
          </div>
         
          <div className="home-top-form">
            <form className="jam-form">
              <input 
                type="text" 
                placeholder="ENTER JAM CODE"
                value={this.state.jamCode} 
                onChange={this.onChangeJamCode}
              />
              <button>JAM NOW !</button>
            </form>
          </div>
        </div>

        <div className="home-mid">

          <div className="section-header">
            <div className="header-left">
              <button>Create your Jam</button>
            </div>
            <div className="header-right">
              <h5>Create your <span>Jam</span> , it just takes a minute !</h5>
            </div>
          </div>

          <div className="container-section">
        
            <div className="container">

              <div className="img-box">
                <img src={require('../../icons/landing.png')}/>
              </div>

              <div className="text">

              <h6>Arraange arriving</h6>
                <ul>
                  <li>orueba prueba prueba</li>
                  <li>orueba prueba prueba</li>
                  <li>orueba prueba prueba</li>
                  <li>orueba prueba prueba</li>
                </ul>

              </div>

            </div>

            <div className="container">

              <div className="img-box">
                <img src={require('../../icons/checkin.png')}/>
              </div>

              <div className="text">
                <h6>Automatic Check-in</h6>
                <ul>
                  <li>orueba prueba prueba</li>
                  <li>orueba prueba prueba</li>
                  <li>orueba prueba prueba</li>
                  <li>orueba prueba prueba</li>
                </ul>

              </div>

            </div>

            <div className="container">

              <div className="img-box">
                <img src={require('../../icons/home.png')}/>
              </div>

              <div className="text">
                <h6>Hause info & rules</h6>
                <ul>
                  <li>orueba prueba prueba</li>
                  <li>orueba prueba prueba</li>
                  <li>orueba prueba prueba</li>
                  <li>orueba prueba prueba</li>
                </ul>

              </div>

            </div>

            <div className="container">

              <div className="img-box">
                <img src={require('../../icons/social.png')}/>
              </div>

              <div className="text">
                <h6>Stay in touch</h6>
                <ul>
                  <li>orueba prueba prueba</li>
                  <li>orueba prueba prueba</li>
                  <li>orueba prueba prueba</li>
                  <li>orueba prueba prueba</li>
                </ul>

              </div>

            </div>

          </div>
        
        
        </div>


        <div className="photo-slider">

          <Slider {...settings}>
            <div>
              <img src={require('../../images/adventure1.jpg')}/>
            </div>
            <div>
              <img src={require('../../images/afternoon1.jpg')}/>
            </div>
            <div>
              <img src={require('../../images/conference1.jpg')}/>
            </div>
            <div>
              <img src={require('../../images/dinner1.jpg')}/>
            </div>
            <div>
              <img src={require('../../images/flatmates1.jpg')}/>
            </div>
            <div>
              <img src={require('../../images/outdoors1.jpg')}/>
            </div>
          </Slider>

        </div>


        

      </div>
    );
  }
}




export default Home1;





