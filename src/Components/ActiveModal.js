import React, { Component } from 'react';
import firebase from 'firebase';
 
let currentActivity;
let activityIsActive; 

class ActiveModal extends Component {

  constructor(props) {

    super(props);
    this.state = { activity:'' }
  }

  componentDidMount() {
    this.getData();
    this.ShowModal();
  }

  ShowModal = () =>{
    
 let profileModal = document.getElementById("thisisatest")
let userId = firebase.auth().currentUser.uid;
firebase.database().ref('users/' + userId +
    '/activeActivity').once('value', function (snapshot) {
        activityIsActive = snapshot.val();
        if (activityIsActive === null || activityIsActive === '' ||
            activityIsActive.length <= 0) {

                // console.log("no activity")
                profileModal.style.display = "none"

        } else {

            profileModal.style.display = "block"


        }
    })

}

 

  getData = () => {

    this.getActivity();

    var userId = firebase.auth().currentUser.uid;

    return firebase.database().ref('/users/' +
      userId).once('value').then(function (snapshot) {
        currentActivity = snapshot.val().activeActivity
       })

  }

  getActivity = () => {
    setTimeout(() => {
      this.setState({
        activity: currentActivity
      });

    }, 300)

  }

 

  activityModal = () =>{
    let modal = document.getElementById("modal")
    modal.style.display = "block";

  }

  closeModal = () => {
    let modal = document.getElementById("modal")
    modal.style.display = "none";
 }

 testFunc() {
    let userId = firebase.auth().currentUser.uid;
    firebase.database().ref('users/' + userId +
      '/activeActivity').once('value', function (snapshot) {
        currentActivity = snapshot.val();
        firebase.database().ref('users/' + userId).update({
          activeActivity: ''

        });
        window.location.reload(false);
      })
  }


  render() {
    return (
      <div>

          <button className="profileModal" id="thisisatest" onClick={this.activityModal}><b>Your Activity</b></button>

          <div className="modal-class" id="modal">
                    <div className="close" onClick={this.closeModal}>&times; </div>
                    <div className="modal-content">
                     <p><b>{this.state.activity}</b></p>
                    </div>
                    <div className="modal-post"> 
                    <p id="space">Complete your activity by documenting your experience.</p>
                    <img className="usersPostImg" id="postImg"></img>
                    <textarea className="textarea-post"></textarea>
                    <label className="private-checkbox"><input type="checkbox"></input>Keep Private</label>
                    

                    </div>

                    <div className="post-buttons">
                     <button  className="delete-activitybtn" onClick={this.testFunc}>Delete this activity</button>
                     <button className="completebtn" onClick={this.acceptActivity}>Done</button>

                    </div>
                    
           </div>


        </div>
       

    
        
 
    );
  }




}

export default ActiveModal;