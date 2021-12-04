import React from 'react'
import { FaTimes } from 'react-icons/fa'

function Modal({ showModal, toggleShowModal }) {
    return (
        <div className={`modal ${showModal && 'show-modal'}`}>
            <div className="modal-main">
                <div className="modal-header">
                    <button className="btn btn-close-modal" onClick={toggleShowModal}>
                        <FaTimes />
                    </button>
                </div>
                <div className="modal-body">
                    Hello Darkness
                </div>
            </div>
        </div>
    );
}

export default Modal;