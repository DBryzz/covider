<<<<<<< HEAD
<<<<<<< HEAD
import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCYaTKjfam_qMXDnGfcdnBxScEq89VQtLk',
  authDomain: 'curious-sandbox-196209.firebaseapp.com',
  databaseURL: 'https://curious-sandbox-196209.firebaseio.com',
  projectId: 'curious-sandbox-196209',
  storageBucket: '',
  messagingSenderId: '1034032747860'
};

firebase.initializeApp(config);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const database = firebase.database();
export {
  auth,
  database,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider
=======
=======
>>>>>>> 4d2bbb99f7304fe93e114a6909260496de0e6fc0
import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCYaTKjfam_qMXDnGfcdnBxScEq89VQtLk',
  authDomain: 'curious-sandbox-196209.firebaseapp.com',
  databaseURL: 'https://curious-sandbox-196209.firebaseio.com',
  projectId: 'curious-sandbox-196209',
  storageBucket: '',
  messagingSenderId: '1034032747860'
};

firebase.initializeApp(config);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const database = firebase.database();
export {
  auth,
  database,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider
<<<<<<< HEAD
>>>>>>> 4d2bbb9... backbone for the dashboard
=======
>>>>>>> 4d2bbb99f7304fe93e114a6909260496de0e6fc0
};