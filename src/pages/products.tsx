import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import List, { ListItem } from '../components/List';
import { products } from '../data/products/_productsData';

const inter = Inter({ subsets: ['latin'] })

export default function Products() {
    const soapList = products.map(product => {
        return (
            <ListItem header={product.name} image={product.image} text={product.description} link={product.link} key={product.id}></ListItem>
        );
    });
    return(
        <>
            <List>
                {soapList}
            </List>
        </>
    )
}




















/* <ListItem image='/images/butter-almond-soap.jpg' header={<Link href="/products-butter-almond-soap">Butter Almond Soap:</Link>} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci. Mauris in libero id lectus pellentesque sollicitudin. Vivamus convallis, erat viverra congue porttitor, justo enim hendrerit eros, eget consequat velit sapien ac ligula. Duis ac porta nulla, non mattis ligula.' />
        <ListItem image='/images/rose-gold-soap.jpg' header={<Link href='/products-rose-gold-soap'>Rose-Gold Soap:</Link>} text='Curabitur tellus erat, commodo at dapibus ac, tempus quis justo. Suspendisse tempor arcu risus, at euismod nisi ullamcorper id. Sed eros quam, elementum at consequat sit amet, fringilla sed metus. Sed laoreet fermentum augue. Quisque viverra magna vitae vehicula sodales. Mauris scelerisque pellentesque maximus. Praesent sed augue luctus, sollicitudin tortor at, aliquam ex. Nunc ac eros tristique, lacinia urna ac, eleifend massa.' />
        <ListItem image='/images/luxury-soap.jpg' header={<Link href='/products-luxury-soap'>Luxury Soap:</Link>} text='Vivamus nisl elit, mollis ut magna sit amet, luctus pulvinar velit. Nam egestas velit diam, efficitur lobortis magna pretium a. Mauris eu posuere nisi, in condimentum tortor. In consectetur blandit lacus ut pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' /> */
        // <div id='about-container'>
        //     <div className='about-persona'>
        //         <div className='products-image'>
        //             <img src='/images/butter-almond-soap.jpg' />
        //         </div>
        //         <div className='about-text'>
        //             <h1><Link href='/products-butter-almond-soap'>Butter Almond Soap</Link>:</h1>
        //             <p>
        //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci. Mauris in libero id lectus pellentesque sollicitudin. Vivamus convallis, erat viverra congue porttitor, justo enim hendrerit eros, eget consequat velit sapien ac ligula. Duis ac porta nulla, non mattis ligula.
        //             </p>
        //         </div>
        //     </div>
        //     <div className='about-persona'>
        //         <div className='products-image'>
        //             <img src='/images/rose-gold-soap.jpg' />
        //         </div>
        //         <div className='about-text'>
        //             <h1><Link href='/products-rose-gold-soap'>Rose-Gold Soap</Link>:</h1>
        //             <p>
        //                 Curabitur tellus erat, commodo at dapibus ac, tempus quis justo. Suspendisse tempor arcu risus, at euismod nisi ullamcorper id. Sed eros quam, elementum at consequat sit amet, fringilla sed metus. Sed laoreet fermentum augue. Quisque viverra magna vitae vehicula sodales. Mauris scelerisque pellentesque maximus. Praesent sed augue luctus, sollicitudin tortor at, aliquam ex. Nunc ac eros tristique, lacinia urna ac, eleifend massa.
        //             </p>
        //         </div>
        //     </div>
        //     <div className='about-persona'>
        //         <div className='products-image'>
        //             <img src='/images/luxury-soap.jpg' />
        //         </div>
        //         <div className='about-text'>
        //             <h1><Link href='/products-luxury-soap'>Luxury Soap</Link>:</h1>
        //             <p>
        //                 Vivamus nisl elit, mollis ut magna sit amet, luctus pulvinar velit. Nam egestas velit diam, efficitur lobortis magna pretium a. Mauris eu posuere nisi, in condimentum tortor. In consectetur blandit lacus ut pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        //             </p>
        //         </div>
        //     </div>
        // </div>