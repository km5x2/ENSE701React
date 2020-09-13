import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Nav(){
    return (
        <nav>
            <h3>LINKS</h3>
            <ul className="nav-links">
                <Link to="/SearchRecord">
                <li >Search Record</li>
                </Link>
                <Link to="/SubmitRecord">
                <li >Submit Record</li></Link>
                
            </ul>
        </nav>
    );
}

export default Nav;