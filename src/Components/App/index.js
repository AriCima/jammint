import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import * as firebase from 'firebase';
import Header from '../Header';
import JamRequest from '../JamRequest';


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

    //this.logout = this.logout.bind(this);
  }

  // componentDidMount(){
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       console.log('user: ', user);
  //       const myUser = {
  //         email: user.email
  //       }

  //       this.setState({user : myUser});
  //     } else {
  //       console.log("Bye bye");
  //     }
  //   });
  // }

  // logout(){
  //   firebase.auth().signOut().then(() => {
  //     this.setState({user: null});
  //   }, (error) => {
  //     console.log("ERROR logout");
  //   });
  // }


  render() {
      const { user } = this.state;
  
      return (

        <Router>

          <div className="App">

            <div className="headerApp">
              <Header user={user} onLogout={this.logout}/>
            </div>

            <div className="bodyApp">
            
              <Route path="/jamrequest" exact component={JamRequest}/>

                {/* <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/beer-list" component={Home}/>
                  <Route path="/beer/:b" component={BeerDetail} />
                  <Route path="/search/:searchString" component={Search} />
                  <Route path="/signup" component={Register}/>
                  <Route path="/login" component={Login}/>
                  <Route path="*" component={Home}/>
                </Switch> */}

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
