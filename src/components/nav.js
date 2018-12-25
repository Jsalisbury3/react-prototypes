import React from 'react';
import {NavLink} from 'react-router-dom'; 

export default props => (
    <ul className="nav nav-tabs mt-3">
        <li className="nav-item"> 
            <NavLink exact to='/' className='nav-link'>Welcome</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/our_macarons" className="nav-link">Macarons</NavLink>
        </li>
        <li>
            <NavLink to="/gifts_parties" className="nav-link">gifts_parties</NavLink>
        </li>
        <li>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </li>
    </ul>
)