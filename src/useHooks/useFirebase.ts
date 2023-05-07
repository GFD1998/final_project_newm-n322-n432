import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { sign } from 'crypto';
import { doc, setDoc, addDoc, deleteDoc, collection } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_apiKey,
    authDomain: process.env.NEXT_PUBLIC_authDomain,
    projectId: process.env.NEXT_PUBLIC_projectId,
    appId: process.env.NEXT_PUBLIC_appId,
    storageBucket: "final-project-newm-n322-n423.appspot.com"
  };

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);
const googleProvider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore(app);
const storage = getStorage(app);
const storageRef = ref(storage, 'images');


const imagesRef = ref(storage, 'images');
const haloRef = ref(storage, 'images/halo.jpg');

console.log(haloRef);

getDownloadURL(imagesRef).then((e) => {
    console.log("getDownloadURL: " + e);
});


// // Create a reference to 'mountains.jpg'
// const mountainsRef = ref(storage, 'mountains.jpg');

// // Create a reference to 'images/mountains.jpg'
// const mountainImagesRef = ref(storage, 'images/mountains.jpg');

// // While the file names are the same, the references point to different files
// mountainsRef.name === mountainImagesRef.name;           // true
// mountainsRef.fullPath === mountainImagesRef.fullPath;   // false 

// console.log(mountainsRef.name + " | " + mountainImagesRef.name);
// console.log(mountainsRef.fullPath + " | " + mountainImagesRef.fullPath);


export default function useFirebase(){
    const initialUser = { email: "", displayName: "", isLoggedIn: false };
    const [currentUser, setCurrentUser] = React.useState(initialUser);
    const [isLoggedIn, loggedIn] = React.useState(false);
    auth.onAuthStateChanged(function (user) {
        if(user && currentUser.email !== user.email){
            setCurrentUser({
                email: user.email!,
                displayName: user.displayName!,
                isLoggedIn: true!
            });
        } else if(!user && currentUser.email){
            setCurrentUser(initialUser);
        }
    });

    return {
        currentUser,
        async loginUser(){
            if(await auth.signInWithPopup(googleProvider)){

            };
        },
        async logoutUser(){
            await auth.signOut();
            return {};
        },
        async getGames(){
            const gamesSnapshot = await db.collection('Games').get();
            const gamesList = [];
            for(let game of gamesSnapshot.docs){
                const gameData = game.data();
                if(currentUser.email == gameData.user){
                    gamesList.push({
                        ...gameData,
                        id: game.id
                    });
                }
            }
            return gamesList;
        },
        async submitGame(title:string, image:any, description:string, imageObj:Blob){

            uploadBytes(storageRef, imageObj).then((e:any) => {
                console.log("File uploaded: " + e);
            });
            await addDoc(collection(db, "Games"), {
                title: title,
                image: image,
                description: description,
                user: currentUser.email
            });

            // console.log(title);
            // console.log(image);
            // console.log(description);
        },
        async updateGame(id:any, title:any, image:any, description:any){

            // console.log(info);

            const info = {
                title: title,
                image: image,
                description: description,
                user: currentUser.email
            };
            // const gamesSnapshot = db.collection('Games').get(id);


            await setDoc(doc(db, "Games", id), info);
            this.getGames();
        },
        async deleteGame(id:any){
            await deleteDoc(doc(db, "Games", id));
            this.getGames();
        }
    };
}