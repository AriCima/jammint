import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import * as firebase from 'firebase';

import Header from '../Header';
import ContractInfo from '../Jam/PrivateArea/ContractInfo';
import Contract from '../Jam/PrivateArea/ContractInfo/Contract';
import Login from '../Accounts/Login';
import Register from '../Accounts/Register';
import Home from '../Home';
import Jam from '../Jam';
import Footer from '../Footer/';
import DataService from '../../services/DataService';

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

// Alerts optional cofiguration
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
        
        DataService.getUserContactInfo(user.uid).then(
          (userData)=>{
            console.log('userData en App: ', userData);
            userData.id = user.uid;
            this.setState({user : userData});
          }, 
          (errorMessage)=>{
            console.log(errorMessage)
          }
        )
      
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
                  <Header user={user} />
                </div>

                <div className="bodyApp">

                  <Switch>

                    <Route path="/landing" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/jam/:s" exact render = {(props) => {return <Jam user={this.state.user} jamId={props.match.params.s}/>}}/>
                    <Route path="/contract-info" exact render = {(props) => {return <ContractInfo user={this.state.user}/>}}/>
                    <Route path="/contract" exact render = {(props) => {return <Contract user={this.state.user}/>}}/>
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
