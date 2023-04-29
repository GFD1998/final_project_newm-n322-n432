import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import useFirebase from '@/useHooks/useFirebase';
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const firebaseVar = useFirebase();
  const [booksList, setBooksList] = React.useState<any>([]);

  const booksListComponents = booksList.map(function(book:any) {
    return <li key={book.id}>{book.name}</li>;
  });

  async function pullBooksFromDb(){
    const books = await firebaseVar.getBooks();
    setBooksList(books);
  }

  return (
    <>
      <h1>My name is: {firebaseVar.currentUser.displayName || '--'}</h1>
      <button onClick={pullBooksFromDb}>Get Books</button>
      <ul>
        {booksListComponents}
      </ul>
    </>
    // <div id='home-container'>
    //   <p>
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci. Mauris in libero id lectus pellentesque sollicitudin. Vivamus convallis, erat viverra congue porttitor, justo enim hendrerit eros, eget consequat velit sapien ac ligula. Duis ac porta nulla, non mattis ligula.
    //   </p>
    //   <p>
    //     Curabitur tellus erat, commodo at dapibus ac, tempus quis justo. Suspendisse tempor arcu risus, at euismod nisi ullamcorper id. Sed eros quam, elementum at consequat sit amet, fringilla sed metus. Sed laoreet fermentum augue. Quisque viverra magna vitae vehicula sodales. Mauris scelerisque pellentesque maximus. Praesent sed augue luctus, sollicitudin tortor at, aliquam ex. Nunc ac eros tristique, lacinia urna ac, eleifend massa.
    //   </p>
    // </div>
  )
}