import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import * as firebase from 'firebase';
//import Header from '../Header';
import Header1 from '../Header1';
import JamRequest from '../JamRequest';
import Login from '../Accounts/Login';
import Register from '../Accounts/Register';
import Home from '../Home';
import Home1 from '../Home1';
import Board from '../Jam/Board/';
//import Contract from '../JamRequest/Contract';



import './index.css';

var config = {
  apiKey: "AIzaSyCxiGIyaCzAFpbF-f9Z2ubOfBIH3Y1tCdE",
  authDomain: "jammint-6030f.firebaseapp.com",
  databaseURL: "https://jammint-6030f.firebaseio.com",
  projectId: "jammint-6030f",
  storageBucket: "",
  messagingSenderId: "183749853121"
};
firebase.initializeApp(config);



class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      user: null
    }

  }


  render() {
      const { user } = this.state;
  
      return (

        <Router>

          <div className="App">


            <div className="headerApp">
              <Header1 user={user} onLogout={this.logout}/>
            </div>

            <div className="bodyApp">

              <Switch>
                <Route path="/jamrequest" exact component={JamRequest}/>             
                {/* <Route path="/landing" component={Home}/> */}
                <Route path="/landing1" component={Home1}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/board" component={Board}/>
              </Switch>



              </div>
            {/* <footer>
              <p>this is my footer</p>
            </footer> */}

          </div>

        </Router>
      );
    }
}

export default App;
