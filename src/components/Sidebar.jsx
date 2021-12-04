/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { links, socials } from '../data'
import { FaTimes } from 'react-icons/fa'

function Sidebar({ showSidebar, toggleShowSidebar }) {
    return (
        <aside className={`sidebar ${showSidebar && 'show-sidebar'}`}>
            <div className="sidebar-header">
                <div className="sidebar-logo">
                    <span className="okky">Okky </span> Prasetia
                </div>
                <button className="btn btn-close-sidebar" onClick={toggleShowSidebar}>
                    <FaTimes />
                </button>
            </div>
            <ul className="sidebar-body">
                {links.map(link => {
                    const { id, url, text, icon } = link
                    return (
                        <li key={id}>
                            <a className="sidebar-list" href={url}>
                                {icon}
                                {text}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <ul className="sidebar-footer">
                {socials.map(social => {
                    const { id, url, icon } = social
                    return (
                        <li className="sidebar-social" key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    )
                })}
            </ul>
        </aside>
    );
}

export default Sidebar;