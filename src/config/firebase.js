import * as firebase from 'firebase';
import FirebaseConfig from './dev';

firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
const todosRef = databaseRef.child('messages');

export default todosRef;
