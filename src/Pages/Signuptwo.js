import React, { useCallback, useContext, Component } from 'react';
import { withRouter, Redirect } from "react-router";
import { Link } from 'react-router-dom';
import firebase from "../Firebase/firebase";
import { AuthContext } from "../Auth";
import Upload from '../Components/Upload';
 
const SignUpTwo = ({ history }) => {
  const handleSubmit = useCallback(async event => {
    event.preventDefault();
    const { biodetails } = event.target.elements;
    console.log(biodetails.value);
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        firebase.database().ref('users/' + user.uid).update({
          biodetails: biodetails.value,
          activeActivity: ''
        });
        console.log(user.uid);
      } else {
    
      }
    
    });
    history.push("/");
  }, [history]);

  

  return (
    <div>

      <div className="top-columns">
          <div className="c1">.</div>
          <div className="c2"></div>
          <div className="c3"></div>
          <div className="c4"></div>
      </div>

      <div className="createAccount">
        <h1 className="create-title">Create an Account</h1>
      </div>

      <br/>

      <div className="steps2">
        <li className="numbone2">1</li>
        <li className="ntwo2">2</li> 
      </div>


 
      <Upload></Upload>
      <p>Tell us about yourself</p>

      <form onSubmit={handleSubmit}>
        
          <textarea className="Description" name="biodetails" type="textarea" placeholder="Write here.."/>
          <input type="submit" value="Submit" Link to= "/"/>
      </form>
      {/*<button><Link to="/">Done</Link></button>*/}
    </div>
  );
};
export default withRouter(SignUpTwo);