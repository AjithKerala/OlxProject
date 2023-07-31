import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Signup from './Pages/Signup'
import Home from './Pages/Home';
import Login from './Pages/Login'
import { useEffect ,useContext} from 'react';
import {AuthContext} from './Store/FirebaseContext'
import {FirebaseContext}from './Store/FirebaseContext'
import Create from '././Pages/Create'
import ViewPost  from './Pages/ViewPost'
import Post from './Store/PostContext';


function App() {
  const {user,setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
    console.log(user)
   

    
  })

  return (
    <div>
      <Post>
      <Router>
       <Route exact path='/'>
       <Home />
       </Route>
       <Route path='/signup'>
       <Signup />
       </Route>
       <Route path='/login'>
       <Login/>
       </Route>
       <Route path='/create'>
        <Create/>
       </Route>
       <Route path='/view'>
        <ViewPost/>
       </Route>

      </Router>
      </Post>
      
    </div>
  );
}

export default App;
