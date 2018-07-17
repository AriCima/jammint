import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Slider from "react-slick";

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
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
      };
      return (
        <div>

          <div className="photo-slider">

            <Slider {...settings}>
              <div>
                <img src={require('../../images/adventure.jpg')}/>
              </div>
              <div>
                <img src={require('../../images/afternoon.jpg')}/>
              </div>
              <div>
                <img src={require('../../images/conference.jpg')}/>
              </div>
              <div>
                <img src={require('../../images/dinner.jpg')}/>
              </div>
              <div>
                <img src={require('../../images/flatmates.jpg')}/>
              </div>
              <div>
                <img src={require('../../images/outdoors.jpg')}/>
              </div>
            </Slider>

          </div>


          <div className="inner-container-home">
            <form onSubmit={this.login}> 
              <div className="box">
                <div className="box-header">
                  <h2>JOIN NOW AND</h2>
                  <h2>GO SOCIAL WHEREVER YOU ARE</h2>
                </div>
                <input 
                    type="text" 
                    placeholder="JAM CODE"
                    value={this.state.jamCode} 
                    onChange={this.onChangeJamCode}
                />
                <button>JAM NOW !</button>
                <p>Want to create your own Jam?</p> 
                <button><Link to="/create">CREATE YOUR JAM !</Link></button>
              </div>
            </form>
          </div>

        </div>
      );
    }
  }




export default Home;





