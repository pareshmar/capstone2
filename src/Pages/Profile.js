// import React, { Component } from 'react';
// import {withRouter, Redirect } from "react-router";
// import { Link } from 'react-router-dom';
// import { AuthContext } from "../Auth";
// import firebase from 'firebase';
// import BottomNav from '../Components/Navigation';
// import { render } from '@testing-library/react';

// import Logo from '../assets/WeExplore-logo.svg';

//  let information; 
//  let imageUrL;
//  let name;

// class Profile extends Component {

//   constructor(props) {
//     super(props);
//     this.state = { bioDetails: '...',  image: '', userName: "..." }
//   }

//   componentDidMount(){
//     this.getData();
//   }
  

//   getData = () =>{

//     this.getInfo();
  
//     var userId = firebase.auth().currentUser.uid;
 
//     // console.log(storageRef.getMetadata())

//     return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//      information = snapshot.val().biodetails || 'Anonymous';
//      imageUrL = snapshot.val().profileImage
//      name = snapshot.val().username
//     //  let stuff = snapshot.val();
//     //  console.log(stuff)
//     })
    
//    }

    
//    getInfo = () => {

//         setTimeout(() => {
//           this.setState({
//             bioDetails: information,
//             image: imageUrL,
//             userName: name,
//           });
//           // console.log("the state is: " + this.state.bioDetails)
//         }, 300)

//         // this.setState({ bioDetails: information });
//         // console.log("the state is: " + this.state.bioDetails)
//     }

   

//     render(){
//       return(
//         <div>

//             <div className="header" style={{backgroundColor: '#2ab7ca'}}>
//                     <img id="logo" src={Logo} width="65" alt="WeExplore Logo" />
//                     <h1>| MyPage</h1>
//             </div>
            
//             <div className="content">

//               <div className="profileInformation">
                
//                 <img className="image profileImg" id="myimg" src={this.state.image}/>
//                   <div className="bio-name">
//                     <h3>{this.state.userName}</h3>
//                     <p>{this.state.bioDetails}</p>
//                   </div>
//                 </div>

//             </div>

 
//             <BottomNav></BottomNav>

//         </div>
//     );
//     }




// }

// export default Profile;
 

import React, { Component } from 'react';
import { withRouter, Redirect } from "react-router";
import { Link } from 'react-router-dom';
import { AuthContext } from "../Auth";
import firebase from 'firebase';
import BottomNav from '../Components/Navigation';

import Logo from '../assets/WeExplore-logo.svg';

let information;
let imageUrL;
let name;
let currentActivity;
let activityTitle;
let activity;

class Profile extends Component {

  constructor(props) {

    super(props);
    this.state = { bioDetails: '...', image: '', userName: "..." }
    this.testFunc = this.testFunc.bind(this);

  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {

    this.getInfo();

    var userId = firebase.auth().currentUser.uid;

    return firebase.database().ref('/users/' +
userId).once('value').then(function (snapshot) {
      information = snapshot.val().biodetails || 'Anonymous';
      imageUrL = snapshot.val().profileImage
      name = snapshot.val().username
    })

  }

  getInfo = () => {
    setTimeout(() => {
      this.setState({
        bioDetails: information,
        image: imageUrL,
        userName: name,
      });

    }, 300)

  }

  testFunc() {
    let userId = firebase.auth().currentUser.uid;
    firebase.database().ref('users/' + userId +
      '/activeActivity').once('value', function (snapshot) {
        currentActivity = snapshot.val();
        firebase.database().ref('users/' + userId).update({
          activeActivity: ''

        });
      })
    console.log("get rid of activity once");
  }

  render() {
    return (
      <div>
        <div className="header" style={{ backgroundColor: '#2ab7ca' }}>
          <img id="logo" src={Logo} width="65" alt="WeExplore Logo" />
          <h1>| MyPage</h1>
        </div>

        <div className="content">

          <div className="profileInformation">

            <img className="image profileImg" id="myimg"
src={this.state.image} />
            <div className="bio-name">
              <h3>{this.state.userName}</h3>
              <p>{this.state.bioDetails}</p>
              <button onClick={this.testFunc}>Delete/Complete</button>
            </div>
          </div>

        </div>
        <div>

        </div>
        <BottomNav></BottomNav>

      </div>
    );
  }




}

export default Profile;