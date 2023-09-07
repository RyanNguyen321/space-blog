import React from 'react'
import "../stylesheets/Modal.css"

export default function Modal({open, children, onClose}) {
    if (!open) return null;
    return(
        <>
            <div className='overlay'></div>
            <div className='modal-container'>
                <button onClick={onClose}>
                    x
                </button>
                {children}
            </div>
        </>

    )
}