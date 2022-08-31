import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
// Initialize Firebase
const app = initializeApp ({
    apiKey: "AIzaSyBSrvw6FAU00b5rBBd05uyATki0Dm0LWIE",
    authDomain: "image-upload-16da6.firebaseapp.com",
    projectId: "image-upload-16da6",
    storageBucket: "image-upload-16da6.appspot.com",
    messagingSenderId: "750300646827",
    appId: "1:750300646827:web:b575a55370d6e888a716ee",
    measurementId: "G-GCF902KSJQ"
});
 
// Firebase storage reference
const storage = getStorage(app);
export default storage;