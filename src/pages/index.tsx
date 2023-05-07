import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import useFirebase from '@/useHooks/useFirebase';
import React from 'react';
import GameList from '../components/GameList';
import GameItem from '../components/GameItem';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const firebaseVar = useFirebase();
  const [gamesList, setGamesList] = React.useState<any>([]);
  // const [booksList, setBooksList] = React.useState<any>([]);

  // const gamesListItems = gamesList.map(function(game:any){
  //   return <GameItem image={game.image} title={game.title} text={game.description}></GameItem> 
  // });

  async function pullGamesForUser(){
    const games = await firebaseVar.getGames();
    setGamesList(games);
  }

  return (
    <>
      <button onClick={pullGamesForUser}>Resync Games List</button>
      <GameList list={gamesList}></GameList>
    </>
  )
}