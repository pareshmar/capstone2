 
import firebase from 'firebase/app';
//incorporating firebase storage
import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC_FcJRfWyLSk-FOX6l1_GDNd9goDVwrGI",
    authDomain: "weexplore-741b2.firebaseapp.com",
    databaseURL: "https://weexplore-741b2.firebaseio.com",
    projectId: "weexplore-741b2",
    storageBucket: "weexplore-741b2.appspot.com",
    messagingSenderId: "800473898112",
    appId: "1:800473898112:web:2a7c647b9afacfc4769a65"
}

firebase.initializeApp(firebaseConfig);

 

export default firebase; 