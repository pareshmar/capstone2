// tutorial for authentication
// https://www.youtube.com/watch?v=unr4s3jd9qA
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { AuthProvider } from './Auth';
import PrivateRoute from './Privateroute';
// Components
import Categories from './Pages/Categories';

// Pages
import Login from './Pages/Login';
import Feed from "./Pages/Feed";
import SignUp from './Pages/Signup';
import SignUpTwo from './Pages/Signuptwo';
import Profile from './Pages/Profile';
import Catergories from './Pages/Categories';
// import  ForgotPassword  from './ForgotPassword';

import BottomNav from './Components/Navigation';

function App() {
  return (
    <div className="App">
       

       <AuthProvider>
        <Router>
          <div>
            <PrivateRoute exact path="/" component={Feed}/>
            <PrivateRoute exact path="/profile" component={Profile}/>
            <PrivateRoute exact path="/categories" component={Categories}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signuptwo" component={SignUpTwo}/>
          
           {/* <Route exact path="/forgotpassword" component={ForgotPassword}/>      */}
          
      
          </div>
        </Router>
      </AuthProvider> 


    </div>

  );
}

export default App;
