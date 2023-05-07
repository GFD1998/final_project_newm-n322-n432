import React from 'react';
import ModalStyles from '../styles/modules/Modal.module.css';
import Link from 'next/link';
import useFirebase from '@/useHooks/useFirebase';


export default function TopNavBar({ hook }:any){


    console.log(hook.currentUser.isLoggedIn);

    return(
        <>
                      <nav>
                      <ul>
                        <li>
                          <Link href='/'>Home</Link>
                        </li>
                        <li>
                        <h1>Welcome {hook.currentUser.displayName || 'User'}</h1>
                        </li>
                        {hook.currentUser.isLoggedIn ? (
                            <li>
                                <button onClick={hook.logoutUser}>Logout</button>
                            </li>
                            ):(
                                <li>
                                <button onClick={hook.loginUser}>Login</button>
                            </li>
                        )}
                      </ul>
                    </nav>
        </>
    );
}