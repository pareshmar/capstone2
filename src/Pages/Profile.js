import React, { Component } from 'react';
import {withRouter, Redirect } from "react-router";
import { Link } from 'react-router-dom';
import { AuthContext } from "../Auth";
import firebase from 'firebase';
import BottomNav from '../Components/Navigation';
import { render } from '@testing-library/react';

import Logo from '../assets/WeExplore-logo.svg';

 let information; 
 let imageUrL;

class Profile extends Component {

  constructor(props) {

    super(props);
    this.state = { bioDetails: '',  image: '' }
    
  }

  componentDidMount(){
    this.getData();
  }
  


  getData = () =>{

    this.getInfo();
  
    var userId = firebase.auth().currentUser.uid;
 
    // console.log(storageRef.getMetadata())


    return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
     information = snapshot.val().biodetails || 'Anonymous';
     imageUrL = snapshot.val().profileImage
    //  let stuff = snapshot.val();
    //  console.log(stuff)
    })
    

   }

    
   getInfo = () => {

        setTimeout(() => {
          this.setState({
            bioDetails: information,
            image: imageUrL
          });
          // console.log("the state is: " + this.state.bioDetails)
        }, 300)

        // this.setState({ bioDetails: information });
        // console.log("the state is: " + this.state.bioDetails)
    }

    render(){
      return(
        <div>

            <div className="header" style={{backgroundColor: '#2ab7ca'}}>
                    <img id="logo" src={Logo} width="65" alt="WeExplore Logo" />
                    <h1>| MyPage</h1>
            </div>
            
            <div className="content">
                 <img className="image" id="myimg" src={this.state.image}/>
                <h1>hello</h1>
                {/* <button onClick={this.buttonFunction}>button</button> */}
                <p>{this.state.bioDetails}</p>
            </div>

            <BottomNav></BottomNav>

        </div>
    );
    }




}

export default Profile;
