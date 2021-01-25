import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

// firestore.collection('users')
// 	.doc('S96s1xFGbJ4rj2NDfKhg')
// 	.collection('carItems')
// 	.doc('HOfxaoNBpIpVnHAFAKca');

// firestore.doc('/users/S96s1xFGbJ4rj2NDfKhg/carItems/HOfxaoNBpIpVnHAFAKca');
firestore.collection('/users/S96s1xFGbJ4rj2NDfKhg/carItems');