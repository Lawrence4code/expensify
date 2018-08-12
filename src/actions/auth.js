import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = uid => {
  return {
    type: 'LOGIN',
    uid
  };
};

export const startLogin = () => {
  console.log('startLogin triggered.');
  return () => {
    // console.log('firebase.auth().signInWithPopup(googleAuthProvider) triggered'); // this was not getting triggered without calling the starLogin after return
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT'
  };
};

export const startLogout = () => {
  console.log('startLogout triggered');
  return () => {
    // console.log('firebase.auth().signOut() will trigger');
    return firebase.auth().signOut();
  };
};
