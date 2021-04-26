import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// eslint-disable-next-line prefer-const
let firebaseConfig = {
  apiKey: 'AIzaSyDTpRpKkEDRivwQEFX4KlsRtLmoaFXrGyw',
  authDomain: 'projetofinancas-c9880.firebaseapp.com',
  databaseURL: 'https://projetofinancas-c9880.firebaseio.com',
  projectId: 'projetofinancas-c9880',
  storageBucket: 'projetofinancas-c9880.appspot.com',
  messagingSenderId: '571221047154',
  appId: '1:571221047154:web:bde122f1a8a0923f124feb',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
