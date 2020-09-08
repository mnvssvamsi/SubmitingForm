import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav>
            <ul className='navbar'>
                <li className='NavigationItem'><Link to='/'>Home</Link></li>
                <li className='NavigationItem'><Link to='/details'>Customer Details</Link> </li>
            </ul>
        </nav>
    )
}

export default Navbar
