import React from 'react';
import {withRouter, Redirect } from "react-router";
import { Link } from 'react-router-dom';
import { AuthContext } from "../Auth";
import firebase from 'firebase';
import BottomNav from '../Components/Navigation';

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user.uid);
      // User logged in already or has just logged in.
    //   console.log(user.uid);
    } else {
      // User not logged in or has just logged out.
    }
  });
  firebase.auth().onAuthStateChanged(function (user) {
    firebase.database().ref('users/' + user.uid + '/profile').on('value', function (snapshot) {
        let hello = snapshot.val();
    })
  });

const Profile = () => {
    return(
        <div>
            <h1>hello</h1>
            <BottomNav></BottomNav>
        </div>
    );
}

export default Profile;
