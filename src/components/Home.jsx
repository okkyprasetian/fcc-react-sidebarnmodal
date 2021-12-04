import React from 'react'
import { FaBars } from 'react-icons/fa'

function Home() {
    return (
        <div className="home">
            <div className="header">
                <button className="btn btn-open-sidebar">
                    <FaBars />
                </button>
            </div>
            <div className="main">
                <button className="btn-open-modal">
                    Open Modal
                </button>
            </div>
        </div>
    );
}

export default Home;