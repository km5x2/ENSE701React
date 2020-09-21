import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import { Nav, NavItem, NavLink } from "shards-react";

function Navigation(){
    return (
        <Nav fill>
            <NavItem>
        <NavLink active href="#">
        <Link to="/SearchRecord">
               Search Record
                </Link>
        </NavLink>
      </NavItem>
      <NavItem>
      <NavLink active href="#">
      <Link to="/SubmitRecord">
                Submit Record</Link>
                </NavLink>
      </NavItem>
      <NavItem>
      <NavLink active href="#">
        <Link to="/LoginPage">
                Login</Link>
                </NavLink>
      </NavItem>
            
        </Nav>
    );
}

export default Navigation;