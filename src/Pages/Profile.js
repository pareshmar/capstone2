import React, { Component } from 'react'; 
import firebase from 'firebase';
import BottomNav from '../Components/Navigation';
import ActiveModal from '../Components/ActiveModal';

import Logo from '../assets/WeExplore-logo.svg';

let information;
let imageUrL;
let name;
 

class Profile extends Component {

  constructor(props) {

    super(props);
    this.state = { bioDetails: '...', image: '', userName: "..." }
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

//  If user has activity show modal if not dont show modal

  
  render() {
    return (
      <div>
        <div className="header" style={{ backgroundColor: '#2ab7ca' }}>
          <img id="logo" src={Logo} width="65" alt="WeExplore Logo" />
          <h1>| MyPage</h1>
        </div>

        <div className="content">

          {/* Profile Header Information - Picture, Username,Biography */}
          <div className="profileInformation">

            <img className="image2 profileImg" id="myimg"
              src={this.state.image} />
            <div className="bio-name">
              <h3>{this.state.userName}</h3>
              <p>{this.state.bioDetails}</p>
            </div>
          </div>

        {/* Users Posts will be shown in here */}
          <div className="posts">

          </div>

          <ActiveModal></ActiveModal>



        </div>
        <div>

        </div>
        <BottomNav></BottomNav>

      </div>
    );
  }




}

export default Profile;