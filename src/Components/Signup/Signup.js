import React, { useState } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { useContext } from 'react';
import  {FirebaseContext} from '../../Store/FirebaseContext'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {useHistory} from 'react-router-dom'

export default function Signup() {
  const [username, setUsername] = useState('');
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[password,setPassword]=useState("")
  const {firebase}=useContext(FirebaseContext)
  const [error, seterror] = useState('');

const history=useHistory()
  const handleSubmit = (e) => {
    console.log(firebase)
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
          firebase.firestore().collection('users').add({
            id:result.user.uid,
            username:username,
            phone:phone
          }).then(()=>{
            history.push('/login')
          })
      })
    })
    .catch((error) => {
      seterror("error please check alll"
      )
    });


  };

  return (
    <div>
      <p style={{fontSize:'300',textAlign:'center',paddingTop:'60px'}}>{error}</p>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="OLX Logo" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Signup</button>
        </form>
      {/* <a>Login</a> */}
      </div>
    </div>
  );
}
