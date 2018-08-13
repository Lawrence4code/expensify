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
    return firebase.auth().signOut();
  };
};
