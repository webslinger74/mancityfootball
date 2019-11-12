import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import './config';
import { apiKey,authDomain,databaseURL,projectId,storageBucket,messagingSenderId,appId,measurementId } from './config';

var firebaseConfig = {
    apiKey:apiKey,
    authDomain:authDomain,
    databaseURL:databaseURL,
    projectId:projectId,
    storageBucket:storageBucket,
    messagingSenderId:messagingSenderId,
    appId:appId,
    measurementId:measurementId
  };
  //further firebase config required
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();


  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches');
  const firebasePromotions = firebaseDB.ref('promotions');
  const firebaseTeams = firebaseDB.ref('teams');

  export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams
  }

