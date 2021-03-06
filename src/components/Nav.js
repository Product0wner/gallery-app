import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return(
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/search/create'>Create</NavLink></li>
                <li><NavLink to='/search/coding'>Coding</NavLink></li>
                <li><NavLink to='/search/coffee'>Coffee</NavLink></li>
            </ul>
        </nav>
    )
}  
export default Nav;