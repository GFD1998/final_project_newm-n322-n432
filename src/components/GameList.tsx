import React from 'react';
import GameListStyles from '../styles/modules/GameList.module.css';
import GameItemStyles from '../styles/modules/GameItem.module.css';
import Link from 'next/link';
import GameItem from '../components/GameItem';
import GameItemModal from './GameItemModal';


export default function GameList({ list }:any){

    const gameList = list.map(function(game:any){
        console.log(game);
        return (
            <li key={game.id}>
                <GameItem image={game.image} title={game.title} text={game.description} id={game.id}></GameItem>
            </li>
        );
    });
    return (
        <>

            {/* <div id={ListStyles.aboutContainer}> */}
                <ul className={GameListStyles.gameListContainer}>
                    {gameList}
                    <li id={GameItemStyles.newGameComponent}>
                        <GameItemModal></GameItemModal>
                    </li>
                </ul>
            {/* </div> */}
        </> 
    )
}



export function ListItem({ image, header, text, link }:any){
    return(
        <>
            <div className='about-persona'>
                <div className='about-image'>
                    <img src={image} />
                </div>
                <div className='about-text'>
                    <h1><Link href={link}>{header}</Link>:</h1>
                    <p>
                        {text}
                    </p>
                </div>
            </div>
        </>
    )
}