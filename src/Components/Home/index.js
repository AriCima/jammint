import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Slider from "react-slick";
import { Button } from 'react-bootstrap';

import './index.css';

class Home extends React.Component {
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
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      centerMode: true,
      centerPadding: '0px',
      pauseOnHover: false,
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

          <div className="section-header" id="landlords">
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
                <img src={require('../../assets/icons/landing.png')}/>
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
                <img src={require('../../assets/icons/checkin.png')}/>
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
                <img src={require('../../assets/icons/home.png')}/>
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
                <img src={require('../../assets/icons/social.png')}/>
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
            <div className="image-box">     
              <img src={require('../../assets/images/adventure1.jpg')}/>
              <div className="caption">You need <span>30 sec</span> to create it</div>
            </div>
            <div className="image-box">
              <img src={require('../../assets/images/afternoon1.jpg')}/>
              <div className="caption">You need <span>30 sec</span> to create it</div>
            </div>
            <div className="image-box">
              <img src={require('../../assets/images/conference1.jpg')}/>
              <div className="caption">You need <span>30 sec</span> to create it</div>
            </div>
            <div className="image-box">
              <img src={require('../../assets/images/dinner1.jpg')}/>
              <div className="caption">You need <span>30 sec</span> to create it</div>
            </div>
            <div className="image-box">
              <img src={require('../../assets/images/flatmates1.jpg')}/>
            </div>
            <div>
              <img src={require('../../assets/images/outdoors1.jpg')}/>
            </div>
          </Slider>

        </div>

        {/* <div className="text-over-slider">

          <div className="container-slider">

            <div className="text-title">
              <h2>Students can also create their <span>Jams</span></h2>
            </div>

              <div className="text-slider">

                <ul>
                  <li>You need <span>30 sec</span> to create it</li>
                  <li>Convert any activity into a  <span>Jam</span></li>
                  <li>Invite <span>anyone</span> to jam with you</li>
                  <li><span>Groupal</span> and <span>private</span> communication all in one </li>
                  <li>Improve <span>Socializing</span> and <span>Networking</span></li>
                </ul>

              </div>

          </div>
         
        </div>
         */}

      </div>
    );
  }
}




export default Home;





