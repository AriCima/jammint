import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import './index.css';

const Header = function(props){
    // constructor(props){

    // }

    // this.db = firebase.auth();

    // signOut(){
    //  this.db.signOut().then(function() {
    //     console.log("Sign-Out successfull") // Sign-out successful.
    //     }).catch(function(error) {
    //     console.log("Sign-Out ERROR ! ! !")// An error happened.
    //     });
    // }

    return (
       

            <div className="header">

                <div className="header-left">
                    <div className="title">
                        <img src={require('../../images/jammint.jpg')}/>
                    </div>
                </div>

                <div className="header-mid">

                    <div className="nav-block">
                        <Link to="/landing">Home</Link>
                    </div>

                    <div className="nav-block">
                        <Link to="/landing-1">Home-1</Link>
                    </div>
                   
                    <div className="nav-block">
                        <Link to="/jamrequest">Request</Link>
                    </div>

                    <div className="nav-block">
                        <Link to="/board">Board</Link>
                    </div>
                    
                </div>

                <div className="header-right">
                
                    <div className="nav-block">
                        <Link to="/login">Sign-In</Link>
                        {/* {props.user && (<span><span onClick={this.signOut}>Sign-Out</span></span>)} */}
                    </div>

                </div>

            </div>
            
        
    );
}
export default Header;
