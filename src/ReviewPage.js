import React from 'react';
import './App.css';
import './css/Style.css';
import firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase.firestore();
db.settings({timestampsInSnapshots:true});


function renderSubmission(doc){
    const submitlist = document.querySelector('#submite-list');
    const container = document.createElement('div');
    

    container.innerHTML= `
    <div>
    <p>${doc.lname}</p>
    <p>${doc.email}</p>
    <p>${doc.details}</p>
    </div>
    <div>
    <button>like</button>
    <span>0</span></div>
    `
    
   
   
    container.className = "review-list-item";

    submitlist.appendChild(container);
    
}



db.collection('Submissions').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
        renderSubmission(doc.data());
    })
})


export default function ReviewPage() {

    return (
        <div className="SearchRecord">
        <center><img src="seer.png"width="20%"></img></center> 
        <div class="container review-list"id="submite-list">
        </div>
        </div>
    );
}
