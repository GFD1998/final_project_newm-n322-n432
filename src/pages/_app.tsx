import '@/styles/globals.css'


/* Nav Imports */
import '/src/styles/nav.css';


/* Page Specific Imports */
import '/src/styles/pageStyles/home.css';
import '/src/styles/pageStyles/about.css';
import '/src/styles/pageStyles/products.css';
import '/src/styles/modules/App.module.css';

/* Footer Imports */
import '/src/styles/footer.css';

import React from 'react';
import Link from 'next/link';
import useFirebase from '@/useHooks/useFirebase';
import Modal from '../components/Modal';
import TopNavBar from '../components/TopNavBar';

console.log('Generating nav bar here.');
export default function App({ Component, pageProps }:any) {
  const firebaseVar = useFirebase();
  console.log(firebaseVar.currentUser);
  return (
    <>
      <TopNavBar hook={firebaseVar}></TopNavBar>

      <div id="mainContainer">
        <Component {...pageProps} />
      </div>

      <footer>
        <Modal trigger='&copy; GameListings Company'>
          Copyright of GameListings<br />
          Trademark of GameListings Company

        </Modal>
        <Modal trigger='Terms and Conditions'>
          List of terms and conditions.
        </Modal>
      </footer>
    </>
  )
  // return <Component {...pageProps} />
}
