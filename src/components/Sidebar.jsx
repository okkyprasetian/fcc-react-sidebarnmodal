import React from 'react'
import { FaTimes } from 'react-icons/fa'

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-logo">
                    Okky Prasetia
                </div>
                <button className="btn btn-close-sidebar">
                    <FaTimes />
                </button>
            </div>
            <ul className="sidebar-body">
                home
            </ul>
            <ul className="sidebar-footer">
                Social
            </ul>
        </aside>
    );
}

export default Sidebar;