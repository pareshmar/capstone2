import React from "react";
import { withRouter} from "react-router";
// import firebase from "./Firebase/firebase";
import firebase from 'firebase';




// Components 
import BottomNav from '../Components/Navigation';


// const dbRef= firebase.database().ref('/feed');
//         dbRef.on('value', snapshot => {
//             console.log(snapshot.val());
//           });

// const feedContent = getArray() = () => 

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User logged in already or has just logged in.
    //   console.log(user.uid);
    } else {
      // User not logged in or has just logged out.
    }
  });


const Feed = () => {

    return(
        <div>
            <h1>Feed</h1>
            <button onClick={()=> firebase.auth().signOut()}> Sign Out </button>
            <div className='card'>
                <div>
                    <img src='../assets/profile.jpg' alt='hiking' width='100px' style={{borderRadius: '50%'}}></img>
                    <h2>Username</h2>
                </div>
                <div>
                    <img src='../assets/hiking.jpg' alt='hiking' width='250px'></img>
                    <h3>Activity Title</h3>
                    <p>User added Description</p>
                </div>
            </div>
            <BottomNav></BottomNav>
        </div>
    )
}

export default withRouter(Feed);