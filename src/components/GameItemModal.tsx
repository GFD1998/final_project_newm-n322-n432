import React from 'react';
import ModalStyles from '../styles/modules/Modal.module.css';
import GameItemStyles from '../styles/modules/GameItem.module.css';
import GameListStyles from '../styles/modules/GameList.module.css';
import GameItem from '../components/GameItem';

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import GameList from '../components/GameList';
import useFirebase from '@/useHooks/useFirebase';


export default function GameItemModal(){

    console.log('beforeFirebaseVar');
    const firebaseVar = useFirebase();
    const [isNewGameOpen, setNewGameIsOpen] = React.useState(false);

    console.log(isNewGameOpen);

    function test(){
        console.log('test');
    }

    async function submitNewGame(e:any){
        // console.log(document.getElementById('newTitle').value);
        var titleElement:any = document.querySelectorAll('#newTitle'); 
        var imageElement:any = document.querySelectorAll('#newImage');
        var imageObjElement:any = document.querySelectorAll('#newImage');
        var descElement:any = document.querySelectorAll('#newDescription');
        
        console.log(titleElement[0].value);
        console.log(imageElement[0].value);
        console.log(imageObjElement[0].value);
        console.log(descElement[0].value);

        var title:any = titleElement[0].value;
        var image:any = imageElement[0].value;
        var imageObj:any = imageObjElement[0].value;
        var desc:any = descElement[0].value;
        image = image.split('\\')[2];
        await firebaseVar.submitGame(title, image, desc, imageObj);
        // closeGameModal();
    } 

    function openGameModal(){
        setNewGameIsOpen(true);
        console.log('isOpen is triggered here: ' + isNewGameOpen);
    }

    function closeGameModal(e:any){
        console.log(e.target);
        if(e.target === e.currentTarget){
            setNewGameIsOpen(false);
        }
        console.log(isNewGameOpen);
    }

    return(
        <>
            {/* <div onClick={openModal} className={ModalStyles.modalTrigger}>{trigger}</div> */}
            {isNewGameOpen ? (
                <div onClick={closeGameModal} className={ModalStyles.modal}>
                    <button onClick={closeGameModal}>
                        X
                    </button>
                    <div className={GameItemStyles.gameItemContainer}>
                        <div className={GameItemStyles.gameItemModal}>
                            <input type='text' id='newTitle' placeholder='Add Title Here' />
                            <label for='image'>Add Image Here</label>
                            <input type='file' id='newImage' name='image' placeholder='Add Image Here' />
                            <input type='text' id='newDescription' placeholder='Add Description Here' />
                            <a onClick={submitNewGame}>Submit Game</a>
                            {/* <h1>{title}</h1>
                                <img src={image} />
                                <p>
                                    {text}
                                </p> */}
                        </div>
                    </div>
                </div>
            ) : (<div onClick={openGameModal}><GameItem image='plus.jpg' title='ADD GAME' text=''></GameItem></div>)}
        </>
    );
}