import React, { useState } from 'react';
import './App.css';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import './css/Style.css'
import firebase from 'firebase/app';
import { Button } from "shards-react";

const db = firebase.firestore();
var submitlist = null;
function showResults(doc){
  submitlist = document.querySelector('#submite-list');
  const container = document.createElement('div');
 
  
  container.innerHTML= `
  <div>
  <p style="color:blue;">Title : ${doc.title}</p>
  <p style="color:red;">Author Email : ${doc.email}</p>
  <p style="color:blue;">Detials : ${doc.details}</p>
  <p style="color:blue;">Author Name : ${doc.fname} ${doc.lname}</p>
  <button class="button">Show File</button>
  </div>
  <div>
  `
  
 
 
  container.className = "review-list-item";
  submitlist.appendChild(container);
  
  
}
function fetchdata(event){
  event.preventDefault();
  submitlist =document.querySelector('#submite-list').innerHTML = '';
  var str = document.getElementById("searchBar").value;
  console.log(str);
  console.log("WORKS");
  db.collection('Submissions').where("title","==", str).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
        showResults(doc.data());
    })
})
}
function SearchRecord() {
  const [value, onChange] = useState([new Date(), new Date()]);
  return (

    <div className="SearchRecord">

<center><img src="seer.png"width="20%"></img></center>
<br></br>
<DateRangePicker
        onChange={onChange}
        value={value}
      />
<br></br><br></br>
<center>
<input type="text" id="searchBar" placeholder="Search..." maxlength="25" autocomplete="on" onMouseDown="active();" onBlur="inactive();"/><Button  onClick={fetchdata}>Search</Button>

<br></br><br></br>
<center></center> 
        <div class="container review-list"id="submite-list">
        </div>
</center>
</div>
  );
}

export default SearchRecord;