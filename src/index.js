import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();




{/* <script src="https://www.gstatic.com/firebasejs/5.2.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCxiGIyaCzAFpbF-f9Z2ubOfBIH3Y1tCdE",
    authDomain: "jammint-6030f.firebaseapp.com",
    databaseURL: "https://jammint-6030f.firebaseio.com",
    projectId: "jammint-6030f",
    storageBucket: "",
    messagingSenderId: "183749853121"
  };
  firebase.initializeApp(config);
</script> */}