import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import List, { ListItem } from '../components/List';
import { personnel } from '../data/personnel/_personnelData';

const inter = Inter({ subsets: ['latin'] })

export default function About() {

    const personnelList = personnel.map(personnel => {
        return (
            <ListItem header={personnel.name} image={personnel.image} text={personnel.description} link='#' key={personnel.id}></ListItem>
        );
    });
    return(
        <>
            <List>
                {personnelList}
            </List>
        </>
    )
    // return(
    //     <>
    //         <List>
    //             <ListItem image='/images/owner.png' header='The Owner:' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci. Mauris in libero id lectus pellentesque sollicitudin. Vivamus convallis, erat viverra congue porttitor, justo enim hendrerit eros, eget consequat velit sapien ac ligula. Duis ac porta nulla, non mattis ligula.' />
                
    //             <ListItem image='/images/co-owner.png' header='The Co-Owner:' text='Curabitur tellus erat, commodo at dapibus ac, tempus quis justo. Suspendisse tempor arcu risus, at euismod nisi ullamcorper id. Sed eros quam, elementum at consequat sit amet, fringilla sed metus. Sed laoreet fermentum augue. Quisque viverra magna vitae vehicula sodales. Mauris scelerisque pellentesque maximus. Praesent sed augue luctus, sollicitudin tortor at, aliquam ex. Nunc ac eros tristique, lacinia urna ac, eleifend massa.' />
    //         </List>
    //     </>
    // )
}