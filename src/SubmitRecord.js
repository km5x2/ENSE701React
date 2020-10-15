import React from 'react';
import './App.css';
import './css/Style.css'
import ScriptTag from 'react-script-tag';
import firebase from 'firebase/app';
import 'firebase/firestore';



const db = firebase.firestore();

const Email = props => (
    <ScriptTag type="text/javascript" src="https://smtpjs.com/v3/smtp.js" />
    )

  function pushSubmission(event){
      event.preventDefault();
      var num = Math.random();  
    var fname = document.getElementById('firstName').value;
    var lname = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var details = document.getElementById('detail').value;
    var title = document.getElementById('title').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    db.collection("Submissions").doc(title).set({
        fname: fname,
        lname: lname,
        email: email,
        details: details,
        title: title,
        gender: gender
    })
    .then(function() {
        console.log("Document successfully written!");
        Email.send({
            Host : "smtp.gmail.com",
            Username : "ense701@gmail.com",
            Password : "Linux4ever3597.",
            To : email,
            From : "ense701@gmail.com",
            Subject : "Submission Report",
            Body : "Hey,\nWe have received your submission\nThanks,\nENSE701 Team 29"
        }).then(
          message => alert(message)
        );
   
      

    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
   
};
function SubmitRecord() {
   
  return (
    <div className="SubmitRecord">
    <center><img src="seer.png"width="20%"></img></center> 
     <h1>Forms</h1>
     <div class="container">
         <form>
         <div class="row">
            <div class="col-25">
                <label for="firstName">First Name:</label>
            </div>
            <div class="col-75">
                 <input type="text" id="firstName" name="firstName" required/>
        </div>
        </div>
        <div class="row">
            <div class="col-25">
                <label for="lastName">Last Name:</label>
            </div>
            <div class="col-75">
                   <input type="text" id="lastName" name="lastName" required/>
            </div>
        </div>
        <div class="row">
            <div class="col-25">
                <label for="gender">Gender:</label>
            </div>  
            <div class="col-75">
                 <form action="">
                    <input type="radio" name="gender" value="male"/>Male&nbsp;
                    <input type="radio" name="gender" value="female"/>Female
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-25">
                <label for="email">Email Address:</label>
            </div>
            <div class="col-75">
                <input type="email" id="email" name="email"/>
            </div>
        </div>
        <div class="row">
            <div class="col-25">
                <label for="title">Title:</label>
            </div>
            <div class="col-75">
                <input type="title" id="title" name="title"/>
            </div>
        </div>
        <div class="row">
            <div class="col-25">
                <label for="detail">Now write down details or upload file</label>
            </div>
            <div class="col-75">
                <textarea name="detail" id="detail" cols="60" rows="10" placeholder="About your article..."></textarea>
            </div>
        <div class="row">
            <div class="col-25">
                <label for="myfile">Select file:</label>
            </div>
            <div class="col-75">
                <input type="file" id="myfile" name="myfile"/>
            </div>
        </div>
        <div class="row">
            <input type="submit" onClick={pushSubmission} value="submit"/>
        </div>
        </div>
         </form>
     </div>
    </div>
  );
}

export default SubmitRecord;


