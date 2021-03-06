import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { withAlert } from 'react-alert';
import * as firebase from 'firebase';
// import { HashLink as Link } from 'react-router-hash-link';

import './index.css';

class Header extends Component {
   constructor(props){
       super(props);

    this.signOut = this.signOut.bind(this);

   }

    signOut(){   //ESta función informa a FireBase sobre el logout y FB automáticamente ejecuta el onAuthStateChange del App
        firebase.auth().signOut()
            .then(() => {
                this.props.alert.success('See you later !') // Sign-out successful.
            })
            .catch(() => {
                this.props.alert.error("Ups! Seems you'll have to stay longer")// An error happened.
        });
    }


    render() {
        return (

            <div className="header">

                <div className="header-left">
                    <div className="title">
                        <img src={require('../../assets/images/jammint.png')} 
                            onClick={() => {
                                this.props.alert.error('Oh look, an alert!')
                            }}/>
                    </div>
                </div>

                <div className="header-mid">

                    <div className="nav-block">
                        {!this.props.user && <Link to="/landing">Home</Link>}
                    </div>

                    <div className="nav-block">
                        {!this.props.user && <Link to="/home/#landlords">Landlords</Link>} 
                    </div>

                    <div className="nav-block">
                        {!this.props.user && <Link to="">Students</Link>} 
                    </div>

                    <div className="nav-block-jam">
                        {this.props.user && <Link to="/jam/VdEzQA4Ein9DMmsQmkth"><h3>AMPLE 53</h3></Link>} 
                    </div>

                    
                </div>

                <div className="header-right">


                    <div className="nav-block">
                        {this.props.user ? 
                             <span><span>{this.props.user.name}</span>  /  <span onClick={this.signOut}><Link to="/landing">Sign-out</Link></span></span> 
                             :
                             <Link to="/login">Sign-In</Link>}
                    </div>




                </div>

            </div>
                            

        );
    }
}
export default withAlert(Header);
