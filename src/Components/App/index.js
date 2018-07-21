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
import Footer from '../Footer/';
import { withAlert } from 'react-alert';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
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

// optional cofiguration
const options = {
  position: 'top right',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
  
};


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      user: null
    }

  }

  componentDidMount(){

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('user: ', user);
        const myUser = {
          email: user.email
        }

        this.setState({user : myUser});
      } else {
        this.setState({user : null});
      }
    });
  }



  render() {
      const { user } = this.state;
  
      return (

        <AlertProvider template={AlertTemplate} {...options}>
      
          <div>

            <Router>

              <div className="App">


                <div className="headerApp">
                  <Header1 user={user} />
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

                <div className="footerApp">
                  <Footer />
                </div>

              </div>

            </Router>
          </div>
        </AlertProvider>
      );
    }
}

export default App;
