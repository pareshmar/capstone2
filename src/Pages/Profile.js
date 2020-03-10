import React, { Component } from 'react';
import {withRouter, Redirect } from "react-router";
import { Link } from 'react-router-dom';
import { AuthContext } from "../Auth";
import firebase from 'firebase';
import BottomNav from '../Components/Navigation';
import { render } from '@testing-library/react';

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
            
            <img className="image" id="myimg" src={this.state.image}/>
            <h1>hello</h1>
            {/* <button onClick={this.buttonFunction}>button</button> */}
            <p>{this.state.bioDetails}</p>

            <BottomNav></BottomNav>

        </div>
    );
    }




}

export default Profile;
