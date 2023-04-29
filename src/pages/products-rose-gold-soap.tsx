import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import List, { ListItem } from '../components/List';

const inter = Inter({ subsets: ['latin'] })

export default function Products() {
    return(
        <>
            <List>
                <ListItem image='/images/rose-gold-soap.jpg' header='Rose-Gold Soap' text='Curabitur tellus erat, commodo at dapibus ac, tempus quis justo. Suspendisse tempor arcu risus, at euismod nisi ullamcorper id. Sed eros quam, elementum at consequat sit amet, fringilla sed metus. Sed laoreet fermentum augue. Quisque viverra magna vitae vehicula sodales. Mauris scelerisque pellentesque maximus. Praesent sed augue luctus, sollicitudin tortor at, aliquam ex. Nunc ac eros tristique, lacinia urna ac, eleifend massa.' link='#' />
            </List>
        </>
        // <div id='about-container'>
        //     <div className='about-persona'>
        //         <div className='product-image'>
        //             <img src='/images/rose-gold-soap.jpg' />
        //         </div>
        //         <div className='about-text'>
        //             <h1>Rose-Gold Soap:</h1>
        //             <p>
        //                 Curabitur tellus erat, commodo at dapibus ac, tempus quis justo. Suspendisse tempor arcu risus, at euismod nisi ullamcorper id. Sed eros quam, elementum at consequat sit amet, fringilla sed metus. Sed laoreet fermentum augue. Quisque viverra magna vitae vehicula sodales. Mauris scelerisque pellentesque maximus. Praesent sed augue luctus, sollicitudin tortor at, aliquam ex. Nunc ac eros tristique, lacinia urna ac, eleifend massa.
        //             </p>
        //         </div>
        //     </div>
        // </div>
    )
}