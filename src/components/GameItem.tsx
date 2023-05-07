import React from 'react';
import GameItemStyles from '../styles/modules/GameItem.module.css';
import Link from 'next/link';
import useFirebase from '@/useHooks/useFirebase';
import { doc, deleteDoc, collection } from "firebase/firestore";



export default function GameItem({ image, title, text, id }:any){

    // image = 'wotm.jpg'; //Test

    const db = useFirebase();

    function updateGame(e:any){
        console.log(e);
        console.log(e.target.parentElement.parentElement.children);
        let updateID = e.target.parentElement.nextElementSibling.innerHTML;
        let currentTitle = e.target.parentElement.parentElement.children[0].innerHTML;
        let currentImage = e.target.parentElement.parentElement.children[1].src.split('/')[4];
        let currentDescription = e.target.parentElement.parentElement.children[2].innerHTML;

        // console.log(e.target.parentElement.parentElement.children[1].src.split('/')[5]);
        // console.log(e.target.parentElement.parentElement.children[1].src.split('/')[4]);
        // console.log(e.target.parentElement.parentElement.children[1].src.split('/')[3]);
        // console.log(e.target.parentElement.parentElement.children[1].src.split('/')[2]);
        // console.log(e.target.parentElement.parentElement.children[1].src.split('/')[1]);
        // console.log(e.target.parentElement.parentElement.children[1].src.split('/')[0]);


        console.log(updateID);
        console.log(currentTitle);
        console.log(currentImage);
        console.log(currentDescription);

        let updatedTitle = prompt("Edit Title: ", currentTitle);
        let updatedImage = prompt("Edit Image Info: ", currentImage);
        let updatedDescription = prompt("Edit Description: ", currentDescription);

        // const updatedInfo = {
        //     title: updatedTitle,
        //     image: updatedImage,
        //     description: updatedDescription
        // }

        db.updateGame(updateID, updatedTitle, updatedImage, updatedDescription);
    }

    async function deleteGame(e:any){
        if(confirm("Do you really want to delete this game?")){
            console.log(e.target.parentElement.nextElementSibling.innerHTML);
            let deleteID = e.target.parentElement.nextElementSibling.innerHTML;
            db.deleteGame(deleteID);
        }
    }


    image = '/images/' + image;
    return(
        <>
            <div className={GameItemStyles.gameItemContainer}>
                <div className={GameItemStyles.gameItem}>
                    <h1>{title}</h1>
                        <img src={image} />
                        <p>
                            {text}
                        </p>
                    <div className={GameItemStyles.configure}>
                        <p onClick={updateGame}>EDIT</p>
                        <p onClick={deleteGame}>DELETE</p>
                    </div>
                    <p className={GameItemStyles.hiddenValue}>{id}</p>
                </div>
            </div>
        </>
    );
}