import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import './index.css';

const Header = function(props){
    return (
       

            <div className="header">

                <div className="header-left">
                    <div className="title">
                        <p>Jammint</p>
                        {/* <img src="/public/jammint.png" width="80px" height="20px"/> */}
                    </div>
                </div>

                <div className="header-mid">

                    <div className="nav-block">
                        <Link to="/landing">Home</Link>
                    </div>
                   
                    <div className="nav-block">
                        <Link to="/jamrequest">Request</Link>
                     </div>
                    
                </div>

                <div className="header-right">
                
                    <div className="nav-block">
                        <Link to="/login">Sign-In</Link>
                    </div>

                     {/* <div className="nav-block">
                        {!props.user && <Link to="/signup">Register</Link>}
                    </div> */}

                    {/* <div className="nav-block">
                        {!props.user && <Link to="/login">Login</Link>}
                        {props.user && (<span><span onClick={props.onLogout}>Logout</span></span>)}
                    </div> */}
                
                </div>

            </div>
            
        
    );
}
export default Header;
