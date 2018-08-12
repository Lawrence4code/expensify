import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// /******* Firebase testing data*******/

// firebase
//   .database()
//   .ref()
//   .set({
//     name: 'John Doe',
//     age: 10,
//     isSingle: false,
//     stressLevel: 6,
//     job: {
//       title: 'Software Developer',
//       company: 'Google'
//     },
//     location: {
//       city: 'New York',
//       country: 'United States'
//     }
//   })
//   .then(() => {
//     console.log('data is saved.');
//   })
//   .catch(error => {
//     console.log('error', error);
//   });

// const note = [
//   {
//     id: 1,
//     title: 'Note One',
//     body: 'Note One Awesome notes.'
//   },
//   {
//     id: 2,
//     title: 'Note Two',
//     body: 'Note Two Awesome notes.'
//   },
//   {
//     id: 3,
//     title: 'Note Three',
//     body: 'Note Three Awesome notes.'
//   }
// ];

// firebase
//   .database()
//   .ref()
//   .set({ notes: note });

// firebase
//   .database()
//   .ref()
//   .on('value', snapshot => {
//     console.log(
//       `${snapshot.val().name} is a ${snapshot.val().job.title} at ${
//         snapshot.val().job.company
//       }.`
//     );
//   });

// firebase
//   .database()
//   .ref()
//   .once('value')
//   .then(snapshot => {
//     console.log(snapshot.val());
//   })
//   .catch(error => {
//     console.log('error', error);
//   });

// firebase
//   .database()
//   .ref()
//   .on('value', snapshot => {
//     console.log(snapshot.val());
//   });

// firebase
//   .database()
//   .ref('isSingle')
//   .remove();

// firebase;
//   .database()
//   .ref()
//   .update({
//     name: 'Jon'
//   });

// firebase
//   .database()
//   .ref()
//   .update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
//   });
