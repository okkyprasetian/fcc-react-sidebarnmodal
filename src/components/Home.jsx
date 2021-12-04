import React from 'react'
import { FaBars } from 'react-icons/fa'

function Home({ toggleShowSidebar, toggleShowModal }) {
    return (
        <div className="home">
            <div className="header">
                <button className="btn btn-open-sidebar" onClick={toggleShowSidebar}>
                    <FaBars />
                </button>
            </div>
            <div className="main">
                <button className="btn-open-modal" onClick={toggleShowModal}>
                    Open Modal
                </button>
            </div>
        </div>
    );
}

export default Home;