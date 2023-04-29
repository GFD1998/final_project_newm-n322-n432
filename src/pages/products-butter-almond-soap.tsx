import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import List, { ListItem } from '../components/List';

const inter = Inter({ subsets: ['latin'] })

export default function Products() {
    return(
        <>
            <List>
                <ListItem image='/images/butter-almond-soap.jpg' header='Butter Almond Soap' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci. Mauris in libero id lectus pellentesque sollicitudin. Vivamus convallis, erat viverra congue porttitor, justo enim hendrerit eros, eget consequat velit sapien ac ligula. Duis ac porta nulla, non mattis ligula.' link='' />
            </List>
        </>
        // <div id='about-container'>
        //     <div className='about-persona'>
        //         <div className='product-image'>
        //             <img src='/images/butter-almond-soap.jpg' />
        //         </div>
        //         <div className='about-text'>
        //             <h1>Butter Almond Soap:</h1>
        //             <p>
        //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci. Mauris in libero id lectus pellentesque sollicitudin. Vivamus convallis, erat viverra congue porttitor, justo enim hendrerit eros, eget consequat velit sapien ac ligula. Duis ac porta nulla, non mattis ligula.
        //             </p>
        //         </div>
        //     </div>
        // </div>
    )
}