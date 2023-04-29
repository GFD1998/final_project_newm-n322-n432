import React from 'react';
import ModalStyles from '../styles/modules/Modal.module.css';


export default function List({ trigger, children }:any){

    const [isOpen, setIsOpen] = React.useState(false);

    console.log(isOpen);

    function openModal(){
        setIsOpen(true);
        console.log(isOpen);
    }

    function closeModal(e:any){
        if(e.target === e.currentTarget){
            setIsOpen(false);
        }
        console.log(isOpen);
    }

    return(
        <>
            <div onClick={openModal} className={ModalStyles.modalTrigger}>{trigger}</div>
            {isOpen ? (
                <div onClick={closeModal} className={ModalStyles.modal}>
                    <button onClick={closeModal}>
                        X
                    </button>
                    <div>
                        {children}
                    </div>
                </div>
            ) : (<></>)}
        </>
    );
}