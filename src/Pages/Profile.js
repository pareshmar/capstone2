import React, { Component } from 'react'; 
import firebase from 'firebase';
import BottomNav from '../Components/Navigation';
import ActiveModal from '../Components/ActiveModal';

import Logo from '../assets/WeExplore-logo.svg';

let information;
let imageUrL;
let name;
 
let array = [];


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

  
  // run = () =>{
  //   console.log("click")

  //   var userId = firebase.auth().currentUser.uid;

  //   firebase.database().ref('/users/' + userId + '/posts').once('value', function(snapshot) {
  //     snapshot.forEach(function(childSnapshot) {

  //       var childKey = childSnapshot.key;
  //        var data = childSnapshot.val()
  //        var piece = childSnapshot.val().userCaption

  //       array.push(data)

  //       console.log(array)
 
  //     });
  //   });


  //   var caption  = document.createElement("P");
  //   var posts = document.getElementsByClassName('posts')

  //   for(let i = 0; i < array.length; i++){

  //      document.write( "<h2>"+array[i].userCaption+"</h2>" );

  //       caption.innerHTML = array[i].userCaption

  //       document.body.appendChild(caption)

  //   }

  // }


  run2 = () =>{
    // watch this
    // https://www.youtube.com/watch?v=6Q55NlRwNnw&list=LLUlUvJCUCF1oZHvSGERhR4A&index=5&t=666s 
    // 6:46

    // var userId = firebase.auth().currentUser.uid;
    // firebase.database().ref('/users/' + userId + '/posts').once('value').then(function(snapshot){
    //   var postObject = snapshot.val();

    //   var keys = Object.keys(postObject)

    //   var currentPosts;
      
    //   for( var i = 0; i < keys.length; i++){
       
    //     var currentObject = postObject[keys[i]]

    //     currentPosts = document.createElement("div");
    //     currentPosts.classList.add("postCards");
 
    //     document.getElementById("usercontent").appendChild(currentPosts)

    //   }

    //   var image = document.createElement("img");
    //   image.src = currentObject.postImage

    //   var caption = document.createElement("p")
    //   caption.innerHTML = currentObject.userCaption

    //   currentPosts.appendChild(image);
    //   currentPosts.appendChild(caption);

  // })

    var userId = firebase.auth().currentUser.uid;

      firebase.database().ref('/users/' + userId + '/posts').once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
  
            var postObject = childSnapshot.val()

              var currentPosts;
              
              currentPosts = document.createElement("div");
              currentPosts.classList.add("postCards");
         
              document.getElementById("usercontent").appendChild(currentPosts)
        
              
              var image = document.createElement("img");
              image.src = postObject.postImage
        
              var caption = document.createElement("p")
              caption.innerHTML = postObject.userCaption
        
              currentPosts.appendChild(image);
              currentPosts.appendChild(caption);
        
        });
        
      });
       
 
   
  }



  
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
          <div id="usercontent" className="posts">



        <button onClick={this.run2}>button</button>




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