import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import { Nav, NavItem, NavLink } from "shards-react";
import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig = {
  apiKey: "AIzaSyCBoqiIA03lk46M-OeD1rT4Z_kF3wwYadY",
  authDomain: "ense701.firebaseapp.com",
  databaseURL: "https://ense701.firebaseio.com",
  projectId: "ense701",
  storageBucket: "ense701.appspot.com",
  messagingSenderId: "337669565662",
  appId: "1:337669565662:web:1a000c5cb8518c98e6664f",
  measurementId: "G-YSD2DN89BR"
};
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


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
      <Link to="/ReviewPage">
                Review</Link>
                </NavLink>
      </NavItem>
      <NavItem>
      <NavLink active href="#">
        <Link to="/LoginPage">
                Login</Link>
                </NavLink>
      </NavItem>
      
      <NavItem>
      <NavLink active href="#">
        <Link to="/RegisterPage">
                Register</Link>
                </NavLink>
      </NavItem>
        </Nav>
    );
}

export default Navigation;